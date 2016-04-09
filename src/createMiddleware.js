import { unshiftMiddleware } from 'react-redux-provide';
import { pushOnInstantiated, pushOnReady } from 'react-redux-provide';
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

      providers.page.state = {
        ...providers.page.state,
        windowPath,
        requestSession,
        acceptJson
      };

      unshiftMiddleware(providers, ({ dispatch, getState }) => {
        return next => action => {
          if (!rerender && !action._noRender) {
            rerender = true;
          }

          if (typeof action !== 'function') {
            return next(action);
          }

          semaphore++;    // action dispatching...

          return action(
            action => {
              dispatch(action);
              clear();    // action dispatched
            },
            getState
          );
        };
      });

      pushOnInstantiated(providers, providerInstance => {
        providerInstances[providerInstance.key] = providerInstance;
        semaphore++;                  // store initializing...
      });

      pushOnReady(providers, clear);  // store initialized

      renderState();

      function renderState() {
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
            delete providerInstances.page;
            Object.assign(providers.page.state, {
              requestMethod,
              requestBody
            });
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
        let clientStates;

        for (let key in providerInstances) {
          states[key] = providerInstances[key].store.getState();
        }

        if (getStates) {
          states = getStates(states);
        }

        if (getClientStates) {
          clientStates = getClientStates(states);
        } else {
          clientStates = states;
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
