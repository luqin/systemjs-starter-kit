'use strict';

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _auto = require('./auto');

var Car = (function (_Auto) {
    _inherits(Car, _Auto);

    function Car(data) {
        _classCallCheck(this, Car);

        _get(Object.getPrototypeOf(Car.prototype), 'constructor', this).call(this, data);
        this.isElectric = data.isElectric;
        this.isHatchback = data.isHatchback;
    }

    _createClass(Car, [{
        key: 'getDetails',
        value: function getDetails() {
            return _get(Object.getPrototypeOf(Car.prototype), 'getDetails', this).call(this) + ' Electric: ' + this.isElectric + ' Hatchback: ' + this.isHatchback;
        }
    }]);

    return Car;
})(_auto.Auto);

exports.Car = Car;