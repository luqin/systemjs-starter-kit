'use strict';

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _auto = require('./auto');

var Truck = (function (_Auto) {
    _inherits(Truck, _Auto);

    function Truck(data) {
        _classCallCheck(this, Truck);

        _get(Object.getPrototypeOf(Truck.prototype), 'constructor', this).call(this, data);
        this.is4by4 = data.is4by4;
    }

    _createClass(Truck, [{
        key: 'getDetails',
        value: function getDetails() {
            return _get(Object.getPrototypeOf(Truck.prototype), 'getDetails', this).call(this) + ' 4x4: ' + this.is4by4;
        }
    }]);

    return Truck;
})(_auto.Auto);

exports.Truck = Truck;