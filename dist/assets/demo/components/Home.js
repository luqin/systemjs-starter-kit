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

var _echartsComponentsWordCloudChart = require('../echarts/components/WordCloudChart');

var _echartsComponentsWordCloudChart2 = _interopRequireDefault(_echartsComponentsWordCloudChart);

var _threejsHelloworldComponentsHelloWorld = require('../threejs/helloworld/components/HelloWorld');

var _threejsHelloworldComponentsHelloWorld2 = _interopRequireDefault(_threejsHelloworldComponentsHelloWorld);

var Home = (function (_React$Component) {
  _inherits(Home, _React$Component);

  _createClass(Home, null, [{
    key: 'propTypes',
    value: {},
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {},
    enumerable: true
  }]);

  function Home(props) {
    _classCallCheck(this, Home);

    _get(Object.getPrototypeOf(Home.prototype), 'constructor', this).call(this, props);
    this.state = {};
  }

  _createClass(Home, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(
          'h1',
          null,
          'ES6 JavaScript with Modules Using System.js'
        ),
        _react2['default'].createElement(
          _reactBootstrap.Row,
          null,
          _react2['default'].createElement(
            _reactBootstrap.Col,
            { xs: 12, md: 6 },
            _react2['default'].createElement(_echartsComponentsWordCloudChart2['default'], null)
          ),
          _react2['default'].createElement(
            _reactBootstrap.Col,
            { xs: 12, md: 6 },
            _react2['default'].createElement(_threejsHelloworldComponentsHelloWorld2['default'], null)
          )
        )
      );
    }
  }]);

  return Home;
})(_react2['default'].Component);

exports['default'] = Home;
module.exports = exports['default'];