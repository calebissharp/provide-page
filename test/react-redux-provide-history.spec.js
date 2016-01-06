import './init';
import expect from 'expect';
import React, { PropTypes } from 'react';
import { Simulate } from 'react-addons-test-utils';
import { renderTest } from 'react-redux-provide-test-utils';
import { Test } from './components/index';
import providers from './providers/index';

const context = {
  providers,
  providedState: {
    list: [
      {
        href: '/test-one',
        hrefTitle: 'Test One'
      },
      {
        href: '/test-two',
        hrefTitle: 'Test Two'
      }
    ]
  }
};

const host = 'http://localhost:8080';
const test = renderTest(Test, { ...context });

// need manually trigger popstate event in simulated env
function triggerPopstate() {
  const event = document.createEvent('HTMLEvents');
  event.initEvent('popstate', true, true);
  window.dispatchEvent(event);
}

describe('react-redux-provide-history', () => {
  it('should have initialized windowPath and documentTitle', () => {
    expect(test.wrappedInstance.props.windowPath).toBe('/test-index');
    expect(test.wrappedInstance.props.documentTitle).toBe('Testing');
  });

  it('should render correctly', () => {
    expect(test.node.tagName).toBe('DIV');
    expect(test.node.className).toBe('test');
    expect(test.node.childNodes.length).toBe(2);

    expect(test.node.childNodes[0].tagName).toBe('A');
    expect(test.node.childNodes[0].href).toBe(host+'/test-one');
    expect(test.node.childNodes[0].textContent).toBe('Test One');

    expect(test.node.childNodes[1].tagName).toBe('A');
    expect(test.node.childNodes[1].href).toBe(host+'/test-two');
    expect(test.node.childNodes[1].textContent).toBe('Test Two');
  });

  it('should update windowPath and documentTitle when Link is clicked', () => {
    Simulate.click(test.node.childNodes[0]);

    expect(test.wrappedInstance.props.windowPath).toBe('/test-one');
    expect(test.wrappedInstance.props.documentTitle).toBe('Test One');

    expect(window.location.pathname).toBe('/test-one');
    expect(document.title).toBe('Test One');
  });

  it('should pushWindowPath', () => {
    test.wrappedInstance.props.pushWindowPath('/test-two', 'Test Two');

    expect(test.wrappedInstance.props.windowPath).toBe('/test-two');
    expect(test.wrappedInstance.props.documentTitle).toBe('Test Two');

    expect(window.location.pathname).toBe('/test-two');
    expect(document.title).toBe('Test Two');
  });

  it('should replaceWindowPath', () => {
    test.wrappedInstance.props.replaceWindowPath('/test-three', 'Test Three');

    expect(test.wrappedInstance.props.windowPath).toBe('/test-three');
    expect(test.wrappedInstance.props.documentTitle).toBe('Test Three');

    expect(window.location.pathname).toBe('/test-three');
    expect(document.title).toBe('Test Three');
  });

  it('should setDocumentTitle', () => {
    test.wrappedInstance.props.setDocumentTitle('Test!!!');

    expect(test.wrappedInstance.props.windowPath).toBe('/test-three');
    expect(test.wrappedInstance.props.documentTitle).toBe('Test!!!');

    expect(window.location.pathname).toBe('/test-three');
    expect(document.title).toBe('Test!!!');
  });

  it('should update state correctly when going through history', () => {
    window.history.back();
    expect(window.location.pathname).toBe('/test-one');
    triggerPopstate();

    expect(test.wrappedInstance.props.windowPath).toBe('/test-one');
    expect(test.wrappedInstance.props.documentTitle).toBe('Test One');

    expect(window.location.pathname).toBe('/test-one');
    expect(document.title).toBe('Test One');

    window.history.back();
    expect(window.location.pathname).toBe('/test-index');
    triggerPopstate();

    expect(test.wrappedInstance.props.windowPath).toBe('/test-index');
    expect(test.wrappedInstance.props.documentTitle).toBe('Testing');

    expect(window.location.pathname).toBe('/test-index');
    expect(document.title).toBe('Testing');
  });
});
