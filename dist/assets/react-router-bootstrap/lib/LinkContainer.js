// This is largely taken from react-router/lib/Link.

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var LinkContainer = (function (_React$Component) {
  _inherits(LinkContainer, _React$Component);

  function LinkContainer(props, context) {
    _classCallCheck(this, LinkContainer);

    _get(Object.getPrototypeOf(LinkContainer.prototype), 'constructor', this).call(this, props, context);

    this.onClick = this.onClick.bind(this);
  }

  _createClass(LinkContainer, [{
    key: 'onClick',
    value: function onClick(event) {
      if (this.props.disabled) {
        event.preventDefault();
        return;
      }

      if (this.props.children.props.onClick) {
        this.props.children.props.onClick(event);
      }

      _reactRouter.Link.prototype.handleClick.call(this, event);
    }
  }, {
    key: 'render',
    value: function render() {
      var router = this.context.router;
      var _props = this.props;
      var onlyActiveOnIndex = _props.onlyActiveOnIndex;
      var to = _props.to;
      var children = _props.children;

      var props = _objectWithoutProperties(_props, ['onlyActiveOnIndex', 'to', 'children']);

      props.onClick = this.onClick;

      // Ignore if rendered outside Router context; simplifies unit testing.
      if (router) {
        props.href = router.createHref(to);
        props.active = router.isActive(to, onlyActiveOnIndex);
      }

      return _react2['default'].cloneElement(_react2['default'].Children.only(children), props);
    }
  }]);

  return LinkContainer;
})(_react2['default'].Component);

exports['default'] = LinkContainer;

LinkContainer.propTypes = {
  onlyActiveOnIndex: _react2['default'].PropTypes.bool.isRequired,
  to: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.object]).isRequired,
  onClick: _react2['default'].PropTypes.func,
  disabled: _react2['default'].PropTypes.bool.isRequired,
  children: _react2['default'].PropTypes.node.isRequired
};

LinkContainer.contextTypes = {
  router: _react2['default'].PropTypes.object
};

LinkContainer.defaultProps = {
  onlyActiveOnIndex: false,
  disabled: false
};
module.exports = exports['default'];