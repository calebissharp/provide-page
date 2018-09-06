'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _exenv = require('exenv');

var _componentsForm = require('./components/Form');

var _componentsForm2 = _interopRequireDefault(_componentsForm);

exports.Form = _componentsForm2['default'];

var _componentsLink = require('./components/Link');

var _componentsLink2 = _interopRequireDefault(_componentsLink);

exports.Link = _componentsLink2['default'];

var _createMiddleware2 = require('./createMiddleware');

var _createMiddleware3 = _interopRequireDefault(_createMiddleware2);

exports.createMiddleware = _createMiddleware3['default'];

var _defaultRenderDocumentToString2 = require('./defaultRenderDocumentToString');

var _defaultRenderDocumentToString3 = _interopRequireDefault(_defaultRenderDocumentToString2);

exports.defaultRenderDocumentToString = _defaultRenderDocumentToString3['default'];

var _eventsPropTypes2 = require('./eventsPropTypes');

var _eventsPropTypes3 = _interopRequireDefault(_eventsPropTypes2);

exports.eventsPropTypes = _eventsPropTypes3['default'];
var PUSH_WINDOW_PATH = 'PUSH_WINDOW_PATH';
exports.PUSH_WINDOW_PATH = PUSH_WINDOW_PATH;
var REPLACE_WINDOW_PATH = 'REPLACE_WINDOW_PATH';
exports.REPLACE_WINDOW_PATH = REPLACE_WINDOW_PATH;
var SET_HEADERS = 'SET_HEADERS';
exports.SET_HEADERS = SET_HEADERS;
var SET_STATUS_CODE = 'SET_STATUS_CODE';
exports.SET_STATUS_CODE = SET_STATUS_CODE;
var SET_DOCUMENT_TITLE = 'SET_DOCUMENT_TITLE';
exports.SET_DOCUMENT_TITLE = SET_DOCUMENT_TITLE;
var SET_META_DESCRIPTION = 'SET_META_DESCRIPTION';
exports.SET_META_DESCRIPTION = SET_META_DESCRIPTION;
var SET_META_ROBOTS = 'SET_META_ROBOTS';
exports.SET_META_ROBOTS = SET_META_ROBOTS;
var SET_ICON_FILE = 'SET_ICON_FILE';
exports.SET_ICON_FILE = SET_ICON_FILE;
var SET_CSS_FILES = 'SET_CSS_FILES';
exports.SET_CSS_FILES = SET_CSS_FILES;
var SET_JS_FILES = 'SET_JS_FILES';
exports.SET_JS_FILES = SET_JS_FILES;
var SUBMIT_REQUEST = 'SUBMIT_REQUEST';
exports.SUBMIT_REQUEST = SUBMIT_REQUEST;
var SUBMITTED_FORM = 'SUBMITTED_FORM';

exports.SUBMITTED_FORM = SUBMITTED_FORM;
var _noRender = true;
var splitPath = function splitPath(path) {
  return path.replace(/^\//, '').split('/');
};

var actions = {
  pushWindowPath: function pushWindowPath() {
    var windowPath = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

    var windowPathSplit = splitPath(windowPath);

    return { type: PUSH_WINDOW_PATH, windowPath: windowPath, windowPathSplit: windowPathSplit, _noRender: _noRender };
  },

  replaceWindowPath: function replaceWindowPath() {
    var windowPath = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

    var windowPathSplit = splitPath(windowPath);

    return {
      type: REPLACE_WINDOW_PATH, windowPath: windowPath, windowPathSplit: windowPathSplit, _noRender: _noRender
    };
  },

  setHeaders: function setHeaders(headers) {
    return { type: SET_HEADERS, headers: headers, _noRender: _noRender };
  },

  setStatusCode: function setStatusCode(statusCode) {
    return { type: SET_STATUS_CODE, statusCode: statusCode, _noRender: _noRender };
  },

  setDocumentTitle: function setDocumentTitle() {
    var documentTitle = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

    return { type: SET_DOCUMENT_TITLE, documentTitle: documentTitle, _noRender: _noRender };
  },

  setMetaDescription: function setMetaDescription() {
    var metaDescription = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

    return { type: SET_META_DESCRIPTION, metaDescription: metaDescription, _noRender: _noRender };
  },

  setMetaRobots: function setMetaRobots() {
    var metaRobots = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

    return { type: SET_META_ROBOTS, metaRobots: metaRobots, _noRender: _noRender };
  },

  setIconFile: function setIconFile() {
    var iconFile = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

    return { type: SET_ICON_FILE, iconFile: iconFile, _noRender: _noRender };
  },

  setCssFiles: function setCssFiles() {
    var cssFiles = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

    return { type: SET_CSS_FILES, cssFiles: cssFiles, _noRender: _noRender };
  },

  setJsFiles: function setJsFiles() {
    var jsFiles = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

    return { type: SET_JS_FILES, jsFiles: jsFiles, _noRender: _noRender };
  },

  submitRequest: function submitRequest() {
    var requestBody = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
    var requestMethod = arguments.length <= 1 || arguments[1] === undefined ? 'POST' : arguments[1];
    var acceptJson = arguments.length <= 2 || arguments[2] === undefined ? true : arguments[2];

    return { type: SUBMIT_REQUEST, requestBody: requestBody, requestMethod: requestMethod, acceptJson: acceptJson };
  },

  submitForm: function submitForm(formData) {
    var xhr = new XMLHttpRequest();
    var _window$location = window.location;
    var pathname = _window$location.pathname;
    var search = _window$location.search;

    var contentType = 'application/json;charset=UTF-8';
    var accept = 'application/json';

    return function (dispatch) {
      xhr.open('POST', pathname + search, true);
      xhr.setRequestHeader('Content-Type', contentType);
      xhr.setRequestHeader('Accept', accept);
      xhr.onload = function () {
        var response = xhr.response;

        dispatch({ type: SUBMITTED_FORM, formData: formData, response: response });
        // TODO: merge response into stores
      };
      xhr.send(JSON.stringify(formData));
    };
  }
};

var reducers = {
  windowPath: function windowPath(state, action) {
    if (state === undefined) state = _exenv.canUseDOM && window.location.pathname;

    switch (action.type) {
      case PUSH_WINDOW_PATH:
        if (_exenv.canUseDOM) {
          window.history.pushState(action, document.title, action.windowPath);
        }
        return action.windowPath;

      case REPLACE_WINDOW_PATH:
        if (_exenv.canUseDOM) {
          window.history.replaceState(action, document.title, action.windowPath);
        }
        return action.windowPath;

      default:
        return state;
    }
  },

  splitWindowPath: function splitWindowPath(state, action) {
    if (state === undefined) state = _exenv.canUseDOM && splitPath(window.location.pathname);

    switch (action.type) {
      case PUSH_WINDOW_PATH:
      case REPLACE_WINDOW_PATH:
        return action.windowPathSplit;

      default:
        return state;
    }
  },

  headers: function headers(state, action) {
    if (state === undefined) state = null;

    switch (action.type) {
      case SET_HEADERS:
        return action.headers;

      default:
        return state;
    }
  },

  statusCode: function statusCode(state, action) {
    if (state === undefined) state = null;

    switch (action.type) {
      case SET_STATUS_CODE:
        return action.statusCode;

      default:
        return state;
    }
  },

  documentTitle: function documentTitle(state, action) {
    if (state === undefined) state = _exenv.canUseDOM && document.title;

    switch (action.type) {
      case SET_DOCUMENT_TITLE:
        if (_exenv.canUseDOM) {
          document.title = action.documentTitle;
        }
        return action.documentTitle;

      default:
        return state;
    }
  },

  metaDescription: function metaDescription(state, action) {
    if (state === undefined) state = 'Built with provide-page.';

    switch (action.type) {
      case SET_META_DESCRIPTION:
        return action.metaDescription;

      default:
        return state;
    }
  },

  metaRobots: function metaRobots(state, action) {
    if (state === undefined) state = 'index,follow';

    switch (action.type) {
      case SET_META_ROBOTS:
        return action.metaRobots;

      default:
        return state;
    }
  },

  iconFile: function iconFile(state, action) {
    if (state === undefined) state = '/static/favicon.ico';

    switch (action.type) {
      case SET_ICON_FILE:
        return action.iconFile;

      default:
        return state;
    }
  },

  cssFiles: function cssFiles(state, action) {
    if (state === undefined) state = [];

    switch (action.type) {
      case SET_CSS_FILES:
        return action.cssFiles;

      default:
        return state;
    }
  },

  jsFiles: function jsFiles(state, action) {
    if (state === undefined) state = [];

    switch (action.type) {
      case SET_JS_FILES:
        return action.jsFiles;

      default:
        return state;
    }
  },

  requestBody: function requestBody(state, action) {
    if (state === undefined) state = null;

    switch (action.type) {
      case SUBMIT_REQUEST:
        return action.requestBody;

      default:
        return state;
    }
  },

  requestMethod: function requestMethod(state, action) {
    if (state === undefined) state = null;

    switch (action.type) {
      case SUBMIT_REQUEST:
        return action.requestMethod;

      default:
        return state;
    }
  },

  acceptJson: function acceptJson(state, action) {
    if (state === undefined) state = null;

    switch (action.type) {
      case SUBMIT_REQUEST:
        return action.acceptJson;

      default:
        return state;
    }
  }
};

var merge = function merge(stateProps, dispatchProps, parentProps) {
  var requestBody = stateProps.requestBody;

  return _extends({}, parentProps, {
    formData: requestBody && requestBody._formId === parentProps.formId ? requestBody : null
  });
};

var enhancer = function enhancer(next) {
  return function (reducer, initialState) {
    var store = next(reducer, initialState);

    if (_exenv.canUseDOM) {
      store.dispatch(actions.replaceWindowPath(window.location.pathname));

      window.addEventListener('popstate', function (event) {
        var action = window.history.state;

        if (action) {
          if (action.windowPath !== undefined) {
            store.dispatch(_extends({}, action, { type: REPLACE_WINDOW_PATH }));
          } else if (action.documentTitle !== undefined) {
            store.dispatch(_extends({}, action, { type: SET_DOCUMENT_TITLE }));
          }
        }
      });
    } else if (initialState.windowPath || initialState.documentTitle) {
      store.dispatch(actions.replaceWindowPath(initialState.windowPath));
    }

    return store;
  };
};

var middleware = _reduxThunk2['default'];

exports['default'] = { actions: actions, reducers: reducers, merge: merge, middleware: middleware, enhancer: enhancer };