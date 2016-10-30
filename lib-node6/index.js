'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

const UserComponent = (_ref, _ref2) => {
  let children = _ref.children;
  let user = _ref2.context.state.user;
  return children(user);
};

UserComponent.propTypes = {
  children: _react.PropTypes.func.isRequired
};

UserComponent.contextTypes = {
  context: _react.PropTypes.object
};

exports.default = UserComponent;
//# sourceMappingURL=index.js.map