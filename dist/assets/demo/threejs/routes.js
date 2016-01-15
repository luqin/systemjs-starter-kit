'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _HelloWorld = require('./helloworld/components/HelloWorld');

var _HelloWorld2 = _interopRequireDefault(_HelloWorld);

var _HelloWorld3 = require('./lesson1/components/HelloWorld');

var _HelloWorld4 = _interopRequireDefault(_HelloWorld3);

var _HelloWorld5 = require('./webgl-buffergeometry-drawcalls/components/HelloWorld');

var _HelloWorld6 = _interopRequireDefault(_HelloWorld5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = _react2.default.createElement(
  _reactRouter.Route,
  { path: 'three.js' },
  _react2.default.createElement(_reactRouter.Route, { path: 'hello-world', component: _HelloWorld2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: 'lesson1', component: _HelloWorld4.default }),
  _react2.default.createElement(_reactRouter.Route, { path: 'webgl-buffergeometry-drawcalls', component: _HelloWorld6.default })
);

exports.default = routes;
module.exports = exports['default'];