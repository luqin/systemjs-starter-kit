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
          { inverse: true, staticTop: true, toggleNavKey: 0 },
          _react2['default'].createElement(
            _reactBootstrap.NavBrand,
            null,
            _react2['default'].createElement(
              'a',
              { href: '#' },
              'SystemJS Starter'
            )
          ),
          _react2['default'].createElement(
            _reactBootstrap.Nav,
            null,
            _react2['default'].createElement(
              _reactRouterBootstrap.LinkContainer,
              { to: '/examples' },
              _react2['default'].createElement(
                _reactBootstrap.NavItem,
                null,
                'Examples'
              )
            ),
            _react2['default'].createElement(
              _reactBootstrap.NavItem,
              { eventKey: 2, href: '//github.com/luqin/systemjs-es6-react-demo', target: '_blank' },
              'GitHub'
            )
          )
        ),
        _react2['default'].createElement(
          _reactBootstrap.Grid,
          null,
          _react2['default'].createElement(
            _reactBootstrap.Row,
            null,
            _react2['default'].createElement(
              _reactBootstrap.Col,
              { md: 12 },
              this.props.children
            )
          )
        )
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