import { PropTypes } from 'react';

UserComponent.propTypes = {
  children: PropTypes.func.isRequired,
};

UserComponent.contextTypes = {
  context: PropTypes.object,
};

type Props = {
  children: Function,
};

export default function UserComponent(
  { children }: Props,
  { context: { state: { user } } },
) {
  return children(user);
}
