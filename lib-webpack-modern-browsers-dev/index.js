import _t from 'tcomb-forked';
import { PropTypes } from 'react';

var PropsType = _t.interface({
  children: _t.Function
}, 'PropsType');

var UserComponent = (_ref, _ref2) => {
  var children = _ref.children;
  var user = _ref2.context.state.user;

  _assert({
    children
  }, PropsType, '{ children }');

  return children(user);
};

UserComponent.propTypes = {
  children: PropTypes.func.isRequired
};

UserComponent.contextTypes = {
  context: PropTypes.object
};

export default UserComponent;

function _assert(x, type, name) {
  function message() {
    return 'Invalid value ' + _t.stringify(x) + ' supplied to ' + name + ' (expected a ' + _t.getTypeName(type) + ')';
  }

  if (_t.isType(type)) {
    if (!type.is(x)) {
      type(x, [name + ': ' + _t.getTypeName(type)]);

      _t.fail(message());
    }
  } else if (!(x instanceof type)) {
    _t.fail(message());
  }

  return x;
}
//# sourceMappingURL=index.js.map