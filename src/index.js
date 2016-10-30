import { PropTypes } from 'react';

type PropsType = {
  children: Function,
};

const UserComponent = (
  { children }: PropsType,
  { context: { state: { user } } },
) => (
  children(user)
);

UserComponent.propTypes = {
  children: PropTypes.func.isRequired,
};

UserComponent.contextTypes = {
  context: PropTypes.object,
};

export default UserComponent;
