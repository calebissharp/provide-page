import React, { Component, PropTypes } from 'react';

export default class Form extends Component {
  static propTypes = {
    method: PropTypes.string,
    formId: PropTypes.string,
    formData: PropTypes.object,
    serverSide: PropTypes.bool,
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
    const { submitForm, serverSide, onSubmit } = this.props;
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

    if (event && event.stopPropagation) {
      event.stopPropagation();
      event.preventDefault();

      if (serverSide) {
        submitForm(formData, onSubmit);
      } else {
        submitForm(formData);

        if (onSubmit) {
          onSubmit(event, formData);
        }
      }
    } else if (onSubmit) {
      onSubmit(event, formData);
    }
  };

  render() {
    const {
      formId,
      formData,
      serverSide,
      submitForm,
      onSubmit,
      children,
      ...formProps
    } = this.props;

    formProps.onSubmit = this.onSubmit;
    formProps.ref = 'form';

    return (
      <form { ...formProps }>
        {formProps.children}

        <input type="hidden" name="_formId" value={formId} />
      </form>
    );
  }
}
