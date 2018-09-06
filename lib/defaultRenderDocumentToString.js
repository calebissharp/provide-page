'use strict';

exports.__esModule = true;
var defaultRenderDocumentToString = function defaultRenderDocumentToString(html, providedState, clientState) {
  var _providedState$documentTitle = providedState.documentTitle;
  var documentTitle = _providedState$documentTitle === undefined ? 'Page' : _providedState$documentTitle;
  var _providedState$metaDescription = providedState.metaDescription;
  var metaDescription = _providedState$metaDescription === undefined ? 'Built with provide-page.' : _providedState$metaDescription;
  var _providedState$metaRobots = providedState.metaRobots;
  var metaRobots = _providedState$metaRobots === undefined ? 'index,follow' : _providedState$metaRobots;
  var _providedState$iconFile = providedState.iconFile;
  var iconFile = _providedState$iconFile === undefined ? '/static/favicon.ico' : _providedState$iconFile;
  var _providedState$cssFiles = providedState.cssFiles;
  var cssFiles = _providedState$cssFiles === undefined ? [] : _providedState$cssFiles;
  var _providedState$jsFiles = providedState.jsFiles;
  var jsFiles = _providedState$jsFiles === undefined ? [] : _providedState$jsFiles;

  return '<!DOCTYPE html>' + '<html>' + '<head>' + ('<title>' + documentTitle + '</title>') + '<meta charset="utf-8"/>' + '<meta http-equiv="X-UA-Compatible" content="IE=edge"/>' + '<meta name="viewport" content="width=device-width, initial-scale=1.0"/>' + ('<meta name="description" content="' + metaDescription + '"/>') + ('<meta name="robots" content="' + metaRobots + '"/>') + ('<link rel="shortcut icon" type="image/ico" href="' + iconFile + '"/>') + cssFiles.map(function (cssFile) {
    return '<link rel="stylesheet" type="text/css" href="' + cssFile + '"/>';
  }).join('') + '</head>' + '<body>' + ('<div id="root">' + html + '</div>') + '<script>' + ('window.clientState = ' + JSON.stringify(clientState) + ';') + '</script>' + jsFiles.map(function (jsFile) {
    return '<script src="' + jsFile + '"></script>';
  }).join('') + '</body>' + '</html>';
};

exports['default'] = defaultRenderDocumentToString;
module.exports = exports['default'];