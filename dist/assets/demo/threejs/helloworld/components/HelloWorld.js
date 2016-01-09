'use strict';

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _commonBaseComponent = require('../../common/BaseComponent');

var _commonBaseComponent2 = _interopRequireDefault(_commonBaseComponent);

var _demo = require('../demo');

var _demo2 = _interopRequireDefault(_demo);

var HelloWorld = (function (_BaseComponent) {
  _inherits(HelloWorld, _BaseComponent);

  function HelloWorld() {
    _classCallCheck(this, HelloWorld);

    _get(Object.getPrototypeOf(HelloWorld.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(HelloWorld, [{
    key: 'init',
    value: function init() {
      _demo2['default'].init(this.getContainer());
    }
  }]);

  return HelloWorld;
})(_commonBaseComponent2['default']);

exports['default'] = HelloWorld;
module.exports = exports['default'];