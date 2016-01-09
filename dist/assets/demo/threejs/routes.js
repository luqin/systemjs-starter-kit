'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _helloworldComponentsHelloWorld = require('./helloworld/components/HelloWorld');

var _helloworldComponentsHelloWorld2 = _interopRequireDefault(_helloworldComponentsHelloWorld);

var routes = _react2['default'].createElement(
  _reactRouter.Route,
  { path: 'three.js' },
  _react2['default'].createElement(_reactRouter.Route, { path: 'hello-world', component: _helloworldComponentsHelloWorld2['default'] })
);

exports['default'] = routes;
module.exports = exports['default'];