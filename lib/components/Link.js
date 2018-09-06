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

var Link = (function (_Component) {
  _inherits(Link, _Component);

  function Link() {
    _classCallCheck(this, _Link);

    _Component.apply(this, arguments);
  }

  Link.prototype.render = function render() {
    var _this = this,
        _arguments = arguments;

    var _onClick = this.props.onClick;

    var aProps = _extends({}, this.props, {
      onClick: function onClick(event) {
        event.stopPropagation();
        event.preventDefault();

        _this.props.pushWindowPath(_this.props.href);

        if (_onClick) {
          _onClick.apply(_this, _arguments);
        }
      }
    });

    // Delete prop so React doesn't complain when it is passed to <a />
    delete aProps.pushWindowPath;

    return _react2['default'].createElement('a', aProps);
  };

  _createClass(Link, null, [{
    key: 'propTypes',
    value: _extends({
      className: _propTypes2['default'].string,
      href: _propTypes2['default'].string,
      hrefLang: _propTypes2['default'].string,
      media: _propTypes2['default'].string,
      type: _propTypes2['default'].string,
      id: _propTypes2['default'].string,
      rel: _propTypes2['default'].string,
      target: _propTypes2['default'].string,
      children: _propTypes2['default'].any,
      pushWindowPath: _propTypes2['default'].func.isRequired
    }, _eventsPropTypes2['default']),
    enumerable: true
  }]);

  var _Link = Link;
  Link = _reactReduxProvide2['default'](Link) || Link;
  return Link;
})(_react.Component);

exports['default'] = Link;
module.exports = exports['default'];