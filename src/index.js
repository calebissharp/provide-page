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
export const SUBMIT_REQUEST = 'SUBMIT_REQUEST';
export const SUBMIT_FORM = 'SUBMIT_FORM';
export const SUBMITTED_FORM = 'SUBMITTED_FORM';
export const UPDATE_SESSION = 'UPDATE_SESSION';
export const DESTROY_SESSION = 'DESTROY_SESSION';

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

  submitForm(formData, serverSide = false) {
    const xhr = new XMLHttpRequest();
    const { pathname, search } = window.location;
    const headers = {
      'content-type': 'application/json;charset=UTF-8',
      'accept': 'application/json'
    };

    return (dispatch, getState, { setStates, dispatchAll }) => {
      dispatch({ type: SUBMIT_FORM, formData });

      xhr.open('POST', pathname + search, true);

      for (let header in headers) {
        xhr.setRequestHeader(header, headers[header]);
      }

      xhr.onload = () => {
        const response = JSON.parse(xhr.response);
        const { states, actions } = response;

        formData._formHandled = true;

        setStates(states);

        if (serverSide) {
          dispatchAll(actions);
        }

        dispatch({ type: SUBMITTED_FORM, formData, response });
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

export default { actions, reducers, merge, middleware, clientStateKeys };
