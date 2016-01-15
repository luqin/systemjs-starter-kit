'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _reactRouterBootstrap = require('react-router-bootstrap');

require('jquery');

require('bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(App).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactBootstrap.Navbar,
          { inverse: true, staticTop: true },
          _react2.default.createElement(
            _reactBootstrap.Navbar.Header,
            null,
            _react2.default.createElement(
              _reactBootstrap.Navbar.Brand,
              null,
              _react2.default.createElement(
                'a',
                { href: '#' },
                'SystemJS ES6 Demos'
              )
            ),
            _react2.default.createElement(_reactBootstrap.Navbar.Toggle, null)
          ),
          _react2.default.createElement(
            _reactBootstrap.Navbar.Collapse,
            null,
            _react2.default.createElement(
              _reactBootstrap.Nav,
              null,
              _react2.default.createElement(
                _reactRouterBootstrap.LinkContainer,
                { to: '/echarts/word-cloud' },
                _react2.default.createElement(
                  _reactBootstrap.NavItem,
                  null,
                  'ECharts'
                )
              ),
              _react2.default.createElement(
                _reactBootstrap.NavDropdown,
                { eventKey: 3, title: 'three.js', id: 'threejs-nav-dropdown' },
                _react2.default.createElement(
                  _reactRouterBootstrap.LinkContainer,
                  { to: '/three.js/hello-world' },
                  _react2.default.createElement(
                    _reactBootstrap.NavItem,
                    null,
                    'Hello World'
                  )
                ),
                _react2.default.createElement(
                  _reactRouterBootstrap.LinkContainer,
                  { to: '/three.js/webgl-buffergeometry-drawcalls' },
                  _react2.default.createElement(
                    _reactBootstrap.NavItem,
                    null,
                    'webgl-buffergeometry-drawcalls'
                  )
                ),
                _react2.default.createElement(
                  _reactRouterBootstrap.LinkContainer,
                  { to: '/three.js/lesson1' },
                  _react2.default.createElement(
                    _reactBootstrap.NavItem,
                    null,
                    'Lesson 1'
                  )
                )
              )
            ),
            _react2.default.createElement(
              _reactBootstrap.Nav,
              { pullRight: true },
              _react2.default.createElement(
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
  }]);

  return App;
}(_react2.default.Component);

App.propTypes = {
  children: _react2.default.PropTypes.node
};
exports.default = App;
module.exports = exports['default'];