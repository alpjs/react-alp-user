import { PropTypes } from 'react';

var UserComponent = function UserComponent(_ref, _ref2) {
  var children = _ref.children;
  var user = _ref2.context.state.user;
  return children(user);
};

UserComponent.propTypes = {
  children: PropTypes.func.isRequired
};

UserComponent.contextTypes = {
  context: PropTypes.object
};

export default UserComponent;
//# sourceMappingURL=index.js.map