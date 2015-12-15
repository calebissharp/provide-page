# react-redux-provide-history

[![build status](https://img.shields.io/travis/loggur/react-redux-provide-history/master.svg?style=flat-square)](https://travis-ci.org/loggur/react-redux-provide-history) [![npm version](https://img.shields.io/npm/v/react-redux-provide-history.svg?style=flat-square)](https://www.npmjs.com/package/react-redux-provide-history)
[![npm downloads](https://img.shields.io/npm/dm/react-redux-provide-history.svg?style=flat-square)](https://www.npmjs.com/package/react-redux-provide-history)

An alternative to `react-router` which provides the HTML5 History API to React components.


## Installation

```
npm install react-redux-provide-history --save
```


## Usage

> **Note:**  This will only work clientside at the moment.  Server rendering coming soon!

This provides React components with the HTML5 History API via the following `propTypes`:

- `pushWindowPath` - works exactly like `window.history.pushState` except arguments are reversed (`path` then `title` then `state`)
- `replaceWindowPath` - works exactly like `window.history.replaceState` except arguments are reversed (`path` then `title` then `state`)
- `setDocumentTitle` - sets `document.title` (why? see the following `reducers`)

Your components may also be provided the following reduced props:

- `windowPath` - essentially `window.location.pathname`
- `documentTitle` - when navigating through history, this gets updated
- `historyData` - essentially `window.history.state`, which is actually the `action` that triggered the navigation; avoid using this directly but it's there if you absolutely need it

A few notes:

1.  Upon initializing the store, `replaceWindowPath` is automatically called which can be used to properly initialize the state of any other providers who make use of this provider's `REPLACE_WINDOW_PATH` action type.

2.  When navigating through history (i.e., when the `popstate` event is triggered on the `window`), if a `path` is present within the `window.history.state`, the `REPLACE_WINDOW_PATH` action type will be dispatched on top of the `window.history.state` (stored action) to indicate that the `window.location.pathname` has been changed; or if only a `title` is present for some reason, the `SET_DOCUMENT_TITLE` action type will be dispatched instead.

3.  If you're migrating to this from `react-router` or if you want a quick and easy way to include links in your app that work both clientside and serverside, you can `import { Link } from 'react-redux-provide-history';` and use it like any other `a` element.

4.  The equivalent of `router.transitionTo` is to provide the `pushWindowPath` and/or `replaceWindowPath` to your components and use wherever necessary.


## Example

See [`bloggur`](https://github.com/loggur/bloggur) and its [`entries` provider](https://github.com/loggur/bloggur/blob/master/providers/entries.js) for a good example of how to create providers that depend on the current path.  (Note: [`react-redux-provide`](https://github.com/loggur/react-redux-provide)'s `shareStore` utility function helps when you need providers to depend on one another.)
