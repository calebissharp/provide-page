(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["providePage"] = factory(require("react"));
	else
		root["providePage"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _reduxThunk = __webpack_require__(37);

	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

	var _exenv = __webpack_require__(24);

	var _componentsForm = __webpack_require__(21);

	var _componentsForm2 = _interopRequireDefault(_componentsForm);

	exports.Form = _componentsForm2['default'];

	var _componentsLink = __webpack_require__(22);

	var _componentsLink2 = _interopRequireDefault(_componentsLink);

	exports.Link = _componentsLink2['default'];

	var _createMiddleware2 = __webpack_require__(23);

	var _createMiddleware3 = _interopRequireDefault(_createMiddleware2);

	exports.createMiddleware = _createMiddleware3['default'];

	var _defaultRenderDocumentToString2 = __webpack_require__(7);

	var _defaultRenderDocumentToString3 = _interopRequireDefault(_defaultRenderDocumentToString2);

	exports.defaultRenderDocumentToString = _defaultRenderDocumentToString3['default'];

	var _eventsPropTypes2 = __webpack_require__(3);

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

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	if (true) {
	  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
	    Symbol.for &&
	    Symbol.for('react.element')) ||
	    0xeac7;

	  var isValidElement = function(object) {
	    return typeof object === 'object' &&
	      object !== null &&
	      object.$$typeof === REACT_ELEMENT_TYPE;
	  };

	  // By explicitly using `prop-types` you are opting into new development behavior.
	  // http://fb.me/prop-types-in-prod
	  var throwOnDirectAccess = true;
	  module.exports = __webpack_require__(29)(isValidElement, throwOnDirectAccess);
	} else {
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  module.exports = require('./factoryWithThrowingShims')();
	}


/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(1);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var func = _propTypes2['default'].func;
	exports['default'] = {
	  onBlur: func,
	  onChange: func,
	  onClick: func,
	  onCompositionEnd: func,
	  onCompositionStart: func,
	  onCompositionUpdate: func,
	  onContextMenu: func,
	  onCopy: func,
	  onCut: func,
	  onDoubleClick: func,
	  onDrag: func,
	  onDragEnd: func,
	  onDragEnter: func,
	  onDragExit: func,
	  onDragLeave: func,
	  onDragOver: func,
	  onDragStart: func,
	  onDrop: func,
	  onFocus: func,
	  onInput: func,
	  onKeyDown: func,
	  onKeyPress: func,
	  onKeyUp: func,
	  onMouseDown: func,
	  onMouseEnter: func,
	  onMouseLeave: func,
	  onMouseMove: func,
	  onMouseOut: func,
	  onMouseOver: func,
	  onMouseUp: func,
	  onPaste: func,
	  onScroll: func,
	  onSelect: func,
	  onSubmit: func,
	  onTouchCancel: func,
	  onTouchEnd: func,
	  onTouchMove: func,
	  onTouchStart: func,
	  onWheel: func
	};
	module.exports = exports['default'];

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.unshiftClear = exports.pushClear = exports.unshiftWait = exports.pushWait = exports.unshiftReplicator = exports.pushReplicator = exports.unshiftReplication = exports.pushReplication = exports.unshiftOnReady = exports.pushOnReady = exports.unshiftOnInstantiated = exports.pushOnInstantiated = exports.unshiftEnhancer = exports.pushEnhancer = exports.unshiftMiddleware = exports.pushMiddleware = exports.handleQueries = exports.getMergedResult = exports.getQueryHandlers = exports.getQueriesOptions = exports.getQueryOptions = exports.getQuery = exports.getQueries = exports.getFunctionOrObject = exports.getQueryResults = exports.getActiveQueries = exports.getProviderInstances = exports.getProviders = exports.getFromContextOrProps = exports.instantiateProvider = exports.shallowEqual = exports.createKeyConcat = exports.getInitialState = exports.getClientState = exports.createProviderStore = exports.reloadProviders = exports.reloadFunctions = exports.provide = undefined;

	var _provide = __webpack_require__(30);

	var _provide2 = _interopRequireDefault(_provide);

	var _createProviderStore = __webpack_require__(10);

	var _createProviderStore2 = _interopRequireDefault(_createProviderStore);

	var _createKeyConcat = __webpack_require__(9);

	var _createKeyConcat2 = _interopRequireDefault(_createKeyConcat);

	var _shallowEqual = __webpack_require__(5);

	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

	var _instantiateProvider = __webpack_require__(12);

	var _instantiateProvider2 = _interopRequireDefault(_instantiateProvider);

	var _keyConcats = __webpack_require__(13);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _provide2.default;
	exports.provide = _provide2.default;
	exports.reloadFunctions = _provide.reloadFunctions;
	exports.reloadProviders = _provide.reloadProviders;
	exports.createProviderStore = _createProviderStore2.default;
	exports.getClientState = _createProviderStore.getClientState;
	exports.getInitialState = _createProviderStore.getInitialState;
	exports.createKeyConcat = _createKeyConcat2.default;
	exports.shallowEqual = _shallowEqual2.default;
	exports.instantiateProvider = _instantiateProvider2.default;
	exports.getFromContextOrProps = _instantiateProvider.getFromContextOrProps;
	exports.getProviders = _instantiateProvider.getProviders;
	exports.getProviderInstances = _instantiateProvider.getProviderInstances;
	exports.getActiveQueries = _instantiateProvider.getActiveQueries;
	exports.getQueryResults = _instantiateProvider.getQueryResults;
	exports.getFunctionOrObject = _instantiateProvider.getFunctionOrObject;
	exports.getQueries = _instantiateProvider.getQueries;
	exports.getQuery = _instantiateProvider.getQuery;
	exports.getQueryOptions = _instantiateProvider.getQueryOptions;
	exports.getQueriesOptions = _instantiateProvider.getQueriesOptions;
	exports.getQueryHandlers = _instantiateProvider.getQueryHandlers;
	exports.getMergedResult = _instantiateProvider.getMergedResult;
	exports.handleQueries = _instantiateProvider.handleQueries;
	exports.pushMiddleware = _keyConcats.pushMiddleware;
	exports.unshiftMiddleware = _keyConcats.unshiftMiddleware;
	exports.pushEnhancer = _keyConcats.pushEnhancer;
	exports.unshiftEnhancer = _keyConcats.unshiftEnhancer;
	exports.pushOnInstantiated = _keyConcats.pushOnInstantiated;
	exports.unshiftOnInstantiated = _keyConcats.unshiftOnInstantiated;
	exports.pushOnReady = _keyConcats.pushOnReady;
	exports.unshiftOnReady = _keyConcats.unshiftOnReady;
	exports.pushReplication = _keyConcats.pushReplication;
	exports.unshiftReplication = _keyConcats.unshiftReplication;
	exports.pushReplicator = _keyConcats.pushReplicator;
	exports.unshiftReplicator = _keyConcats.unshiftReplicator;
	exports.pushWait = _keyConcats.pushWait;
	exports.unshiftWait = _keyConcats.unshiftWait;
	exports.pushClear = _keyConcats.pushClear;
	exports.unshiftClear = _keyConcats.unshiftClear;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.default = shallowEqual;
	function shallowEqual(objA, objB) {
	  if (objA === objB) {
	    return true;
	  }

	  if (!objA || (typeof objA === 'undefined' ? 'undefined' : _typeof(objA)) !== 'object' || !objB || (typeof objB === 'undefined' ? 'undefined' : _typeof(objB)) !== 'object') {
	    return false;
	  }

	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);

	  if (keysA.length !== keysB.length) {
	    return false;
	  }

	  // Test for A's keys different from B.
	  var hasOwn = Object.prototype.hasOwnProperty;
	  for (var i = 0; i < keysA.length; i++) {
	    if (!hasOwn.call(objB, keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
	      return false;
	    }
	  }

	  return true;
	}

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var prefix = "@@redux-replicate";

	var GET_INITIAL_STATE = exports.GET_INITIAL_STATE = prefix + "/GET_INITIAL_STATE";
	var GOT_INITIAL_STATE = exports.GOT_INITIAL_STATE = prefix + "/GOT_INITIAL_STATE";
	var INITIAL_STATE_ERROR = exports.INITIAL_STATE_ERROR = prefix + "/INITIAL_STATE_ERROR";
	var REPLICATE_INITIAL_STATE = exports.REPLICATE_INITIAL_STATE = prefix + "/REPLICATE_INITIAL_STATE";
	var REPLICATED_INITIAL_STATE = exports.REPLICATED_INITIAL_STATE = prefix + "/REPLICATED_INITIAL_STATE";
	var REPLICATE_STATE = exports.REPLICATE_STATE = prefix + "/REPLICATE_STATE";
	var REPLICATED_STATE = exports.REPLICATED_STATE = prefix + "/REPLICATED_STATE";
	var STATE_CHANGE_ERROR = exports.STATE_CHANGE_ERROR = prefix + "/STATE_CHANGE_ERROR";
	var SET_STATE = exports.SET_STATE = prefix + "/SET_STATE";
	var FULLY_INITIALIZED = exports.FULLY_INITIALIZED = prefix + "/FULLY_INITIALIZED";

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;
	var defaultRenderDocumentToString = function defaultRenderDocumentToString(html, providedState, clientState) {
	  var _providedState$documentTitle = providedState.documentTitle;
	  var documentTitle = _providedState$documentTitle === undefined ? 'Page' : _providedState$documentTitle;
	  var _providedState$metaDescription = providedState.metaDescription;
	  var metaDescription = _providedState$metaDescription === undefined ? 'Built with provide-page.' : _providedState$metaDescription;
	  var _providedState$metaRobots = providedState.metaRobots;
	  var metaRobots = _providedState$metaRobots === undefined ? 'index,follow' : _providedState$metaRobots;
	  var _providedState$iconFile = providedState.iconFile;
	  var iconFile = _providedState$iconFile === undefined ? '/static/favicon.ico' : _providedState$iconFile;
	  var _providedState$cssFiles = providedState.cssFiles;
	  var cssFiles = _providedState$cssFiles === undefined ? [] : _providedState$cssFiles;
	  var _providedState$jsFiles = providedState.jsFiles;
	  var jsFiles = _providedState$jsFiles === undefined ? [] : _providedState$jsFiles;

	  return '<!DOCTYPE html>' + '<html>' + '<head>' + ('<title>' + documentTitle + '</title>') + '<meta charset="utf-8"/>' + '<meta http-equiv="X-UA-Compatible" content="IE=edge"/>' + '<meta name="viewport" content="width=device-width, initial-scale=1.0"/>' + ('<meta name="description" content="' + metaDescription + '"/>') + ('<meta name="robots" content="' + metaRobots + '"/>') + ('<link rel="shortcut icon" type="image/ico" href="' + iconFile + '"/>') + cssFiles.map(function (cssFile) {
	    return '<link rel="stylesheet" type="text/css" href="' + cssFile + '"/>';
	  }).join('') + '</head>' + '<body>' + ('<div id="root">' + html + '</div>') + '<script>' + ('window.clientState = ' + JSON.stringify(clientState) + ';') + '</script>' + jsFiles.map(function (jsFile) {
	    return '<script src="' + jsFile + '"></script>';
	  }).join('') + '</body>' + '</html>';
	};

	exports['default'] = defaultRenderDocumentToString;
	module.exports = exports['default'];

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	module.exports = ReactPropTypesSecret;


/***/ }),
/* 9 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = createKeyConcat;
	function createKeyConcat(keys, unshift) {
	  var key = keys;
	  var getTarget = function getTarget(provider) {
	    return provider;
	  };

	  if (Array.isArray(keys)) {
	    keys = [].concat(keys);
	    key = keys.pop();
	    getTarget = function getTarget(provider) {
	      return keys.reduce(function (obj, key) {
	        return obj[key];
	      }, provider);
	    };
	  }

	  return function (providers, value) {
	    for (var providerKey in providers) {
	      var target = getTarget(providers[providerKey]);

	      if (target) {
	        if (!target[key]) {
	          target[key] = [];
	        } else if (!Array.isArray(target[key])) {
	          target[key] = [target[key]];
	        }

	        if (unshift) {
	          target[key] = [].concat(value).concat(target[key]);
	        } else {
	          target[key] = target[key].concat(value);
	        }
	      }
	    }
	  };
	}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.getClientState = getClientState;
	exports.getInitialState = getInitialState;
	exports.default = createProviderStore;

	var _redux = __webpack_require__(41);

	var _reduxReplicate = __webpack_require__(33);

	var _reduxReplicate2 = _interopRequireDefault(_reduxReplicate);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function getClientState(_ref) {
	  var providerKey = _ref.providerKey;

	  if (typeof window !== 'undefined' && window.clientStates) {
	    var clientState = window.clientStates[providerKey];

	    if (typeof clientState !== 'undefined') {
	      return clientState;
	    }
	  }

	  return null;
	}

	function getInitialState(_ref2) {
	  var providerKey = _ref2.providerKey,
	      state = _ref2.state;

	  var clientState = getClientState({ providerKey: providerKey, state: state });

	  if (clientState) {
	    delete window.clientStates[providerKey];

	    return state ? _extends({}, state, clientState) : clientState;
	  }

	  return state || {};
	}

	/**
	 * Creates and returns a store specifically for some provider instance.
	 *
	 * @param {Object} providerInstance
	 * @param {Mixed} storeKey Optional
	 * @param {Object} createState Optional
	 * @param {Function} createFunction Optional
	 * @param {Object} creatorStore Optional
	 * @return {Object}
	 * @api public
	 */
	function createProviderStore(providerInstance, storeKey, createState, createFunction, creatorStore) {
	  var reducers = providerInstance.reducers,
	      middleware = providerInstance.middleware,
	      enhancer = providerInstance.enhancer,
	      replication = providerInstance.replication;

	  var watchedReducers = {};
	  var watching = {};
	  var enhancers = [];
	  var create = void 0;
	  var store = void 0;
	  var setState = void 0;
	  var settingState = void 0;
	  var combinedReducers = void 0;

	  if (typeof storeKey === 'undefined') {
	    storeKey = providerInstance.providerKey;
	  }

	  function unshiftReplication(_ref3) {
	    var key = _ref3.key,
	        reducerKeys = _ref3.reducerKeys,
	        queryable = _ref3.queryable,
	        baseQuery = _ref3.baseQuery,
	        replicator = _ref3.replicator;

	    if (replicator) {
	      if (baseQuery) {
	        if (Array.isArray(reducerKeys)) {
	          for (var reducerKey in baseQuery) {
	            if (reducerKeys.indexOf(reducerKey) < 0) {
	              reducerKeys.push(reducerKey);
	            }
	          }
	        }

	        if (Array.isArray(queryable)) {
	          for (var _reducerKey in baseQuery) {
	            if (queryable.indexOf(_reducerKey) < 0) {
	              queryable.push(_reducerKey);
	            }
	          }
	        }
	      }

	      enhancers.unshift((0, _reduxReplicate2.default)({
	        key: typeof key === 'undefined' ? storeKey : key,
	        reducerKeys: reducerKeys,
	        queryable: queryable,
	        replicator: replicator,
	        create: createFunction || Boolean(createState),
	        clientState: getClientState(providerInstance),
	        creatorStore: creatorStore
	      }));
	    }
	  }

	  if (middleware) {
	    enhancers.push(_redux.applyMiddleware.apply(null, [].concat(middleware)));
	  }

	  if (enhancer) {
	    enhancers = enhancers.concat(enhancer);
	  }

	  if (replication) {
	    if (Array.isArray(replication)) {
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;

	      try {
	        for (var _iterator = replication[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var _ref5 = _step.value;
	          var key = _ref5.key;

	          if (typeof key !== 'undefined') {
	            storeKey = key;
	            break;
	          }
	        }
	      } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion && _iterator.return) {
	            _iterator.return();
	          }
	        } finally {
	          if (_didIteratorError) {
	            throw _iteratorError;
	          }
	        }
	      }

	      replication.forEach(unshiftReplication);
	    } else {
	      unshiftReplication(replication);
	    }
	  }

	  if (enhancers.length) {
	    create = _redux.compose.apply(undefined, _toConsumableArray(enhancers))(_redux.createStore);
	  } else {
	    create = _redux.createStore;
	  }

	  var initialState = {};
	  var preInitialState = _extends({}, createState || getInitialState(providerInstance));

	  Object.keys(reducers).forEach(function (reducerKey) {
	    if (typeof preInitialState[reducerKey] !== 'undefined') {
	      initialState[reducerKey] = preInitialState[reducerKey];
	    }

	    watchedReducers[reducerKey] = function (state, action) {
	      var nextState = void 0;

	      if (settingState && typeof settingState[reducerKey] !== 'undefined') {
	        nextState = settingState[reducerKey];
	      } else {
	        nextState = reducers[reducerKey](state, action);
	      }

	      if (watching[reducerKey] && state !== nextState) {
	        watching[reducerKey].forEach(function (fn) {
	          return fn(nextState);
	        });
	      }

	      return nextState;
	    };
	  });

	  combinedReducers = (0, _redux.combineReducers)(watchedReducers);
	  store = create(combinedReducers, initialState);

	  // we use a custom `watch` method with instead of a replicator
	  // since it's slightly more efficient and every clock cycle counts,
	  // especially with potentially thousands or even millions of components
	  store.watch = function (reducerKey, fn) {
	    if (!watching[reducerKey]) {
	      watching[reducerKey] = new Set();
	    }

	    watching[reducerKey].add(fn);

	    return function () {
	      return watching[reducerKey].delete(fn);
	    };
	  };

	  setState = store.setState;
	  store.setState = function () {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    var nextState = args[0];

	    var state = store.getState();

	    if (setState) {
	      var _loop = function _loop(reducerKey) {
	        var current = state[reducerKey];
	        var next = nextState[reducerKey];

	        if (watching[reducerKey] && current !== next) {
	          watching[reducerKey].forEach(function (fn) {
	            return fn(next);
	          });
	        }
	      };

	      for (var reducerKey in nextState) {
	        _loop(reducerKey);
	      }

	      setState.apply(undefined, args);
	    } else {
	      settingState = nextState;
	      store.replaceReducer(combinedReducers);
	      settingState = null;
	    }
	  };

	  return store;
	}

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.default = getRelevantKeys;
	function getRelevantKeys() {
	  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  var relevantKeys = [];

	  if ((typeof b === 'undefined' ? 'undefined' : _typeof(b)) === 'object') {
	    for (var key in b) {
	      if (key in a) {
	        relevantKeys.push(key);
	      }
	    }
	  }

	  return relevantKeys;
	}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.default = instantiateProvider;
	exports.getTempFauxInstance = getTempFauxInstance;
	exports.getFromContextOrProps = getFromContextOrProps;
	exports.getProviders = getProviders;
	exports.getProviderInstances = getProviderInstances;
	exports.getActiveQueries = getActiveQueries;
	exports.getQueryResults = getQueryResults;
	exports.getPartialStates = getPartialStates;
	exports.getFunctionOrObject = getFunctionOrObject;
	exports.getQueries = getQueries;
	exports.getQuery = getQuery;
	exports.getQueryOptions = getQueryOptions;
	exports.getQueriesOptions = getQueriesOptions;
	exports.getQueryHandlers = getQueryHandlers;
	exports.getMergedResult = getMergedResult;
	exports.resultsEqual = resultsEqual;
	exports.handleQueries = handleQueries;

	var _shallowEqual = __webpack_require__(5);

	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

	var _getRelevantKeys = __webpack_require__(11);

	var _getRelevantKeys2 = _interopRequireDefault(_getRelevantKeys);

	var _createProviderStore = __webpack_require__(10);

	var _createProviderStore2 = _interopRequireDefault(_createProviderStore);

	var _keyConcats = __webpack_require__(13);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	var isServerSide = typeof window === 'undefined';
	var isTesting = typeof process !== 'undefined' && process.env && ("development") === 'test';

	var globalProviderInstances = {};

	// TODO: we'll use this at some point to select only component propTypes
	/*
	function hasReducerKeys(providerInstance, getReducerKeys) {
	  if (!getReducerKeys) {
	    return true;
	  }

	  const { hasReducerKeys = {} } = providerInstance;

	  for (let reducerKey in getReducerKeys) {
	    if (!hasReducerKeys[reducerKey]) {
	      providerInstance.hasReducerKeys = {
	        ...hasReducerKeys,
	        ...getReducerKeys
	      };

	      return false;
	    }
	  }

	  return true;
	}*/

	/**
	 * Instantiates a provider with its own store.
	 *
	 * @param {Object} fauxInstance resembles { props, context }
	 * @param {Object} provider
	 * @param {String|Function} providerKey Optional
	 * @param {Function} readyCallback Optional
	 * @param {Object} createState Optional
	 * @param {Object} getReducerKeys Optional
	 * @param {Boolean} useCreator Optional
	 * @return {Object}
	 * @api public
	 */
	function instantiateProvider(fauxInstance, provider, providerKey, readyCallback, createState, getReducerKeys, useCreator // TODO: clean this up
	) {
	  if (arguments.length === 1) {
	    fauxInstance = arguments[0].fauxInstance;
	    provider = arguments[0].provider;
	    providerKey = arguments[0].providerKey;
	    readyCallback = arguments[0].readyCallback;
	    createState = arguments[0].createState;
	    getReducerKeys = arguments[0].getReducerKeys;
	    useCreator = arguments[0].useCreator;

	    if (!fauxInstance) {
	      provider = arguments[0];
	      fauxInstance = {};
	    }
	  }

	  if (!fauxInstance.props) {
	    fauxInstance.props = {};
	  }

	  if (typeof providerKey === 'undefined') {
	    providerKey = provider.key;
	  }

	  if (!provider.actions) {
	    provider.actions = {};
	  }
	  if (!provider.reducers) {
	    provider.reducers = {};
	  }

	  if (getReducerKeys === true) {
	    getReducerKeys = provider.reducers;
	  }

	  var providers = getProviders(fauxInstance);
	  var providerInstances = getProviderInstances(fauxInstance);
	  var providerInstance = void 0;
	  var isStatic = typeof providerKey !== 'function';
	  var storeKey = void 0;
	  var creator = void 0;

	  if (typeof provider.key === 'string') {
	    if (!providers[provider.key]) {
	      providers[provider.key] = provider;
	    }
	  } else if (provider.defaultKey) {
	    if (!providers[provider.defaultKey]) {
	      providers[provider.defaultKey] = provider;
	    }
	  } else if (!provider.key || !provider.key.toString) {
	    console.warn('Missing or invalid provider key!');
	  } else if (!providers[provider.key.toString()]) {
	    providers[provider.key.toString()] = provider;
	  }

	  if (!isStatic) {
	    // get actual `providerKey`
	    providerKey = providerKey(fauxInstance);
	    // if actual `providerKey` matches `key`, treat as static provider
	    isStatic = providerKey === provider.key;
	  }

	  if (providerKey === null) {
	    storeKey = null;
	    providerKey = provider.defaultKey;
	    isStatic = true;
	  }

	  providerInstance = provider.isGlobal ? globalProviderInstances[providerKey] : providerInstances && providerInstances[providerKey];

	  if (fauxInstance.relevantProviders) {
	    fauxInstance.relevantProviders[providerKey] = true;
	  }

	  if (createState && (typeof createState === 'undefined' ? 'undefined' : _typeof(createState)) === 'object' && provider.state && _typeof(provider.state) === 'object') {
	    createState = _extends({}, provider.state, createState);
	  }

	  // TODO: we'll use this at some point
	  //if (providerInstance && hasReducerKeys(providerInstance, getReducerKeys)) {
	  if (providerInstance) {
	    if (createState) {
	      if (useCreator) {
	        // TODO: clean this up
	        creator = providerInstance;
	      } else {
	        providerInstances[providerKey] = providerInstance;
	        providerInstance.store.setState(createState, false, true);
	        if (readyCallback) {
	          if (providerInstance.ready) {
	            readyCallback(providerInstance);
	          } else {
	            (0, _keyConcats.pushOnReady)({ providerInstance: providerInstance }, readyCallback);
	          }
	        }
	        return providerInstance;
	      }
	    } else {
	      providerInstances[providerKey] = providerInstance;
	      if (readyCallback) {
	        if (providerInstance.ready) {
	          readyCallback(providerInstance);
	        } else {
	          (0, _keyConcats.pushOnReady)({ providerInstance: providerInstance }, readyCallback);
	        }
	      }
	      return providerInstance;
	    }
	  }

	  if (!provider.hasThunk) {
	    var findProvider = function findProvider(props) {
	      if ((0, _getRelevantKeys2.default)(provider.reducers, props).length) {
	        return provider;
	      }

	      for (var key in providers) {
	        if ((0, _getRelevantKeys2.default)(providers[key].reducers, props).length) {
	          return providers[key];
	        }
	      }

	      return provider;
	    };

	    var getResultInstances = function getResultInstances(result, callback) {
	      var resultInstances = [];
	      var semaphore = result && result.length;
	      function clear() {
	        if (--semaphore === 0) {
	          callback(resultInstances);
	        }
	      }

	      if (!semaphore) {
	        semaphore = 1;
	        clear();
	        return;
	      }

	      result.forEach(function (resultProps, index) {
	        resultInstances[index] = null;

	        instantiateProvider({
	          fauxInstance: getTempFauxInstance(fauxInstance, resultProps),
	          provider: findProvider(resultProps),
	          readyCallback: function readyCallback(resultInstance) {
	            resultInstances[index] = resultInstance;
	            clear();
	          }
	        });
	      });
	    };

	    var getInstance = function getInstance(props, callback, create, useCreator) {
	      var provider = void 0;
	      var providerKey = void 0;

	      if (typeof props === 'string') {
	        // key is already known
	        if (providerInstances[props]) {
	          providerKey = props;
	        }

	        provider = providers[props] || providerInstances[props];
	        props = {};
	      } else {
	        provider = findProvider(props);
	      }

	      return instantiateProvider({
	        fauxInstance: getTempFauxInstance(fauxInstance, props),
	        provider: provider,
	        providerKey: providerKey,
	        readyCallback: callback,
	        createState: create ? props : null,
	        useCreator: useCreator
	      });
	    };

	    var getInstances = function getInstances(propsArray, callback, create, useCreator) {
	      var instances = [];
	      var getCount = propsArray.length;
	      var clear = function clear() {
	        if (--getCount === 0) {
	          if (callback) {
	            callback(instances);
	          }
	        }
	      };

	      propsArray.forEach(function (props, index) {
	        getInstance(props, function (instance) {
	          instances[index] = instance;
	          clear();
	        }, create);
	      });

	      return instances;
	    };

	    var createInstance = function createInstance(props, callback, useCreator) {
	      return getInstance(props, callback, true, useCreator);
	    };

	    var createInstances = function createInstances(propsArray, callback, useCreator) {
	      return getInstances(propsArray, callback, true, useCreator);
	    };

	    var setStates = function setStates(states) {
	      var gettingInstances = [];
	      var settingStates = [];
	      var clientStates = null;

	      if (!isServerSide) {
	        if (!window.clientStates) {
	          window.clientStates = {};
	        }

	        clientStates = window.clientStates;
	      }

	      var _loop = function _loop(_providerKey) {
	        var state = states[_providerKey];
	        var providerInstance = providerInstances[_providerKey];

	        if (providerInstance) {
	          if (providerInstance.store.setState) {
	            settingStates.push(function () {
	              return providerInstance.store.setState(state);
	            });
	          }
	        } else {
	          if (clientStates) {
	            clientStates[_providerKey] = state;
	          }

	          gettingInstances.push(state);
	        }
	      };

	      for (var _providerKey in states) {
	        _loop(_providerKey);
	      }

	      // now that `clientStates` are cached...
	      while (gettingInstances.length) {
	        getInstance(gettingInstances.shift());
	      }
	      while (settingStates.length) {
	        settingStates.shift()();
	      }
	    };

	    var find = function find(props, doInstantiate, callback) {
	      if (arguments.length === 2) {
	        callback = doInstantiate;
	        doInstantiate = false;
	      }

	      handleQueries(getTempFauxInstance(fauxInstance, props), function () {
	        if (!doInstantiate) {
	          callback(props.query ? props.result : props.results);
	          return;
	        }

	        if (props.query) {
	          getResultInstances(props.result, callback);
	          return;
	        }

	        var results = props.results;

	        var resultsInstances = {};
	        var resultsKeys = results && Object.keys(results);
	        var semaphore = resultsKeys && resultsKeys.length;
	        function clear() {
	          if (--semaphore === 0) {
	            callback(resultsInstances);
	          }
	        }

	        if (!semaphore) {
	          semaphore = 1;
	          clear();
	        }

	        resultsKeys.forEach(function (resultKey) {
	          resultsInstances[resultKey] = [];

	          getResultInstances(results[resultKey], function (resultInstances) {
	            resultsInstances[resultKey] = resultInstances;
	            clear();
	          });
	        });
	      });
	    };

	    provider.hasThunk = true;

	    if (provider.wait && !Array.isArray(provider.wait)) {
	      provider.wait = [provider.wait];
	    }

	    if (provider.clear && !Array.isArray(provider.clear)) {
	      provider.clear = [provider.clear];
	    }

	    var providerApi = {
	      getInstance: getInstance,
	      getInstances: getInstances,
	      createInstance: createInstance,
	      createInstances: createInstances,
	      setStates: setStates,
	      find: find
	    };

	    (0, _keyConcats.unshiftMiddleware)({ provider: provider }, function (_ref) {
	      var dispatch = _ref.dispatch,
	          getState = _ref.getState;

	      return function (next) {
	        return function (action) {
	          if (typeof action !== 'function') {
	            return next(action);
	          }

	          if (provider.wait) {
	            provider.wait.forEach(function (fn) {
	              return fn();
	            });
	          }

	          return action(function (action) {
	            var state = store.getState();
	            var storeChanged = false;

	            dispatch(action);

	            if (provider.clear) {
	              storeChanged = state !== store.getState();
	              provider.clear.forEach(function (fn) {
	                return fn(storeChanged);
	              });
	            }
	          }, getState, providerApi);
	        };
	      };
	    });
	  }

	  if (provider.wait) {
	    provider.wait.forEach(function (fn) {
	      return fn();
	    });
	  }

	  providerInstance = Object.create(provider);
	  providerInstance.providerKey = providerKey;
	  providerInstance.isStatic = isStatic;

	  var store = (0, _createProviderStore2.default)(providerInstance, storeKey, createState, createState ? function (state) {
	    var _providerInstance = providerInstance,
	        onReady = _providerInstance.onReady;


	    providerInstance = instantiateProvider({
	      fauxInstance: getTempFauxInstance(fauxInstance, state),
	      provider: provider,
	      readyCallback: function readyCallback(createdInstance) {
	        if (Array.isArray(onReady)) {
	          onReady.forEach(function (fn) {
	            return fn(createdInstance);
	          });
	        } else if (onReady) {
	          onReady(createdInstance);
	        }
	      }
	    });
	  } : null,
	  // TODO: we need a better way to create + replicate   
	  creator && creator.store);

	  var initialState = store.getState();
	  var _providerInstance2 = providerInstance,
	      actions = _providerInstance2.actions;

	  var actionCreators = {};
	  var setKey = store.setKey;

	  if (setKey) {
	    store.setKey = function (newKey, readyCallback) {
	      if (provider.wait) {
	        provider.wait.forEach(function (fn) {
	          return fn();
	        });
	      }

	      setKey(newKey, function () {
	        if (Array.isArray(providerInstance.onReady)) {
	          providerInstance.onReady.forEach(function (fn) {
	            return fn(providerInstance);
	          });
	        } else if (providerInstance.onReady) {
	          providerInstance.onReady(providerInstance);
	        }

	        if (readyCallback) {
	          readyCallback();
	        }

	        if (provider.clear) {
	          provider.clear.forEach(function (fn) {
	            return fn(true);
	          });
	        }
	      });
	    };
	  }

	  var _loop2 = function _loop2(actionKey) {
	    actionCreators[actionKey] = function () {
	      return store.dispatch(actions[actionKey].apply(this, arguments));
	    };
	  };

	  for (var actionKey in actions) {
	    _loop2(actionKey);
	  }

	  providerInstance.store = store;
	  providerInstance.actionCreators = actionCreators;

	  if (!createState) {
	    if (provider.isGlobal) {
	      globalProviderInstances[providerKey] = providerInstance;
	    }
	    if (providerInstances) {
	      providerInstances[providerKey] = providerInstance;
	    }
	    if (!provider.instances) {
	      provider.instances = [];
	    }
	    provider.instances.push(providerInstance);
	  }

	  if (provider.subscribers) {
	    Object.keys(provider.subscribers).forEach(function (key) {
	      var handler = provider.subscribers[key];
	      var subProvider = providers[key];
	      var subKey = provider.defaultKey || (typeof provider.key === 'function' ? provider.key({}) : String(provider.key));

	      var callHandler = function callHandler() {
	        var subProviderInstances = subProvider && subProvider.instances;

	        if (subProviderInstances) {
	          subProviderInstances.forEach(function (subProviderInstance) {
	            handler(providerInstance, subProviderInstance);
	          });
	        }
	      };

	      if (subProvider) {
	        if (!subProvider.subscribeTo) {
	          subProvider.subscribeTo = {};
	        }
	        if (!subProvider.subscribeTo[subKey]) {
	          subProvider.subscribeTo[subKey] = handler;
	        }
	      }

	      providerInstance.store.subscribe(callHandler);
	      callHandler();
	    });
	  }

	  if (provider.subscribeTo) {
	    Object.keys(provider.subscribeTo).forEach(function (key) {
	      var handler = provider.subscribeTo[key];
	      var supProvider = providers[key];
	      var supKey = provider.defaultKey || (typeof provider.key === 'function' ? provider.key({}) : String(provider.key));

	      if (!supProvider) {
	        return;
	      }

	      if (!supProvider.subscribers) {
	        supProvider.subscribers = {};
	      }
	      if (!supProvider.subscribers[supKey]) {
	        supProvider.subscribers[supKey] = handler;

	        if (supProvider.instances) {
	          supProvider.instances.forEach(function (supProviderInstance) {
	            supProviderInstance.store.subscribe(function () {
	              provider.instances.forEach(function (providerInstance) {
	                handler(supProviderInstance, providerInstance);
	              });
	            });
	          });
	        }
	      }

	      if (supProvider.instances) {
	        supProvider.instances.forEach(function (supProviderInstance) {
	          handler(supProviderInstance, providerInstance);
	        });
	      }
	    });
	  }

	  if (!createState) {
	    if (Array.isArray(providerInstance.onInstantiated)) {
	      providerInstance.onInstantiated.forEach(function (fn) {
	        return fn(providerInstance);
	      });
	    } else if (providerInstance.onInstantiated) {
	      providerInstance.onInstantiated(providerInstance);
	    }
	  }

	  (0, _keyConcats.unshiftOnReady)({ providerInstance: providerInstance }, function () {
	    providerInstance.ready = true;
	  });

	  if (readyCallback) {
	    (0, _keyConcats.pushOnReady)({ providerInstance: providerInstance }, readyCallback);
	  }

	  function done() {
	    if (Array.isArray(providerInstance.onReady)) {
	      providerInstance.onReady.forEach(function (fn) {
	        return fn(providerInstance);
	      });
	    } else if (providerInstance.onReady) {
	      providerInstance.onReady(providerInstance);
	    }

	    if (provider.clear) {
	      var storeChanged = initialState !== providerInstance.store.getState();
	      provider.clear.forEach(function (fn) {
	        return fn(storeChanged);
	      });
	    }
	  }

	  if (provider.replication && store.onReady && !store.initializedReplication) {
	    store.onReady(done);
	  } else {
	    done();
	  }

	  return providerInstance;
	}

	function getContext(fauxInstance) {
	  if (!fauxInstance.context) {
	    fauxInstance.context = {};
	  }

	  return fauxInstance.context;
	}

	function getTempFauxInstance(fauxInstance, props) {
	  return {
	    props: props,
	    context: getContext(fauxInstance),
	    providers: getProviders(fauxInstance),
	    providerInstances: getProviderInstances(fauxInstance),
	    activeQueries: getActiveQueries(fauxInstance),
	    queryResults: getQueryResults(fauxInstance),
	    partialStates: getPartialStates(fauxInstance)
	  };
	}

	function getFromContextOrProps(fauxInstance, key, defaultValue) {
	  if (typeof fauxInstance[key] === 'undefined') {
	    var props = fauxInstance.props;

	    var context = getContext(fauxInstance);

	    if (typeof props[key] !== 'undefined') {
	      fauxInstance[key] = props[key];
	    } else if (typeof context[key] !== 'undefined') {
	      fauxInstance[key] = context[key];
	    } else {
	      fauxInstance[key] = defaultValue;
	    }
	  }

	  return fauxInstance[key];
	}

	function getProviders(fauxInstance) {
	  return getFromContextOrProps(fauxInstance, 'providers', {});
	}

	function getProviderInstances(fauxInstance) {
	  return getFromContextOrProps(fauxInstance, 'providerInstances', {});
	}

	function getActiveQueries(fauxInstance) {
	  return getFromContextOrProps(fauxInstance, 'activeQueries', {});
	}

	function getQueryResults(fauxInstance) {
	  return getFromContextOrProps(fauxInstance, 'queryResults', {});
	}

	function getPartialStates(fauxInstance) {
	  return getFromContextOrProps(fauxInstance, 'partialStates', {});
	}

	function getFunctionOrObject(fauxInstance, key) {
	  var defaultValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

	  if (typeof fauxInstance[key] !== 'undefined') {
	    return fauxInstance[key];
	  }

	  var value = fauxInstance.props[key];

	  if (typeof value === 'function') {
	    value = value(fauxInstance);
	  }

	  fauxInstance[key] = value || defaultValue;

	  return fauxInstance[key];
	}

	function getQueries(fauxInstance) {
	  if (getQueries.disabled) {
	    return false;
	  }

	  if (typeof fauxInstance.queries !== 'undefined') {
	    return fauxInstance.queries;
	  }

	  var props = fauxInstance.props,
	      relevantProviders = fauxInstance.relevantProviders;

	  var providers = getProviders(fauxInstance);
	  var query = getQuery(fauxInstance);
	  var queries = getFunctionOrObject(fauxInstance, 'queries');
	  var hasQueries = false;

	  if (query) {
	    // we need to map the query to relevant provider(s)
	    if (!queries) {
	      queries = {};
	    } else if (typeof props.queries !== 'function') {
	      queries = _extends({}, queries);
	    }

	    for (var key in providers) {
	      var provider = providers[key];
	      var queryKeys = (0, _getRelevantKeys2.default)(provider.reducers, query);

	      if (queryKeys.length) {
	        // provider is relevant, so we map it within the queries object
	        if (!queries[key]) {
	          queries[key] = {};
	        }

	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;

	        try {
	          for (var _iterator = queryKeys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var queryKey = _step.value;

	            queries[key][queryKey] = query[queryKey];
	          }
	        } catch (err) {
	          _didIteratorError = true;
	          _iteratorError = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion && _iterator.return) {
	              _iterator.return();
	            }
	          } finally {
	            if (_didIteratorError) {
	              throw _iteratorError;
	            }
	          }
	        }
	      }
	    }
	  }

	  for (var _key in queries) {
	    var _query = queries[_key];

	    if (typeof _query === 'function') {
	      queries[_key] = _query(fauxInstance);
	    }

	    // make sure each provider is instantiated
	    instantiateProvider(fauxInstance, providers[_key]);
	    hasQueries = true;
	  }

	  if (!hasQueries) {
	    queries = null;

	    if (props.query) {
	      props.result = null;
	    }

	    if (props.queries) {
	      props.results = {};
	    }
	  }

	  fauxInstance.queries = queries;
	  return queries;
	}

	function getQuery(fauxInstance) {
	  return getFunctionOrObject(fauxInstance, 'query');
	}

	function getQueryOptions(fauxInstance) {
	  return getFunctionOrObject(fauxInstance, 'queryOptions');
	}

	function getQueriesOptions(fauxInstance) {
	  return getFunctionOrObject(fauxInstance, 'queriesOptions', {});
	}

	// gets all `handleQuery` functions within replicators
	function getQueryHandlers(provider) {
	  var queryHandlers = [];
	  var replication = provider.replication;


	  if (replication) {
	    if (!Array.isArray(replication)) {
	      replication = [replication];
	    }

	    var _iteratorNormalCompletion2 = true;
	    var _didIteratorError2 = false;
	    var _iteratorError2 = undefined;

	    try {
	      for (var _iterator2 = replication[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	        var _ref3 = _step2.value;
	        var replicator = _ref3.replicator,
	            reducerKeys = _ref3.reducerKeys,
	            baseQuery = _ref3.baseQuery,
	            baseQueryOptions = _ref3.baseQueryOptions;

	        if (replicator) {
	          if (!Array.isArray(replicator)) {
	            replicator = [replicator];
	          }

	          var _iteratorNormalCompletion3 = true;
	          var _didIteratorError3 = false;
	          var _iteratorError3 = undefined;

	          try {
	            for (var _iterator3 = replicator[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	              var _ref5 = _step3.value;
	              var handleQuery = _ref5.handleQuery;

	              if (handleQuery) {
	                queryHandlers.push({
	                  handleQuery: handleQuery,
	                  reducerKeys: reducerKeys || Object.keys(provider.reducers),
	                  baseQuery: baseQuery,
	                  baseQueryOptions: baseQueryOptions
	                });
	              }
	            }
	          } catch (err) {
	            _didIteratorError3 = true;
	            _iteratorError3 = err;
	          } finally {
	            try {
	              if (!_iteratorNormalCompletion3 && _iterator3.return) {
	                _iterator3.return();
	              }
	            } finally {
	              if (_didIteratorError3) {
	                throw _iteratorError3;
	              }
	            }
	          }
	        }
	      }
	    } catch (err) {
	      _didIteratorError2 = true;
	      _iteratorError2 = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion2 && _iterator2.return) {
	          _iterator2.return();
	        }
	      } finally {
	        if (_didIteratorError2) {
	          throw _iteratorError2;
	        }
	      }
	    }
	  }

	  return queryHandlers;
	}

	function getMergedResult(mergedResult, result) {
	  if (Array.isArray(result)) {
	    return [].concat(_toConsumableArray(mergedResult || []), _toConsumableArray(result));
	  } else if (result && (typeof result === 'undefined' ? 'undefined' : _typeof(result)) === 'object' && result.constructor === Object) {
	    return _extends({}, mergedResult || {}, result);
	  } else if (typeof result !== 'undefined') {
	    return result;
	  } else {
	    return mergedResult;
	  }
	}

	function resultsEqual(result, previousResult) {
	  if (result === previousResult) {
	    return true;
	  }

	  if ((typeof result === 'undefined' ? 'undefined' : _typeof(result)) !== (typeof previousResult === 'undefined' ? 'undefined' : _typeof(previousResult))) {
	    return false;
	  }

	  if (Array.isArray(result)) {
	    if (Array.isArray(previousResult)) {
	      var i = 0;
	      var length = result.length;

	      if (length !== previousResult.length) {
	        return false;
	      }

	      while (i < length) {
	        if (!(0, _shallowEqual2.default)(result[i], previousResult[i])) {
	          return false;
	        }

	        i++;
	      }
	    } else {
	      return false;
	    }
	  } else if (Array.isArray(previousResult)) {
	    return false;
	  }

	  return (0, _shallowEqual2.default)(result, previousResult);
	}

	// this is admittedly a mess... :(
	// we're accounting for both synchronous and asynchronous query handling
	// where asynchronous results will override the synchronous results
	function handleQueries(fauxInstance, callback, previousResults) {
	  var doUpdate = false;
	  var queries = getQueries(fauxInstance);

	  if (!queries) {
	    if (callback) {
	      callback(doUpdate);
	    }

	    return false;
	  }

	  var props = fauxInstance.props;

	  var context = getContext(fauxInstance);
	  var originalResult = props.result,
	      originalResults = props.results;

	  var validQuery = false;

	  // for determining whether or not we should update
	  if (!previousResults) {
	    previousResults = _extends({}, props.results);
	  }

	  // get what we need to handle the queries
	  var query = getQuery(fauxInstance);
	  var queryOptions = getQueryOptions(fauxInstance);
	  var queriesOptions = getQueriesOptions(fauxInstance);
	  var activeQueries = getActiveQueries(fauxInstance);
	  var queryResults = getQueryResults(fauxInstance);
	  var partialStates = getPartialStates(fauxInstance);
	  var providers = getProviders(fauxInstance);
	  var providerInstances = getProviderInstances(fauxInstance);

	  // TODO: we should probably do something better at some point
	  var setPartialStates = function setPartialStates(provider, result) {
	    if (!result || typeof result.map !== 'function' || !isServerSide) {
	      return;
	    }

	    var _iteratorNormalCompletion4 = true;
	    var _didIteratorError4 = false;
	    var _iteratorError4 = undefined;

	    try {
	      for (var _iterator4 = result[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
	        var partialState = _step4.value;

	        var providerKey = provider.key;

	        if (typeof providerKey === 'function') {
	          providerKey = providerKey({ props: partialState, context: context });
	        }

	        if (providerKey !== null && !providerInstances[providerKey]) {
	          partialStates[providerKey] = partialState;
	        }
	      }
	    } catch (err) {
	      _didIteratorError4 = true;
	      _iteratorError4 = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion4 && _iterator4.return) {
	          _iterator4.return();
	        }
	      } finally {
	        if (_didIteratorError4) {
	          throw _iteratorError4;
	        }
	      }
	    }
	  };

	  // most queries should be async
	  var queryCount = Object.keys(queries).length;
	  var queryClear = function queryClear() {
	    if (--queryCount === 0) {
	      // at this point we have all our results
	      if (callback) {
	        callback(doUpdate);
	      }
	    }
	  };

	  // merge each result into `props.result` if using `props.query`
	  var setMergedResult = function setMergedResult(result) {
	    if (props.query) {
	      props.result = getMergedResult(props.result, result);
	    }
	  };

	  // go ahead and set null value if using `props.query`
	  if (props.query) {
	    props.result = null;
	  }

	  // results start out as an empty object
	  props.results = {};

	  // check each query
	  Object.keys(queries).forEach(function (key) {
	    var provider = providers[key];
	    var queryHandlers = getQueryHandlers(provider);
	    var handlerCount = queryHandlers.length;

	    // no handlers?  Y U DO DIS?
	    if (!handlerCount) {
	      queryClear();
	      return;
	    }

	    validQuery = true;

	    // let the provider know we're waiting for all of the handlers to finish
	    if (Array.isArray(provider.wait)) {
	      provider.wait.forEach(function (fn) {
	        return fn();
	      });
	    } else if (provider.wait) {
	      provider.wait();
	    }

	    // here we determine the `resultKey` used for caching the results
	    // in the current context
	    var query = queries[key];
	    var options = queryOptions || queriesOptions[key] || {};
	    var resultKey = JSON.stringify({ query: query, options: options });
	    var queryResult = queryResults[resultKey];
	    var queryResultExists = typeof queryResult !== 'undefined';

	    // subscribe to all of this provider's instances' stores for requeries
	    subscribeToAll(key, provider, fauxInstance, resultKey, query, callback);

	    // result handler for both sync and async queries
	    var setResult = function setResult(result) {
	      if (!activeQueries[resultKey]) {
	        console.warn('setResult was called but the following query is no longer active:', { query: query, options: options });
	        return;
	      }

	      var first = activeQueries[resultKey].values().next().value;
	      var leader = setResult === first;
	      var previousResult = queryResultExists ? queryResult : previousResults[key];
	      var asyncReset = setResult.asyncReset;

	      // if new result, set `doUpdate` flag

	      if (!doUpdate && !resultsEqual(result, previousResult)) {
	        doUpdate = true;
	      }

	      // a special `asyncReset` flag is set if async handler is detected;
	      // we want async results to override sync
	      if (asyncReset) {
	        // this should only occur once, at the start of setting async results
	        setResult.asyncReset = false;

	        props.results = {};

	        if (props.query) {
	          props.result = null;
	        }
	      }

	      props.results[key] = result;
	      previousResults[key] = result;
	      queryResults[resultKey] = result;
	      setMergedResult(result);

	      // if this handler is the leader, we pass the result onto the others
	      if (leader && activeQueries[resultKey]) {
	        activeQueries[resultKey].forEach(function (otherSetResult) {
	          if (otherSetResult !== setResult) {
	            otherSetResult(result);
	          }
	        });
	      }

	      if (--handlerCount === 0) {
	        // handler is done, so remove self
	        activeQueries[resultKey].delete(setResult);

	        // if there are no handlers remaining, this query is no longer active
	        if (!activeQueries[resultKey].size) {
	          delete activeQueries[resultKey];
	          setPartialStates(provider, result);
	        }

	        // no more query handlers, so let the provider know we're done
	        if (Array.isArray(provider.clear)) {
	          provider.clear.forEach(function (fn) {
	            return fn(doUpdate);
	          });
	        } else if (provider.clear) {
	          provider.clear(doUpdate);
	        }

	        // and this query is clear
	        queryClear();

	        // we want to remove the cached query results on the client/tests
	        // so that it will always update
	        if (!isServerSide || isTesting) {
	          delete queryResults[resultKey];
	        }
	      }
	    };

	    var setError = function setError(error) {
	      console.error(error);
	    };

	    // this query is currently taking place, make the handler follow the leader
	    if (activeQueries[resultKey]) {
	      activeQueries[resultKey].add(setResult);
	      return;
	    }

	    // this is a new query, so this handler is a leader;
	    // other handlers matching this `resultKey` will check
	    // if the query is active and become a follower
	    activeQueries[resultKey] = new Set();
	    activeQueries[resultKey].add(setResult);

	    // already have our query result cached?
	    // no point in calling any handlers; go ahead and set the result
	    if (queryResultExists) {
	      handlerCount = 1;
	      setResult(queryResult);
	      return;
	    }

	    // now we need to run the query through each `handleQuery` function,
	    // which may or may not be synchronous
	    queryHandlers.forEach(function (_ref6) {
	      var handleQuery = _ref6.handleQuery,
	          reducerKeys = _ref6.reducerKeys,
	          baseQuery = _ref6.baseQuery,
	          baseQueryOptions = _ref6.baseQueryOptions;

	      // we can determine whether or not its synchronous by checking the 
	      // `handlerCount` immediately after `handleQuery` is called
	      var handlerCountBefore = handlerCount;

	      // normalize the query + options so that people can be lazy
	      var normalizedQuery = _extends({}, baseQuery, query);
	      var normalizedOptions = _extends({}, baseQueryOptions, options);

	      if (typeof normalizedOptions.select === 'undefined') {
	        normalizedOptions.select = reducerKeys === true ? Object.keys(provider.reducers) : reducerKeys;
	      } else if (!Array.isArray(normalizedOptions.select)) {
	        normalizedOptions.select = [normalizedOptions.select];
	      }

	      if (Array.isArray(normalizedOptions.select)) {
	        for (var reducerKey in normalizedQuery) {
	          if (normalizedOptions.select.indexOf(reducerKey) < 0) {
	            normalizedOptions.select.push(reducerKey);
	          }
	        }
	      }

	      handleQuery({
	        query: normalizedQuery,
	        options: normalizedOptions,
	        setResult: setResult,
	        setError: setError
	      });

	      if (handlerCount === handlerCountBefore) {
	        // asynchronous query, so we set the `asyncReset` flags to true
	        // only if they haven't been set to false yet
	        activeQueries[resultKey].forEach(function (setResult) {
	          setResult.asyncReset = setResult.asyncReset !== false;
	        });
	      }
	    });
	  });

	  if (!validQuery) {
	    props.result = originalResult;
	    props.results = originalResults;
	  }

	  return validQuery;
	}

	function subscribeToAll(key, provider, fauxInstance, resultKey, query, callback) {
	  if (isServerSide || !fauxInstance.props.__wrapper) {
	    return;
	  }

	  fauxInstance.requeryCallback = callback;

	  if (!provider.subscribedFauxInstances) {
	    provider.subscribedFauxInstances = {};
	  }

	  if (provider.subscribedFauxInstances[resultKey]) {
	    provider.subscribedFauxInstances[resultKey].add(fauxInstance);
	    return;
	  }

	  var subscribedFauxInstances = new Set();
	  provider.subscribedFauxInstances[resultKey] = subscribedFauxInstances;
	  subscribedFauxInstances.add(fauxInstance);

	  var timeout = void 0;
	  var requery = function requery(providerInstance) {
	    clearTimeout(timeout);
	    timeout = setTimeout(function () {
	      var _iteratorNormalCompletion5 = true;
	      var _didIteratorError5 = false;
	      var _iteratorError5 = undefined;

	      try {
	        for (var _iterator5 = subscribedFauxInstances[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
	          var _fauxInstance = _step5.value;

	          if (_fauxInstance.props.__wrapper.unmounted) {
	            subscribedFauxInstances.delete(_fauxInstance);
	          } else {
	            handleQueries(_fauxInstance, _fauxInstance.requeryCallback);
	          }
	        }
	      } catch (err) {
	        _didIteratorError5 = true;
	        _iteratorError5 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion5 && _iterator5.return) {
	            _iterator5.return();
	          }
	        } finally {
	          if (_didIteratorError5) {
	            throw _iteratorError5;
	          }
	        }
	      }
	    });
	  };

	  (0, _keyConcats.pushOnReady)({ provider: provider }, requery);

	  if (!provider.subscriber) {
	    provider.subscriber = {};
	  }

	  var subscriber = provider.subscriber[key];
	  provider.subscriber[key] = function (providerInstance, providerInstance2) {
	    if (subscriber) {
	      subscriber(providerInstance, providerInstance2);
	    }

	    if (shouldRequery(providerInstance, query)) {
	      requery(providerInstance);
	    }
	  };

	  if (provider.instances) {
	    provider.instances.forEach(function (providerInstance) {
	      providerInstance.store.subscribe(function () {
	        if (shouldRequery(providerInstance, query)) {
	          requery(providerInstance);
	        }
	      });
	    });
	  }
	}

	function shouldRequery(providerInstance, query) {
	  var currentState = providerInstance.store.getState();
	  var lastQueriedState = providerInstance.lastQueriedState;


	  providerInstance.lastQueriedState = currentState;

	  if (!lastQueriedState) {
	    return true;
	  }

	  if (currentState !== lastQueriedState) {
	    if ((typeof query === 'undefined' ? 'undefined' : _typeof(query)) === 'object') {
	      for (var key in query) {
	        if (currentState[key] !== lastQueriedState[key]) {
	          return true;
	        }
	      }
	    } else {
	      return true;
	    }
	  }

	  return false;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(27)))

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.unshiftClear = exports.pushClear = exports.unshiftWait = exports.pushWait = exports.unshiftReplicator = exports.pushReplicator = exports.unshiftReplication = exports.pushReplication = exports.unshiftOnReady = exports.pushOnReady = exports.unshiftOnInstantiated = exports.pushOnInstantiated = exports.unshiftEnhancer = exports.pushEnhancer = exports.unshiftMiddleware = exports.pushMiddleware = undefined;

	var _createKeyConcat = __webpack_require__(9);

	var _createKeyConcat2 = _interopRequireDefault(_createKeyConcat);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var middlewareKey = 'middleware';
	var pushMiddleware = exports.pushMiddleware = (0, _createKeyConcat2.default)(middlewareKey);
	var unshiftMiddleware = exports.unshiftMiddleware = (0, _createKeyConcat2.default)(middlewareKey, true);

	var enhancerKey = 'enhancer';
	var pushEnhancer = exports.pushEnhancer = (0, _createKeyConcat2.default)(enhancerKey);
	var unshiftEnhancer = exports.unshiftEnhancer = (0, _createKeyConcat2.default)(enhancerKey, true);

	var onInstantiatedKey = 'onInstantiated';
	var pushOnInstantiated = exports.pushOnInstantiated = (0, _createKeyConcat2.default)(onInstantiatedKey);
	var unshiftOnInstantiated = exports.unshiftOnInstantiated = (0, _createKeyConcat2.default)(onInstantiatedKey, true);

	var onReadyKey = 'onReady';
	var pushOnReady = exports.pushOnReady = (0, _createKeyConcat2.default)(onReadyKey);
	var unshiftOnReady = exports.unshiftOnReady = (0, _createKeyConcat2.default)(onReadyKey, true);

	var replicationKey = 'replication';
	var pushReplication = exports.pushReplication = (0, _createKeyConcat2.default)(replicationKey);
	var unshiftReplication = exports.unshiftReplication = (0, _createKeyConcat2.default)(replicationKey, true);

	var replicatorKey = [replicationKey, 'replicator'];
	var pushReplicator = exports.pushReplicator = (0, _createKeyConcat2.default)(replicatorKey);
	var unshiftReplicator = exports.unshiftReplicator = (0, _createKeyConcat2.default)(replicatorKey, true);

	var waitKey = 'wait';
	var pushWait = exports.pushWait = (0, _createKeyConcat2.default)(waitKey);
	var unshiftWait = exports.unshiftWait = (0, _createKeyConcat2.default)(waitKey, true);

	var clearKey = 'clear';
	var pushClear = exports.pushClear = (0, _createKeyConcat2.default)(clearKey);
	var unshiftClear = exports.unshiftClear = (0, _createKeyConcat2.default)(clearKey, true);

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var storeKeysEqual = function storeKeysEqual(a, b) {
	  return a === b || a && a.toString && b && b.toString && a.toString() === b.toString();
	};

	exports.default = storeKeysEqual;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	/**
	 * Extracts keys from some object.  See inline comments below for exact usage.
	 *
	 * @param {Object} keys
	 * @param {Object} object
	 * @param {Function} handler Optional
	 * @return {Function} pass the `stores` to this returned function
	 * @api public
	 */
	'use strict';

	exports.__esModule = true;
	var selectKeys = function selectKeys(keys, object) {
	  var handler = arguments.length <= 2 || arguments[2] === undefined ? function () {} : arguments[2];

	  if (!keys) {
	    for (var key in object) {
	      if (typeof object[key] !== 'undefined') {
	        handler(key, object[key]);
	      }
	    }

	    return object;
	  }

	  var selected = {};
	  var keysArray = Object.keys(keys);
	  var firstKey = keysArray[0];

	  if (!firstKey) {
	    // empty object implies no keys are extracted
	    return selected;
	  }

	  if (keys[firstKey]) {
	    // when truthy, extract each key
	    for (var key in keys) {
	      if (typeof object[key] !== 'undefined') {
	        selected[key] = object[key];
	        handler(key, object[key]);
	      }
	    }
	  } else {
	    // when falsy, extract other keys
	    for (var key in object) {
	      if (typeof keys[key] === 'undefined') {
	        selected[key] = object[key];
	        handler(key, object[key]);
	      }
	    }
	  }

	  return selected;
	};

	exports['default'] = selectKeys;
	module.exports = exports['default'];

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = compose;
	/**
	 * Composes single-argument functions from right to left. The rightmost
	 * function can take multiple arguments as it provides the signature for
	 * the resulting composite function.
	 *
	 * @param {...Function} funcs The functions to compose.
	 * @returns {Function} A function obtained by composing the argument functions
	 * from right to left. For example, compose(f, g, h) is identical to doing
	 * (...args) => f(g(h(...args))).
	 */

	function compose() {
	  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
	    funcs[_key] = arguments[_key];
	  }

	  if (funcs.length === 0) {
	    return function (arg) {
	      return arg;
	    };
	  }

	  if (funcs.length === 1) {
	    return funcs[0];
	  }

	  return funcs.reduce(function (a, b) {
	    return function () {
	      return a(b.apply(undefined, arguments));
	    };
	  });
	}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.ActionTypes = undefined;
	exports['default'] = createStore;

	var _isPlainObject = __webpack_require__(20);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _symbolObservable = __webpack_require__(50);

	var _symbolObservable2 = _interopRequireDefault(_symbolObservable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * These are private action types reserved by Redux.
	 * For any unknown actions, you must return the current state.
	 * If the current state is undefined, you must return the initial state.
	 * Do not reference these action types directly in your code.
	 */
	var ActionTypes = exports.ActionTypes = {
	  INIT: '@@redux/INIT'

	  /**
	   * Creates a Redux store that holds the state tree.
	   * The only way to change the data in the store is to call `dispatch()` on it.
	   *
	   * There should only be a single store in your app. To specify how different
	   * parts of the state tree respond to actions, you may combine several reducers
	   * into a single reducer function by using `combineReducers`.
	   *
	   * @param {Function} reducer A function that returns the next state tree, given
	   * the current state tree and the action to handle.
	   *
	   * @param {any} [preloadedState] The initial state. You may optionally specify it
	   * to hydrate the state from the server in universal apps, or to restore a
	   * previously serialized user session.
	   * If you use `combineReducers` to produce the root reducer function, this must be
	   * an object with the same shape as `combineReducers` keys.
	   *
	   * @param {Function} [enhancer] The store enhancer. You may optionally specify it
	   * to enhance the store with third-party capabilities such as middleware,
	   * time travel, persistence, etc. The only store enhancer that ships with Redux
	   * is `applyMiddleware()`.
	   *
	   * @returns {Store} A Redux store that lets you read the state, dispatch actions
	   * and subscribe to changes.
	   */
	};function createStore(reducer, preloadedState, enhancer) {
	  var _ref2;

	  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
	    enhancer = preloadedState;
	    preloadedState = undefined;
	  }

	  if (typeof enhancer !== 'undefined') {
	    if (typeof enhancer !== 'function') {
	      throw new Error('Expected the enhancer to be a function.');
	    }

	    return enhancer(createStore)(reducer, preloadedState);
	  }

	  if (typeof reducer !== 'function') {
	    throw new Error('Expected the reducer to be a function.');
	  }

	  var currentReducer = reducer;
	  var currentState = preloadedState;
	  var currentListeners = [];
	  var nextListeners = currentListeners;
	  var isDispatching = false;

	  function ensureCanMutateNextListeners() {
	    if (nextListeners === currentListeners) {
	      nextListeners = currentListeners.slice();
	    }
	  }

	  /**
	   * Reads the state tree managed by the store.
	   *
	   * @returns {any} The current state tree of your application.
	   */
	  function getState() {
	    return currentState;
	  }

	  /**
	   * Adds a change listener. It will be called any time an action is dispatched,
	   * and some part of the state tree may potentially have changed. You may then
	   * call `getState()` to read the current state tree inside the callback.
	   *
	   * You may call `dispatch()` from a change listener, with the following
	   * caveats:
	   *
	   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
	   * If you subscribe or unsubscribe while the listeners are being invoked, this
	   * will not have any effect on the `dispatch()` that is currently in progress.
	   * However, the next `dispatch()` call, whether nested or not, will use a more
	   * recent snapshot of the subscription list.
	   *
	   * 2. The listener should not expect to see all state changes, as the state
	   * might have been updated multiple times during a nested `dispatch()` before
	   * the listener is called. It is, however, guaranteed that all subscribers
	   * registered before the `dispatch()` started will be called with the latest
	   * state by the time it exits.
	   *
	   * @param {Function} listener A callback to be invoked on every dispatch.
	   * @returns {Function} A function to remove this change listener.
	   */
	  function subscribe(listener) {
	    if (typeof listener !== 'function') {
	      throw new Error('Expected listener to be a function.');
	    }

	    var isSubscribed = true;

	    ensureCanMutateNextListeners();
	    nextListeners.push(listener);

	    return function unsubscribe() {
	      if (!isSubscribed) {
	        return;
	      }

	      isSubscribed = false;

	      ensureCanMutateNextListeners();
	      var index = nextListeners.indexOf(listener);
	      nextListeners.splice(index, 1);
	    };
	  }

	  /**
	   * Dispatches an action. It is the only way to trigger a state change.
	   *
	   * The `reducer` function, used to create the store, will be called with the
	   * current state tree and the given `action`. Its return value will
	   * be considered the **next** state of the tree, and the change listeners
	   * will be notified.
	   *
	   * The base implementation only supports plain object actions. If you want to
	   * dispatch a Promise, an Observable, a thunk, or something else, you need to
	   * wrap your store creating function into the corresponding middleware. For
	   * example, see the documentation for the `redux-thunk` package. Even the
	   * middleware will eventually dispatch plain object actions using this method.
	   *
	   * @param {Object} action A plain object representing “what changed”. It is
	   * a good idea to keep actions serializable so you can record and replay user
	   * sessions, or use the time travelling `redux-devtools`. An action must have
	   * a `type` property which may not be `undefined`. It is a good idea to use
	   * string constants for action types.
	   *
	   * @returns {Object} For convenience, the same action object you dispatched.
	   *
	   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
	   * return something else (for example, a Promise you can await).
	   */
	  function dispatch(action) {
	    if (!(0, _isPlainObject2['default'])(action)) {
	      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
	    }

	    if (typeof action.type === 'undefined') {
	      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
	    }

	    if (isDispatching) {
	      throw new Error('Reducers may not dispatch actions.');
	    }

	    try {
	      isDispatching = true;
	      currentState = currentReducer(currentState, action);
	    } finally {
	      isDispatching = false;
	    }

	    var listeners = currentListeners = nextListeners;
	    for (var i = 0; i < listeners.length; i++) {
	      var listener = listeners[i];
	      listener();
	    }

	    return action;
	  }

	  /**
	   * Replaces the reducer currently used by the store to calculate the state.
	   *
	   * You might need this if your app implements code splitting and you want to
	   * load some of the reducers dynamically. You might also need this if you
	   * implement a hot reloading mechanism for Redux.
	   *
	   * @param {Function} nextReducer The reducer for the store to use instead.
	   * @returns {void}
	   */
	  function replaceReducer(nextReducer) {
	    if (typeof nextReducer !== 'function') {
	      throw new Error('Expected the nextReducer to be a function.');
	    }

	    currentReducer = nextReducer;
	    dispatch({ type: ActionTypes.INIT });
	  }

	  /**
	   * Interoperability point for observable/reactive libraries.
	   * @returns {observable} A minimal observable of state changes.
	   * For more information, see the observable proposal:
	   * https://github.com/tc39/proposal-observable
	   */
	  function observable() {
	    var _ref;

	    var outerSubscribe = subscribe;
	    return _ref = {
	      /**
	       * The minimal observable subscription method.
	       * @param {Object} observer Any object that can be used as an observer.
	       * The observer object should have a `next` method.
	       * @returns {subscription} An object with an `unsubscribe` method that can
	       * be used to unsubscribe the observable from the store, and prevent further
	       * emission of values from the observable.
	       */
	      subscribe: function subscribe(observer) {
	        if (typeof observer !== 'object') {
	          throw new TypeError('Expected the observer to be an object.');
	        }

	        function observeState() {
	          if (observer.next) {
	            observer.next(getState());
	          }
	        }

	        observeState();
	        var unsubscribe = outerSubscribe(observeState);
	        return { unsubscribe: unsubscribe };
	      }
	    }, _ref[_symbolObservable2['default']] = function () {
	      return this;
	    }, _ref;
	  }

	  // When a store is created, an "INIT" action is dispatched so that every
	  // reducer returns their initial state. This effectively populates
	  // the initial state tree.
	  dispatch({ type: ActionTypes.INIT });

	  return _ref2 = {
	    dispatch: dispatch,
	    subscribe: subscribe,
	    getState: getState,
	    replaceReducer: replaceReducer
	  }, _ref2[_symbolObservable2['default']] = observable, _ref2;
	}

/***/ }),
/* 18 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = warning;
	/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
	function warning(message) {
	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error(message);
	  }
	  /* eslint-enable no-console */
	  try {
	    // This error was thrown as a convenience so that if you enable
	    // "break on all exceptions" in your console,
	    // it would pause the execution at this line.
	    throw new Error(message);
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */
	}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	var root = __webpack_require__(48);

	/** Built-in value references. */
	var Symbol = root.Symbol;

	module.exports = Symbol;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(42),
	    getPrototype = __webpack_require__(44),
	    isObjectLike = __webpack_require__(49);

	/** `Object#toString` result references. */
	var objectTag = '[object Object]';

	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);

	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
	    funcToString.call(Ctor) == objectCtorString;
	}

	module.exports = isPlainObject;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(1);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _reactReduxProvide = __webpack_require__(4);

	var _reactReduxProvide2 = _interopRequireDefault(_reactReduxProvide);

	var _eventsPropTypes = __webpack_require__(3);

	var _eventsPropTypes2 = _interopRequireDefault(_eventsPropTypes);

	var Form = (function (_Component) {
	  _inherits(Form, _Component);

	  function Form() {
	    var _this = this;

	    _classCallCheck(this, _Form);

	    _Component.apply(this, arguments);

	    this.onSubmit = function (event) {
	      var _props = _this.props;
	      var submitForm = _props.submitForm;
	      var onSubmit = _props.onSubmit;
	      var elements = _this.refs.form.elements;

	      var formData = {};

	      for (var _iterator = elements, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
	        var _ref;

	        if (_isArray) {
	          if (_i >= _iterator.length) break;
	          _ref = _iterator[_i++];
	        } else {
	          _i = _iterator.next();
	          if (_i.done) break;
	          _ref = _i.value;
	        }

	        var element = _ref;

	        if (element.name) {
	          if (!element.value && element.innerText) {
	            formData[element.name] = element.innerText;
	          } else {
	            formData[element.name] = element.value;
	          }
	        }
	      }

	      if (event.stopPropagation) {
	        event.stopPropagation();
	        event.preventDefault();

	        submitForm(formData);
	      }

	      if (onSubmit) {
	        onSubmit(event, formData);
	      }
	    };
	  }

	  Form.prototype.componentWillMount = function componentWillMount() {
	    var _props2 = this.props;
	    var onSubmit = _props2.onSubmit;
	    var formData = _props2.formData;

	    if (formData) {
	      onSubmit(null, formData);
	    }
	  };

	  Form.prototype.render = function render() {
	    var formId = this.props.formId;

	    var formProps = _extends({}, this.props, {
	      onSubmit: this.onSubmit
	    });

	    return _react2['default'].createElement(
	      'form',
	      _extends({}, formProps, { ref: 'form' }),
	      formProps.children,
	      _react2['default'].createElement('input', { type: 'hidden', name: '_formId', value: formId })
	    );
	  };

	  _createClass(Form, null, [{
	    key: 'propTypes',
	    value: _extends({
	      className: _propTypes2['default'].string,
	      acceptCharset: _propTypes2['default'].string,
	      action: _propTypes2['default'].string,
	      autocomplete: _propTypes2['default'].string,
	      enctype: _propTypes2['default'].string,
	      id: _propTypes2['default'].string,
	      method: _propTypes2['default'].string,
	      name: _propTypes2['default'].string,
	      novalidate: _propTypes2['default'].string,
	      target: _propTypes2['default'].string,
	      formId: _propTypes2['default'].string,
	      formData: _propTypes2['default'].object,
	      submitForm: _propTypes2['default'].func.isRequired,
	      children: _propTypes2['default'].any
	    }, _eventsPropTypes2['default']),
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {
	      method: 'post'
	    },
	    enumerable: true
	  }]);

	  var _Form = Form;
	  Form = _reactReduxProvide2['default'](Form) || Form;
	  return Form;
	})(_react.Component);

	exports['default'] = Form;
	module.exports = exports['default'];

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(1);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _reactReduxProvide = __webpack_require__(4);

	var _reactReduxProvide2 = _interopRequireDefault(_reactReduxProvide);

	var _eventsPropTypes = __webpack_require__(3);

	var _eventsPropTypes2 = _interopRequireDefault(_eventsPropTypes);

	var Link = (function (_Component) {
	  _inherits(Link, _Component);

	  function Link() {
	    _classCallCheck(this, _Link);

	    _Component.apply(this, arguments);
	  }

	  Link.prototype.render = function render() {
	    var _this = this,
	        _arguments = arguments;

	    var _onClick = this.props.onClick;

	    var aProps = _extends({}, this.props, {
	      onClick: function onClick(event) {
	        event.stopPropagation();
	        event.preventDefault();

	        _this.props.pushWindowPath(_this.props.href);

	        if (_onClick) {
	          _onClick.apply(_this, _arguments);
	        }
	      }
	    });

	    // Delete prop so React doesn't complain when it is passed to <a />
	    delete aProps.pushWindowPath;

	    return _react2['default'].createElement('a', aProps);
	  };

	  _createClass(Link, null, [{
	    key: 'propTypes',
	    value: _extends({
	      className: _propTypes2['default'].string,
	      href: _propTypes2['default'].string,
	      hrefLang: _propTypes2['default'].string,
	      media: _propTypes2['default'].string,
	      type: _propTypes2['default'].string,
	      id: _propTypes2['default'].string,
	      rel: _propTypes2['default'].string,
	      target: _propTypes2['default'].string,
	      children: _propTypes2['default'].any,
	      pushWindowPath: _propTypes2['default'].func.isRequired
	    }, _eventsPropTypes2['default']),
	    enumerable: true
	  }]);

	  var _Link = Link;
	  Link = _reactReduxProvide2['default'](Link) || Link;
	  return Link;
	})(_react.Component);

	exports['default'] = Link;
	module.exports = exports['default'];

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports['default'] = createMiddleware;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _reactReduxProvide = __webpack_require__(4);

	var _reduxReplicate = __webpack_require__(35);

	var _defaultRenderDocumentToString = __webpack_require__(7);

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

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2015 Jed Watson.
	  Based on code that is Copyright 2013-2015, Facebook, Inc.
	  All rights reserved.
	*/
	/* global define */

	(function () {
		'use strict';

		var canUseDOM = !!(
			typeof window !== 'undefined' &&
			window.document &&
			window.document.createElement
		);

		var ExecutionEnvironment = {

			canUseDOM: canUseDOM,

			canUseWorkers: typeof Worker !== 'undefined',

			canUseEventListeners:
				canUseDOM && !!(window.addEventListener || window.attachEvent),

			canUseViewport: canUseDOM && !!window.screen

		};

		if (true) {
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return ExecutionEnvironment;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (typeof module !== 'undefined' && module.exports) {
			module.exports = ExecutionEnvironment;
		} else {
			window.ExecutionEnvironment = ExecutionEnvironment;
		}

	}());


/***/ }),
/* 25 */
/***/ (function(module, exports) {

	/**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */
	'use strict';

	var REACT_STATICS = {
	    childContextTypes: true,
	    contextTypes: true,
	    defaultProps: true,
	    displayName: true,
	    getDefaultProps: true,
	    mixins: true,
	    propTypes: true,
	    type: true
	};

	var KNOWN_STATICS = {
	    name: true,
	    length: true,
	    prototype: true,
	    caller: true,
	    arguments: true,
	    arity: true
	};

	var isGetOwnPropertySymbolsAvailable = typeof Object.getOwnPropertySymbols === 'function';

	module.exports = function hoistNonReactStatics(targetComponent, sourceComponent, customStatics) {
	    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components
	        var keys = Object.getOwnPropertyNames(sourceComponent);

	        /* istanbul ignore else */
	        if (isGetOwnPropertySymbolsAvailable) {
	            keys = keys.concat(Object.getOwnPropertySymbols(sourceComponent));
	        }

	        for (var i = 0; i < keys.length; ++i) {
	            if (!REACT_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]] && (!customStatics || !customStatics[keys[i]])) {
	                try {
	                    targetComponent[keys[i]] = sourceComponent[keys[i]];
	                } catch (error) {

	                }
	            }
	        }
	    }

	    return targetComponent;
	};


/***/ }),
/* 26 */
/***/ (function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/

	'use strict';
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};


/***/ }),
/* 27 */
/***/ (function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;

	process.listeners = function (name) { return [] }

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var printWarning = function() {};

	if (true) {
	  var ReactPropTypesSecret = __webpack_require__(8);
	  var loggedTypeFailures = {};

	  printWarning = function(text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
	}

	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
	  if (true) {
	    for (var typeSpecName in typeSpecs) {
	      if (typeSpecs.hasOwnProperty(typeSpecName)) {
	        var error;
	        // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          if (typeof typeSpecs[typeSpecName] !== 'function') {
	            var err = Error(
	              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
	              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
	            );
	            err.name = 'Invariant Violation';
	            throw err;
	          }
	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	        } catch (ex) {
	          error = ex;
	        }
	        if (error && !(error instanceof Error)) {
	          printWarning(
	            (componentName || 'React class') + ': type specification of ' +
	            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
	            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
	            'You may have forgotten to pass an argument to the type checker ' +
	            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
	            'shape all require an argument).'
	          )

	        }
	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error.message] = true;

	          var stack = getStack ? getStack() : '';

	          printWarning(
	            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
	          );
	        }
	      }
	    }
	  }
	}

	module.exports = checkPropTypes;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var assign = __webpack_require__(26);

	var ReactPropTypesSecret = __webpack_require__(8);
	var checkPropTypes = __webpack_require__(28);

	var printWarning = function() {};

	if (true) {
	  printWarning = function(text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
	}

	function emptyFunctionThatReturnsNull() {
	  return null;
	}

	module.exports = function(isValidElement, throwOnDirectAccess) {
	  /* global Symbol */
	  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

	  /**
	   * Returns the iterator method function contained on the iterable object.
	   *
	   * Be sure to invoke the function with the iterable as context:
	   *
	   *     var iteratorFn = getIteratorFn(myIterable);
	   *     if (iteratorFn) {
	   *       var iterator = iteratorFn.call(myIterable);
	   *       ...
	   *     }
	   *
	   * @param {?object} maybeIterable
	   * @return {?function}
	   */
	  function getIteratorFn(maybeIterable) {
	    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }

	  /**
	   * Collection of methods that allow declaration and validation of props that are
	   * supplied to React components. Example usage:
	   *
	   *   var Props = require('ReactPropTypes');
	   *   var MyArticle = React.createClass({
	   *     propTypes: {
	   *       // An optional string prop named "description".
	   *       description: Props.string,
	   *
	   *       // A required enum prop named "category".
	   *       category: Props.oneOf(['News','Photos']).isRequired,
	   *
	   *       // A prop named "dialog" that requires an instance of Dialog.
	   *       dialog: Props.instanceOf(Dialog).isRequired
	   *     },
	   *     render: function() { ... }
	   *   });
	   *
	   * A more formal specification of how these methods are used:
	   *
	   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	   *   decl := ReactPropTypes.{type}(.isRequired)?
	   *
	   * Each and every declaration produces a function with the same signature. This
	   * allows the creation of custom validation functions. For example:
	   *
	   *  var MyLink = React.createClass({
	   *    propTypes: {
	   *      // An optional string or URI prop named "href".
	   *      href: function(props, propName, componentName) {
	   *        var propValue = props[propName];
	   *        if (propValue != null && typeof propValue !== 'string' &&
	   *            !(propValue instanceof URI)) {
	   *          return new Error(
	   *            'Expected a string or an URI for ' + propName + ' in ' +
	   *            componentName
	   *          );
	   *        }
	   *      }
	   *    },
	   *    render: function() {...}
	   *  });
	   *
	   * @internal
	   */

	  var ANONYMOUS = '<<anonymous>>';

	  // Important!
	  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
	  var ReactPropTypes = {
	    array: createPrimitiveTypeChecker('array'),
	    bool: createPrimitiveTypeChecker('boolean'),
	    func: createPrimitiveTypeChecker('function'),
	    number: createPrimitiveTypeChecker('number'),
	    object: createPrimitiveTypeChecker('object'),
	    string: createPrimitiveTypeChecker('string'),
	    symbol: createPrimitiveTypeChecker('symbol'),

	    any: createAnyTypeChecker(),
	    arrayOf: createArrayOfTypeChecker,
	    element: createElementTypeChecker(),
	    instanceOf: createInstanceTypeChecker,
	    node: createNodeChecker(),
	    objectOf: createObjectOfTypeChecker,
	    oneOf: createEnumTypeChecker,
	    oneOfType: createUnionTypeChecker,
	    shape: createShapeTypeChecker,
	    exact: createStrictShapeTypeChecker,
	  };

	  /**
	   * inlined Object.is polyfill to avoid requiring consumers ship their own
	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	   */
	  /*eslint-disable no-self-compare*/
	  function is(x, y) {
	    // SameValue algorithm
	    if (x === y) {
	      // Steps 1-5, 7-10
	      // Steps 6.b-6.e: +0 != -0
	      return x !== 0 || 1 / x === 1 / y;
	    } else {
	      // Step 6.a: NaN == NaN
	      return x !== x && y !== y;
	    }
	  }
	  /*eslint-enable no-self-compare*/

	  /**
	   * We use an Error-like object for backward compatibility as people may call
	   * PropTypes directly and inspect their output. However, we don't use real
	   * Errors anymore. We don't inspect their stack anyway, and creating them
	   * is prohibitively expensive if they are created too often, such as what
	   * happens in oneOfType() for any type before the one that matched.
	   */
	  function PropTypeError(message) {
	    this.message = message;
	    this.stack = '';
	  }
	  // Make `instanceof Error` still work for returned errors.
	  PropTypeError.prototype = Error.prototype;

	  function createChainableTypeChecker(validate) {
	    if (true) {
	      var manualPropTypeCallCache = {};
	      var manualPropTypeWarningCount = 0;
	    }
	    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	      componentName = componentName || ANONYMOUS;
	      propFullName = propFullName || propName;

	      if (secret !== ReactPropTypesSecret) {
	        if (throwOnDirectAccess) {
	          // New behavior only for users of `prop-types` package
	          var err = new Error(
	            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	            'Use `PropTypes.checkPropTypes()` to call them. ' +
	            'Read more at http://fb.me/use-check-prop-types'
	          );
	          err.name = 'Invariant Violation';
	          throw err;
	        } else if (("development") !== 'production' && typeof console !== 'undefined') {
	          // Old behavior for people using React.PropTypes
	          var cacheKey = componentName + ':' + propName;
	          if (
	            !manualPropTypeCallCache[cacheKey] &&
	            // Avoid spamming the console because they are often not actionable except for lib authors
	            manualPropTypeWarningCount < 3
	          ) {
	            printWarning(
	              'You are manually calling a React.PropTypes validation ' +
	              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
	              'and will throw in the standalone `prop-types` package. ' +
	              'You may be seeing this warning due to a third-party PropTypes ' +
	              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
	            );
	            manualPropTypeCallCache[cacheKey] = true;
	            manualPropTypeWarningCount++;
	          }
	        }
	      }
	      if (props[propName] == null) {
	        if (isRequired) {
	          if (props[propName] === null) {
	            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	          }
	          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
	        }
	        return null;
	      } else {
	        return validate(props, propName, componentName, location, propFullName);
	      }
	    }

	    var chainedCheckType = checkType.bind(null, false);
	    chainedCheckType.isRequired = checkType.bind(null, true);

	    return chainedCheckType;
	  }

	  function createPrimitiveTypeChecker(expectedType) {
	    function validate(props, propName, componentName, location, propFullName, secret) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== expectedType) {
	        // `propValue` being instance of, say, date/regexp, pass the 'object'
	        // check, but we can offer a more precise error message here rather than
	        // 'of type `object`'.
	        var preciseType = getPreciseType(propValue);

	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createAnyTypeChecker() {
	    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
	  }

	  function createArrayOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	      }
	      var propValue = props[propName];
	      if (!Array.isArray(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	      }
	      for (var i = 0; i < propValue.length; i++) {
	        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!isValidElement(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createInstanceTypeChecker(expectedClass) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!(props[propName] instanceof expectedClass)) {
	        var expectedClassName = expectedClass.name || ANONYMOUS;
	        var actualClassName = getClassName(props[propName]);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createEnumTypeChecker(expectedValues) {
	    if (!Array.isArray(expectedValues)) {
	       true ? printWarning('Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
	      return emptyFunctionThatReturnsNull;
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      for (var i = 0; i < expectedValues.length; i++) {
	        if (is(propValue, expectedValues[i])) {
	          return null;
	        }
	      }

	      var valuesString = JSON.stringify(expectedValues);
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createObjectOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	      }
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	      }
	      for (var key in propValue) {
	        if (propValue.hasOwnProperty(key)) {
	          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	          if (error instanceof Error) {
	            return error;
	          }
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createUnionTypeChecker(arrayOfTypeCheckers) {
	    if (!Array.isArray(arrayOfTypeCheckers)) {
	       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
	      return emptyFunctionThatReturnsNull;
	    }

	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (typeof checker !== 'function') {
	        printWarning(
	          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
	          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
	        );
	        return emptyFunctionThatReturnsNull;
	      }
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	        var checker = arrayOfTypeCheckers[i];
	        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
	          return null;
	        }
	      }

	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createNodeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!isNode(props[propName])) {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      for (var key in shapeTypes) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          continue;
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createStrictShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      // We need to check all keys in case some are required but missing from
	      // props.
	      var allKeys = assign({}, props[propName], shapeTypes);
	      for (var key in allKeys) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          return new PropTypeError(
	            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
	            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
	            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
	          );
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }

	    return createChainableTypeChecker(validate);
	  }

	  function isNode(propValue) {
	    switch (typeof propValue) {
	      case 'number':
	      case 'string':
	      case 'undefined':
	        return true;
	      case 'boolean':
	        return !propValue;
	      case 'object':
	        if (Array.isArray(propValue)) {
	          return propValue.every(isNode);
	        }
	        if (propValue === null || isValidElement(propValue)) {
	          return true;
	        }

	        var iteratorFn = getIteratorFn(propValue);
	        if (iteratorFn) {
	          var iterator = iteratorFn.call(propValue);
	          var step;
	          if (iteratorFn !== propValue.entries) {
	            while (!(step = iterator.next()).done) {
	              if (!isNode(step.value)) {
	                return false;
	              }
	            }
	          } else {
	            // Iterator will provide entry [k,v] tuples rather than values.
	            while (!(step = iterator.next()).done) {
	              var entry = step.value;
	              if (entry) {
	                if (!isNode(entry[1])) {
	                  return false;
	                }
	              }
	            }
	          }
	        } else {
	          return false;
	        }

	        return true;
	      default:
	        return false;
	    }
	  }

	  function isSymbol(propType, propValue) {
	    // Native Symbol.
	    if (propType === 'symbol') {
	      return true;
	    }

	    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	    if (propValue['@@toStringTag'] === 'Symbol') {
	      return true;
	    }

	    // Fallback for non-spec compliant Symbols which are polyfilled.
	    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	      return true;
	    }

	    return false;
	  }

	  // Equivalent of `typeof` but with special handling for array and regexp.
	  function getPropType(propValue) {
	    var propType = typeof propValue;
	    if (Array.isArray(propValue)) {
	      return 'array';
	    }
	    if (propValue instanceof RegExp) {
	      // Old webkits (at least until Android 4.0) return 'function' rather than
	      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	      // passes PropTypes.object.
	      return 'object';
	    }
	    if (isSymbol(propType, propValue)) {
	      return 'symbol';
	    }
	    return propType;
	  }

	  // This handles more types than `getPropType`. Only used for error messages.
	  // See `createPrimitiveTypeChecker`.
	  function getPreciseType(propValue) {
	    if (typeof propValue === 'undefined' || propValue === null) {
	      return '' + propValue;
	    }
	    var propType = getPropType(propValue);
	    if (propType === 'object') {
	      if (propValue instanceof Date) {
	        return 'date';
	      } else if (propValue instanceof RegExp) {
	        return 'regexp';
	      }
	    }
	    return propType;
	  }

	  // Returns a string that is postfixed to a warning about an invalid type.
	  // For example, "undefined" or "of type array"
	  function getPostfixForTypeWarning(value) {
	    var type = getPreciseType(value);
	    switch (type) {
	      case 'array':
	      case 'object':
	        return 'an ' + type;
	      case 'boolean':
	      case 'date':
	      case 'regexp':
	        return 'a ' + type;
	      default:
	        return type;
	    }
	  }

	  // Returns class name of the object, if any.
	  function getClassName(propValue) {
	    if (!propValue.constructor || !propValue.constructor.name) {
	      return ANONYMOUS;
	    }
	    return propValue.constructor.name;
	  }

	  ReactPropTypes.checkPropTypes = checkPropTypes;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.default = provide;
	exports.reloadFunctions = reloadFunctions;
	exports.reloadProviders = reloadProviders;

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(1);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _hoistNonReactStatics = __webpack_require__(25);

	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

	var _shallowEqual = __webpack_require__(5);

	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

	var _getRelevantKeys = __webpack_require__(11);

	var _getRelevantKeys2 = _interopRequireDefault(_getRelevantKeys);

	var _instantiateProvider = __webpack_require__(12);

	var _instantiateProvider2 = _interopRequireDefault(_instantiateProvider);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var isServerSide = typeof window === 'undefined';
	var allComponentInstances = [];

	var contextTypes = {
	  providers: _propTypes2.default.object,
	  providerInstances: _propTypes2.default.object,
	  activeQueries: _propTypes2.default.object,
	  queryResults: _propTypes2.default.object,
	  partialStates: _propTypes2.default.object,
	  forceDeepUpdate: _propTypes2.default.bool
	};

	function provide(ComponentClass) {
	  var _class, _temp;

	  if (ComponentClass.ComponentClass) {
	    return ComponentClass;
	  }

	  var componentName = ComponentClass.displayName || ComponentClass.name;

	  function getDisplayName() {
	    var providers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	    return 'Provide' + componentName + '(' + Object.keys(providers).join(',') + ')';
	  }

	  var Provide = (_temp = _class = function (_Component) {
	    _inherits(Provide, _Component);

	    _createClass(Provide, [{
	      key: 'getChildContext',
	      value: function getChildContext() {
	        return {
	          providers: this.getProviders(),
	          providerInstances: this.getProviderInstances(),
	          activeQueries: this.getActiveQueries(),
	          queryResults: this.getQueryResults(),
	          partialStates: this.getPartialStates(),
	          forceDeepUpdate: this.forceDeepUpdate
	        };
	      }
	    }, {
	      key: 'getProviders',
	      value: function getProviders() {
	        var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
	        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.context;

	        this.providers = this.providers || props.providers || context.providers || {};

	        return this.providers;
	      }
	    }, {
	      key: 'getProviderInstances',
	      value: function getProviderInstances() {
	        var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
	        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.context;

	        this.providerInstances = this.providerInstances || props.providerInstances || context.providerInstances || {};

	        return this.providerInstances;
	      }
	    }, {
	      key: 'getActiveQueries',
	      value: function getActiveQueries() {
	        var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
	        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.context;

	        this.activeQueries = this.activeQueries || props.activeQueries || context.activeQueries || {};

	        return this.activeQueries;
	      }
	    }, {
	      key: 'getQueryResults',
	      value: function getQueryResults() {
	        var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
	        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.context;

	        this.queryResults = this.queryResults || props.queryResults || context.queryResults || {};

	        return this.queryResults;
	      }
	    }, {
	      key: 'getPartialStates',
	      value: function getPartialStates() {
	        var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
	        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.context;

	        this.partialStates = this.partialStates || props.partialStates || context.partialStates || {};

	        return this.partialStates;
	      }
	    }]);

	    function Provide(props, context) {
	      _classCallCheck(this, Provide);

	      var _this = _possibleConstructorReturn(this, (Provide.__proto__ || Object.getPrototypeOf(Provide)).call(this, props));

	      _this.render = isServerSide ? function () {
	        var wrappedInstance = _this.getWrappedInstance();

	        _this.deinitialize();
	        return wrappedInstance;
	      } : function () {
	        return _this.getWrappedInstance();
	      };


	      if (!isServerSide && !context.providers) {
	        window.rootInstance = _this;
	        _this.initializeClientStates(props, context);
	      }

	      _this.renders = 0;
	      _this.componentName = componentName;
	      _this.unmounted = true;
	      _this.initialize(props, context);
	      return _this;
	    }

	    _createClass(Provide, [{
	      key: 'componentDidMount',
	      value: function componentDidMount() {
	        this.unmounted = isServerSide;
	      }
	    }, {
	      key: 'componentWillUnmount',
	      value: function componentWillUnmount() {
	        this.unmounted = true;
	        this.deinitialize();
	      }
	    }, {
	      key: 'componentWillReceiveProps',
	      value: function componentWillReceiveProps(nextProps) {
	        if (!(0, _shallowEqual2.default)(nextProps, this.props)) {
	          this.deinitialize();
	          this.initialize(nextProps, this.context);
	          this.receivedNewProps = true;
	        }
	      }
	    }, {
	      key: 'shouldComponentUpdate',
	      value: function shouldComponentUpdate() {
	        if (this.forceDeepUpdate || this.context.forceDeepUpdate) {
	          return true;
	        } else if (this.receivedNewProps) {
	          this.receivedNewProps = false;
	          return true;
	        } else {
	          return false;
	        }
	      }
	    }, {
	      key: 'update',
	      value: function update() {
	        if (!this.unmounted) {
	          this.forceUpdate();
	        }
	      }

	      // TODO: improve this

	    }, {
	      key: 'initializeClientStates',
	      value: function initializeClientStates() {
	        var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
	        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.context;
	        var _window = window,
	            clientStates = _window.clientStates;

	        var fauxInstance = this.getFauxInstance(props, context);
	        var providers = this.getProviders(props, context);
	        var findProvider = function findProvider(props) {
	          for (var key in providers) {
	            var provider = providers[key];

	            if ((0, _getRelevantKeys2.default)(provider.reducers, props).length) {
	              if (typeof provider.defaultKey === 'undefined') {
	                provider.defaultKey = key;
	              }
	              if (typeof provider.key === 'undefined') {
	                provider.key = provider.defaultKey;
	              }

	              return provider;
	            }
	          }
	        };

	        if (clientStates) {
	          for (var providerKey in clientStates) {
	            var state = clientStates[providerKey];
	            var provider = findProvider(state);

	            if (provider) {
	              (0, _instantiateProvider2.default)((0, _instantiateProvider.getTempFauxInstance)(fauxInstance, state), provider);
	            }
	          }
	        }
	      }
	    }, {
	      key: 'initialize',
	      value: function initialize() {
	        var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
	        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.context;

	        var providers = this.getProviders(props, context);

	        this.relevantProviders = {};

	        for (var key in providers) {
	          var provider = providers[key];
	          var shouldSubscribe = false;

	          if (typeof provider.defaultKey === 'undefined') {
	            provider.defaultKey = key;
	          }
	          if (typeof provider.key === 'undefined') {
	            provider.key = provider.defaultKey;
	          }

	          this.assignActionCreators(props, context, provider);

	          if (this.assignReducers(props, context, provider)) {
	            shouldSubscribe = true;
	          }

	          if (this.assignMergers(props, context, provider)) {
	            shouldSubscribe = true;
	          }

	          if (shouldSubscribe) {
	            this.subscribeToProvider(props, context, provider);
	          }
	        }

	        this.handleQueries(props, context);
	        this.setDisplayName(props, context);

	        if (this.doUpdate) {
	          this.update();
	        }
	      }
	    }, {
	      key: 'deinitialize',
	      value: function deinitialize() {
	        this.unsubscribe();

	        delete this.relevantProviders;
	        delete this.componentProps;
	        delete this.fauxInstance;
	        delete this.subbedAll;
	        delete this.query;
	        delete this.queryOptions;
	        delete this.queries;
	        delete this.queriesOptions;
	        delete this.subscriptions;
	        delete this.mergers;
	        delete this.wrappedInstance;
	      }
	    }, {
	      key: 'unsubscribe',
	      value: function unsubscribe() {
	        var subscriptions = this.getSubscriptions();

	        while (subscriptions.length) {
	          var unsubscribe = subscriptions.shift();

	          unsubscribe();
	        }
	      }
	    }, {
	      key: 'setDisplayName',
	      value: function setDisplayName(props, context) {
	        Provide.displayName = getDisplayName(this.relevantProviders);
	      }
	    }, {
	      key: 'getComponentProps',
	      value: function getComponentProps() {
	        var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
	        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.context;

	        if (!this.componentProps) {
	          this.componentProps = _extends({}, ComponentClass.defaultProps, props, { __wrapper: this
	          });

	          if (!this.componentProps.ref && ComponentClass.prototype.render) {
	            this.componentProps.ref = 'wrappedInstance';
	          }
	        }

	        return this.componentProps;
	      }
	    }, {
	      key: 'getFauxInstance',
	      value: function getFauxInstance(props, context) {
	        var _this2 = this;

	        if (!this.fauxInstance) {
	          var componentProps = this.getComponentProps(props, context);

	          this.getProviders(props, context);
	          this.getProviderInstances(props, context);
	          this.getActiveQueries(props, context);
	          this.getQueryResults(props, context);
	          this.getPartialStates(props, context);
	          this.getSubscriptions(props, context);
	          this.fauxInstance = _extends({}, Object.getOwnPropertyNames(this).reduce(function (prev, propName) {
	            return _extends({}, prev, _defineProperty({}, propName, _this2[propName]));
	          }, {}), {
	            props: componentProps
	          });
	        }

	        this.fauxInstance.context = context;

	        return this.fauxInstance;
	      }
	    }, {
	      key: 'getSubscriptions',
	      value: function getSubscriptions() {
	        if (!this.subscriptions) {
	          this.subscriptions = [];
	        }

	        return this.subscriptions;
	      }
	    }, {
	      key: 'getMergers',
	      value: function getMergers() {
	        if (!this.mergers) {
	          this.mergers = {};
	        }

	        return this.mergers;
	      }
	    }, {
	      key: 'getWrappedInstance',
	      value: function getWrappedInstance() {
	        if (this.context.forceDeepUpdate) {
	          this.doUpdate = true;
	        }

	        if (!this.wrappedInstance || this.doUpdate) {
	          this.renders++;
	          this.doUpdate = false;
	          this.wrappedInstance = _react2.default.createElement(ComponentClass, this.getComponentProps());
	        }

	        return this.wrappedInstance;
	      }
	    }, {
	      key: 'getProviderInstance',
	      value: function getProviderInstance(props, context, provider, getReducerKeys) {
	        return (0, _instantiateProvider2.default)({
	          fauxInstance: this.getFauxInstance(props, context),
	          provider: provider,
	          getReducerKeys: getReducerKeys
	        });
	      }
	    }, {
	      key: 'assignActionCreators',
	      value: function assignActionCreators(props, context, provider) {
	        var actionKeys = (0, _getRelevantKeys2.default)(provider.actions, ComponentClass.propTypes);

	        if (!actionKeys.length) {
	          return false;
	        }

	        var componentProps = this.getComponentProps(props, context);

	        var _getProviderInstance = this.getProviderInstance(props, context, provider, true),
	            actionCreators = _getProviderInstance.actionCreators;

	        // assign relevant action creators to wrapped component's props


	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;

	        try {
	          for (var _iterator = actionKeys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var actionKey = _step.value;

	            if (!props[actionKey]) {
	              componentProps[actionKey] = actionCreators[actionKey];
	            }
	          }
	        } catch (err) {
	          _didIteratorError = true;
	          _iteratorError = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion && _iterator.return) {
	              _iterator.return();
	            }
	          } finally {
	            if (_didIteratorError) {
	              throw _iteratorError;
	            }
	          }
	        }

	        return true;
	      }
	    }, {
	      key: 'assignReducers',
	      value: function assignReducers(props, context, provider) {
	        var _this3 = this;

	        var reducerKeys = (0, _getRelevantKeys2.default)(provider.reducers, ComponentClass.propTypes);

	        if (!reducerKeys.length) {
	          return false;
	        }

	        var getReducerKeys = {};
	        var shouldSubscribe = false;

	        var _iteratorNormalCompletion2 = true;
	        var _didIteratorError2 = false;
	        var _iteratorError2 = undefined;

	        try {
	          for (var _iterator2 = reducerKeys[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	            var reducerKey = _step2.value;

	            if (typeof props[reducerKey] === 'undefined') {
	              getReducerKeys[reducerKey] = true;
	              shouldSubscribe = true;
	            }
	          }
	        } catch (err) {
	          _didIteratorError2 = true;
	          _iteratorError2 = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion2 && _iterator2.return) {
	              _iterator2.return();
	            }
	          } finally {
	            if (_didIteratorError2) {
	              throw _iteratorError2;
	            }
	          }
	        }

	        if (!shouldSubscribe) {
	          return false;
	        }

	        var subscriptions = this.getSubscriptions();
	        var componentProps = this.getComponentProps(props, context);

	        var _getProviderInstance2 = this.getProviderInstance(props, context, provider, getReducerKeys),
	            store = _getProviderInstance2.store;

	        var state = store.getState();

	        // copy the relevant states to the wrapped component's props
	        // and whenever some state changes, update (mutate) the wrapped props
	        // and raise the `doUpdate` flag to indicate that the component
	        // should be updated after the action has taken place

	        var _loop = function _loop(reducerKey) {
	          componentProps[reducerKey] = state[reducerKey];

	          subscriptions.push(store.watch(reducerKey, function (nextState) {
	            componentProps[reducerKey] = nextState;
	            _this3.doUpdate = true;
	          }));
	        };

	        for (var reducerKey in getReducerKeys) {
	          _loop(reducerKey);
	        }

	        return true;
	      }
	    }, {
	      key: 'assignMergers',
	      value: function assignMergers(props, context, provider) {
	        var _this4 = this;

	        var merge = provider.merge;

	        var mergeKeys = (0, _getRelevantKeys2.default)(merge, ComponentClass.propTypes);

	        if (!mergeKeys.length) {
	          return false;
	        }

	        var getReducerKeys = {};
	        var shouldSubscribe = false;

	        var _iteratorNormalCompletion3 = true;
	        var _didIteratorError3 = false;
	        var _iteratorError3 = undefined;

	        try {
	          for (var _iterator3 = mergeKeys[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	            var mergeKey = _step3.value;

	            if (typeof props[mergeKey] === 'undefined') {
	              var merger = merge[mergeKey];

	              var _iteratorNormalCompletion5 = true;
	              var _didIteratorError5 = false;
	              var _iteratorError5 = undefined;

	              try {
	                for (var _iterator5 = merger.keys[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
	                  var reducerKey = _step5.value;

	                  getReducerKeys[reducerKey] = true;
	                  shouldSubscribe = true;
	                }
	              } catch (err) {
	                _didIteratorError5 = true;
	                _iteratorError5 = err;
	              } finally {
	                try {
	                  if (!_iteratorNormalCompletion5 && _iterator5.return) {
	                    _iterator5.return();
	                  }
	                } finally {
	                  if (_didIteratorError5) {
	                    throw _iteratorError5;
	                  }
	                }
	              }
	            }
	          }
	        } catch (err) {
	          _didIteratorError3 = true;
	          _iteratorError3 = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion3 && _iterator3.return) {
	              _iterator3.return();
	            }
	          } finally {
	            if (_didIteratorError3) {
	              throw _iteratorError3;
	            }
	          }
	        }

	        if (!shouldSubscribe) {
	          return false;
	        }

	        var mergers = this.getMergers();
	        var subscriptions = this.getSubscriptions();
	        var componentProps = this.getComponentProps(props, context);

	        var _getProviderInstance3 = this.getProviderInstance(props, context, provider, getReducerKeys),
	            store = _getProviderInstance3.store;

	        var state = store.getState();

	        // some of the wrapped component's props might depend on some state,
	        // possibly merged with props and/or context,
	        // so we watch for changes to certain `keys`
	        // and only update props when those `keys` have changed
	        var _iteratorNormalCompletion4 = true;
	        var _didIteratorError4 = false;
	        var _iteratorError4 = undefined;

	        try {
	          var _loop2 = function _loop2() {
	            var mergeKey = _step4.value;

	            if (!props[mergeKey]) {
	              (function () {
	                var merger = merge[mergeKey];

	                componentProps[mergeKey] = merger.get(state, componentProps, context);

	                var _iteratorNormalCompletion6 = true;
	                var _didIteratorError6 = false;
	                var _iteratorError6 = undefined;

	                try {
	                  for (var _iterator6 = merger.keys[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
	                    var _reducerKey = _step6.value;

	                    subscriptions.push(store.watch(_reducerKey, function (nextState) {
	                      // we store the merger temporarily so that we may
	                      // `get` the value only after the action has completed
	                      mergers[mergeKey] = merger;
	                      _this4.doMerge = true;
	                    }));
	                  }
	                } catch (err) {
	                  _didIteratorError6 = true;
	                  _iteratorError6 = err;
	                } finally {
	                  try {
	                    if (!_iteratorNormalCompletion6 && _iterator6.return) {
	                      _iterator6.return();
	                    }
	                  } finally {
	                    if (_didIteratorError6) {
	                      throw _iteratorError6;
	                    }
	                  }
	                }
	              })();
	            }
	          };

	          for (var _iterator4 = mergeKeys[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
	            _loop2();
	          }
	        } catch (err) {
	          _didIteratorError4 = true;
	          _iteratorError4 = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion4 && _iterator4.return) {
	              _iterator4.return();
	            }
	          } finally {
	            if (_didIteratorError4) {
	              throw _iteratorError4;
	            }
	          }
	        }

	        return true;
	      }
	    }, {
	      key: 'subscribeToProvider',
	      value: function subscribeToProvider(props, context, provider) {
	        var _this5 = this;

	        var subscriptions = this.getSubscriptions();

	        var _getProviderInstance4 = this.getProviderInstance(props, context, provider),
	            store = _getProviderInstance4.store;

	        // if any states are relevant, we subscribe to the provider's store;
	        // and since we're reflecting any changes to relevant states
	        // by mutating `componentProps` and raising the `doUpdate` flag,
	        // it's more efficient to simply call `forceUpdate` here


	        subscriptions.push(store.subscribe(function () {
	          if (_this5.doMerge) {
	            var mergers = _this5.getMergers();
	            var componentProps = _this5.getComponentProps(props, context);
	            var state = store.getState();

	            // this is where we `get` any new values which depend on
	            // some state, possibly merged with props and/or context
	            for (var mergeKey in mergers) {
	              var get = mergers[mergeKey].get;

	              var value = get(state, componentProps, context);

	              if (componentProps[mergeKey] !== value) {
	                componentProps[mergeKey] = value;
	                _this5.doUpdate = true;
	              }

	              delete mergers[mergeKey];
	            }

	            _this5.doMerge = false;
	          }

	          if (_this5.doUpdate) {
	            _this5.handleQueries(props, context);
	            _this5.setDisplayName(props, context);
	            _this5.update();
	          }
	        }));
	      }
	    }, {
	      key: 'handleQueries',
	      value: function handleQueries(props, context) {
	        var _this6 = this;

	        var fauxInstance = this.getFauxInstance(props, context);

	        return (0, _instantiateProvider.handleQueries)(fauxInstance, function (doUpdate) {
	          if (doUpdate) {
	            // TODO: should mergers be checked (again) ??
	            _this6.doUpdate = true;
	            _this6.update();
	          }
	        });
	      }
	    }]);

	    return Provide;
	  }(_react.Component), _class.ComponentClass = ComponentClass, _class.displayName = getDisplayName(), _class.propTypes = contextTypes, _class.contextTypes = contextTypes, _class.childContextTypes = contextTypes, _class.defaultProps = ComponentClass.defaultProps, _temp);

	  if (true) {
	    var componentInstances = ComponentClass.__componentInstances;

	    if (typeof componentInstances === 'undefined') {
	      componentInstances = new Set();
	      ComponentClass.__componentInstances = componentInstances;
	      allComponentInstances.push(componentInstances);
	    }

	    ComponentClass.Provide = Provide;
	    ComponentClass.setComponentClass = function (NextClass) {
	      componentInstances = ComponentClass.__componentInstances;
	      NextClass.__componentInstances = componentInstances;
	      ComponentClass = NextClass;
	      Provide.ComponentClass = ComponentClass;
	      componentName = ComponentClass.displayName || ComponentClass.name;
	    };

	    Provide.prototype.componentDidMount = function () {
	      this.unmounted = isServerSide;
	      componentInstances.add(this);
	    };

	    Provide.prototype.componentWillUnmount = function () {
	      this.unmounted = true;
	      this.deinitialize();
	      componentInstances.delete(this);
	    };

	    Provide.prototype.reinitialize = function (props, context, NextClass) {
	      var _this7 = this;

	      if (NextClass) {
	        this.setComponentClass(NextClass);
	      }

	      setTimeout(function () {
	        _this7.doUpdate = true;
	        _this7.deinitialize();
	        _this7.initialize(props, context);
	      });
	    };

	    Provide.prototype.setComponentClass = function (NextClass) {
	      Provide.setComponentClass(NextClass);
	      this.componentName = componentName;
	    };

	    var _iteratorNormalCompletion7 = true;
	    var _didIteratorError7 = false;
	    var _iteratorError7 = undefined;

	    try {
	      for (var _iterator7 = componentInstances[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
	        var componentInstance = _step7.value;
	        var props = componentInstance.props,
	            context = componentInstance.context;


	        componentInstance.reinitialize(props, context, ComponentClass);
	      }
	    } catch (err) {
	      _didIteratorError7 = true;
	      _iteratorError7 = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion7 && _iterator7.return) {
	          _iterator7.return();
	        }
	      } finally {
	        if (_didIteratorError7) {
	          throw _iteratorError7;
	        }
	      }
	    }
	  }

	  return (0, _hoistNonReactStatics2.default)(Provide, ComponentClass);
	}

	function reloadFunctions(oldFunctions, newFunctions) {
	  for (var key in newFunctions) {
	    var newFunction = newFunctions[key];
	    var oldFunction = oldFunctions[key];

	    if (typeof newFunction === 'function' && newFunction.propTypes && !newFunction.Provide && oldFunction && oldFunction.Provide) {
	      newFunction.Provide = provide(newFunction);
	      oldFunction.setComponentClass(newFunction);
	      newFunction.setComponentClass = oldFunction.setComponentClass;

	      var _iteratorNormalCompletion8 = true;
	      var _didIteratorError8 = false;
	      var _iteratorError8 = undefined;

	      try {
	        for (var _iterator8 = oldFunction.__componentInstances[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
	          var componentInstance = _step8.value;
	          var props = componentInstance.props,
	              context = componentInstance.context;


	          componentInstance.forceDeepUpdate = true;
	          componentInstance.reinitialize(props, context, newFunction);
	          componentInstance.forceDeepUpdate = false;
	        }
	      } catch (err) {
	        _didIteratorError8 = true;
	        _iteratorError8 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion8 && _iterator8.return) {
	            _iterator8.return();
	          }
	        } finally {
	          if (_didIteratorError8) {
	            throw _iteratorError8;
	          }
	        }
	      }
	    }
	  }

	  if (false) {
	    console.warn('You should only use `reloadInstances` in development!');
	  }
	}

	function reloadProviders(providers, providerInstances) {
	  var _window2 = window,
	      rootInstance = _window2.rootInstance,
	      clientStates = _window2.clientStates;
	  var oldProviders = rootInstance.providers,
	      oldProviderInstances = rootInstance.providerInstances;


	  for (var key in providers) {
	    var provider = providers[key];
	    var oldProvider = oldProviders[key];

	    if (!providers.replication && oldProvider && oldProvider.replication) {
	      provider.replication = oldProvider.replication;
	    }
	  }

	  for (var providerKey in oldProviderInstances) {
	    var oldProviderInstance = oldProviderInstances[providerKey];

	    if (clientStates) {
	      clientStates[providerKey] = oldProviderInstance.store.getState();
	    }

	    delete oldProviderInstances[providerKey];
	  }

	  rootInstance.providers = providers;
	  rootInstance.providerInstances = providerInstances || oldProviderInstances;
	  rootInstance.reinitialize(rootInstance.props, rootInstance.context);

	  var _iteratorNormalCompletion9 = true;
	  var _didIteratorError9 = false;
	  var _iteratorError9 = undefined;

	  try {
	    for (var _iterator9 = allComponentInstances[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
	      var componentInstances = _step9.value;
	      var _iteratorNormalCompletion10 = true;
	      var _didIteratorError10 = false;
	      var _iteratorError10 = undefined;

	      try {
	        for (var _iterator10 = componentInstances[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
	          var componentInstance = _step10.value;
	          var props = componentInstance.props,
	              context = componentInstance.context;


	          if (componentInstance !== rootInstance) {
	            context.providers = rootInstance.providers;
	            context.providerInstances = rootInstance.providerInstances;
	            componentInstance.providers = rootInstance.providers;
	            componentInstance.providerInstances = rootInstance.providerInstances;
	            componentInstance.reinitialize(props, context);
	          }
	        }
	      } catch (err) {
	        _didIteratorError10 = true;
	        _iteratorError10 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion10 && _iterator10.return) {
	            _iterator10.return();
	          }
	        } finally {
	          if (_didIteratorError10) {
	            throw _iteratorError10;
	          }
	        }
	      }
	    }
	  } catch (err) {
	    _didIteratorError9 = true;
	    _iteratorError9 = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion9 && _iterator9.return) {
	        _iterator9.return();
	      }
	    } finally {
	      if (_didIteratorError9) {
	        throw _iteratorError9;
	      }
	    }
	  }

	  if (false) {
	    console.warn('You should only use `reloadProviders` in development!');
	  }
	}

/***/ }),
/* 31 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = extractReducerKeys;
	function extractReducerKeys(replication, state) {
	  var clientState = replication.clientState;
	  var reducerKeys = replication.reducerKeys;

	  var getReducerKeys = reducerKeys;
	  var setReducerKeys = null;

	  if (reducerKeys === true) {
	    reducerKeys = Object.keys(state);
	    getReducerKeys = reducerKeys;
	  }

	  // here we want the client to get only the undefined initial states
	  if (clientState) {
	    getReducerKeys = [];
	    setReducerKeys = [];

	    if (Array.isArray(reducerKeys)) {
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;

	      try {
	        for (var _iterator = reducerKeys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var reducerKey = _step.value;

	          if (typeof clientState[reducerKey] === 'undefined') {
	            getReducerKeys.push(reducerKey);
	          } else {
	            setReducerKeys.push(reducerKey);
	          }
	        }
	      } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion && _iterator.return) {
	            _iterator.return();
	          }
	        } finally {
	          if (_didIteratorError) {
	            throw _iteratorError;
	          }
	        }
	      }
	    } else {
	      // if reducerKeys is an object, truthy values indicate keys that
	      // can be overridden by the client
	      for (var _reducerKey in reducerKeys) {
	        if (reducerKeys[_reducerKey] && typeof clientState[_reducerKey] === 'undefined') {
	          getReducerKeys.push(_reducerKey);
	        } else {
	          setReducerKeys.push(_reducerKey);
	        }
	      }

	      reducerKeys = Object.keys(reducerKeys);
	    }
	  }

	  replication.reducerKeys = reducerKeys;

	  return { getReducerKeys: getReducerKeys, setReducerKeys: setReducerKeys };
	}

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _extractReducerKeys2 = __webpack_require__(31);

	var _extractReducerKeys3 = _interopRequireDefault(_extractReducerKeys2);

	var _storeKeysEqual = __webpack_require__(14);

	var _storeKeysEqual2 = _interopRequireDefault(_storeKeysEqual);

	var _actionTypes = __webpack_require__(6);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var getInitialState = function getInitialState(store, replication) {
	  var replicators = [].concat(replication.replicator);
	  var initReplicators = replicators.filter(function (replicator) {
	    if (replicator.onReady) {
	      store.onReady(replicator.onReady);
	    }
	    // just the replicators with `getInitialState`
	    return typeof replicator.getInitialState === 'function';
	  });

	  // need this for multiple replication enhancers
	  store.initializingReplication = (store.initializingReplication || 0) + 1;
	  store.initializedReplication = false;

	  var waitCount = 1;
	  var setInitialState = false;
	  var actualInitialState = replication.reducerKeys ? {} : null;
	  var clear = function clear() {
	    if (--waitCount === 0) {
	      if (setInitialState) {
	        store.setState(actualInitialState, true);
	      }

	      if (--store.initializingReplication === 0) {
	        // all replication enhancers initialized, so we can clear all callbacks
	        while (store.readyCallbacks.length) {
	          store.readyCallbacks.shift()({ store: store });
	        }
	        store.initializedReplication = true;
	        // these are only used during initialization
	        delete replication.create;
	        delete replication.clientState;
	        delete replication.creatorStore;
	        store.dispatch({ type: _actionTypes.FULLY_INITIALIZED });
	      }
	    }
	  };

	  if (!store.key) {
	    clear();
	    return;
	  }

	  var key = store.key;

	  var currentState = store.getState();

	  var shouldReplicate = function shouldReplicate(reducerKey) {
	    return replication.create || replication.clientState && (!reducerKey || typeof replication.clientState[reducerKey] !== 'undefined');
	  };

	  var initState = function initState(_ref) {
	    var getInitialState = _ref.getInitialState,
	        onStateChange = _ref.onStateChange;
	    return function (reducerKey) {
	      var clientState = reducerKey ? replication.clientState && replication.clientState[reducerKey] : replication.clientState;
	      var initProps = {
	        reducerKey: reducerKey,
	        nextState: reducerKey ? currentState[reducerKey] : currentState,
	        queryable: _typeof(replication.queryable) === 'object' ? replication.queryable[reducerKey] : replication.queryable,
	        create: replication.create,
	        clientState: clientState
	      };

	      store.dispatch(_extends({ type: _actionTypes.GET_INITIAL_STATE }, initProps));
	      waitCount++;

	      getInitialState({
	        store: store,
	        reducerKey: reducerKey,
	        clientState: clientState,
	        setState: function setState(state) {
	          if (typeof state === 'undefined') {
	            if (onStateChange && shouldReplicate(reducerKey)) {
	              var action = _extends({ type: _actionTypes.REPLICATE_INITIAL_STATE }, initProps);

	              store.dispatch(action);
	              waitCount++;

	              onStateChange(_extends({}, initProps, {
	                store: store,
	                action: action,
	                setState: function setState(state) {
	                  store.setState(state, true);
	                  store.dispatch(_extends({
	                    type: _actionTypes.REPLICATED_INITIAL_STATE }, initProps, { state: state
	                  }));
	                  clear();
	                },
	                setStatus: function setStatus(status) {
	                  store.dispatch(_extends({
	                    type: _actionTypes.REPLICATED_INITIAL_STATE }, initProps, { status: status
	                  }));
	                  clear();
	                },
	                setError: function setError(error) {
	                  store.dispatch(_extends({
	                    type: _actionTypes.STATE_CHANGE_ERROR }, initProps, { error: error
	                  }));
	                  clear();
	                }
	              }));
	            }
	          } else if ((0, _storeKeysEqual2.default)(key, store.key)) {
	            if (reducerKey) {
	              actualInitialState[reducerKey] = state;
	            } else {
	              actualInitialState = state;
	            }
	            setInitialState = true;
	          }

	          store.dispatch(_extends({ type: _actionTypes.GOT_INITIAL_STATE }, initProps, { state: state }));
	          clear();
	        },
	        setError: function setError(error) {
	          store.dispatch(_extends({ type: _actionTypes.INITIAL_STATE_ERROR }, initProps, { error: error }));
	          clear();
	        }
	      });
	    };
	  };

	  if (replication.reducerKeys) {
	    var _extractReducerKeys = (0, _extractReducerKeys3.default)(replication, currentState),
	        getReducerKeys = _extractReducerKeys.getReducerKeys,
	        setReducerKeys = _extractReducerKeys.setReducerKeys;

	    if (setReducerKeys) {
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;

	      try {
	        for (var _iterator = replicators[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var replicator = _step.value;

	          if (replicator.onStateChange) {
	            var _iteratorNormalCompletion2 = true;
	            var _didIteratorError2 = false;
	            var _iteratorError2 = undefined;

	            try {
	              for (var _iterator2 = setReducerKeys[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                var reducerKey = _step2.value;

	                if (shouldReplicate(reducerKey)) {
	                  (function () {
	                    var setProps = {
	                      reducerKey: reducerKey,
	                      nextState: reducerKey ? currentState[reducerKey] : currentState,
	                      queryable: _typeof(replication.queryable) === 'object' ? replication.queryable[reducerKey] : replication.queryable,
	                      create: replication.create,
	                      clientState: reducerKey ? replication.clientState && replication.clientState[reducerKey] : replication.clientState
	                    };

	                    var action = _extends({ type: _actionTypes.REPLICATE_INITIAL_STATE }, setProps);

	                    store.dispatch(action);
	                    waitCount++;

	                    replicator.onStateChange(_extends({}, setProps, {
	                      store: store,
	                      action: action,
	                      setState: function setState(state) {
	                        store.setState(state, true);
	                        store.dispatch(_extends({
	                          type: _actionTypes.REPLICATED_INITIAL_STATE }, setProps, { state: state
	                        }));
	                        clear();
	                      },
	                      setStatus: function setStatus(status) {
	                        store.dispatch(_extends({
	                          type: _actionTypes.REPLICATED_INITIAL_STATE }, setProps, { status: status
	                        }));
	                        clear();
	                      },
	                      setError: function setError(error) {
	                        store.dispatch(_extends({
	                          type: _actionTypes.STATE_CHANGE_ERROR }, setProps, { error: error
	                        }));
	                        clear();
	                      }
	                    }));
	                  })();
	                }
	              }
	            } catch (err) {
	              _didIteratorError2 = true;
	              _iteratorError2 = err;
	            } finally {
	              try {
	                if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                  _iterator2.return();
	                }
	              } finally {
	                if (_didIteratorError2) {
	                  throw _iteratorError2;
	                }
	              }
	            }
	          }
	        }
	      } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion && _iterator.return) {
	            _iterator.return();
	          }
	        } finally {
	          if (_didIteratorError) {
	            throw _iteratorError;
	          }
	        }
	      }
	    }

	    var _iteratorNormalCompletion3 = true;
	    var _didIteratorError3 = false;
	    var _iteratorError3 = undefined;

	    try {
	      for (var _iterator3 = initReplicators[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	        var _replicator = _step3.value;

	        var initReducerState = initState(_replicator);

	        var _iteratorNormalCompletion4 = true;
	        var _didIteratorError4 = false;
	        var _iteratorError4 = undefined;

	        try {
	          for (var _iterator4 = getReducerKeys[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
	            var _reducerKey = _step4.value;

	            initReducerState(_reducerKey);
	          }
	        } catch (err) {
	          _didIteratorError4 = true;
	          _iteratorError4 = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion4 && _iterator4.return) {
	              _iterator4.return();
	            }
	          } finally {
	            if (_didIteratorError4) {
	              throw _iteratorError4;
	            }
	          }
	        }
	      }
	    } catch (err) {
	      _didIteratorError3 = true;
	      _iteratorError3 = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion3 && _iterator3.return) {
	          _iterator3.return();
	        }
	      } finally {
	        if (_didIteratorError3) {
	          throw _iteratorError3;
	        }
	      }
	    }
	  } else {
	    var _iteratorNormalCompletion5 = true;
	    var _didIteratorError5 = false;
	    var _iteratorError5 = undefined;

	    try {
	      for (var _iterator5 = initReplicators[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
	        var _replicator2 = _step5.value;

	        initState(_replicator2)();
	      }
	    } catch (err) {
	      _didIteratorError5 = true;
	      _iteratorError5 = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion5 && _iterator5.return) {
	          _iterator5.return();
	        }
	      } finally {
	        if (_didIteratorError5) {
	          throw _iteratorError5;
	        }
	      }
	    }
	  }

	  clear();
	};

	exports.default = getInitialState;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.FULLY_INITIALIZED = exports.SET_STATE = exports.STATE_CHANGE_ERROR = exports.REPLICATED_STATE = exports.REPLICATE_STATE = exports.REPLICATED_INITIAL_STATE = exports.REPLICATE_INITIAL_STATE = exports.INITIAL_STATE_ERROR = exports.GOT_INITIAL_STATE = exports.GET_INITIAL_STATE = exports.storeKeysEqual = exports.replicate = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _getInitialState = __webpack_require__(32);

	var _getInitialState2 = _interopRequireDefault(_getInitialState);

	var _performReplication = __webpack_require__(34);

	var _performReplication2 = _interopRequireDefault(_performReplication);

	var _storeKeysEqual = __webpack_require__(14);

	var _storeKeysEqual2 = _interopRequireDefault(_storeKeysEqual);

	var _actionTypes = __webpack_require__(6);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Creates a Redux store enhancer designed to replicate actions and states.
	 *
	 * @param {Object} options
	 * @return {Function}
	 * @api public
	 */
	var replicate = function replicate(replication) {
	  return function (next) {
	    return function (reducer, initialState, enhancer) {
	      var store = null;

	      replication = _extends({}, replication);

	      var replicatedReducer = function replicatedReducer(state, action) {
	        var nextState = state;

	        if (action.type === _actionTypes.SET_STATE && !action.mergedState) {
	          if (replication.reducerKeys) {
	            nextState = _extends({}, state, action.nextState);
	          } else {
	            nextState = action.nextState;
	          }

	          // if replication applied multiple times, ensure merge occurs only once
	          action.mergedState = true;
	        }

	        nextState = reducer(nextState, action);

	        if (!action._skipReplication) {
	          (0, _performReplication2.default)(store, replication, state, nextState, action);
	        }

	        return nextState;
	      };

	      store = next(replicatedReducer, initialState, enhancer);

	      if (!store.replication) {
	        store.replication = [];
	      }
	      store.replication.push(replication);

	      if (!store.onReady) {
	        store.readyCallbacks = [];
	        store.onReady = function (readyCallback) {
	          return store.readyCallbacks.push(readyCallback);
	        };
	      }

	      if (typeof replication.key !== 'undefined') {
	        store.key = replication.key;
	      }

	      if (!store.setKey) {
	        store.setKey = function (key, readyCallback) {
	          store.key = key;

	          if (readyCallback) {
	            store.onReady(readyCallback);
	          }

	          store.replication.forEach(function (replication) {
	            (0, _getInitialState2.default)(store, replication);
	          });
	        };
	      }

	      if (!store.setState) {
	        store.setState = function (nextState, _skipReplication, __create) {
	          store.dispatch({
	            type: _actionTypes.SET_STATE,
	            nextState: nextState,
	            _skipReplication: _skipReplication,
	            __create: __create // TODO: clean this up
	          });
	        };
	      }

	      (0, _getInitialState2.default)(store, replication);
	      return store;
	    };
	  };
	};

	exports.default = replicate;
	exports.replicate = replicate;
	exports.storeKeysEqual = _storeKeysEqual2.default;
	exports.GET_INITIAL_STATE = _actionTypes.GET_INITIAL_STATE;
	exports.GOT_INITIAL_STATE = _actionTypes.GOT_INITIAL_STATE;
	exports.INITIAL_STATE_ERROR = _actionTypes.INITIAL_STATE_ERROR;
	exports.REPLICATE_INITIAL_STATE = _actionTypes.REPLICATE_INITIAL_STATE;
	exports.REPLICATED_INITIAL_STATE = _actionTypes.REPLICATED_INITIAL_STATE;
	exports.REPLICATE_STATE = _actionTypes.REPLICATE_STATE;
	exports.REPLICATED_STATE = _actionTypes.REPLICATED_STATE;
	exports.STATE_CHANGE_ERROR = _actionTypes.STATE_CHANGE_ERROR;
	exports.SET_STATE = _actionTypes.SET_STATE;
	exports.FULLY_INITIALIZED = _actionTypes.FULLY_INITIALIZED;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _actionTypes = __webpack_require__(6);

	var actionTypes = _interopRequireWildcard(_actionTypes);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	var REPLICATE_STATE = actionTypes.REPLICATE_STATE,
	    REPLICATED_STATE = actionTypes.REPLICATED_STATE,
	    STATE_CHANGE_ERROR = actionTypes.STATE_CHANGE_ERROR;


	var actionTypeValueMap = {};
	for (var key in actionTypes) {
	  actionTypeValueMap[actionTypes[key]] = true;
	}

	var performReplication = function performReplication(store, replication, state, nextState, action) {
	  if (replication.creatorStore && actionTypeValueMap[action.type]) {
	    // TODO: we need a better way to create + replicate
	    replication.creatorStore.dispatch(action);
	  }

	  if (!store || !store.key || !store.initializedReplication) {
	    return;
	  }

	  var replicators = [].concat(replication.replicator);

	  var _iteratorNormalCompletion = true;
	  var _didIteratorError = false;
	  var _iteratorError = undefined;

	  try {
	    for (var _iterator = replicators[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	      var replicator = _step.value;

	      if (replicator.onStateChange) {
	        if (replication.reducerKeys) {
	          var _iteratorNormalCompletion2 = true;
	          var _didIteratorError2 = false;
	          var _iteratorError2 = undefined;

	          try {
	            for (var _iterator2 = replication.reducerKeys[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	              var reducerKey = _step2.value;

	              if (state[reducerKey] !== nextState[reducerKey]) {
	                (function () {
	                  var setProps = {
	                    reducerKey: reducerKey,
	                    state: state[reducerKey],
	                    nextState: nextState[reducerKey],
	                    queryable: _typeof(replication.queryable) === 'object' ? replication.queryable[reducerKey] : replication.queryable,
	                    create: action.__create // TODO: clean this up
	                    ? function (state) {
	                      return setTimeout(function () {
	                        store.setState(state, true);
	                        store.dispatch(_extends({
	                          type: REPLICATED_STATE }, setProps, { state: state
	                        }));
	                      });
	                    } : false
	                  };

	                  setTimeout(function () {
	                    // not liking this at all, but it should be ok given that
	                    // 99.9999% of data sources are async anyway
	                    store.dispatch(_extends({ type: REPLICATE_STATE }, setProps));
	                  });

	                  replicator.onStateChange(_extends({}, setProps, {
	                    store: store,
	                    action: action,
	                    setState: function setState(state) {
	                      return setTimeout(function () {
	                        store.setState(state, true);
	                        store.dispatch(_extends({
	                          type: REPLICATED_STATE }, setProps, { state: state
	                        }));

	                        if (action.__callback) {
	                          // TODO: clean this up
	                          action.__callback();
	                        }
	                      });
	                    },
	                    setStatus: function setStatus(status) {
	                      return setTimeout(function () {
	                        store.dispatch(_extends({
	                          type: REPLICATED_STATE }, setProps, { status: status
	                        }));

	                        if (action.__callback) {
	                          // TODO: clean this up
	                          action.__callback();
	                        }
	                      });
	                    },
	                    setError: function setError(error) {
	                      return setTimeout(function () {
	                        store.dispatch(_extends({
	                          type: STATE_CHANGE_ERROR }, setProps, { error: error
	                        }));

	                        if (action.__callback) {
	                          // TODO: clean this up
	                          action.__callback();
	                        }
	                      });
	                    }
	                  }));
	                })();
	              }
	            }
	          } catch (err) {
	            _didIteratorError2 = true;
	            _iteratorError2 = err;
	          } finally {
	            try {
	              if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                _iterator2.return();
	              }
	            } finally {
	              if (_didIteratorError2) {
	                throw _iteratorError2;
	              }
	            }
	          }
	        } else if (state !== nextState) {
	          (function () {
	            var setProps = {
	              state: state,
	              nextState: nextState,
	              queryable: replication.queryable,
	              create: action.__create // TODO: clean this up
	              ? function (state) {
	                return setTimeout(function () {
	                  store.setState(state, true);
	                  store.dispatch(_extends({
	                    type: REPLICATED_STATE }, setProps, { state: state
	                  }));
	                });
	              } : false
	            };

	            setTimeout(function () {
	              // not liking this at all, but it should be ok given that
	              // 99.9999% of data sources are async anyway
	              store.dispatch(_extends({ type: REPLICATE_STATE }, setProps));
	            });

	            replicator.onStateChange(_extends({}, setProps, {
	              store: store,
	              action: action,
	              setState: function setState(state) {
	                return setTimeout(function () {
	                  store.setState(state, true);
	                  store.dispatch(_extends({
	                    type: REPLICATED_STATE }, setProps, { state: state
	                  }));

	                  if (action.__callback) {
	                    // TODO: clean this up
	                    action.__callback();
	                  }
	                });
	              },
	              setStatus: function setStatus(status) {
	                return setTimeout(function () {
	                  store.dispatch(_extends({
	                    type: REPLICATED_STATE }, setProps, { status: status
	                  }));

	                  if (action.__callback) {
	                    // TODO: clean this up
	                    action.__callback();
	                  }
	                });
	              },
	              setError: function setError(error) {
	                return setTimeout(function () {
	                  store.dispatch(_extends({
	                    type: STATE_CHANGE_ERROR }, setProps, { error: error
	                  }));

	                  if (action.__callback) {
	                    // TODO: clean this up
	                    action.__callback();
	                  }
	                });
	              }
	            }));
	          })();
	        }
	      }

	      if (replicator.postReduction) {
	        replicator.postReduction({ store: store, state: state, nextState: nextState, action: action });
	      }
	    }
	  } catch (err) {
	    _didIteratorError = true;
	    _iteratorError = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion && _iterator.return) {
	        _iterator.return();
	      }
	    } finally {
	      if (_didIteratorError) {
	        throw _iteratorError;
	      }
	    }
	  }
	};

	exports.default = performReplication;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports['default'] = replicate;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _selectKeys = __webpack_require__(15);

	var _selectKeys2 = _interopRequireDefault(_selectKeys);

	var _mergeStoresStates = __webpack_require__(36);

	var _mergeStoresStates2 = _interopRequireDefault(_mergeStoresStates);

	exports.selectKeys = _selectKeys2['default'];
	exports.mergeStoresStates = _mergeStoresStates2['default'];

	/**
	 * Store enhancer designed to replicate stores' states before/after reductions.
	 *
	 * @param {Mixed} storeKey
	 * @param {Object|Array} replicatorCreator(s)
	 * @return {Function}
	 * @api public
	 */

	function replicate(storeKey, replicatorCreators) {
	  if (!Array.isArray(replicatorCreators)) {
	    replicatorCreators = [replicatorCreators];
	  }

	  return function (next) {
	    return function (reducer, initialState, enhancer) {
	      var nextState = null;
	      var replaceState = false;
	      var mergeNextState = function mergeNextState(state) {
	        if (!replaceState && state && typeof state === 'object' && nextState && typeof nextState === 'object' && !Array.isArray(state) && !Array.isArray(nextState)) {
	          state = _extends({}, state, nextState);
	        } else {
	          state = nextState;
	        }

	        replaceState = false;
	        nextState = null;
	        return state;
	      };

	      var replicators = replicatorCreators.map(function (replicator) {
	        return replicator();
	      });
	      var replicatedReducer = function replicatedReducer(state, action) {
	        for (var _iterator = replicators, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
	          var _ref;

	          if (_isArray) {
	            if (_i >= _iterator.length) break;
	            _ref = _iterator[_i++];
	          } else {
	            _i = _iterator.next();
	            if (_i.done) break;
	            _ref = _i.value;
	          }

	          var replicator = _ref;

	          if (replicator.ready && replicator.preReduction) {
	            replicator.preReduction(storeKey, _selectKeys2['default'](replicator.keys, state), action);
	          }
	        }

	        if (nextState) {
	          state = mergeNextState(state);
	        }
	        state = reducer(state, action);

	        for (var _iterator2 = replicators, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
	          var _ref2;

	          if (_isArray2) {
	            if (_i2 >= _iterator2.length) break;
	            _ref2 = _iterator2[_i2++];
	          } else {
	            _i2 = _iterator2.next();
	            if (_i2.done) break;
	            _ref2 = _i2.value;
	          }

	          var replicator = _ref2;

	          if (replicator.ready && replicator.postReduction) {
	            replicator.postReduction(storeKey, _selectKeys2['default'](replicator.keys, state), action);
	          }
	        }

	        return state;
	      };

	      var store = next(replicatedReducer, initialState, enhancer);
	      var initReplicators = function initReplicators() {
	        var _loop = function () {
	          if (_isArray3) {
	            if (_i3 >= _iterator3.length) return 'break';
	            _ref3 = _iterator3[_i3++];
	          } else {
	            _i3 = _iterator3.next();
	            if (_i3.done) return 'break';
	            _ref3 = _i3.value;
	          }

	          var replicator = _ref3;

	          if (replicator.init) {
	            replicator.ready = false;
	            replicator.init(storeKey, store, function (ready) {
	              return replicator.ready = ready;
	            });
	          } else {
	            replicator.ready = true;
	          }
	        };

	        for (var _iterator3 = replicators, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
	          var _ref3;

	          var _ret = _loop();

	          if (_ret === 'break') break;
	        }
	      };

	      store.setKey = function (key) {
	        if (key !== storeKey) {
	          storeKey = key;
	          replaceState = true;
	          initReplicators();
	        }
	      };

	      store.setState = function (state) {
	        nextState = state;
	        store.replaceReducer(replicatedReducer);
	      };

	      initReplicators();

	      return store;
	    };
	  };
	}

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _selectKeys = __webpack_require__(15);

	var _selectKeys2 = _interopRequireDefault(_selectKeys);

	/**
	 * Small utility to help with easily merging the states of multiple stores into
	 * a single object.
	 *
	 * @param {Object} keys
	 * @return {Function} pass the `stores` to this returned function
	 * @api public
	 */
	var mergeStoresStates = function mergeStoresStates(keys) {
	  return function (stores) {
	    var merged = {};

	    for (var _name in stores) {
	      Object.assign(merged, _selectKeys2['default'](keys, stores[_name].getState()));
	    }

	    return merged;
	  };
	};

	exports['default'] = mergeStoresStates;
	module.exports = exports['default'];

/***/ }),
/* 37 */
/***/ (function(module, exports) {

	'use strict';

	function thunkMiddleware(_ref) {
	  var dispatch = _ref.dispatch;
	  var getState = _ref.getState;

	  return function (next) {
	    return function (action) {
	      return typeof action === 'function' ? action(dispatch, getState) : next(action);
	    };
	  };
	}

	module.exports = thunkMiddleware;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports['default'] = applyMiddleware;

	var _compose = __webpack_require__(16);

	var _compose2 = _interopRequireDefault(_compose);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * Creates a store enhancer that applies middleware to the dispatch method
	 * of the Redux store. This is handy for a variety of tasks, such as expressing
	 * asynchronous actions in a concise manner, or logging every action payload.
	 *
	 * See `redux-thunk` package as an example of the Redux middleware.
	 *
	 * Because middleware is potentially asynchronous, this should be the first
	 * store enhancer in the composition chain.
	 *
	 * Note that each middleware will be given the `dispatch` and `getState` functions
	 * as named arguments.
	 *
	 * @param {...Function} middlewares The middleware chain to be applied.
	 * @returns {Function} A store enhancer applying the middleware.
	 */
	function applyMiddleware() {
	  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
	    middlewares[_key] = arguments[_key];
	  }

	  return function (createStore) {
	    return function (reducer, preloadedState, enhancer) {
	      var store = createStore(reducer, preloadedState, enhancer);
	      var _dispatch = store.dispatch;
	      var chain = [];

	      var middlewareAPI = {
	        getState: store.getState,
	        dispatch: function dispatch(action) {
	          return _dispatch(action);
	        }
	      };
	      chain = middlewares.map(function (middleware) {
	        return middleware(middlewareAPI);
	      });
	      _dispatch = _compose2['default'].apply(undefined, chain)(store.dispatch);

	      return _extends({}, store, {
	        dispatch: _dispatch
	      });
	    };
	  };
	}

/***/ }),
/* 39 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = bindActionCreators;
	function bindActionCreator(actionCreator, dispatch) {
	  return function () {
	    return dispatch(actionCreator.apply(undefined, arguments));
	  };
	}

	/**
	 * Turns an object whose values are action creators, into an object with the
	 * same keys, but with every function wrapped into a `dispatch` call so they
	 * may be invoked directly. This is just a convenience method, as you can call
	 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
	 *
	 * For convenience, you can also pass a single function as the first argument,
	 * and get a function in return.
	 *
	 * @param {Function|Object} actionCreators An object whose values are action
	 * creator functions. One handy way to obtain it is to use ES6 `import * as`
	 * syntax. You may also pass a single function.
	 *
	 * @param {Function} dispatch The `dispatch` function available on your Redux
	 * store.
	 *
	 * @returns {Function|Object} The object mimicking the original object, but with
	 * every action creator wrapped into the `dispatch` call. If you passed a
	 * function as `actionCreators`, the return value will also be a single
	 * function.
	 */
	function bindActionCreators(actionCreators, dispatch) {
	  if (typeof actionCreators === 'function') {
	    return bindActionCreator(actionCreators, dispatch);
	  }

	  if (typeof actionCreators !== 'object' || actionCreators === null) {
	    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
	  }

	  var keys = Object.keys(actionCreators);
	  var boundActionCreators = {};
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    var actionCreator = actionCreators[key];
	    if (typeof actionCreator === 'function') {
	      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
	    }
	  }
	  return boundActionCreators;
	}

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = combineReducers;

	var _createStore = __webpack_require__(17);

	var _isPlainObject = __webpack_require__(20);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _warning = __webpack_require__(18);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function getUndefinedStateErrorMessage(key, action) {
	  var actionType = action && action.type;
	  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';

	  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state. ' + 'If you want this reducer to hold no value, you can return null instead of undefined.';
	}

	function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
	  var reducerKeys = Object.keys(reducers);
	  var argumentName = action && action.type === _createStore.ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

	  if (reducerKeys.length === 0) {
	    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
	  }

	  if (!(0, _isPlainObject2['default'])(inputState)) {
	    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
	  }

	  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
	    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
	  });

	  unexpectedKeys.forEach(function (key) {
	    unexpectedKeyCache[key] = true;
	  });

	  if (unexpectedKeys.length > 0) {
	    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
	  }
	}

	function assertReducerShape(reducers) {
	  Object.keys(reducers).forEach(function (key) {
	    var reducer = reducers[key];
	    var initialState = reducer(undefined, { type: _createStore.ActionTypes.INIT });

	    if (typeof initialState === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined. If you don\'t want to set a value for this reducer, ' + 'you can use null instead of undefined.');
	    }

	    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
	    if (typeof reducer(undefined, { type: type }) === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + _createStore.ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined, but can be null.');
	    }
	  });
	}

	/**
	 * Turns an object whose values are different reducer functions, into a single
	 * reducer function. It will call every child reducer, and gather their results
	 * into a single state object, whose keys correspond to the keys of the passed
	 * reducer functions.
	 *
	 * @param {Object} reducers An object whose values correspond to different
	 * reducer functions that need to be combined into one. One handy way to obtain
	 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
	 * undefined for any action. Instead, they should return their initial state
	 * if the state passed to them was undefined, and the current state for any
	 * unrecognized action.
	 *
	 * @returns {Function} A reducer function that invokes every reducer inside the
	 * passed object, and builds a state object with the same shape.
	 */
	function combineReducers(reducers) {
	  var reducerKeys = Object.keys(reducers);
	  var finalReducers = {};
	  for (var i = 0; i < reducerKeys.length; i++) {
	    var key = reducerKeys[i];

	    if (true) {
	      if (typeof reducers[key] === 'undefined') {
	        (0, _warning2['default'])('No reducer provided for key "' + key + '"');
	      }
	    }

	    if (typeof reducers[key] === 'function') {
	      finalReducers[key] = reducers[key];
	    }
	  }
	  var finalReducerKeys = Object.keys(finalReducers);

	  var unexpectedKeyCache = void 0;
	  if (true) {
	    unexpectedKeyCache = {};
	  }

	  var shapeAssertionError = void 0;
	  try {
	    assertReducerShape(finalReducers);
	  } catch (e) {
	    shapeAssertionError = e;
	  }

	  return function combination() {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    var action = arguments[1];

	    if (shapeAssertionError) {
	      throw shapeAssertionError;
	    }

	    if (true) {
	      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
	      if (warningMessage) {
	        (0, _warning2['default'])(warningMessage);
	      }
	    }

	    var hasChanged = false;
	    var nextState = {};
	    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
	      var _key = finalReducerKeys[_i];
	      var reducer = finalReducers[_key];
	      var previousStateForKey = state[_key];
	      var nextStateForKey = reducer(previousStateForKey, action);
	      if (typeof nextStateForKey === 'undefined') {
	        var errorMessage = getUndefinedStateErrorMessage(_key, action);
	        throw new Error(errorMessage);
	      }
	      nextState[_key] = nextStateForKey;
	      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
	    }
	    return hasChanged ? nextState : state;
	  };
	}

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.compose = exports.applyMiddleware = exports.bindActionCreators = exports.combineReducers = exports.createStore = undefined;

	var _createStore = __webpack_require__(17);

	var _createStore2 = _interopRequireDefault(_createStore);

	var _combineReducers = __webpack_require__(40);

	var _combineReducers2 = _interopRequireDefault(_combineReducers);

	var _bindActionCreators = __webpack_require__(39);

	var _bindActionCreators2 = _interopRequireDefault(_bindActionCreators);

	var _applyMiddleware = __webpack_require__(38);

	var _applyMiddleware2 = _interopRequireDefault(_applyMiddleware);

	var _compose = __webpack_require__(16);

	var _compose2 = _interopRequireDefault(_compose);

	var _warning = __webpack_require__(18);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/*
	* This is a dummy function to check if the function name has been altered by minification.
	* If the function has been minified and NODE_ENV !== 'production', warn the user.
	*/
	function isCrushed() {}

	if (("development") !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
	  (0, _warning2['default'])('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
	}

	exports.createStore = _createStore2['default'];
	exports.combineReducers = _combineReducers2['default'];
	exports.bindActionCreators = _bindActionCreators2['default'];
	exports.applyMiddleware = _applyMiddleware2['default'];
	exports.compose = _compose2['default'];

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(19),
	    getRawTag = __webpack_require__(45),
	    objectToString = __webpack_require__(46);

	/** `Object#toString` result references. */
	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';

	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  return (symToStringTag && symToStringTag in Object(value))
	    ? getRawTag(value)
	    : objectToString(value);
	}

	module.exports = baseGetTag;


/***/ }),
/* 43 */
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

	module.exports = freeGlobal;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(47);

	/** Built-in value references. */
	var getPrototype = overArg(Object.getPrototypeOf, Object);

	module.exports = getPrototype;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(19);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag(value) {
	  var isOwn = hasOwnProperty.call(value, symToStringTag),
	      tag = value[symToStringTag];

	  try {
	    value[symToStringTag] = undefined;
	    var unmasked = true;
	  } catch (e) {}

	  var result = nativeObjectToString.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag] = tag;
	    } else {
	      delete value[symToStringTag];
	    }
	  }
	  return result;
	}

	module.exports = getRawTag;


/***/ }),
/* 46 */
/***/ (function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString.call(value);
	}

	module.exports = objectToString;


/***/ }),
/* 47 */
/***/ (function(module, exports) {

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}

	module.exports = overArg;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	var freeGlobal = __webpack_require__(43);

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	module.exports = root;


/***/ }),
/* 49 */
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}

	module.exports = isObjectLike;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, module) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ponyfill = __webpack_require__(51);

	var _ponyfill2 = _interopRequireDefault(_ponyfill);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var root; /* global window */


	if (typeof self !== 'undefined') {
	  root = self;
	} else if (typeof window !== 'undefined') {
	  root = window;
	} else if (typeof global !== 'undefined') {
	  root = global;
	} else if (true) {
	  root = module;
	} else {
	  root = Function('return this')();
	}

	var result = (0, _ponyfill2['default'])(root);
	exports['default'] = result;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(52)(module)))

/***/ }),
/* 51 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports['default'] = symbolObservablePonyfill;
	function symbolObservablePonyfill(root) {
		var result;
		var _Symbol = root.Symbol;

		if (typeof _Symbol === 'function') {
			if (_Symbol.observable) {
				result = _Symbol.observable;
			} else {
				result = _Symbol('observable');
				_Symbol.observable = result;
			}
		} else {
			result = '@@observable';
		}

		return result;
	};

/***/ }),
/* 52 */
/***/ (function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ })
/******/ ])
});
;