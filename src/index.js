import thunk from 'redux-thunk';
import { canUseDOM } from 'exenv';

export Link from './components/Link';
export Form from './components/Form';

export createMiddleware from './createMiddleware';
export defaultRenderDocumentToString from './defaultRenderDocumentToString';

export const SET_HEADERS = 'SET_HEADERS';
export const SET_STATUS_CODE = 'SET_STATUS_CODE';
export const SET_DOCUMENT_TITLE = 'SET_DOCUMENT_TITLE';
export const SET_META_DESCRIPTION = 'SET_META_DESCRIPTION';
export const SET_META_ROBOTS = 'SET_META_ROBOTS';
export const SET_ICON_FILE = 'SET_ICON_FILE';
export const SET_CSS_FILES = 'SET_CSS_FILES';
export const SET_JS_FILES = 'SET_JS_FILES';
export const SYNC_WITH_ROUTER = 'SYNC_WITH_ROUTER';
export const GET_PAGE_STATES = 'GET_PAGE_STATES';
export const GOT_PAGE_STATES = 'GOT_PAGE_STATES';
export const SUBMIT_REQUEST = 'SUBMIT_REQUEST';
export const SUBMIT_FORM = 'SUBMIT_FORM';
export const SUBMITTED_FORM = 'SUBMITTED_FORM';
export const PENDING_PAGE = 'PENDING_PAGE';
export const PENDING_FORM = 'PENDING_FORM';
export const UPDATE_SESSION = 'UPDATE_SESSION';
export const DESTROY_SESSION = 'DESTROY_SESSION';

function getUrl(location) {
  return location ? location.pathname + location.search : null;
}

function clearPending(dispatch, getState) {
  const state = getState();

  if (state.pendingForms.length) {
    const { formData, onSubmit } = state.pendingForms.shift();

    dispatch(actions.submitForm(formData, onSubmit));
  } else if (state.pendingPage) {
    dispatch(actions.getPageStates(state.routerLocation));
  }
}

const _noEffect = true;

const actions = {
  setHeaders(headers) {
    return { type: SET_HEADERS, headers, _noEffect };
  },

  setStatusCode(statusCode) {
    return { type: SET_STATUS_CODE, statusCode, _noEffect };
  },

  setDocumentTitle(documentTitle = '') {
    return { type: SET_DOCUMENT_TITLE, documentTitle, _noEffect };
  },

  setMetaDescription(metaDescription = '') {
    return { type: SET_META_DESCRIPTION, metaDescription, _noEffect };
  },

  setMetaRobots(metaRobots = '') {
    return { type: SET_META_ROBOTS, metaRobots, _noEffect };
  },

  setIconFile(iconFile = '') {
    return { type: SET_ICON_FILE, iconFile, _noEffect };
  },

  setCssFiles(cssFiles = []) {
    return { type: SET_CSS_FILES, cssFiles, _noEffect };
  },

  setJsFiles(jsFiles = []) {
    return { type: SET_JS_FILES, jsFiles, _noEffect };
  },

  syncWithRouter(routerHistory, routerLocation) {
    return (dispatch, getState) => {
      dispatch({
        type: SYNC_WITH_ROUTER, routerHistory, routerLocation, _noEffect
      });

      routerHistory.listen(nextRouterLocation => {
        const state = getState();

        if (
          !state.pendingPage && !state.pendingForms.length
          && getUrl(state.routerLocation) !== getUrl(nextRouterLocation)
        ) {
          dispatch(actions.getPageStates(nextRouterLocation));
        }
      });
    };
  },

  getPageStates(routerLocation) {
    const xhr = new XMLHttpRequest();
    const headers = {
      'content-type': 'application/json;charset=UTF-8',
      'accept': 'application/json'
    };

    return (dispatch, getState, { setStates }) => {
      const state = getState();

      if (state.waitingForResponse) {
        dispatch({ type: PENDING_PAGE, routerLocation, _noEffect });
        return;
      }

      dispatch({ type: GET_PAGE_STATES, routerLocation, _noEffect });

      xhr.open('GET', getUrl(routerLocation), true);

      for (let header in headers) {
        xhr.setRequestHeader(header, headers[header]);
      }

      xhr.onload = () => {
        const states = JSON.parse(xhr.response);

        setStates(states);
        dispatch({ type: GOT_PAGE_STATES, states });
        clearPending(dispatch, getState);
      };

      xhr.send();
    };
  },

  submitRequest({
    requestSession,
    requestMethod = 'POST',
    requestBody = {},
    acceptJson
  }) {
    return {
      type: SUBMIT_REQUEST,
      requestSession,
      requestMethod,
      requestBody,
      acceptJson
    };
  },

  submitForm(formData, onSubmit) {
    const xhr = new XMLHttpRequest();
    const headers = {
      'content-type': 'application/json;charset=UTF-8',
      'accept': 'application/json'
    };

    if (onSubmit) {
      headers['x-server-side'] = true;
    }

    return (dispatch, getState, { setStates }) => {
      const state = getState();

      if (state.waitingForResponse) {
        dispatch({ type: PENDING_FORM, formData, onSubmit, _noEffect });
        return;
      }

      dispatch({ type: SUBMIT_FORM, formData, onSubmit });

      xhr.open('POST', getUrl(state.routerLocation), true);

      for (let header in headers) {
        xhr.setRequestHeader(header, headers[header]);
      }

      xhr.onload = () => {
        const states = JSON.parse(xhr.response);

        formData._formHandled = !onSubmit;

        setStates(states);

        if (onSubmit) {
          onSubmit(null, formData);
        }

        dispatch({ type: SUBMITTED_FORM, formData, onSubmit, states });
        clearPending(dispatch, getState);
      };

      xhr.send(JSON.stringify(formData));
    };
  },

  updateSession(updates) {
    return { type: UPDATE_SESSION, updates };
  },

  destroySession() {
    return { type: DESTROY_SESSION };
  }
};

const reducers = {
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

  metaDescription(state = 'Built with provide-page.', action) {
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

  requestSession(state = {}, action) {
    if (!state.__actualSession && typeof state.destroy !== 'undefined') {
      state = { ...state, __actualSession: state };
    }

    switch (action.type) {
      case SUBMIT_REQUEST:
        const { requestSession } = action;

        return requestSession
          ? { ...requestSession, __actualSession: requestSession }
          : state;

      case UPDATE_SESSION:
        const nextState = { ...state };
        const { updates = {} } = action;

        delete updates.__actualSession; // just in case

        for (let key in updates) {
          nextState[key] = updates[key];
          nextState.__actualSession[key] = updates[key];
        }

        if (nextState.__actualSession.save) {
          nextState.__actualSession.save();
        }

        return nextState;

      case DESTROY_SESSION:
        if (state.__actualSession && state.__actualSession.destroy) {
          state.__actualSession.destroy();
        }

        return { __actualSession: state.__actualSession };

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

  requestBody(state = null, action) {
    switch (action.type) {
      case SUBMIT_FORM:
        return action.formData;

      case SUBMIT_REQUEST:
        return action.requestBody;

      default:
        return state;
    }
  },

  acceptJson(state = null, action) {
    switch (action.type) {
      case SUBMIT_REQUEST:
        return typeof action.acceptJson === 'undefined'
          ? state
          : action.acceptJson;

      default:
        return state;
    }
  },

  routerHistory(state = null, action) {
    switch (action.type) {
      case SYNC_WITH_ROUTER:
        return action.routerHistory;

      default:
        return state;
    }
  },

  routerLocation(state = null, action) {
    switch (action.type) {
      case SYNC_WITH_ROUTER:
      case GET_PAGE_STATES:
        return action.routerLocation;

      default:
        return state;
    }
  },

  waitingForResponse(state = false, action) {
    switch (action.type) {
      case GET_PAGE_STATES:
      case SUBMIT_FORM:
        return true;

      case GOT_PAGE_STATES:
      case SUBMITTED_FORM:
        return false;

      default:
        return state;
    }
  },

  pendingPage(state = false, action) {
    switch (action.type) {
      case PENDING_PAGE:
        return true;

      case GET_PAGE_STATES:
      case SUBMIT_FORM:
        return false;

      default:
        return state;
    }
  },

  pendingForms(state = [], { type, formData, onSubmit }) {
    if (type === PENDING_FORM) {
      state.push({ formData, onSubmit });
    }

    return state;
  }
};

const merge = {
  formData: {
    keys: ['requestBody'],
    get({ requestBody }, { formId }) {
      return requestBody && requestBody._formId === formId
        ? requestBody
        : null;
    }
  }
};

const middleware = thunk;

const clientStateKeys = ['requestSession'];

const subscribeTo = {
  router({ store: routerStore }, { store: pageStore }) {
    // there's probably a better way to do this but whatever
    const { routerHistory } = pageStore.getState();

    if (typeof window !== 'undefined' && !routerHistory) {
      const { history, routing } = routerStore.getState();
      const location = routing && routing.locationBeforeTransitions;

      if (history && location) {
        pageStore.dispatch(actions.syncWithRouter(history, location));
      }
    }
  }
};

export default {
  actions, reducers, merge, middleware, clientStateKeys, subscribeTo
};
