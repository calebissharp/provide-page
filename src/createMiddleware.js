import { unshiftMiddleware, pushOnReady } from 'react-redux-provide';
import defaultRenderDocumentToString from './defaultRenderDocumentToString';

export default function createMiddleware ({
  defaultProps,
  renderToString,
  renderDocumentToString = defaultRenderDocumentToString,
  getStates,
  getClientStates,
  maxRenders = 2,
  maxResponseTime = 2000
}) {
  return (request, response, next) => {
    let {
      originalUrl: windowPath,
      method: requestMethod,
      body: requestBody,
      session: requestSession,
      headers: requestHeaders
    } = request;
    let accept = requestHeaders && requestHeaders.accept;
    let acceptJson = accept && accept.indexOf('json') > -1;

    if (typeof requestBody === 'undefined') {
      console.warn('Server needs to use `body-parser` or something like it!');
    }

    try {
      const { providers: defaultProviders } = defaultProps;
      let providers = {};
      let providerInstances = {};
      let initialized = false;
      let rerender = null;
      let renders = 0;

      let html = null;
      let redirectStatus = 0;
      let responded = false;
      let responseTimeout = maxResponseTime
        ? setTimeout(send408Status, maxResponseTime)
        : null;

      let semaphore = null;
      function clear() {
        if (--semaphore === 0) {
          respondOrRerender();
        }
      };

      for (let key in defaultProviders) {
        providers[key] = { ...defaultProviders[key] };
      }

      unshiftMiddleware(providers, ({ dispatch, getState }) => {
        semaphore++;      // store initializing... wait for `onReady`

        return next => action => {
          if (!rerender && !action._noRender) {
            rerender = true;
          }

          if (typeof action !== 'function') {
            return next(action);
          }

          semaphore++;    // async action dispatching... wait for `dispatch`

          return action(
            action => {
              dispatch(action);
              clear();    // async action disaptched
            },
            getState
          );
        };
      });

      pushOnReady(providers, providerInstance => {
        providerInstances[providerInstance.key] = providerInstance;
        clear();          // store initialized
      });

      renderState();

      function renderState() {
        providers = {
          ...providers,
          page: {
            ...providers.page,
            state: {
              ...providers.page.state,
              windowPath,
              requestMethod: initialized ? requestMethod : 'GET',
              requestBody: initialized ? requestBody : {},
              requestSession,
              acceptJson
            }
          }
        };

        semaphore = 1;

        html = renderToString({
          ...defaultProps,
          providers,
          providerInstances
        });
        
        if (initialized) {
          rerender = false;
          renders++;
        } else {
          rerender = true;
        }

        clear();
      }

      function respondOrRerender() {
        const { page } = providerInstances;
        const { windowPath: nextWindowPath } = page.store.getState();

        if (nextWindowPath !== windowPath) {
          windowPath = nextWindowPath;
          redirectStatus = 303;
        }

        if (renders === maxRenders || !rerender) {
          respond();
        } else if (semaphore === 0) {
          if (initialized) {
            requestMethod = 'GET';
            requestBody = {};
          } else {
            initialized = true;
          }

          renderState();
        }
      }

      function respond() {
        if (responseTimeout) {
          clearTimeout(responseTimeout);
          responseTimeout = null;
        }

        if (responded) {
          return;
        }

        let states = {};
        let clientStates = states;

        for (let key in providerInstances) {
          states[key] = providerInstances[key].store.getState();
        }

        if (getStates) {
          states = getStates(states);
        }

        if (getClientStates) {
          clientStates = getClientStates(states);
        }

        const { headers, statusCode } = states.page;
        let documentString = null;

        if (headers) {
          response.set(headers);
        }

        if (acceptJson) {
          if (statusCode) {
            response.status(statusCode).send(clientStates);
          } else {
            response.send(clientStates);
          }
        } else if (redirectStatus) {
          response.redirect(redirectStatus, windowPath);
        } else if (html) {
          documentString = renderDocumentToString(
            html, states, clientStates
          );

          if (statusCode) {
            response.status(statusCode).send(documentString);
          } else {
            response.send(documentString);
          }
        } else if (statusCode) {
          response.sendStatus(statusCode);
        }

        responded = true;
      }

      function send408Status() {
        responseTimeout = null;
        response.sendStatus(408);
        responded = true;
      };
    } catch (error) {
      console.error(error.stack);
      response.sendStatus(500);
    }
  };
}
