'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _componentsWordCloudChart = require('./components/WordCloudChart');

var _componentsWordCloudChart2 = _interopRequireDefault(_componentsWordCloudChart);

var routes = _react2['default'].createElement(
  _reactRouter.Route,
  { path: 'echarts' },
  _react2['default'].createElement(_reactRouter.Route, { path: 'word-cloud', component: _componentsWordCloudChart2['default'] })
);

exports['default'] = routes;
module.exports = exports['default'];