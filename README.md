# provide-page

[![build status](https://img.shields.io/travis/loggur/provide-page/master.svg?style=flat-square)](https://travis-ci.org/loggur/provide-page) [![npm version](https://img.shields.io/npm/v/provide-page.svg?style=flat-square)](https://www.npmjs.com/package/provide-page)
[![npm downloads](https://img.shields.io/npm/dm/provide-page.svg?style=flat-square)](https://www.npmjs.com/package/provide-page)

Provides automatic server-side rendering and actions (regardless of whether or not client has JavaScript enabled) to React components.  Use in conjunction with [`provide-router`](https://github.com/loggur/provide-router).


## Table of contents

1.  [Installation](#installation)
2.  [Actions](#actions)
3.  [Reducers](#reducers)
4.  [Components](#components)
5.  [Middleware](#middleware)
6.  [Example](#example)


## Installation

```
npm install provide-page --save
```


## Actions

You can use the following `actions` via `propTypes` to manage the state of the document both client-side and server-side.  You should typically only call these `actions` within `componentWillMount` and `componentWillReceiveProps`.  See [`test/components/Test.js`](https://github.com/loggur/provide-page/blob/master/test/components/Test.js) for an example.

### setHeaders (Object headers)

These optional headers will be sent to the client with SSR (server-side rendering).

### setStatusCode (Number statusCode)

An optional status code to send to the client with SSR.

### setDocumentTitle (String documentTitle)

Sets the document's title.

### setMetaDescription (String metaDescription)

Sets the document's meta description tag.

### setMetaRobots (String metaRobots)

Sets the document's meta robots tag.

### setIconFile (String iconFile)

Sets the document's favicon filename.

### setCssFiles (Array cssFiles)

Sets the CSS filenames to be included with the document as `link` elements within the `head` element.

### setJsFiles (Array jsFiles)

Sets the JS filenames to be included with the document as `script` elements appended to the `body` element.

### submitRequest (Object requestBody, String requestMethod, Boolean acceptJson)

This action is mainly used automatically in conjunction with the `Form` component (see below), but you may trigger it manually if for some reason you need to do that.


## Reducers

Your components may also be provided the following reduced `propTypes`.

### headers

The headers sent to the client when using SSR and `createMiddleware` (see below).

### statusCode

The status code sent to the client when using SSR and `createMiddleware` (see below).

### documentTitle

The current title of the document.

### metaDescription

The current description of the document.

### metaRobots

How robots should treat the document.  Defaults to `index,follow`.

### iconFile

The current favicon for the document.  Defaults to `/static/favicon.ico`.

### cssFiles

The current CSS files for the document.

### jsFiles

The current JS files for the document.

### requestBody

Derived from `request.body` when used with `createMiddleware` (see below).

### requestMethod

Derived from `request.method` when used with `createMiddleware` (see below).

### acceptJson

Derived from `request.headers.accept` (`true` if `indexOf('json') > -1`) when used with `createMiddleware` (see below).

### formData

Derived from `requestBody` and matching `requestBody._formId` to the component's `props.formId` when used with `createMiddleware` and the `Form` component (see below).


## Components

### Form

A simple wrapper around `<form { ...props } />`.  Combined with `createMiddleware` (see below), it intercepts the `onSubmit` event and allows all of your `actions` to be automatically triggered on the server, whether or not JS is enabled.  If JS is enabled, it will trigger the action on the server via `XMLHttpRequest`.  All you need is a `formId` prop combined with an `onSubmit` prop that accepts `formData` as a second argument.  The `formId` prop should exist within both the `Form` instance and the component instance rendering the form.  See [`bloggur`'s `EntryCreator` component](https://github.com/loggur/bloggur/blob/master/src/components/EntryCreator.js) for a full example.


## Middleware

### createMiddleware (Object options)

Returns a function that can be used as `express` middleware and will do the following for you, server-side:
  
  - Automatically render the state of the app depending on some `defaultProps` (`{ providers }`), the `request` (`{ method: requestMethod, body: requestBody }`), and optional `formData` (see the `Form` component above).

  - Respond with a full document string describing the current page - i.e., headers, status code, title, meta, favicon, js files, and css files - all controlled by your React components.

  - Automatically wait for asynchronous `actions` before rendering.

  - When used with the `Form` component (above), it will automatically trigger `actions` on the server for clients with JS disabled, or if JS is enabled, the `actions` will be triggered server-side via `XMLHttpRequest` and the updated state of the server's stores will be returned.

  - Automatically redirect clients with JS disabled to a new URL when it changes.

  - Automatically optionally send a 408 (timeout) status when a request takes too long.

The `options` object passed to `createMiddleware` should take the following shape:

### defaultProps

Extended to contain info about the request and then passed to your `renderToString` function.  See [`bloggur/src/defaultProps.js`](https://github.com/loggur/bloggur/blob/master/src/defaultProps.js) for a full example.

### renderToString (Object props)

This function should typically use `react-dom/server`'s `renderToString` method under the hood to render your app to a string.  See [`bloggur/src/renderAppToString.js`](https://github.com/loggur/bloggur/blob/master/src/renderAppToString.js) for a full example.

### renderDocumentToString (String html, Object states, Object clientStates)

Optional function that returns the string representation of the entire document.  The `states` and `clientStates` objects come form the `getStates` and `getClientStates` functions below.  See [`defaultRenderDocumentToString.js`](https://github.com/loggur/provide-page/blob/master/src/defaultRenderDocumentToString.js) for an example.

### getStates

Optional function that should return an object containing provider keys and their states, ultimately passed to both `renderToString` and `renderDocumentToString`.  Your current providers' stores' states will be passed to this function.  See [`bloggur/src/middleware.js`](https://github.com/loggur/bloggur/blob/master/src/middleware.js) for a full example where we concatenate the selected theme's files with the `cssFiles` and `jsFiles` reducers so that they're included as `link` and `script` tags when the document string is rendered.

**Note:** The middleware will look for a special optional `clientStateKeys` array on each provider which is used for determining which reducer keys (i.e., stores' states) to send to the client upon each request.  The `page` provider defaults to only the `requestSession` key.  The `router` provider defaults to no keys.  Every other provider defaults to all keys.  See [`bloggur/src/renderAppToString.js`](https://github.com/loggur/bloggur/blob/master/src/renderAppToString.js) for an example.

### maxRenders

Defaults to 2.  After the first render, the `requestMethod` and `requestBody` reducers are set to `GET` and an empty object, respectively.  This is to ensure that actions don't get triggered twice as a result of logic depending on data submitted via some `Form` and so that the app may be rendered correctly and returned within the same request.  **Note:** If you find yourself needing to render more than twice, you may want to reconsider your design.

### maxResponseTime

Default to 2000 (milliseconds).  Sends a 408 status code if this timeout is reached.  Setting this to 0 will disable it.


## Example

See the following modules within [`bloggur`](https://github.com/loggur/bloggur):

### [server.development.js](https://github.com/loggur/bloggur/blob/master/src/server.development.js)

Passing hot reloadable middleware to `express`.

### [server.production.js](https://github.com/loggur/bloggur/blob/master/src/server.production.js)

Passing production-ready, bundled middleware to `express`.

### [middleware.js](https://github.com/loggur/bloggur/blob/master/src/middleware.js)

Using `createMiddleware` to create middleware specific to the app.

### [components/EntryContents.js](https://github.com/loggur/bloggur/blob/master/src/components/EntryContents.js)

A component that renders different components based on `reducers` from the `entries` provider and sets the `documentTitle` and `statusCode` accordingly.

### [components/EntryCreator.js](https://github.com/loggur/bloggur/blob/master/src/components/EntryCreator.js)

A component that triggers an action to create an entry on both the client and the server using the `Form` component.
