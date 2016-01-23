import { canUseDOM } from 'exenv';

export createMiddleware from './createMiddleware';
export Link from './components/Link';

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

const splitPath = path => path.replace(/^\//, '').split('/');

const actions = {
  pushWindowPath(path = '', title = '', data = null) {
    const pathSplit = splitPath(path);

    return { type: PUSH_WINDOW_PATH, path, pathSplit, title, data };
  },

  replaceWindowPath(path = '', title = '', data = null) {
    const pathSplit = splitPath(path);

    return { type: REPLACE_WINDOW_PATH, path, pathSplit, title, data };
  },

  setHeaders(headers) {
    return { type: SET_HEADERS, headers };
  },

  setStatusCode(statusCode) {
    return { type: SET_STATUS_CODE, statusCode };
  },

  setDocumentTitle(title = '') {
    return { type: SET_DOCUMENT_TITLE, title };
  },

  setMetaDescription(metaDescription = '') {
    return { type: SET_META_DESCRIPTION, metaDescription };
  },

  setMetaRobots(metaRobots = '') {
    return { type: SET_META_ROBOTS, metaRobots };
  },

  setIconFile(iconFile = '') {
    return { type: SET_ICON_FILE, iconFile };
  },

  setCssFiles(cssFiles = []) {
    return { type: SET_CSS_FILES, cssFiles };
  },

  setJsFiles(jsFiles = []) {
    return { type: SET_JS_FILES, jsFiles };
  }
};

const reducers = {
  windowPath(state = canUseDOM && window.location.pathname, action) {
    switch (action.type) {
      case PUSH_WINDOW_PATH:
        if (canUseDOM) {
          window.history.pushState(action, action.title, action.path);
        }
        return action.path;

      case REPLACE_WINDOW_PATH:
        if (canUseDOM) {
          window.history.replaceState(action, action.title, action.path);
        }
        return action.path;

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
        return action.pathSplit;

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
      case PUSH_WINDOW_PATH:
      case REPLACE_WINDOW_PATH:
      case SET_DOCUMENT_TITLE:
        if (canUseDOM) {
          document.title = action.title;
        }
        return action.title;

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

  iconFile(state = '/favicon.ico', action) {
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

  historyData(state = canUseDOM && window.history.state, action) {
    switch (action.type) {
      case PUSH_WINDOW_PATH:
      case REPLACE_WINDOW_PATH:
        return action.data;

      default:
        return state;
    }
  }
};

const enhancer = next => (reducer, initialState) => {
  const store = next(reducer, initialState);

  if (canUseDOM) {
    store.dispatch(actions.replaceWindowPath(
      window.location.pathname,
      document.title,
      window.history.state
    ));

    window.addEventListener('popstate', (event) => {
      const action = window.history.state;

      if (action) {
        if (action.path !== undefined) {
          store.dispatch({ ...action, type: REPLACE_WINDOW_PATH });
        } else if (action.title !== undefined) {
          store.dispatch({ ...action, type: SET_DOCUMENT_TITLE });
        }
      }
    });
  } else if (initialState.windowPath || initialState.documentTitle) {
    store.dispatch(actions.replaceWindowPath(
      initialState.windowPath,
      initialState.documentTitle,
      initialState.historyData
    ));
  }

  return store;
};

export default { actions, reducers, enhancer };
