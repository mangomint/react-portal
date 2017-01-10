'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = PortalTarget;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function PortalTarget(props) {
  var name = props.name,
      children = props.children,
      restProps = _objectWithoutProperties(props, ['name', 'children']);

  return _react2.default.createElement(
    'div',
    _extends({
      'data-portaltarget': name
    }, restProps),
    children
  );
}

PortalTarget.propTypes = {
  name: _react.PropTypes.string,
  children: _react.PropTypes.node
};
module.exports = exports['default'];