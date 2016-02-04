# provide-page

[![build status](https://img.shields.io/travis/loggur/provide-page/master.svg?style=flat-square)](https://travis-ci.org/loggur/provide-page) [![npm version](https://img.shields.io/npm/v/provide-page.svg?style=flat-square)](https://www.npmjs.com/package/provide-page)
[![npm downloads](https://img.shields.io/npm/dm/provide-page.svg?style=flat-square)](https://www.npmjs.com/package/provide-page)

Provides routing, automatic server-side rendering, and automatic server-side actions to React components.  Use this with [`react-redux-provide`](https://github.com/loggur/react-redux-provide) as a simpler alternative to `react-router`.


## Installation

```
npm install provide-page --save
```


## Usage (Actions and Reducers)

At a minimum, you can use the following `actions` to trigger path changes using the HTML5 History API via the following `propTypes`:

- `pushWindowPath (String windowPath)` - Uses `window.history.pushState` under the hood.  If this is called server-side, clients with JS disabled will be redirected to the new path.

- `replaceWindowPath (String windowPath)` - Uses `window.history.replaceState` under the hood.  If this is called server-side, clients with JS disabled will be redirected to the new path.


And the following `actions` may be used both server-side and client-side.  You should typically only call these `actions` within `componentWillMount` and `componentWillReceiveProps`.  See [`test/components/Test.js`](https://github.com/loggur/provide-page/blob/master/test/components/Test.js) for an example.

- `setHeaders (Object headers)` - These optional headers will be sent to the client with SSR (server-side rendering).

- `setStatusCode (Number statusCode)` - An optional status code to send to the client with SSR.

- `setDocumentTitle (String documentTitle)` - Sets the document's title.

- `setMetaDescription (String metaDescription)` - Sets the document's meta description tag.

- `setMetaRobots (String metaRobots)` - Sets the document's meta robots tag.

- `setIconFile (String iconFile)` - Sets the document's favicon filename.

- `setCssFiles (Array cssFiles)` - Sets the CSS filenames to be included with the document as `link` elements within the `head` element.

- `setJsFiles (Array jsFiles)` - Sets the JS filenames to be included with the document as `script` elements appended to the `body` element.


And the following action is mainly used in conjunction with the `Form` component (see below), but you may trigger it manually if for some reason you need to do that:

- `submitRequest (Object requestBody, String requestMethod, Boolean acceptJson)`


Your components may also be provided the following reduced `propsTypes`:

- `windowPath` - Essentially `window.location.pathname`.  On the server this defaults to `express`'s `request.originalUrl` when `createMiddleware` is used (see below).

- `splitWindowPath` - Basically `windowPath.split('/')`, shifted since the first item is always empty.  So for example, when your `windowPath` is `/foo/bar`, this will be `['foo', 'bar']`.  This exists as a convenience to reduce boilerplate when rendering your routes.

- `headers` - The headers sent to the client when using SSR and `createMiddleware` (see below).

- `statusCode` - The status code sent to the client when using SSR and `createMiddleware` (see below).

- `documentTitle` - The current title of the document.

- `metaDescription` - The current description of the document.

- `metaRobots` - How robots should treat the document.  Defaults to `index,follow`.

- `iconFile` - The current favicon for the document.  Defaults to `/static/favicon.ico`.

- `cssFiles` - The current CSS files for the document.

- `jsFiles` - The current JS files for the document.

- `requestBody` - Derived from `request.body` when used with `createMiddleware` (see below).

- `requestMethod` - Derived from `request.method` when used with `createMiddleware` (see below).

- `acceptJson` - Derived from `request.headers.accept` (`true` if `indexOf('json') > -1`) when used with `createMiddleware` (see below).

- `formData` - Derived from `requestBody` and matching `requestBody._formId` to the component's `props.formId` when used with `createMiddleware` and the `Form` component (see below).


A couple of notes:

1.  Upon initializing the store, `replaceWindowPath` is automatically called which can be used to properly initialize the state of any other providers who make use of this provider's `REPLACE_WINDOW_PATH` action type.

2.  When navigating through history (i.e., when the `popstate` event is triggered on the `window`), if a `windowPath` is present within the `window.history.state`, the `REPLACE_WINDOW_PATH` action type will be dispatched on top of the `window.history.state` (stored action) to indicate that the `window.location.pathname` has been changed; or if a `documentTitle` is present for some reason, the `SET_DOCUMENT_TITLE` action type will be dispatched instead.


## Usage (Components)

- `Link` - A simple wrapper around `<a { ...props } />`, which intercepts the click event to prevent a full page reload when JavaScript is enabled and triggers the `pushWindowPath` `action` so the app can be updated accordingly; and of course if JS is disabled, since all your rendering logic depends on your page provider's store's state (using `request.originalUrl` on the server), it all renders exactly the same as it would if JS was enabled client-side.  Simply treat this as you would any other `<a/>` element.

- `Form` - A simple wrapper around `<form { ...props } />`.  Combined with `createMiddleware` (see below), it intercepts the `onSubmit` event and allows all of your `actions` to be automatically triggered on the server, whether or not JS is enabled.  If JS is enabled, it will trigger the action on the server via `XMLHttpRequest`.  All you need is a `formId` prop combined with an `onSubmit` prop that accepts `formData` as a second argument.  The `formId` prop should exist within both the `Form` instance and the component instance rendering the form.  See [`bloggur`'s `EntryCreator` component](https://github.com/loggur/bloggur/blob/master/src/components/EntryCreator.js) for a full example.


## Usage (Express Middleware)

- `createMiddleware (Object options)` - Returns a function that can be used as `express` middleware and will do the following for you, server-side:
  
  - Automatically render the state of the app depending on some `defaultProps` (`{ providers, providedState }`), the `request` (`{ originalUrl: windowPath, method: requestMethod, body: requestBody }`), and optional `formData` (see the `Form` component above).

  - Respond with a full document string describing the current page - i.e., headers, status code, title, meta, favicon, js files, and css files - all controlled by your React components.

  - Automatically wait for asynchronous `actions` before rendering.

  - When used with the `Form` component (above), it will automatically trigger `actions` on the server for clients with JS disabled, or if JS is enabled, the `actions` will be triggered server-side via `XMLHttpRequest` and the updated state of the server's stores will be returned.

  - Automatically redirect clients with JS disabled to a new URL when the `pushWindowPath` or `replaceWindowPath` actions are called.

  - Automatically optionally send a 408 (timeout) status when a request takes too long.

The `options` object passed to `createMiddleware` should take the following shape:

  - `defaultProps` - Extended to contain info about the request and then passed to your `renderToString` function.  See [`bloggur/src/defaultProps.js`](https://github.com/loggur/bloggur/blob/master/src/defaultProps.js) for a full example.

  - `renderToString (Object props)` - This function should typically use `react-dom/server`'s `renderToString` method under the hood to render your app to a string.  See [`bloggur/src/renderAppToString.js`](https://github.com/loggur/bloggur/blob/master/src/renderAppToString.js) for a full example.

  - `renderDocumentToString (String html, Object providedState, Object clientState)` - Optional function that returns the string representation of the entire document.  The `providedState` and `clientState` objects come form the `getProvidedState` and `getClientState` functions below.  See [`defaultRenderDocumentToString.js`](https://github.com/loggur/provide-page/blob/master/src/defaultRenderDocumentToString.js) as an example.

  - `getProvidedState` - Optional object or function that should return the `providedState` prop passed to both `renderToString` and `renderDocumentToString`.  Defaults to all of your providers' stores' states combined into a single object.  If it's an object, it will use [`redux-replicate/src/selectKeys.js`](https://github.com/loggur/redux-replicate/blob/master/src/selectKeys.js).  If it's a function, your providers' stores' states combined into a single object will be passed to it.  See [`bloggur/src/middleware.js`](https://github.com/loggur/bloggur/blob/master/src/middleware.js) for a full example where we concatenate the selected theme's files with the `cssFiles` and `jsFiles` reducers so that they're included as `link` and `script` tags when the document string is rendered.

  - `getClientState` - Optional function that should return the object to be replicated to the client.  Defaults to the `providedState`.  If it's an object, it will use [`redux-replicate/src/selectKeys.js`](https://github.com/loggur/redux-replicate/blob/master/src/selectKeys.js).  If it's a function, the `providedState` will be passed to it.

  - `maxRenders` - Defaults to 2.  After the first render, the `requestMethod` and `requestBody` reducers are set to `GET` and an empty object, respectively.  This is to ensure that actions don't get triggered twice as a result of logic depending on data submitted via some `Form` and so that the app may be rendered correctly and returned within the same request.  **Note:** If you find yourself needing to render more than twice, you may want to reconsider your design.

  - `maxResponseTime` - Default to 2000 (milliseconds).  Sends a 408 status code if this timeout is reached.  Setting this to 0 will disable it.


## Example

See the following modules within [`bloggur`](https://github.com/loggur/bloggur):

  - [`providers/entries.js`](https://github.com/loggur/bloggur/blob/master/src/providers/entries.js) - A `combinedProvider` that depends on the current `windowPath`.

  - [`server.development.js`](https://github.com/loggur/bloggur/blob/master/src/server.development.js) - Passing hot reloadable middleware to `express`.

  - [`server.production.js`](https://github.com/loggur/bloggur/blob/master/src/server.production.js) - Passing production-ready, bundled middleware to `express`.

  - [`middleware.js`](https://github.com/loggur/bloggur/blob/master/src/middleware.js) - Using `createMiddleware` to create middleware specific to the app.

  - [`components/EntryContents.js`](https://github.com/loggur/bloggur/blob/master/src/components/EntryContents.js) - A component that renders different components based on `reducers` from the `entries` provider and sets the `documentTitle` and `statusCode` accordingly.

  - [`components/EntryCreator.js`](https://github.com/loggur/bloggur/blob/master/src/components/EntryCreator.js) - A component that triggers an action to create an entry on both the client and the server using the `Form` component.


## Migration from `react-router`

`react-router` and others like it are all fantastic libraries, but with the `providers` paradigm, there is no reason to use them.  All you have to do is use `provide-page` like you would any other provider and keep your routing logic within your components' `render` methods.  I think you'll find that things actually get simpler while you'll also have more control and flexibility at the same time.  There's no need to try to put everything within your initial call to `render` when mounting the app, as that can quickly get out of hand for large, complex applications.  All you need is `render(<App providers={providers} etc />)`.

The equivalent of `router.transitionTo` is to provide the `pushWindowPath` and/or `replaceWindowPath` actions to your components and use them wherever necessary.

As for code-splitting, it should be implemented the same way themes are split.  See [`provide-theme`](https://github.com/loggur/provide-theme) for an example of how that's done.  **A code-splitting tutorial using `provide-page` is coming soon!**
