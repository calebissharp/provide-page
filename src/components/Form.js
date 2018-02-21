import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Form extends Component {
  static propTypes = {
    method: PropTypes.string,
    formId: PropTypes.string,
    formData: PropTypes.object,
    serverSide: PropTypes.bool,
    ssrDisabled: PropTypes.any,
    submitForm: PropTypes.func.isRequired,
    onChange: PropTypes.func,
    onSubmit: PropTypes.func,
    getFormData: PropTypes.func.isRequired,
    children: PropTypes.any
  };

  static defaultProps = {
    method: 'post',
    getFormData: form => {
      const elements = Array.prototype.slice.call(form.elements);
      const formData = {};

      for (let element of elements) {
        if (element.name) {
          if (element.getAttribute('data-json')) {
            try {
              formData[element.name] = JSON.parse(
                element.getAttribute('data-json')
              );
            } catch(error) {
            }
          } else if (!element.value && element.innerText) {
            formData[element.name] = element.innerText;
          } else if (element.type === 'checkbox') {
            formData[element.name] = element.checked ? element.value : '';
          } else if (element.type === 'radio') {
            if (element.checked) {
              formData[element.name] = element.value;
            }
          } else {
            formData[element.name] = element.value;
          }
        }
      }

      return formData;
    }
  };

  componentWillMount() {
    const { onSubmit, formData } = this.props;

    if (formData && !formData._formHandled) {
      formData._formHandled = onSubmit(null, formData) !== false;
    }
  }

  onChange = event => {
    const { onChange, getFormData } = this.props;

    if (onChange) {
      onChange(event, getFormData(this.refs.form));
    }
  };

  onSubmit = event => {
    const {
      formId,
      submitForm,
      serverSide,
      ssrDisabled,
      onSubmit
    } = this.props;
    const formData = this.props.getFormData(this.refs.form);

    if (event && event.stopPropagation) {
      event.stopPropagation();
      event.preventDefault();

      if (ssrDisabled === true || ssrDisabled && ssrDisabled[formId]) {
        if (onSubmit) {
          onSubmit(event, formData);
        }
      } else if (serverSide) {
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
      ssrDisabled,
      submitForm,
      getFormData,
      onChange,
      onSubmit,
      ...formProps
    } = this.props;

    formProps.onChange = this.onChange;
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
