(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["providePage"] = factory(require("react"));
	else
		root["providePage"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__) {
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

	var _reduxThunk = __webpack_require__(36);

	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

	var _exenv = __webpack_require__(20);

	var _componentsForm = __webpack_require__(17);

	var _componentsForm2 = _interopRequireDefault(_componentsForm);

	exports.Form = _componentsForm2['default'];

	var _componentsLink = __webpack_require__(18);

	var _componentsLink2 = _interopRequireDefault(_componentsLink);

	exports.Link = _componentsLink2['default'];

	var _createMiddleware2 = __webpack_require__(19);

	var _createMiddleware3 = _interopRequireDefault(_createMiddleware2);

	exports.createMiddleware = _createMiddleware3['default'];

	var _defaultRenderDocumentToString2 = __webpack_require__(8);

	var _defaultRenderDocumentToString3 = _interopRequireDefault(_defaultRenderDocumentToString2);

	exports.defaultRenderDocumentToString = _defaultRenderDocumentToString3['default'];

	var _eventsPropTypes2 = __webpack_require__(4);

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
	  module.exports = __webpack_require__(26)(isValidElement, throwOnDirectAccess);
	} else {
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  module.exports = require('./factoryWithThrowingShims')();
	}


/***/ }),
/* 2 */
/***/ (function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = createKeyConcat;

	function createKeyConcat(key, unshift) {
	  return function (providers, value) {
	    for (var providerName in providers) {
	      var provider = providers[providerName];

	      if (!provider[key]) {
	        provider[key] = [];
	      } else if (!Array.isArray(provider[key])) {
	        provider[key] = [provider[key]];
	      }

	      if (unshift) {
	        provider[key] = [].concat(value).concat(provider[key]);
	      } else {
	        provider[key] = provider[key].concat(value);
	      }
	    }
	  };
	}

	module.exports = exports["default"];

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(3);

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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports['default'] = createProviderStore;

	var _redux = __webpack_require__(7);

	/**
	 * Creates and returns a store specifically for some provider.
	 *
	 * @param {Object} provider
	 * @param {Object} initialState Optional
	 * @return {Object}
	 * @api public
	 */

	function createProviderStore(provider, initialState) {
	  var reducers = provider.reducers;
	  var middleware = provider.middleware;
	  var enhancer = provider.enhancer;

	  var enhancers = [];
	  var create = undefined;

	  if (middleware) {
	    enhancers.push(_redux.applyMiddleware.apply(null, [].concat(middleware)));
	  }

	  if (enhancer) {
	    enhancers = enhancers.concat(enhancer);
	  }

	  if (initialState) {
	    initialState = _extends({}, initialState);

	    for (var key in initialState) {
	      if (reducers[key] === undefined) {
	        delete initialState[key];
	      }
	    }
	  }

	  if (enhancers.length) {
	    create = _redux.compose.apply(undefined, enhancers)(_redux.createStore);
	  } else {
	    create = _redux.createStore;
	  }

	  return create(_redux.combineReducers(reducers), initialState);
	}

	module.exports = exports['default'];

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _provide = __webpack_require__(27);

	var _provide2 = _interopRequireDefault(_provide);

	var _createProviderStore = __webpack_require__(5);

	var _createProviderStore2 = _interopRequireDefault(_createProviderStore);

	var _createCombinedStore = __webpack_require__(10);

	var _createCombinedStore2 = _interopRequireDefault(_createCombinedStore);

	var _pushMiddleware = __webpack_require__(29);

	var _pushMiddleware2 = _interopRequireDefault(_pushMiddleware);

	var _unshiftMiddleware = __webpack_require__(31);

	var _unshiftMiddleware2 = _interopRequireDefault(_unshiftMiddleware);

	var _pushEnhancer = __webpack_require__(28);

	var _pushEnhancer2 = _interopRequireDefault(_pushEnhancer);

	var _unshiftEnhancer = __webpack_require__(30);

	var _unshiftEnhancer2 = _interopRequireDefault(_unshiftEnhancer);

	exports['default'] = _provide2['default'];
	exports.provide = _provide2['default'];
	exports.reloadProviders = _provide.reloadProviders;
	exports.createProviderStore = _createProviderStore2['default'];
	exports.createCombinedStore = _createCombinedStore2['default'];
	exports.pushMiddleware = _pushMiddleware2['default'];
	exports.unshiftMiddleware = _unshiftMiddleware2['default'];
	exports.pushEnhancer = _pushEnhancer2['default'];
	exports.unshiftEnhancer = _unshiftEnhancer2['default'];

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.compose = exports.applyMiddleware = exports.bindActionCreators = exports.combineReducers = exports.createStore = undefined;

	var _createStore = __webpack_require__(13);

	var _createStore2 = _interopRequireDefault(_createStore);

	var _combineReducers = __webpack_require__(39);

	var _combineReducers2 = _interopRequireDefault(_combineReducers);

	var _bindActionCreators = __webpack_require__(38);

	var _bindActionCreators2 = _interopRequireDefault(_bindActionCreators);

	var _applyMiddleware = __webpack_require__(37);

	var _applyMiddleware2 = _interopRequireDefault(_applyMiddleware);

	var _compose = __webpack_require__(12);

	var _compose2 = _interopRequireDefault(_compose);

	var _warning = __webpack_require__(14);

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
/* 8 */
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
/* 9 */
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = createdCombinedStore;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _createProviderStore = __webpack_require__(5);

	var _createProviderStore2 = _interopRequireDefault(_createProviderStore);

	/**
	 * Creates and returns a shared store based on the combined providers.
	 *
	 * @param {Object} providers
	 * @param {Object} initialState Optional
	 * @return {Object}
	 * @api public
	 */

	function createdCombinedStore(providers, initialState) {
	  var combinedProvider = {
	    reducers: {},
	    middleware: [],
	    enhancer: []
	  };

	  for (var providerName in providers) {
	    copyValues(combinedProvider, providers[providerName]);
	  }

	  return _createProviderStore2['default'](combinedProvider, initialState);
	}

	function copyValues(combinedProvider, provider) {
	  for (var key in combinedProvider) {
	    var value = combinedProvider[key];
	    var providerValue = provider[key];

	    if (!providerValue) {
	      continue;
	    }

	    if (Array.isArray(value)) {
	      if (!Array.isArray(providerValue)) {
	        providerValue = [providerValue];
	      }

	      for (var _iterator = providerValue, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
	        var _ref;

	        if (_isArray) {
	          if (_i >= _iterator.length) break;
	          _ref = _iterator[_i++];
	        } else {
	          _i = _iterator.next();
	          if (_i.done) break;
	          _ref = _i.value;
	        }

	        var item = _ref;

	        if (value.indexOf(item) < 0) {
	          value.push(item);
	        }
	      }
	    } else if (typeof providerValue === 'object') {
	      Object.assign(value, providerValue);
	    }
	  }
	}
	module.exports = exports['default'];

/***/ }),
/* 11 */
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
/* 12 */
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.ActionTypes = undefined;
	exports['default'] = createStore;

	var _isPlainObject = __webpack_require__(16);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _symbolObservable = __webpack_require__(48);

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
/* 14 */
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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	var root = __webpack_require__(46);

	/** Built-in value references. */
	var Symbol = root.Symbol;

	module.exports = Symbol;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(40),
	    getPrototype = __webpack_require__(42),
	    isObjectLike = __webpack_require__(47);

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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(1);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _reactReduxProvide = __webpack_require__(6);

	var _reactReduxProvide2 = _interopRequireDefault(_reactReduxProvide);

	var _eventsPropTypes = __webpack_require__(4);

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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(1);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _reactReduxProvide = __webpack_require__(6);

	var _reactReduxProvide2 = _interopRequireDefault(_reactReduxProvide);

	var _eventsPropTypes = __webpack_require__(4);

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
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports['default'] = createMiddleware;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _reactReduxProvide = __webpack_require__(6);

	var _reduxReplicate = __webpack_require__(34);

	var _defaultRenderDocumentToString = __webpack_require__(8);

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
/* 20 */
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
/* 21 */
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
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	/*!
	 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
	 *
	 * Copyright (c) 2014-2017, Jon Schlinkert.
	 * Released under the MIT License.
	 */

	'use strict';

	var isObject = __webpack_require__(23);

	function isObjectObject(o) {
	  return isObject(o) === true
	    && Object.prototype.toString.call(o) === '[object Object]';
	}

	module.exports = function isPlainObject(o) {
	  var ctor,prot;

	  if (isObjectObject(o) === false) return false;

	  // If has modified constructor
	  ctor = o.constructor;
	  if (typeof ctor !== 'function') return false;

	  // If has modified prototype
	  prot = ctor.prototype;
	  if (isObjectObject(prot) === false) return false;

	  // If constructor does not have an Object-specific method
	  if (prot.hasOwnProperty('isPrototypeOf') === false) {
	    return false;
	  }

	  // Most likely a plain Object
	  return true;
	};


/***/ }),
/* 23 */
/***/ (function(module, exports) {

	/*!
	 * isobject <https://github.com/jonschlinkert/isobject>
	 *
	 * Copyright (c) 2014-2017, Jon Schlinkert.
	 * Released under the MIT License.
	 */

	'use strict';

	module.exports = function isObject(val) {
	  return val != null && typeof val === 'object' && Array.isArray(val) === false;
	};


/***/ }),
/* 24 */
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
/* 25 */
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
	  var ReactPropTypesSecret = __webpack_require__(9);
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
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var assign = __webpack_require__(24);

	var ReactPropTypesSecret = __webpack_require__(9);
	var checkPropTypes = __webpack_require__(25);

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
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports['default'] = provide;
	exports.reloadProviders = reloadProviders;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(1);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _isPlainObject = __webpack_require__(22);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _redux = __webpack_require__(7);

	var _reactReduxLibUtilsShallowEqual = __webpack_require__(32);

	var _reactReduxLibUtilsShallowEqual2 = _interopRequireDefault(_reactReduxLibUtilsShallowEqual);

	var _reactReduxLibUtilsWrapActionCreators = __webpack_require__(33);

	var _reactReduxLibUtilsWrapActionCreators2 = _interopRequireDefault(_reactReduxLibUtilsWrapActionCreators);

	var _createProviderStore = __webpack_require__(5);

	var _createProviderStore2 = _interopRequireDefault(_createProviderStore);

	var _createCombinedStore = __webpack_require__(10);

	var _createCombinedStore2 = _interopRequireDefault(_createCombinedStore);

	var _hoistNonReactStatics = __webpack_require__(21);

	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

	var defaultMapState = function defaultMapState() {
	  return {};
	};
	var defaultMapDispatch = function defaultMapDispatch(dispatch) {
	  return { dispatch: dispatch };
	};
	var defaultMerge = function defaultMerge(stateProps, dispatchProps, parentProps) {
	  return _extends({}, stateProps, parentProps, dispatchProps);
	};

	var contextTypes = {
	  providedState: _propTypes2['default'].object,
	  providers: _propTypes2['default'].object,
	  combinedProviders: _propTypes2['default'].oneOfType([_propTypes2['default'].object, _propTypes2['default'].arrayOf(_propTypes2['default'].object)]),
	  combinedProviderStores: _propTypes2['default'].object,
	  providerReady: _propTypes2['default'].arrayOf(_propTypes2['default'].func)
	};

	var wrappedInstances = {};
	var rootInstance = null;

	function provide(WrappedComponent) {
	  var stateless = typeof WrappedComponent.prototype.render === 'undefined';
	  var wrappedName = WrappedComponent.displayName || WrappedComponent.name;
	  var instances = wrappedInstances[wrappedName] || new Set();
	  var pure = WrappedComponent.pure !== false;
	  var doSubscribe = false;
	  var statePropsDepend = false;
	  var dispatchPropsDepend = false;

	  if (!wrappedInstances[wrappedName]) {
	    wrappedInstances[wrappedName] = instances;
	  }

	  function getDisplayName() {
	    var providers = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    return 'Provide' + wrappedName + '(' + Object.keys(providers).join(',') + ')';
	  }

	  function getReduced(reducers) {
	    var reduced = {};

	    for (var key in reducers) {
	      reduced[key] = reducers[key](undefined, {});
	    }

	    return reduced;
	  }

	  var Provide = (function (_Component) {
	    _inherits(Provide, _Component);

	    Provide.prototype.getChildContext = function getChildContext() {
	      return {
	        providedState: this.providedState,
	        providers: this.contextProviders,
	        combinedProviders: this.contextCombinedProviders,
	        combinedProviderStores: this.contextCombinedProviderStores,
	        providerReady: this.providerReady
	      };
	    };

	    _createClass(Provide, null, [{
	      key: 'WrappedComponent',
	      value: WrappedComponent,
	      enumerable: true
	    }, {
	      key: 'displayName',
	      value: getDisplayName(),
	      enumerable: true
	    }, {
	      key: 'propTypes',
	      value: contextTypes,
	      enumerable: true
	    }, {
	      key: 'contextTypes',
	      value: contextTypes,
	      enumerable: true
	    }, {
	      key: 'childContextTypes',
	      value: contextTypes,
	      enumerable: true
	    }]);

	    function Provide(props, context) {
	      _classCallCheck(this, Provide);

	      _Component.call(this, props);

	      if (!context.providers) {
	        rootInstance = this;
	      }

	      this.prerenders = 1;
	      this.renders = 0;
	      this.initialize(props, context);
	    }

	    Provide.prototype.initialize = function initialize(props, context) {
	      this.stores = new Set();
	      this.storesStates = new WeakMap();
	      this.providedState = props.providedState || context.providedState || {};
	      this.providerReady = props.providerReady || context.providerReady;
	      this.initCombinedProviderStores(props, context);
	      this.initProviders(props, context);
	      this.initState(props, context);
	    };

	    Provide.prototype.reinitialize = function reinitialize(props, context, newWrappedComponent) {
	      if (newWrappedComponent) {
	        this.setWrappedComponent(newWrappedComponent);
	      }
	      this.initialize(props, context);
	      this.tryUnsubscribe();
	      this.trySubscribe();
	      this.forceUpdate();
	    };

	    Provide.prototype.setWrappedComponent = function setWrappedComponent(newWrappedComponent) {
	      var prevWrappedName = wrappedName;

	      WrappedComponent = newWrappedComponent;
	      Provide.WrappedComponent = WrappedComponent;
	      wrappedName = WrappedComponent.displayName || WrappedComponent.name;
	      if (prevWrappedName !== wrappedName) {
	        wrappedInstances[wrappedName] = instances;
	        delete wrappedInstances[prevWrappedName];
	      }
	      pure = WrappedComponent.pure !== false;
	      doSubscribe = false;
	      statePropsDepend = false;
	      dispatchPropsDepend = false;
	    };

	    Provide.prototype.initCombinedProviderStores = function initCombinedProviderStores(props, context) {
	      if (!props.providers && context.combinedProviderStores) {
	        this.contextCombinedProviders = context.combinedProviders;
	        this.contextCombinedProviderStores = context.combinedProviderStores;
	        return;
	      }

	      var _props$combinedProviders = props.combinedProviders;
	      var combinedProviders = _props$combinedProviders === undefined ? [] : _props$combinedProviders;

	      if (!Array.isArray(combinedProviders)) {
	        combinedProviders = [combinedProviders];
	      }

	      if (this.contextCombinedProviderStores) {
	        var removed = new WeakSet();

	        for (var _name in this.contextCombinedProviderStores) {
	          var store = this.contextCombinedProviderStores[_name];

	          if (store && store.remove && !removed.has(store)) {
	            store.remove();
	            removed.add(store);
	          }
	        }
	      }

	      this.contextCombinedProviders = combinedProviders;
	      this.contextCombinedProviderStores = {};

	      for (var _iterator = combinedProviders, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
	        var _ref;

	        if (_isArray) {
	          if (_i >= _iterator.length) break;
	          _ref = _iterator[_i++];
	        } else {
	          _i = _iterator.next();
	          if (_i.done) break;
	          _ref = _i.value;
	        }

	        var providers = _ref;

	        var store = _createCombinedStore2['default'](providers, this.providedState);

	        for (var _name2 in providers) {
	          this.contextCombinedProviderStores[_name2] = store;
	        }
	      }
	    };

	    Provide.prototype.initProviders = function initProviders(props, context) {
	      var _WrappedComponent = WrappedComponent;
	      var _WrappedComponent$propTypes = _WrappedComponent.propTypes;
	      var propTypes = _WrappedComponent$propTypes === undefined ? {} : _WrappedComponent$propTypes;

	      if (props.providers) {
	        if (this.contextProviders) {
	          var removed = new WeakSet();

	          for (var _name3 in this.contextProviders) {
	            var store = this.contextProviders[_name3].store;

	            if (store && store.remove && !removed.has(store)) {
	              store.remove();
	              removed.add(store);
	            }
	          }
	        }

	        this.contextProviders = {};

	        for (var _name4 in props.providers) {
	          this.initProvider(_name4, props.providers[_name4]);
	        }
	      } else {
	        this.contextProviders = context.providers;
	      }

	      this.providers = {};

	      for (var _name5 in this.contextProviders) {
	        var provider = this.contextProviders[_name5];
	        var _provider$actions = provider.actions;
	        var actions = _provider$actions === undefined ? {} : _provider$actions;
	        var _provider$reducers = provider.reducers;
	        var reducers = _provider$reducers === undefined ? {} : _provider$reducers;
	        var merge = provider.merge;

	        var merged = merge && merge(getReduced(reducers), {}, {}) || {};

	        for (var propKey in propTypes) {
	          if (propKey in actions || propKey in reducers || propKey in merged) {
	            this.providers[_name5] = provider;
	            this.addStore(provider.store);

	            if (provider.shouldSubscribe) {
	              doSubscribe = true;
	            }
	            if (provider.mapStateProps) {
	              statePropsDepend = true;
	            }
	            if (provider.mapDispatchProps) {
	              dispatchPropsDepend = true;
	            }

	            break;
	          }
	        }
	      }

	      Provide.displayName = getDisplayName(this.providers);
	    };

	    Provide.prototype.initProvider = function initProvider(name, provider) {
	      var _provider$actions2 = provider.actions;
	      var actions = _provider$actions2 === undefined ? {} : _provider$actions2;
	      var _provider$reducers2 = provider.reducers;
	      var reducers = _provider$reducers2 === undefined ? {} : _provider$reducers2;
	      var mapState = provider.mapState;
	      var mapDispatch = provider.mapDispatch;
	      var merge = provider.merge;

	      var shouldSubscribe = false;

	      if (typeof mapState === 'undefined') {
	        mapState = function (state) {
	          var props = {};

	          for (var key in reducers) {
	            props[key] = state[key];
	          }

	          return props;
	        };
	      }

	      if (typeof mapState === 'function') {
	        shouldSubscribe = true;
	      } else {
	        mapState = defaultMapState;
	      }

	      if (typeof mapDispatch === 'undefined') {
	        mapDispatch = function (dispatch) {
	          return _redux.bindActionCreators(actions, dispatch);
	        };
	      } else if (_isPlainObject2['default'](mapDispatch)) {
	        mapDispatch = _reactReduxLibUtilsWrapActionCreators2['default'](mapDispatch);
	      } else if (typeof mapDispatch !== 'function') {
	        mapDispatch = defaultMapDispatch;
	      }

	      if (!merge) {
	        merge = defaultMerge;
	      }

	      var mapStateProps = mapState.length !== 1;
	      var mapDispatchProps = mapDispatch.length !== 1;

	      this.contextProviders[name] = this.setProviderStore(_extends({
	        name: name
	      }, provider, {
	        shouldSubscribe: shouldSubscribe,
	        mapState: mapState,
	        mapStateProps: mapStateProps,
	        mapDispatch: mapDispatch,
	        mapDispatchProps: mapDispatchProps,
	        merge: merge
	      }));
	    };

	    Provide.prototype.addStore = function addStore(store) {
	      this.stores.add(store);
	      this.storesStates.set(store, store.getState());
	    };

	    Provide.prototype.setProviderStore = function setProviderStore(provider) {
	      if (!provider.store) {
	        provider.store = this.contextCombinedProviderStores[provider.name] || _createProviderStore2['default'](provider, this.providedState);

	        this.setProviderReady(provider);
	      }

	      return provider;
	    };

	    Provide.prototype.setProviderReady = function setProviderReady(provider) {
	      if (this.providerReady) {
	        for (var _iterator2 = this.providerReady, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
	          var _ref2;

	          if (_isArray2) {
	            if (_i2 >= _iterator2.length) break;
	            _ref2 = _iterator2[_i2++];
	          } else {
	            _i2 = _iterator2.next();
	            if (_i2.done) break;
	            _ref2 = _i2.value;
	          }

	          var ready = _ref2;

	          ready(provider);
	        }
	      }
	    };

	    Provide.prototype.initState = function initState(props, context) {
	      this.state = { storesStates: this.storesStates };
	      this.setStateProps(props);
	      this.setDispatchProps(props);
	      this.setMergedProps(props);
	    };

	    Provide.prototype.setStateProps = function setStateProps(props) {
	      var stateProps = this.stateProps;

	      var nextStateProps = this.computeStateProps(props);

	      if (stateProps && _reactReduxLibUtilsShallowEqual2['default'](nextStateProps, stateProps)) {
	        return false;
	      }

	      this.stateProps = nextStateProps;
	      return true;
	    };

	    Provide.prototype.computeStateProps = function computeStateProps(props) {
	      var stateProps = {};

	      for (var _name6 in this.providers) {
	        var provider = this.providers[_name6];
	        var state = provider.store.getState();
	        var providerStateProps = provider.mapStateProps ? provider.mapState(state, props) : provider.mapState(state);

	        if (!_isPlainObject2['default'](providerStateProps)) {
	          throw new Error('`mapState` must return an object. Instead received %s.', providerStateProps);
	        }

	        Object.assign(stateProps, providerStateProps);
	      }

	      return stateProps;
	    };

	    Provide.prototype.setDispatchProps = function setDispatchProps(props) {
	      var dispatchProps = this.dispatchProps;

	      var nextDispatchProps = this.computeDispatchProps(props);
	      if (dispatchProps && _reactReduxLibUtilsShallowEqual2['default'](nextDispatchProps, dispatchProps)) {
	        return false;
	      }

	      this.dispatchProps = nextDispatchProps;
	      return true;
	    };

	    Provide.prototype.computeDispatchProps = function computeDispatchProps(props) {
	      var dispatchProps = {};

	      for (var _name7 in this.providers) {
	        var provider = this.providers[_name7];
	        var dispatch = provider.store.dispatch;

	        var providerDispatchProps = provider.mapDispatchProps ? provider.mapDispatch(dispatch, props) : provider.mapDispatch(dispatch);

	        if (!_isPlainObject2['default'](providerDispatchProps)) {
	          throw new Error('`mapDispatch` must return an object. Instead received %s.', providerDispatchProps);
	        }

	        Object.assign(dispatchProps, providerDispatchProps);
	      }

	      return dispatchProps;
	    };

	    Provide.prototype.setMergedProps = function setMergedProps(props) {
	      var stateProps = this.stateProps;
	      var dispatchProps = this.dispatchProps;
	      var mergedProps = this.mergedProps;

	      this.mergedProps = this.computeMergedProps(stateProps, dispatchProps, WrappedComponent.defaultProps ? _extends({}, WrappedComponent.defaultProps, props) : props);

	      return !mergedProps || !_reactReduxLibUtilsShallowEqual2['default'](mergedProps, this.mergedProps);
	    };

	    Provide.prototype.computeMergedProps = function computeMergedProps(stateProps, dispatchProps, parentProps) {
	      var mergedProps = defaultMerge(stateProps, dispatchProps, parentProps);
	      var filtered = {};

	      for (var _name8 in this.providers) {
	        var provider = this.providers[_name8];
	        var providerMergedProps = provider.merge(stateProps, dispatchProps, mergedProps);

	        if (!_isPlainObject2['default'](providerMergedProps)) {
	          throw new Error('`merge` must return an object. Instead received %s.', providerMergedProps);
	        }

	        Object.assign(mergedProps, providerMergedProps);
	      }

	      for (var key in WrappedComponent.propTypes) {
	        if (mergedProps[key] !== undefined) {
	          filtered[key] = mergedProps[key];
	        }
	      }

	      return filtered;
	    };

	    Provide.prototype.componentDidMount = function componentDidMount() {
	      this.trySubscribe();
	      instances.add(this);
	    };

	    Provide.prototype.componentWillUnmount = function componentWillUnmount() {
	      this.tryUnsubscribe();
	      instances['delete'](this);
	    };

	    Provide.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	      if (!pure || !_reactReduxLibUtilsShallowEqual2['default'](nextProps, this.props)) {
	        this.propsChanged = true;
	      }
	    };

	    Provide.prototype.isSubscribed = function isSubscribed() {
	      return this.unsubscribe && typeof this.unsubscribe[0] === 'function';
	    };

	    Provide.prototype.trySubscribe = function trySubscribe() {
	      var _this = this;

	      if (doSubscribe && !this.unsubscribe) {
	        this.unsubscribe = Array.from(this.stores).map(function (store) {
	          return store.subscribe(_this.handleChange.bind(_this));
	        });
	        this.handleChange();
	      }
	    };

	    Provide.prototype.tryUnsubscribe = function tryUnsubscribe() {
	      if (this.unsubscribe) {
	        for (var _iterator3 = this.unsubscribe, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
	          var _ref3;

	          if (_isArray3) {
	            if (_i3 >= _iterator3.length) break;
	            _ref3 = _iterator3[_i3++];
	          } else {
	            _i3 = _iterator3.next();
	            if (_i3.done) break;
	            _ref3 = _i3.value;
	          }

	          var unsubscribe = _ref3;

	          unsubscribe();
	        }
	        this.unsubscribe = null;
	      }
	    };

	    Provide.prototype.handleChange = function handleChange() {
	      if (!this.unsubscribe) {
	        return;
	      }

	      if (!pure || this.storesDidChange()) {
	        this.storesChanged = true;
	        this.setState({ storesStates: this.storesStates });
	      }
	    };

	    Provide.prototype.storesDidChange = function storesDidChange() {
	      var stores = this.stores;
	      var storesStates = this.storesStates;

	      var changed = false;

	      this.storesStates = new WeakMap();

	      for (var _iterator4 = stores, _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : _iterator4[Symbol.iterator]();;) {
	        var _ref4;

	        if (_isArray4) {
	          if (_i4 >= _iterator4.length) break;
	          _ref4 = _iterator4[_i4++];
	        } else {
	          _i4 = _iterator4.next();
	          if (_i4.done) break;
	          _ref4 = _i4.value;
	        }

	        var store = _ref4;

	        var prevStoreState = storesStates.get(store);
	        var storeState = store.getState();

	        if (prevStoreState !== storeState && !_reactReduxLibUtilsShallowEqual2['default'](prevStoreState, storeState)) {
	          changed = true;
	        }

	        this.storesStates.set(store, storeState);
	      }

	      return changed;
	    };

	    Provide.prototype.getCurrentProvidedState = function getCurrentProvidedState() {
	      var contextProviders = this.contextProviders;

	      var providedState = {};

	      for (var _name9 in contextProviders) {
	        Object.assign(providedState, contextProviders[_name9].store.getState());
	      }

	      return providedState;
	    };

	    Provide.prototype.shouldComponentUpdate = function shouldComponentUpdate(props) {
	      var propsChanged = this.propsChanged;
	      var storesChanged = this.storesChanged;

	      var statePropsChanged = false;
	      var dispatchPropsChanged = false;
	      var mergedPropsChanged = false;

	      if (!pure) {
	        return true;
	      }

	      if (!propsChanged && !storesChanged) {
	        return false;
	      }

	      if (storesChanged || propsChanged && statePropsDepend) {
	        statePropsChanged = this.setStateProps(props);
	      }
	      if (propsChanged && dispatchPropsDepend) {
	        dispatchPropsChanged = this.setDispatchProps(props);
	      }
	      if (statePropsChanged || dispatchPropsChanged || propsChanged) {
	        mergedPropsChanged = this.setMergedProps(props);
	      }

	      this.prerenders++;
	      this.propsChanged = false;
	      this.storesChanged = false;

	      return mergedPropsChanged;
	    };

	    Provide.prototype.render = function render() {
	      this.renders++;

	      return stateless ? _react2['default'].createElement(WrappedComponent, this.mergedProps) : _react2['default'].createElement(WrappedComponent, _extends({ ref: 'wrappedInstance' }, this.mergedProps));
	    };

	    return Provide;
	  })(_react.Component);

	  if (true) {
	    for (var _iterator5 = instances, _isArray5 = Array.isArray(_iterator5), _i5 = 0, _iterator5 = _isArray5 ? _iterator5 : _iterator5[Symbol.iterator]();;) {
	      var _ref5;

	      if (_isArray5) {
	        if (_i5 >= _iterator5.length) break;
	        _ref5 = _iterator5[_i5++];
	      } else {
	        _i5 = _iterator5.next();
	        if (_i5.done) break;
	        _ref5 = _i5.value;
	      }

	      var instance = _ref5;
	      var props = instance.props;
	      var context = instance.context;

	      instance.reinitialize(props, context, WrappedComponent);
	    }
	  }

	  return _hoistNonReactStatics2['default'](Provide, WrappedComponent);
	}

	function reloadProviders(_ref7) {
	  var providers = _ref7.providers;
	  var combinedProviders = _ref7.combinedProviders;

	  rootInstance.reinitialize(_extends({}, rootInstance.props, {
	    providedState: rootInstance.getCurrentProvidedState(),
	    providers: providers,
	    combinedProviders: combinedProviders
	  }), rootInstance.context);

	  var _rootInstance = rootInstance;
	  var contextProviders = _rootInstance.contextProviders;
	  var contextCombinedProviders = _rootInstance.contextCombinedProviders;
	  var contextCombinedProviderStores = _rootInstance.contextCombinedProviderStores;

	  for (var wrappedName in wrappedInstances) {
	    var instances = wrappedInstances[wrappedName];

	    for (var _iterator6 = instances, _isArray6 = Array.isArray(_iterator6), _i6 = 0, _iterator6 = _isArray6 ? _iterator6 : _iterator6[Symbol.iterator]();;) {
	      var _ref6;

	      if (_isArray6) {
	        if (_i6 >= _iterator6.length) break;
	        _ref6 = _iterator6[_i6++];
	      } else {
	        _i6 = _iterator6.next();
	        if (_i6.done) break;
	        _ref6 = _i6.value;
	      }

	      var instance = _ref6;
	      var props = instance.props;
	      var context = instance.context;

	      if (instance !== rootInstance) {
	        context.providers = contextProviders;
	        context.combinedProviders = contextCombinedProviders;
	        context.combinedProviderStores = contextCombinedProviderStores;
	        instance.reinitialize(props, context);
	      }
	    }
	  }
	}

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _createKeyConcat = __webpack_require__(2);

	var _createKeyConcat2 = _interopRequireDefault(_createKeyConcat);

	var pushEnhancer = _createKeyConcat2['default']('enhancer');

	exports['default'] = pushEnhancer;
	module.exports = exports['default'];

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _createKeyConcat = __webpack_require__(2);

	var _createKeyConcat2 = _interopRequireDefault(_createKeyConcat);

	var pushMiddleware = _createKeyConcat2['default']('middleware');

	exports['default'] = pushMiddleware;
	module.exports = exports['default'];

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _createKeyConcat = __webpack_require__(2);

	var _createKeyConcat2 = _interopRequireDefault(_createKeyConcat);

	var unshiftEnhancer = _createKeyConcat2['default']('enhancer', true);

	exports['default'] = unshiftEnhancer;
	module.exports = exports['default'];

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _createKeyConcat = __webpack_require__(2);

	var _createKeyConcat2 = _interopRequireDefault(_createKeyConcat);

	var unshiftMiddleware = _createKeyConcat2['default']('middleware', true);

	exports['default'] = unshiftMiddleware;
	module.exports = exports['default'];

/***/ }),
/* 32 */
/***/ (function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = shallowEqual;
	function shallowEqual(objA, objB) {
	  if (objA === objB) {
	    return true;
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
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports["default"] = wrapActionCreators;

	var _redux = __webpack_require__(7);

	function wrapActionCreators(actionCreators) {
	  return function (dispatch) {
	    return (0, _redux.bindActionCreators)(actionCreators, dispatch);
	  };
	}

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports['default'] = replicate;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _selectKeys = __webpack_require__(11);

	var _selectKeys2 = _interopRequireDefault(_selectKeys);

	var _mergeStoresStates = __webpack_require__(35);

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
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _selectKeys = __webpack_require__(11);

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
/* 36 */
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
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports['default'] = applyMiddleware;

	var _compose = __webpack_require__(12);

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
/* 38 */
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
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = combineReducers;

	var _createStore = __webpack_require__(13);

	var _isPlainObject = __webpack_require__(16);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _warning = __webpack_require__(14);

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
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(15),
	    getRawTag = __webpack_require__(43),
	    objectToString = __webpack_require__(44);

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
/* 41 */
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

	module.exports = freeGlobal;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(45);

	/** Built-in value references. */
	var getPrototype = overArg(Object.getPrototypeOf, Object);

	module.exports = getPrototype;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(15);

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
/* 44 */
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
/* 45 */
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
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	var freeGlobal = __webpack_require__(41);

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	module.exports = root;


/***/ }),
/* 47 */
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
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, module) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ponyfill = __webpack_require__(49);

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
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(50)(module)))

/***/ }),
/* 49 */
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
/* 50 */
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