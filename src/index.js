import { canUseDOM } from 'exenv';

export Form from './components/Form';
export Link from './components/Link';

export createMiddleware from './createMiddleware';
export defaultRenderDocumentToString from './defaultRenderDocumentToString';
export eventsPropTypes from './eventsPropTypes';

export const PUSH_WINDOW_PATH = 'PUSH_WINDOW_PATH';
export const REPLACE_WINDOW_PATH = 'REPLACE_WINDOW_PATH';
export const SET_HEADERS = 'SET_HEADERS';
export const SET_STATUS_CODE = 'SET_STATUS_CODE';
export const SET_DOCUMENT_TITLE = 'SET_DOCUMENT_TITLE';
export const SET_META_DESCRIPTION = 'SET_META_DESCRIPTION';
export const SET_META_ROBOTS = 'SET_META_ROBOTS';
export const SET_ICON_FILE = 'SET_ICON_FILE';
export const SET_CSS_FILES = 'SET_CSS_FILES';
export const SET_JS_FILES = 'SET_JS_FILES';
export const SUBMIT_REQUEST = 'SUBMIT_REQUEST';

const _rerender = false;
const splitPath = path => path.replace(/^\//, '').split('/');

const actions = {
  pushWindowPath(windowPath = '') {
    const windowPathSplit = splitPath(windowPath);

    return { type: PUSH_WINDOW_PATH, windowPath, windowPathSplit, _rerender };
  },

  replaceWindowPath(windowPath = '') {
    const windowPathSplit = splitPath(windowPath);

    return {
      type: REPLACE_WINDOW_PATH, windowPath, windowPathSplit, _rerender
    };
  },

  setHeaders(headers) {
    return { type: SET_HEADERS, headers, _rerender };
  },

  setStatusCode(statusCode) {
    return { type: SET_STATUS_CODE, statusCode, _rerender };
  },

  setDocumentTitle(documentTitle = '') {
    return { type: SET_DOCUMENT_TITLE, documentTitle, _rerender };
  },

  setMetaDescription(metaDescription = '') {
    return { type: SET_META_DESCRIPTION, metaDescription, _rerender };
  },

  setMetaRobots(metaRobots = '') {
    return { type: SET_META_ROBOTS, metaRobots, _rerender };
  },

  setIconFile(iconFile = '') {
    return { type: SET_ICON_FILE, iconFile, _rerender };
  },

  setCssFiles(cssFiles = []) {
    return { type: SET_CSS_FILES, cssFiles, _rerender };
  },

  setJsFiles(jsFiles = []) {
    return { type: SET_JS_FILES, jsFiles, _rerender };
  },

  submitRequest(requestBody = {}, requestMethod = 'POST', acceptJson = true) {
    return { type: SUBMIT_REQUEST, requestBody, requestMethod, acceptJson };
  }
};

const reducers = {
  windowPath(state = canUseDOM && window.location.pathname, action) {
    switch (action.type) {
      case PUSH_WINDOW_PATH:
        if (canUseDOM) {
          window.history.pushState(
            action, document.title, action.windowPath
          );
        }
        return action.windowPath;

      case REPLACE_WINDOW_PATH:
        if (canUseDOM) {
          window.history.replaceState(
            action, document.title, action.windowPath
          );
        }
        return action.windowPath;

      default:
        return state;
    }
  },

  splitWindowPath(
    state = canUseDOM && splitPath(window.location.pathname),
    action
  ) {
    switch (action.type) {
      case PUSH_WINDOW_PATH:
      case REPLACE_WINDOW_PATH:
        return action.windowPathSplit;

      default:
        return state;
    }
  },

  headers(state = null, action) {
    switch (action.type) {
      case SET_HEADERS:
        return action.headers;

      default:
        return state;
    }
  },

  statusCode(state = null, action) {
    switch (action.type) {
      case SET_STATUS_CODE:
        return action.statusCode;

      default:
        return state;
    }
  },

  documentTitle(state = canUseDOM && document.title, action) {
    switch (action.type) {
      case SET_DOCUMENT_TITLE:
        if (canUseDOM) {
          document.title = action.documentTitle;
        }
        return action.documentTitle;

      default:
        return state;
    }
  },

  metaDescription(state = 'Built with react-redux-provide-page.', action) {
    switch (action.type) {
      case SET_META_DESCRIPTION:
        return action.metaDescription;

      default:
        return state;
    }
  },

  metaRobots(state = 'index,follow', action) {
    switch (action.type) {
      case SET_META_ROBOTS:
        return action.metaRobots;

      default:
        return state;
    }
  },

  iconFile(state = '/static/favicon.ico', action) {
    switch (action.type) {
      case SET_ICON_FILE:
        return action.iconFile;

      default:
        return state;
    }
  },

  cssFiles(state = [], action) {
    switch (action.type) {
      case SET_CSS_FILES:
        return action.cssFiles;

      default:
        return state;
    }
  },

  jsFiles(state = [], action) {
    switch (action.type) {
      case SET_JS_FILES:
        return action.jsFiles;

      default:
        return state;
    }
  },

  requestBody(state = null, action) {
    switch (action.type) {
      case SUBMIT_REQUEST:
        return action.requestBody;

      default:
        return state;
    }
  },

  requestMethod(state = null, action) {
    switch (action.type) {
      case SUBMIT_REQUEST:
        return action.requestMethod;

      default:
        return state;
    }
  },

  acceptJson(state = null, action) {
    switch (action.type) {
      case SUBMIT_REQUEST:
        return action.acceptJson;

      default:
        return state;
    }
  }
};

const merge = (stateProps, dispatchProps, parentProps) => {
  const { requestBody } = stateProps;

  return {
    ...parentProps,
    formData: requestBody && requestBody._formId === parentProps.formId
      ? requestBody
      : null
  };
};

const enhancer = next => (reducer, initialState) => {
  const store = next(reducer, initialState);

  if (canUseDOM) {
    store.dispatch(actions.replaceWindowPath(window.location.pathname));

    window.addEventListener('popstate', (event) => {
      const action = window.history.state;

      if (action) {
        if (action.windowPath !== undefined) {
          store.dispatch({ ...action, type: REPLACE_WINDOW_PATH });
        } else if (action.documentTitle !== undefined) {
          store.dispatch({ ...action, type: SET_DOCUMENT_TITLE });
        }
      }
    });
  } else if (initialState.windowPath || initialState.documentTitle) {
    store.dispatch(actions.replaceWindowPath(initialState.windowPath));
  }

  return store;
};

export default { actions, reducers, merge, enhancer };
