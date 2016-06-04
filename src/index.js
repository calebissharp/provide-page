import thunk from 'redux-thunk';
import { canUseDOM } from 'exenv';

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

const _noRender = true;

const actions = {
  setHeaders(headers) {
    return { type: SET_HEADERS, headers, _noRender };
  },

  setStatusCode(statusCode) {
    return { type: SET_STATUS_CODE, statusCode, _noRender };
  },

  setDocumentTitle(documentTitle = '') {
    return { type: SET_DOCUMENT_TITLE, documentTitle, _noRender };
  },

  setMetaDescription(metaDescription = '') {
    return { type: SET_META_DESCRIPTION, metaDescription, _noRender };
  },

  setMetaRobots(metaRobots = '') {
    return { type: SET_META_ROBOTS, metaRobots, _noRender };
  },

  setIconFile(iconFile = '') {
    return { type: SET_ICON_FILE, iconFile, _noRender };
  },

  setCssFiles(cssFiles = []) {
    return { type: SET_CSS_FILES, cssFiles, _noRender };
  },

  setJsFiles(jsFiles = []) {
    return { type: SET_JS_FILES, jsFiles, _noRender };
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

  submitForm(formData) {
    const xhr = new XMLHttpRequest();
    const { pathname, search } = window.location;
    const contentType = 'application/json;charset=UTF-8';
    const accept = 'application/json';

    return dispatch => {
      dispatch({ type: SUBMIT_FORM, formData });

      xhr.open('POST', pathname + search, true);
      xhr.setRequestHeader('Content-Type', contentType);
      xhr.setRequestHeader('Accept', accept);
      xhr.onload = () => {
        const { response } = xhr;

        formData._formHandled = true;
        dispatch({ type: SUBMITTED_FORM, formData, response });
        // TODO: merge response into stores
      };
      xhr.send(JSON.stringify(formData));
    };
  },

  updateSession(requestSession) {
    return { type: UPDATE_SESSION, requestSession };
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
    switch (action.type) {
      case SUBMIT_REQUEST:
        return action.requestSession || state;

      case UPDATE_SESSION:
        return { ...state, ...action.requestSession };

      case DESTROY_SESSION:
        if (state.destroy) {
          state.destroy();
        }

        return {};

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
      if (
        !requestBody
        || requestBody._formHandled
        || requestBody._formId !== formId
      ) {
        return null;
      }

      return requestBody;
    }
  }
};

const middleware = thunk;

const clientStateKeys = ['requestSession'];

export default { actions, reducers, merge, middleware, clientStateKeys };
