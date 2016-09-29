'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = UserComponent;

var _react = require('react');

UserComponent.propTypes = {
  children: _react.PropTypes.func.isRequired
};

UserComponent.contextTypes = {
  context: _react.PropTypes.object
};

function UserComponent(_ref, _ref2) {
  let children = _ref.children;
  let user = _ref2.context.state.user;

  return children(user);
}
//# sourceMappingURL=index.js.map