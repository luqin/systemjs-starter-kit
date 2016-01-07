'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _componentsApp = require('./components/App');

var _componentsApp2 = _interopRequireDefault(_componentsApp);

var _componentsNoMatch = require('./components/NoMatch');

var _componentsNoMatch2 = _interopRequireDefault(_componentsNoMatch);

var _componentsWordCloudChart = require('./components/WordCloudChart');

var _componentsWordCloudChart2 = _interopRequireDefault(_componentsWordCloudChart);

var router = _react2['default'].createElement(
  _reactRouter.Router,
  { history: _reactRouter.hashHistory },
  _react2['default'].createElement(_reactRouter.Redirect, { from: '/', to: '/echarts/word-cloud' }),
  _react2['default'].createElement(
    _reactRouter.Route,
    { path: '/', component: _componentsApp2['default'] },
    _react2['default'].createElement(
      _reactRouter.Route,
      { path: 'echarts' },
      _react2['default'].createElement(_reactRouter.Route, { path: 'word-cloud', component: _componentsWordCloudChart2['default'] })
    ),
    _react2['default'].createElement(_reactRouter.Route, { path: '*', component: _componentsNoMatch2['default'] })
  )
);

exports['default'] = router;
module.exports = exports['default'];