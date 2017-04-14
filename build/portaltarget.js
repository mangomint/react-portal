'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require('/Users/daniel/code/react-portal/node_modules/redbox-react/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('/Users/daniel/code/react-portal/node_modules/react-transform-catch-errors/lib/index.js');

var _index4 = _interopRequireDefault(_index3);

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index5 = require('/Users/daniel/code/react-portal/node_modules/react-transform-hmr/lib/index.js');

var _index6 = _interopRequireDefault(_index5);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  PortalTarget: {
    displayName: 'PortalTarget'
  }
};

var _UsersDanielCodeReactPortalNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: 'lib/portaltarget.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _UsersDanielCodeReactPortalNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: 'lib/portaltarget.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _UsersDanielCodeReactPortalNode_modulesReactTransformHmrLibIndexJs2(_UsersDanielCodeReactPortalNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
} /* eslint-disable react/prefer-stateless-function */


var PortalTarget = _wrapComponent('PortalTarget')(function (_Component) {
  _inherits(PortalTarget, _Component);

  function PortalTarget() {
    _classCallCheck(this, PortalTarget);

    return _possibleConstructorReturn(this, (PortalTarget.__proto__ || Object.getPrototypeOf(PortalTarget)).apply(this, arguments));
  }

  _createClass(PortalTarget, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          name = _props.name,
          children = _props.children,
          restProps = _objectWithoutProperties(_props, ['name', 'children']);

      return _react3.default.createElement(
        'div',
        _extends({
          'data-portaltarget': name
        }, restProps),
        children
      );
    }
  }]);

  return PortalTarget;
}(_react2.Component));

exports.default = PortalTarget;


PortalTarget.propTypes = {
  name: _react2.PropTypes.string,
  children: _react2.PropTypes.node
};
module.exports = exports['default'];