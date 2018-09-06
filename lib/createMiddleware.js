'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports['default'] = createMiddleware;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _reactReduxProvide = require('react-redux-provide');

var _reduxReplicate = require('redux-replicate');

var _defaultRenderDocumentToString = require('./defaultRenderDocumentToString');

var _defaultRenderDocumentToString2 = _interopRequireDefault(_defaultRenderDocumentToString);

function createMiddleware(_ref) {
  var defaultProps = _ref.defaultProps;
  var renderToString = _ref.renderToString;
  var _ref$renderDocumentToString = _ref.renderDocumentToString;
  var renderDocumentToString = _ref$renderDocumentToString === undefined ? _defaultRenderDocumentToString2['default'] : _ref$renderDocumentToString;
  var _ref$getProvidedState = _ref.getProvidedState;
  var getProvidedState = _ref$getProvidedState === undefined ? function (mergedStates) {
    return mergedStates;
  } : _ref$getProvidedState;
  var _ref$getClientState = _ref.getClientState;
  var getClientState = _ref$getClientState === undefined ? function (providedState) {
    return providedState;
  } : _ref$getClientState;
  var _ref$maxRenders = _ref.maxRenders;
  var maxRenders = _ref$maxRenders === undefined ? 2 : _ref$maxRenders;
  var _ref$maxResponseTime = _ref.maxResponseTime;
  var maxResponseTime = _ref$maxResponseTime === undefined ? 2000 : _ref$maxResponseTime;

  return function (request, response, next) {
    var windowPath = request.originalUrl;
    var requestMethod = request.method;
    var requestBody = request.body;
    var requestHeaders = request.headers;

    var accept = requestHeaders && requestHeaders.accept;
    var acceptJson = accept && accept.indexOf('json') > -1;

    if (typeof requestBody === 'undefined') {
      console.warn('Server needs to use `body-parser` or something like it!');
    }

    try {
      (function () {
        var stores = null;
        var thunks = null;
        var rerender = null;
        var renders = 0;
        var html = null;
        var mergedStates = null;
        var providedState = null;
        var clientState = null;
        var redirectStatus = 0;
        var responded = false;
        var responseTimeout = maxResponseTime ? setTimeout(send408Status, maxResponseTime) : null;
        var providers = {};

        for (var _name in defaultProps.providers) {
          providers[_name] = _extends({}, defaultProps.providers[_name]);
        }

        _reactReduxProvide.unshiftMiddleware(providers, function (_ref2) {
          var dispatch = _ref2.dispatch;
          var getState = _ref2.getState;

          return function (next) {
            return function (action) {
              if (!rerender && !action._noRender) {
                rerender = true;
              }

              if (typeof action !== 'function') {
                return next(action);
              }

              var newDispatch = function newDispatch(action) {
                thunks--;
                dispatch(action);
                respondOrRerender();
              };

              thunks++;
              return action(newDispatch, getState);
            };
          };
        });

        var renderState = function renderState() {
          stores = {};
          thunks = 0;
          rerender = false;
          renders++;
          html = renderToString(_extends({}, defaultProps, {
            providers: providers,
            providedState: _extends({}, defaultProps.providedState || {}, {
              windowPath: windowPath,
              requestMethod: requestMethod,
              requestBody: requestBody,
              acceptJson: acceptJson
            }),
            providerReady: [].concat(defaultProps.providerReady || [], [function (_ref3) {
              var name = _ref3.name;
              var store = _ref3.store;

              stores[name] = store;
            }])
          }));
          mergedStates = _reduxReplicate.mergeStoresStates()(stores);
          providedState = typeof getProvidedState === 'object' ? _reduxReplicate.selectKeys(getProvidedState, mergedStates) : getProvidedState(mergedStates);
          clientState = typeof getClientState === 'object' ? _reduxReplicate.selectKeys(getClientState, providedState) : getClientState(providedState);

          respondOrRerender();
        };

        var respondOrRerender = function respondOrRerender() {
          var _stores$page$getState = stores.page.getState();

          var nextWindowPath = _stores$page$getState.windowPath;

          if (nextWindowPath !== windowPath) {
            windowPath = nextWindowPath;
            redirectStatus = 303;
          }

          if (renders === maxRenders || !rerender) {
            respond();
          } else if (thunks === 0) {
            requestMethod = 'GET';
            requestBody = {};
            setTimeout(renderState, 1);
          }
        };

        var respond = function respond() {
          if (responseTimeout) {
            clearTimeout(responseTimeout);
            responseTimeout = null;
          }

          if (responded) {
            return;
          }

          var _providedState = providedState;
          var headers = _providedState.headers;
          var statusCode = _providedState.statusCode;

          var documentString = null;

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
            documentString = renderDocumentToString(html, providedState, clientState);

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

        var send408Status = function send408Status() {
          responseTimeout = null;
          response.sendStatus(408);
          responded = true;
        };

        renderState();
      })();
    } catch (error) {
      console.error(error.stack);
      response.sendStatus(500);
    }
  };
}

module.exports = exports['default'];