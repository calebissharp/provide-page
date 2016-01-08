import { addEnhancer } from 'react-redux-provide';

const renderCssFileString = cssFile => (
  `<link rel="stylesheet" type="text/css" href="${cssFile}"/>`
);
const renderJsFileString = jsFile => (
  `<script src="${jsFile}"></script>`
);

export default function middleware ({
  renderToString,
  defaultProps,
  staticDir = `/dist/`
}) {
  const renderDocumentToString = (html = ``, {
    documentTitle = `App`,
    metaDescription = `Built with react-redux-provide-page.`,
    metaRobots = `index,follow`,
    iconFile = `${staticDir}favicon.ico`,
    cssFiles = [`${staticDir}app.css`],
    jsFiles = [`${staticDir}app.js`]
  }) => (
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
    + cssFiles.map(renderCssFileString).join('')
    + `</head>`
    + `<body>`
    + `<div id="root">${html}</div>`
    + jssFiles.map(renderJsFileString).join('')
    + `</body>`
    + `</html>`
  );

  return (request, response, next) => {
    const { originalUrl: windowPath } = request;

    if (windowPath.indexOf(staticDir) === 0) {
      next();
      return;
    }

    try {
      const props = {
        ...defaultProps,
        providers: {
          ...defaultProps.providers,
          page: {
            ...defaultProps.providers.page
          }
        },
        providedState: {
          ...defaultProps.providedState,
          windowPath
        }
      };
      const { page } = props.providers;
      let pageStore = null;

      addEnhancer({ page }, next => (reducer, initialState) => {
        pageStore = next(reducer, initialState);
        return pageStore;
      });

      if (props.combinedProviders) {
        props.combinedProviders = [].concat(props.combinedProviders).map(
          providers => providers.page ? { ...providers, page } : providers
        );
      }

      const html = renderToString(props);
      const pageState = pageStore.getState();
      const { headers, statusCode } = pageState;
      let documentString = null;

      if (headers) {
        response.set(headers);
      }

      if (html) {
        documentString = renderDocumentToString(html, pageState);

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
