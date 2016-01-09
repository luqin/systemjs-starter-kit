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

var _reactBootstrap = require('react-bootstrap');

var _reactRouterBootstrap = require('react-router-bootstrap');

require('jquery');

require('bootstrap');

var App = (function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    _get(Object.getPrototypeOf(App.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(
          _reactBootstrap.Navbar,
          { inverse: true, staticTop: true },
          _react2['default'].createElement(
            _reactBootstrap.Navbar.Header,
            null,
            _react2['default'].createElement(
              _reactBootstrap.Navbar.Brand,
              null,
              _react2['default'].createElement(
                'a',
                { href: '#' },
                'SystemJS ES6 Demos'
              )
            ),
            _react2['default'].createElement(_reactBootstrap.Navbar.Toggle, null)
          ),
          _react2['default'].createElement(
            _reactBootstrap.Navbar.Collapse,
            null,
            _react2['default'].createElement(
              _reactBootstrap.Nav,
              null,
              _react2['default'].createElement(
                _reactRouterBootstrap.LinkContainer,
                { to: '/echarts/word-cloud' },
                _react2['default'].createElement(
                  _reactBootstrap.NavItem,
                  null,
                  'ECharts'
                )
              ),
              _react2['default'].createElement(
                _reactBootstrap.NavDropdown,
                { eventKey: 3, title: 'three.js', id: 'threejs-nav-dropdown' },
                _react2['default'].createElement(
                  _reactRouterBootstrap.LinkContainer,
                  { to: '/three.js/hello-world' },
                  _react2['default'].createElement(
                    _reactBootstrap.NavItem,
                    null,
                    'Hello World'
                  )
                ),
                _react2['default'].createElement(
                  _reactRouterBootstrap.LinkContainer,
                  { to: '/three.js/webgl-buffergeometry-drawcalls' },
                  _react2['default'].createElement(
                    _reactBootstrap.NavItem,
                    null,
                    'webgl-buffergeometry-drawcalls'
                  )
                ),
                _react2['default'].createElement(
                  _reactRouterBootstrap.LinkContainer,
                  { to: '/three.js/lesson1' },
                  _react2['default'].createElement(
                    _reactBootstrap.NavItem,
                    null,
                    'Lesson 1'
                  )
                )
              )
            ),
            _react2['default'].createElement(
              _reactBootstrap.Nav,
              { pullRight: true },
              _react2['default'].createElement(
                _reactBootstrap.NavItem,
                { eventKey: 2, href: '//github.com/luqin/systemjs-es6-demos', target: '_blank' },
                'GitHub'
              )
            )
          )
        ),
        this.props.children
      );
    }
  }], [{
    key: 'propTypes',
    value: {
      children: _react2['default'].PropTypes.node
    },
    enumerable: true
  }]);

  return App;
})(_react2['default'].Component);

exports['default'] = App;
module.exports = exports['default'];