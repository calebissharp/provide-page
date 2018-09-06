'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactReduxProvide = require('react-redux-provide');

var _reactReduxProvide2 = _interopRequireDefault(_reactReduxProvide);

var _eventsPropTypes = require('../eventsPropTypes');

var _eventsPropTypes2 = _interopRequireDefault(_eventsPropTypes);

var Form = (function (_Component) {
  _inherits(Form, _Component);

  function Form() {
    var _this = this;

    _classCallCheck(this, _Form);

    _Component.apply(this, arguments);

    this.onSubmit = function (event) {
      var _props = _this.props;
      var submitForm = _props.submitForm;
      var onSubmit = _props.onSubmit;
      var elements = _this.refs.form.elements;

      var formData = {};

      for (var _iterator = elements, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref;

        if (_isArray) {
          if (_i >= _iterator.length) break;
          _ref = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done) break;
          _ref = _i.value;
        }

        var element = _ref;

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
  }

  Form.prototype.componentWillMount = function componentWillMount() {
    var _props2 = this.props;
    var onSubmit = _props2.onSubmit;
    var formData = _props2.formData;

    if (formData) {
      onSubmit(null, formData);
    }
  };

  Form.prototype.render = function render() {
    var formId = this.props.formId;

    var formProps = _extends({}, this.props, {
      onSubmit: this.onSubmit
    });

    return _react2['default'].createElement(
      'form',
      _extends({}, formProps, { ref: 'form' }),
      formProps.children,
      _react2['default'].createElement('input', { type: 'hidden', name: '_formId', value: formId })
    );
  };

  _createClass(Form, null, [{
    key: 'propTypes',
    value: _extends({
      className: _propTypes2['default'].string,
      acceptCharset: _propTypes2['default'].string,
      action: _propTypes2['default'].string,
      autocomplete: _propTypes2['default'].string,
      enctype: _propTypes2['default'].string,
      id: _propTypes2['default'].string,
      method: _propTypes2['default'].string,
      name: _propTypes2['default'].string,
      novalidate: _propTypes2['default'].string,
      target: _propTypes2['default'].string,
      formId: _propTypes2['default'].string,
      formData: _propTypes2['default'].object,
      submitForm: _propTypes2['default'].func.isRequired,
      children: _propTypes2['default'].any
    }, _eventsPropTypes2['default']),
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      method: 'post'
    },
    enumerable: true
  }]);

  var _Form = Form;
  Form = _reactReduxProvide2['default'](Form) || Form;
  return Form;
})(_react.Component);

exports['default'] = Form;
module.exports = exports['default'];