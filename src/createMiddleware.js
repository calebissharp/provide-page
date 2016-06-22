import { pushWait, pushClear } from 'react-redux-provide';
import { pushReplication, unshiftMiddleware } from 'react-redux-provide';
import defaultRenderDocumentToString from './defaultRenderDocumentToString';
import { extractServerStates, extractClientStates } from './extractStates';
import getProviders from './getProviders';

const inDevelopment = process.env.NODE_ENV === 'development';

export default function createMiddleware({
  defaultProps,
  renderToString,
  renderDocumentToString = defaultRenderDocumentToString,
  getStates,
  maxRenders = 20,
  maxResponseTime = 2000
}) {
  return (request, response, next) => {
    const bodyType = typeof request.body;

    if (bodyType === 'undefined') {
      console.warn('Server needs to use `body-parser` or something like it!');
    }

    try {
      const providers = getProviders(defaultProps.providers, request);
      const providerInstances = { ...defaultProps.providerInstances };
      const activeQueries = { ...defaultProps.activeQueries };
      const queryResults = { ...defaultProps.queryResults };
      const partialStates = { ...defaultProps.partialStates };

      let html = null;
      function renderState() {
        if (responded) {
          return;
        }

        wait();

        if (inDevelopment) {
          console.log(`--- rendering (${renderCount}) ${request.url}`);
        }

        html = renderToString({
          ...defaultProps,
          providers,
          providerInstances,
          activeQueries,
          queryResults,
          partialStates
        });

        clear(false);
      }

      let waitCount = 0;
      function wait() {
        waitCount++;
      }
      function clear(doRerender) {
        if (doRerender) {
          rerender = true;
        }

        if (--waitCount === 0) {
          respondOrRerender();
        }
      }

      let renderCount = 0;
      let rerender = false;
      let handledRequest = false;
      let shouldSubmitRequest = false;
      let preActionStates;

      if (Array.isArray(request.body)) {
        shouldSubmitRequest = true;
      } else if (bodyType === 'object') {
        shouldSubmitRequest = Object.keys(request.body).length > 0;
      } else if (bodyType === 'string') {
        shouldSubmitRequest = request.body.length > 0;
      } else {
        shouldSubmitRequest = Boolean(request.body);
      }

      function respondOrRerender() {
        if (!rerender && !handledRequest) {
          handledRequest = true;
          handleRequest();
        }

        renderCount++;

        if (rerender && renderCount < maxRenders) {
          rerender = false;
          renderState();
        } else if (waitCount === 0) {
          respond();
        }
      }
      function handleRequest() {
        const { page } = providerInstances;
        const requestState = {
          requestMethod: request.method,
          requestBody: request.body
        };

        if (serverSide && shouldSubmitRequest) {
          preActionStates = extractServerStates(providerInstances, getStates);
        }

        if (!page) {
          providers.page.state = {
            ...providers.page.state,
            ...requestState
          };
        } else if (shouldSubmitRequest) {
          page.actionCreators.submitRequest(requestState);
        }
      }

      const { acceptJson } = providers.page.state;
      const serverSide = acceptJson && request.headers['x-server-side'];
      let actions = null;

      if (serverSide && shouldSubmitRequest) {
        Object.keys(providers).forEach(key => {
          pushReplication({ [key]: providers[key] }, {
            replicator: {
              postReduction(providerKey, state, nextState, action) {
                if (actions) {
                  if (preActionStates && !preActionStates[providerKey]) {
                    preActionStates[providerKey] = state;
                  }

                  if (!action._noEffect) {
                    actions.push({ providerKey, action });
                  }
                } else if (handledRequest) {
                  actions = [];
                }
              }
            }
          });
        });
      }

      let responded = false;
      let responseTimeout = maxResponseTime
        ? setTimeout(send408Status, maxResponseTime)
        : null;
      function respond() {
        if (responseTimeout) {
          clearTimeout(responseTimeout);
          responseTimeout = null;
        }

        if (responded) {
          return;
        }

        const states = extractServerStates(
          providerInstances, getStates, preActionStates
        );
        const clientStates = extractClientStates(providerInstances, {
          ...partialStates,
          ...states
        });

        const { headers, statusCode } = states.page || {};
        let documentString = null;

        if (headers && !response.headersSent) {
          response.set(headers);
        }

        if (acceptJson) {
          if (statusCode && !response.headersSent) {
            response.status(statusCode).send(clientStates);
          } else {
            response.send(clientStates);
          }
        } else if (!redirect() && html) {
          documentString = renderDocumentToString(html, states, clientStates);

          if (statusCode && !response.headersSent) {
            response.status(statusCode).send(documentString);
          } else {
            response.send(documentString);
          }
        } else if (statusCode && !response.headersSent) {
          response.sendStatus(statusCode);
        }

        responded = true;

        if (inDevelopment) {
          console.log(`--- sent response for ${request.url}`);
        }
      }

      function redirect() {
        const { router } = providerInstances;
        const { routing } = router.store.getState();
        const { locationBeforeTransitions: location } = routing;

        if (location.pathname !== request.originalUrl) {
          if (!response.headersSent) {
            response.redirect(303, location.pathname);
          }
          return true;
        }

        return false;
      }

      function send408Status() {
        responseTimeout = null;
        if (!response.headersSent) {
          response.sendStatus(408);
        }
        responded = true;
      }

      pushWait(providers, wait);
      pushClear(providers, clear);

      unshiftMiddleware(providers, ({ dispatch, getState }) => {
        return next => action => {
          if (typeof action !== 'function' && !action._noEffect) {
            rerender = true;
          }

          return next(action);
        };
      });

      renderState();
    } catch (error) {
      console.error(error.stack);

      if (!response.headersSent) {
        response.sendStatus(500);
      }
    }
  };
}
