import { canUseDOM } from 'exenv';

export middleware from './middleware';
export Link from './components/Link';

export const PUSH_WINDOW_PATH = 'PUSH_WINDOW_PATH';
export const REPLACE_WINDOW_PATH = 'REPLACE_WINDOW_PATH';
export const SET_HEADERS = 'SET_HEADERS';
export const SET_STATUS_CODE = 'SET_STATUS_CODE';
export const SET_DOCUMENT_TITLE = 'SET_DOCUMENT_TITLE';
export const SET_META_DESCRIPTION = 'SET_META_DESCRIPTION';
export const SET_META_ROBOTS = 'SET_META_ROBOTS';
export const SET_ICON_FILE = 'SET_ICON_FILE';
export const SET_CSS_FILE = 'SET_CSS_FILE';
export const SET_JS_FILE = 'SET_JS_FILE';

const actions = {
  pushWindowPath(path = '', title = '', data = null) {
    return { type: PUSH_WINDOW_PATH, path, title, data };
  },

  replaceWindowPath(path = '', title = '', data = null) {
    return { type: REPLACE_WINDOW_PATH, path, title, data };
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

  setCssFile(cssFile = '') {
    return { type: SET_CSS_FILE, cssFile };
  },

  setJsFile(jsFile = '') {
    return { type: SET_JS_FILE, jsFile };
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

  iconFile(state = '/dist/favicon.ico', action) {
    switch (action.type) {
      case SET_ICON_FILE:
        return action.iconFile;

      default:
        return state;
    }
  },

  cssFile(state = '/dist/app.css', action) {
    switch (action.type) {
      case SET_CSS_FILE:
        return action.cssFile;

      default:
        return state;
    }
  },

  jsFile(state = '/dist/app.js', action) {
    switch (action.type) {
      case SET_JS_FILE:
        return action.jsFile;

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
  }

  return store;
};

export default { actions, reducers, enhancer };
