const defaultRenderDocumentToString = (html, providedState, clientState) => {
  const {
    documentTitle = `Page`,
    metaDescription = `Built with provide-page.`,
    metaRobots = `index,follow`,
    iconFile = `/static/favicon.ico`,
    cssFiles = [],
    jsFiles = []
  } = providedState;

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
    + `window.clientState = ${JSON.stringify(clientState)};`
    + `</script>`
    + jsFiles.map(jsFile => (
      `<script src="${jsFile}"></script>`
    )).join('')
    + `</body>`
    + `</html>`
  );
};

export default defaultRenderDocumentToString;
