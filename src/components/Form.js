import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    submitForm: PropTypes.func.isRequired,
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

  onSubmit = event => {
    const { submitForm, onSubmit } = this.props;
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
      event.stopPropagation();
      event.preventDefault();

      submitForm(formData);
    }

    if (onSubmit) {
      onSubmit(event, formData);
    }
  };

  render() {
    const { formId } = this.props;
    const formProps = {
      ...this.props,
      onSubmit: this.onSubmit
    };

    return (
      <form { ...formProps } ref="form">
        {formProps.children}

        <input type="hidden" name="_formId" value={formId} />
      </form>
    );
  }
}
