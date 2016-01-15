'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _WordCloudChart = require('./components/WordCloudChart');

var _WordCloudChart2 = _interopRequireDefault(_WordCloudChart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = _react2.default.createElement(
  _reactRouter.Route,
  { path: 'echarts' },
  _react2.default.createElement(_reactRouter.Route, { path: 'word-cloud', component: _WordCloudChart2.default })
);

exports.default = routes;
module.exports = exports['default'];