import { canUseDOM } from 'exenv';

export Link from './components/Link';

export const PUSH_WINDOW_PATH = 'PUSH_WINDOW_PATH';
export const REPLACE_WINDOW_PATH = 'REPLACE_WINDOW_PATH';
export const SET_DOCUMENT_TITLE = 'SET_DOCUMENT_TITLE';

const actions = {
  pushWindowPath(path = '', title = '', data = null) {
    return { type: PUSH_WINDOW_PATH, path, title, data };
  },

  replaceWindowPath(path = '', title = '', data = null) {
    return { type: REPLACE_WINDOW_PATH, path, title, data };
  },

  setDocumentTitle(title = '') {
    return { type: SET_DOCUMENT_TITLE, title };
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
