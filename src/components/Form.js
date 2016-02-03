import React, { Component, PropTypes } from 'react';
import provide from 'react-redux-provide';
import eventsPropTypes from '../eventsPropTypes';

@provide
export default class Form extends Component {
  static propTypes = {
    className: PropTypes.string,
    acceptCharset: PropTypes.string,
    action: PropTypes.string,
    autocomplete: PropTypes.string,
    enctype: PropTypes.string,
    id: PropTypes.string,
    method: PropTypes.string,
    name: PropTypes.string,
    novalidate: PropTypes.string,
    target: PropTypes.string,
    formId: PropTypes.string,
    formData: PropTypes.object,
    children: PropTypes.any,
    ...eventsPropTypes
  };

  static defaultProps = {
    method: 'post'
  };

  componentWillMount() {
    const { onSubmit, formData } = this.props;

    if (formData) {
      onSubmit(null, formData);
    }
  }

  render() {
    const { formId, onSubmit } = this.props;
    const formProps = {
      ...this.props,
      onSubmit: event => {
        const { elements } = this.refs.form;
        const formData = {};

        for (let element of elements) {
          if (element.name) {
            if (!element.value && element.innerText) {
              formData[element.name] = element.innerText;
            } else {
              formData[element.name] = element.value;
            }
          }
        }

        if (event.stopPropagation) {
          const xhr = new XMLHttpRequest();
          const { pathname, search } = window.location;
          const contentType = 'application/json;charset=UTF-8';
          const accept = 'application/json';

          xhr.open('POST', pathname + search, true);
          xhr.setRequestHeader('Content-Type', contentType);
          xhr.setRequestHeader('Accept', accept);
          /* TODO: merge response into stores
          xhr.onload = () => {
            console.log(xhr.response);
          };*/
          xhr.send(JSON.stringify(formData));

          event.stopPropagation();
          event.preventDefault();
        }

        if (onSubmit) {
          onSubmit(event, formData);
        }
      }
    };

    return (
      <form { ...formProps } ref="form">
        {formProps.children}

        <input type="hidden" name="_formId" value={formId} />
      </form>
    );
  }
}
