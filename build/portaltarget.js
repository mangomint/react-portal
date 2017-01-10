'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = PortalTarget;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function PortalTarget(props) {
  return _react2.default.createElement(
    'div',
    {
      className: props.className,
      style: props.style,
      'data-portaltarget': props.name
    },
    props.children
  );
}

PortalTarget.propTypes = {
  className: _react.PropTypes.string,
  style: _react.PropTypes.object,
  name: _react.PropTypes.string,
  children: _react.PropTypes.node
};
module.exports = exports['default'];