import { mergeStoresStates } from 'redux-replicate';

const defaultRenderDocumentToString = (html, stores, getClientState) => {
  const {
    documentTitle = `Page`,
    metaDescription = `Built with react-redux-provide-page.`,
    metaRobots = `index,follow`,
    iconFile = `favicon.ico`,
    cssFiles = [],
    jsFiles = []
  } = stores.page.getState();

  return (
    `<!DOCTYPE html>`
    + `<html>`
    + `<head>`
    + `<title>${documentTitle}</title>`
    + `<meta charset="utf-8"/>`
    + `<meta http-equiv="X-UA-Compatible" content="IE=edge"/>`
    + `<meta name="viewport" content="width=device-width, initial-scale=1.0"/>`
    + `<meta name="description" content="${metaDescription}"/>`
    + `<meta name="robots" content="${metaRobots}"/>`
    + `<link rel="shortcut icon" type="image/ico" href="${iconFile}"/>`
    + cssFiles.map(cssFile => (
      `<link rel="stylesheet" type="text/css" href="${cssFile}"/>`
    )).join('')
    + `</head>`
    + `<body>`
    + `<div id="root">${html}</div>`
    + `<script>`
    + `window.clientState = ${JSON.stringify(getClientState(stores))};`
    + `</script>`
    + jsFiles.map(jsFile => (
      `<script src="${jsFile}"></script>`
    )).join('')
    + `</body>`
    + `</html>`
  );
};

export default function createMiddleware ({
  defaultProps,
  renderToString,
  renderDocumentToString = defaultRenderDocumentToString,
  getClientState = mergeStoresStates()
}) {
  return (request, response, next) => {
    const {
      originalUrl: windowPath,
      method: requestMethod,
      body: requestBody
    } = request;

    if (typeof requestBody === 'undefined') {
      console.warn('Server needs to use `bodyParser.json()`!');
    }

    try {
      const stores = {};
      const props = {
        ...defaultProps,
        providedState: {
          ...(defaultProps.providedState || {}),
          windowPath,
          requestMethod,
          requestBody
        },
        providerReady: [
          ...(defaultProps.providerReady || []),
          ({ name, store }) => {
            stores[name] = store;
          }
        ]
      };
      const html = renderToString(props);
      const { headers, statusCode } = stores.page.getState();
      let documentString = null;

      if (headers) {
        response.set(headers);
      }

      if (html) {
        documentString = renderDocumentToString(
          html,
          stores,
          typeof getClientState === 'function'
            ? getClientState
            : mergeStoresStates(getClientState)
        );

        if (statusCode) {
          response.status(statusCode).send(documentString);
        } else {
          response.send(documentString);
        }
      } else if (statusCode) {
        response.sendStatus(statusCode);
      }
    } catch (error) {
      console.error(error.stack);
      response.sendStatus(500);
    }
  };
}
