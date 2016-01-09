'use strict';

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _demo = require('../demo');

var _demo2 = _interopRequireDefault(_demo);

var Three = (function (_React$Component) {
  _inherits(Three, _React$Component);

  function Three(props) {
    _classCallCheck(this, Three);

    _get(Object.getPrototypeOf(Three.prototype), 'constructor', this).call(this, props);
    this.state = {};
  }

  _createClass(Three, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _demo2['default'].init(this.refs.three);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement('div', { ref: 'three' });
    }
  }]);

  return Three;
})(_react2['default'].Component);

exports['default'] = Three;
module.exports = exports['default'];