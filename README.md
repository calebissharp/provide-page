# provide-page

[![build status](https://img.shields.io/travis/loggur/provide-page/master.svg?style=flat-square)](https://travis-ci.org/loggur/provide-page) [![npm version](https://img.shields.io/npm/v/provide-page.svg?style=flat-square)](https://www.npmjs.com/package/provide-page)
[![npm downloads](https://img.shields.io/npm/dm/provide-page.svg?style=flat-square)](https://www.npmjs.com/package/provide-page)

Provides automatic server-side rendering and actions (regardless of whether or not client has JavaScript enabled) to React components.  Used in conjunction with [`provide-router`](https://github.com/loggur/provide-router).


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

### setRequestError (String requestError)

Sets the error for the current request.  This will be sent to the client.

### submitRequest ({ String requestMethod, Object requestBody, Object requestHeaders, Object requestSession, Boolean acceptJson })

This action is mainly used automatically in conjunction with the `Form` component (see below), but you may trigger it manually if for some reason you need to do that.

### submitForm (Object formData, Optional Function onSubmit)

This action is mainly used automatically in conjunction with the `Form` component (see below), but you may trigger it manually if for some reason you need to do that.  The `onSubmit` function will be called after the client receives the server's response.  This is useful for actions that can't be properly performed before receiving the necessary states from the server - e.g., resource creation.  The `Form` component will include the `onSubmit` function by default if the `Form`'s `serverSide` prop is `true`.

### updateSession (Object updates)

Assigns the updates to `requestSession`.

### destroySession ()

Destroys the `requestSession`.


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

### requestSession

Derived from `request.session` when used with `createMiddleware` (see below).

### requestMethod

Derived from `request.method` when used with `createMiddleware` (see below).

### requestBody

Derived from `request.body` when used with `createMiddleware` (see below).

### requestHeaders

Derived from `request.headers` when used with `createMiddleware` (see below).

### requestError

A message you can set to be sent to the client.

### acceptJson

Derived from `request.headers.accept` (`true` if `indexOf('application/json') > -1`) when used with `createMiddleware` (see below).  If `true`, the server will respond with the stores states after rendering the current URL on its end.

### formData

Derived from `requestBody` and matching `requestBody._formId` to the component's `props.formId` when used with `createMiddleware` and the `Form` component (see below).

If a form element has a `data-json` attribute, it will be parsed using `JSON.parse` and become the element's value within `formData`.  This is useful for certain data structures which can't be easily represented as a single element's value.

### ssrDisabled

Defaults to `false`.  Setting to `true` will prevent automatic retrieval of states from the server upon each route change.  Also used internally within the `Form` component to dictate how each form is handled.  Useful when you want to create components with forms that will work with both server-side rendering and client-only (or serverless) rendering.  Intended to be configured as an initial state when mounting the app.

  To globally disable handling of forms for automatic server-side rendering:
  ```js
  // src/providers/page.js

  import page from 'provide-page';

  // set the page provider's initial state like so;
  // it will use this state when handling `Form` submissions
  const ssrDisabled = true;

  page.state = { ssrDisabled };

  export default page;
  ```

  You can also target specific forms by their `formId` prop:
  ```js
  // src/providers/page.js

  import page from 'provide-page';

  // target specific forms
  const ssrDisabled = {
    someFormId: true,
    anotherFormId: true
  };

  page.state = { ssrDisabled };

  export default page;
  ```

  Or you can set `ssrDisabled` to an arbitrary configurable object used internally within your app to explicitly pass the `ssrDisabled` prop to your Forms, if for example you have some providers with both SSR replication and others that talk to a 3rd party API:
  ```js
  // src/providers/page.js

  import page from 'provide-page';

  // target specific forms
  const ssrDisabled = {
    someThirdPartyProvider: true,
    anotherThirdPartyProvider: true
  };

  page.state = { ssrDisabled };

  export default page;


  // src/components/SomeComponent.js

  import React, { PropTypes } from 'React';
  import { Form } from 'provide-page';

  const SomeComponent = ({ formId, ssrDisabled }) => (
    <Form
      formId={formId}
      ssrDisabled={Boolean(ssrDisabled.someThirdPartyProvider)}
      onSubmit={(event, formData) => console.log(formData)}
    >
      <input type="text" name="someInput" />
      <input type="submit" value="Submit" />
    </Form>
  );

  SomeComponent.propTypes = {
    formId: PropTypes.string.isRequired,
    ssrDisabled: PropTypes.object.isRequired
  };

  SomeComponent.defaultProps = {
    formId: 'SomeComponent'
  };

  export default SomeComponent;
  ```

  Or you can explicitly pass the `ssrDisabled` prop to the `Form` (not usually recommended as it might prevent configuration/reusability):
  ```js
  // src/components/SomeComponent.js

  import React, { PropTypes } from 'React';
  import { Form } from 'provide-page';

  const SomeComponent = ({ formId }) => (
    <Form
      formId={formId}
      ssrDisabled={true}
      onSubmit={(event, formData) => console.log(formData)}
    >
      <input type="text" name="someInput" />
      <input type="submit" value="Submit" />
    </Form>
  );

  SomeComponent.propTypes = {
    formId: PropTypes.string.isRequired
  };

  SomeComponent.defaultProps = {
    formId: 'SomeComponent'
  };

  export default SomeComponent;
  ```


## Components

### Form

A simple wrapper around `<form { ...props } />`.  Combined with `createMiddleware` (see below), it intercepts the `onSubmit` event and allows all of the resulting actions to occur on the server, whether or not JS is enabled.  If JS is enabled and the `ssrDisabled` prop is falsy, it will trigger the action on the server via `XMLHttpRequest`.  All you need is a `formId` prop combined with an `onSubmit` prop that accepts `formData` as a second argument.  Include a `serverSide` prop if the client needs states from the server before it can continue.  The `formId` prop should exist within both the `Form` instance and the component instance rendering the form.  See [Lumbur's `UserLogIn` component](https://github.com/loggur/lumbur/blob/master/src/components/UserLogIn.js) for a full example.


## Middleware

### createMiddleware (Object options)

Returns a function that can be used as `express` (or other) middleware and will do the following for you, server-side:

  - Automatically render the state of the app depending on some `defaultProps` (`{ providers }`), the `request` (`{ method: requestMethod, body: requestBody, headers: requestHeaders }`), and optional `formData` (see the `Form` component above).

  - Respond with a full document string describing the current page - i.e., headers, status code, title, meta, favicon, js files, and css files - all controlled by your React components.

  - Automatically wait for asynchronous `actions` before rendering.

  - When used with the `Form` component (above), it will automatically trigger `actions` on the server regardless of whether or not JS is enabled.

  - Automatically redirect clients with JS disabled to a new URL when it changes.

  - Automatically optionally send a 408 (timeout) status when a request takes too long.

The `options` object passed to `createMiddleware` should take the following shape:

### defaultProps

Extended to contain info about the request and then passed to your `renderToString` function.  See [`lumbur/src/defaultProps.js`](https://github.com/loggur/lumbur/blob/master/src/defaultProps.js) for a full example.

### renderToString (Object props)

This function should typically use `react-dom/server`'s `renderToString` method under the hood to render your app to a string.  See [`lumbur/src/renderAppToString.js`](https://github.com/loggur/lumbur/blob/master/src/renderAppToString.js) for a full example.

### renderDocumentToString (String html, Object states, Object clientStates)

Optional function that returns the string representation of the entire document.  The `states` and `clientStates` objects come form the `getStates` and `getClientStates` functions below.  See [`defaultRenderDocumentToString.js`](https://github.com/loggur/provide-page/blob/master/src/defaultRenderDocumentToString.js) for an example.

### getStates

Optional function that should return an object containing provider keys and their states, ultimately passed to both `renderToString` and `renderDocumentToString`.  Your current providers' stores' states will be passed to this function.  See [`lumbur/src/middleware.js`](https://github.com/loggur/lumbur/blob/master/src/middleware.js) for a full example where we concatenate the selected theme's files with the `cssFiles` and `jsFiles` reducers so that they're included as `link` and `script` tags when the document string is rendered.

**Note:** The middleware will look for a special optional `clientStateKeys` array on each provider which is used for determining which reducer keys (i.e., stores' states) to send to the client upon each request.  The `page` provider defaults to only the `requestSession` and `requestError` keys.  The `router` provider defaults to no keys.  Every other provider defaults to all keys.  See [`lumbur/src/renderAppToString.js`](https://github.com/loggur/lumbur/blob/master/src/renderAppToString.js) for an example.

### maxRenders

Defaults to 20.  The first render initializes all of the necessary providers, and a second render may occur if the providers' replicators have changed the initial state.  After everything is fully initialized, if a `request.body` exists, it will be treated as `formData` and the `submitRequest` action is dispatched, which typically subsequently triggers other actions and will continue rerendering until either stores' states have stopped changing or `maxRenders` is reached.

### maxResponseTime

Default to 2000 (milliseconds).  Sends a 408 status code if this timeout is reached.  Setting this to 0 will disable it.


## Example

See the following modules within [Lumbur](https://github.com/loggur/lumbur):

### [server.development.js](https://github.com/loggur/lumbur/blob/master/server.development.js)

Passing hot reloadable middleware to `express`.

### [server.production.js](https://github.com/loggur/lumbur/blob/master/server.production.js)

Passing production-ready, bundled middleware to `express`.

### [middleware.js](https://github.com/loggur/lumbur/blob/master/src/middleware.js)

Using `createMiddleware` to create middleware specific to the app.
