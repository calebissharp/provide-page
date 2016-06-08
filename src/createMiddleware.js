import { pushWait, pushClear } from 'react-redux-provide';
import { pushReplication, unshiftMiddleware } from 'react-redux-provide';
import defaultRenderDocumentToString from './defaultRenderDocumentToString';
import getProviders from './getProviders';
import extractStates from './extractStates';

export default function createMiddleware({
  defaultProps,
  renderToString,
  renderDocumentToString = defaultRenderDocumentToString,
  getStates,
  maxRenders = 8,
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

      let html = null;
      function renderState() {
        if (responded) {
          return;
        }

        waitCount = 1;

        console.log('--- rendering', request.url, `- count: ${renderCount}`);
        console.log('wait 1');
        html = renderToString({
          ...defaultProps,
          providers,
          providerInstances,
          activeQueries,
          queryResults
        });

        clear(false);
      }

      let waitCount = 0;
      function wait() {
        waitCount++;
        console.log('wait', waitCount);
      }
      function clear(doRerender) {
        if (doRerender) {
          rerender = true;
        }

        console.log('clear', doRerender, waitCount);
        if (--waitCount === 0) {
          respondOrRerender();
        }
      }

      let renderCount = 0;
      let rerender = false;
      let handledRequest = false;
      const shouldSubmitRequest = Array.isArray(request.body)
        || bodyType === 'object' && Object.keys(request.body).length > 0
        || bodyType === 'string' && request.body.length > 0
        || Boolean(request.body);
      function respondOrRerender() {
        if (!rerender && !handledRequest) {
          handledRequest = true;
          handleRequest();
        }

        renderCount++;

        if (rerender && renderCount < maxRenders) {
          rerender = false;
          renderState();
        } else {
          respond();
        }
      }
      function handleRequest() {
        const { page } = providerInstances;
        const requestState = {
          requestMethod: request.method,
          requestBody: request.body
        };

        if (!page) {
          providers.page.state = {
            ...providers.page.state,
            ...requestState
          };
        } else if (shouldSubmitRequest) {
          console.log('submitting request...');
          page.actionCreators.submitRequest(requestState);
        }
      }

      const { acceptJson } = providers.page.state;
      let actions = null;

      if (acceptJson && shouldSubmitRequest) {
        Object.keys(providers).forEach(key => {
          pushReplication({ [key]: providers[key] }, {
            replicator: {
              postReduction(providerKey, state, nextState, action) {
                if (actions) {
                  actions.push({ providerKey, action });
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

        const { states, clientStates } = extractStates(
          providerInstances,
          getStates
        );

        const { headers, statusCode } = states.page || {};
        let documentString = null;

        if (headers) {
          response.set(headers);
        }

        if (acceptJson) {
          const jsonResponse = { states: clientStates, actions };

          if (statusCode) {
            response.status(statusCode).send(jsonResponse);
          } else {
            response.send(jsonResponse);
          }
        } else if (!redirect() && html) {
          documentString = renderDocumentToString(html, states, clientStates);

          if (statusCode) {
            response.status(statusCode).send(documentString);
          } else {
            response.send(documentString);
          }
        } else if (statusCode) {
          response.sendStatus(statusCode);
        }

        responded = true;
        console.log('!!! responded to', request.url);
        console.log('');
        console.log('');
        console.log('');
        console.log('');
      }

      function redirect() {
        const { router } = providerInstances;
        const { routing } = router.store.getState();
        const { locationBeforeTransitions: location } = routing;

        if (location.pathname !== request.originalUrl) {
          response.redirect(303, location.pathname);
          return true;
        }

        return false;
      }

      function send408Status() {
        responseTimeout = null;
        response.sendStatus(408);
        responded = true;
      }

      pushWait(providers, wait);
      pushClear(providers, clear);

      unshiftMiddleware(providers, ({ dispatch, getState }) => {
        return next => action => {
          if (typeof action !== 'function' && !action._noRender) {
            rerender = true;
          }

          return next(action);
        };
      });

      renderState();
    } catch (error) {
      console.error(error.stack);
      response.sendStatus(500);
    }
  };
}
