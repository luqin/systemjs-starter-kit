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

var _car = require('../car');

var car = new _car.Car({
    price: 30000, make: 'Chevy', model: 'Malibu',
    year: 2014, isElectric: false, isHatchback: false
});

var App = (function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        _get(Object.getPrototypeOf(App.prototype), 'constructor', this).call(this, props);
        this.state = {
            truck: null
        };
    }

    _createClass(App, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this = this;

            setTimeout(function () {
                // FIXME ???
                System['import']('demo/truck').then(function (m) {
                    var Truck = m.Truck;

                    var truck = new Truck({
                        price: 40000, make: 'Ford', model: 'F150',
                        year: 2014, is4by4: true
                    });

                    _this.setState({
                        truck: truck
                    });
                });
            }, 2000);
        }
    }, {
        key: 'render',
        value: function render() {
            var truck = this.state.truck;

            var e = undefined;
            if (truck) {
                e = _react2['default'].createElement(
                    'div',
                    null,
                    truck.getDetails(),
                    _react2['default'].createElement('br', null),
                    'Truck total: ',
                    truck.getTotal(.08)
                );
            } else {
                e = _react2['default'].createElement(
                    'div',
                    null,
                    'loading...'
                );
            }

            return _react2['default'].createElement(
                'div',
                null,
                _react2['default'].createElement('br', null),
                car.getDetails(),
                _react2['default'].createElement('br', null),
                'Car total: ',
                car.getTotal(.08),
                _react2['default'].createElement('br', null),
                _react2['default'].createElement('br', null),
                e
            );
        }
    }]);

    return App;
})(_react2['default'].Component);

exports['default'] = App;
module.exports = exports['default'];