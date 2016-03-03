import { unshiftMiddleware } from 'react-redux-provide';
import { selectKeys, mergeStoresStates } from 'redux-replicate';
import defaultRenderDocumentToString from './defaultRenderDocumentToString';

export default function createMiddleware ({
  defaultProps,
  renderToString,
  renderDocumentToString = defaultRenderDocumentToString,
  getProvidedState = mergedStates => mergedStates,
  getClientState = providedState => providedState,
  maxRenders = 2,
  maxResponseTime = 2000
}) {
  return (request, response, next) => {
    let {
      originalUrl: windowPath,
      method: requestMethod,
      body: requestBody,
      headers: requestHeaders
    } = request;
    let accept = requestHeaders && requestHeaders.accept;
    let acceptJson = accept && accept.indexOf('json') > -1;

    if (typeof requestBody === 'undefined') {
      console.warn('Server needs to use `body-parser` or something like it!');
    }

    try {
      let stores = null;
      let semaphore = null;
      const clear = () => {
        if (--semaphore === 0) {
          respondOrRerender();
        }
      };
      let initialized = false;
      let rerender = null;
      let renders = 0;
      let mergedStates = null;
      let providedState = null;
      let clientState = null;
      let html = null;
      let redirectStatus = 0;
      let responded = false;
      let responseTimeout = maxResponseTime
        ? setTimeout(send408Status, maxResponseTime)
        : null;
      const providers = {};

      for (let name in defaultProps.providers) {
        providers[name] = { ...defaultProps.providers[name] };
      }

      unshiftMiddleware(providers, ({ dispatch, getState }) => {
        return next => action => {
          if (!rerender && !action._noRender) {
            rerender = true;
          }

          if (typeof action !== 'function') {
            return next(action);
          }

          const newDispatch = action => {
            dispatch(action);
            clear();
          };

          semaphore++;
          return action(newDispatch, getState);
        };
      });

      const renderState = () => {
        if (stores) {
          mergedStates = mergeStoresStates()(stores);
        }
        stores = {};
        semaphore = 1;

        if (initialized) {
          rerender = false;
          renders++;
        } else {
          rerender = true;
        }

        html = renderToString({
          ...defaultProps,
          providers,
          providedState: {
            ...(mergedStates || defaultProps.providedState || {}),
            windowPath,
            requestMethod: initialized ? requestMethod : 'GET',
            requestBody: initialized ? requestBody : {},
            acceptJson
          },
          providerReady: [
            ...(defaultProps.providerReady || []),
            ({ name, store }) => {
              stores[name] = store;

              if (store.onReady) {
                semaphore++;
                store.onReady(clear);
              }
            }
          ]
        });

        clear();
      };

      const respondOrRerender = () => {
        const { windowPath: nextWindowPath } = stores.page.getState();
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

          setTimeout(renderState, 1);
        }
      };

      const respond = () => {
        if (responseTimeout) {
          clearTimeout(responseTimeout);
          responseTimeout = null;
        }

        if (responded) {
          return;
        }

        mergedStates = mergeStoresStates()(stores);
        providedState = typeof getProvidedState === 'object'
          ? selectKeys(getProvidedState, mergedStates)
          : getProvidedState(mergedStates);
        clientState = typeof getClientState === 'object'
          ? selectKeys(getClientState, providedState)
          : getClientState(providedState);

        const { headers, statusCode } = providedState;
        let documentString = null;

        if (headers) {
          response.set(headers);
        }

        if (acceptJson) {
          if (statusCode) {
            response.status(statusCode).send(clientState);
          } else {
            response.send(clientState);
          }
        } else if (redirectStatus) {
          response.redirect(redirectStatus, windowPath);
        } else if (html) {
          documentString = renderDocumentToString(
            html, providedState, clientState
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
      };

      const send408Status = () => {
        responseTimeout = null;
        response.sendStatus(408);
        responded = true;
      };

      renderState();
    } catch (error) {
      console.error(error.stack);
      response.sendStatus(500);
    }
  };
}
