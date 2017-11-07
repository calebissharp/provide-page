import './init';
import 'react-redux-provide/lib/install';
import expect from 'expect';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Simulate } from 'react-dom/test-utils';
import { renderTest } from 'react-redux-provide-test-utils';
import { Test, Title } from './components/index';
import page, {
  Form,
  createMiddleware,
  defaultRenderDocumentToString
} from '../src/index';

const { getComponentInstance } = renderTest(Test, { providers: { page } });

describe('provide-page', () => {
  it('should have initialized props correctly', () => {
    expect(getComponentInstance(Title).props.documentTitle).toBe('Testing');
  });

  it('should setDocumentTitle', done => {
    getComponentInstance(Title).props.setDocumentTitle('Test!!!', true);

    setTimeout(() => {
      expect(getComponentInstance(Title).props.documentTitle).toBe('Test!!!');
      expect(document.title).toBe('Test!!!');
      done();
    });
  });

  describe('Form component', () => {
    it('should exist (TODO: these tests)', () => {
      expect(typeof Form.propTypes).toBe('object');
    });
  });

  describe('createMiddleware', () => {
    it('should return express middleware (TODO: these tests)', () => {
      expect(
        createMiddleware({}).toString().indexOf('request, response, next') > -1
      ).toBe(true);
    });
  });

  describe('defaultRenderDocumentToString', () => {
    // TODO
    it('should return document HTML (TODO: these tests)', () => {
      const html = defaultRenderDocumentToString('<b>o</b>', {}, {});

      expect(
        html.indexOf('<!DOCTYPE html>') === 0
        && html.indexOf('<title>Page</title>') > -1
        && html.indexOf('<div id="root"><b>o</b></div>') > -1
        && html.indexOf('window.clientStates = {}') > -1
        && html.indexOf('</html>') > -1
      ).toBe(true);
    });
  });
});
