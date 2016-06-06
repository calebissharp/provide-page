import React, { Component, PropTypes } from 'react';

export default class Form extends Component {
  static propTypes = {
    method: PropTypes.string,
    formId: PropTypes.string,
    formData: PropTypes.object,
    submitForm: PropTypes.func.isRequired,
    onSubmit: PropTypes.func,
    children: PropTypes.any
  };

  static defaultProps = {
    method: 'post'
  };

  componentWillMount() {
    const { onSubmit, formData } = this.props;

    if (formData && !formData._formHandled) {
      formData._formHandled = onSubmit(null, formData) !== false;
    }
  }

  onSubmit = event => {
    const { submitForm, onSubmit } = this.props;
    const elements = Array.prototype.slice.call(this.refs.form.elements);
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
