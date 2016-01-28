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
      onSubmit({ formData });
    }
  }

  render() {
    const { formId, onSubmit } = this.props;
    const formProps = {
      ...this.props,
      onSubmit: event => {
        const { elements } = this.refs.form;
        const formData = {};

        if (event.stopPropagation) {
          event.stopPropagation();
          event.preventDefault();
        }

        for (let element of elements) {
          if (element.name) {
            if (!element.value && element.innerText) {
              formData[element.name] = element.innerText;
            } else {
              formData[element.name] = element.value;
            }
          }
        }

        if (onSubmit) {
          onSubmit.apply(this, arguments);
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
