'use strict';

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});

var Auto = (function () {
    function Auto(data) {
        _classCallCheck(this, Auto);

        this.make = data.make;
        this.model = data.model;
        this.year = data.year;
        this.price = data.price;
    }

    _createClass(Auto, [{
        key: 'getTotal',
        value: function getTotal(taxRate) {
            return this.price + this.price * taxRate;
        }
    }, {
        key: 'getDetails',
        value: function getDetails() {
            return this.year + ' ' + this.make + ' ' + this.model;
        }
    }]);

    return Auto;
})();

exports.Auto = Auto;

var AutoWithProperties = (function () {
    function AutoWithProperties(data) {
        _classCallCheck(this, AutoWithProperties);

        this._make;
        this._model;
    }

    _createClass(AutoWithProperties, [{
        key: 'make',
        get: function get() {
            return this._make;
        },
        set: function set(val) {
            if (val) {
                this._make = val;
            } else {
                this._make = 'No Make';
            }
        }
    }, {
        key: 'model',
        get: function get() {
            return this._model;
        },
        set: function set(val) {
            if (val) {
                this._model = val;
            } else {
                this._model = 'No Model';
            }
        }
    }]);

    return AutoWithProperties;
})();

exports.AutoWithProperties = AutoWithProperties;