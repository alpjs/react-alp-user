import { PropTypes } from 'react';

UserComponent.propTypes = {
    children: PropTypes.func.isRequired
};

UserComponent.contextTypes = {
    context: PropTypes.object
};

export default function UserComponent(_ref, _ref2) {
    var children = _ref.children;
    var user = _ref2.context.state.user;

    return children(user);
}
//# sourceMappingURL=index.js.map