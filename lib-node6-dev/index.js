'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tcombForked = require('tcomb-forked');

var _tcombForked2 = _interopRequireDefault(_tcombForked);

var _react = require('react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const PropsType = _tcombForked2.default.interface({
  children: _tcombForked2.default.Function
}, 'PropsType');

const UserComponent = (_ref, _ref2) => {
  var _assert2 = _assert(_ref, PropsType, '{ children }');

  let children = _assert2.children;
  let user = _ref2.context.state.user;

  _assert({
    children
  }, PropsType, '{ children }');

  return children(user);
};

UserComponent.propTypes = {
  children: _react.PropTypes.func.isRequired
};

UserComponent.contextTypes = {
  context: _react.PropTypes.object
};

exports.default = UserComponent;

function _assert(x, type, name) {
  function message() {
    return 'Invalid value ' + _tcombForked2.default.stringify(x) + ' supplied to ' + name + ' (expected a ' + _tcombForked2.default.getTypeName(type) + ')';
  }

  if (_tcombForked2.default.isType(type)) {
    if (!type.is(x)) {
      type(x, [name + ': ' + _tcombForked2.default.getTypeName(type)]);

      _tcombForked2.default.fail(message());
    }
  } else if (!(x instanceof type)) {
    _tcombForked2.default.fail(message());
  }

  return x;
}
//# sourceMappingURL=index.js.map