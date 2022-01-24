import React from 'react';
import { roles } from '../data';

const Role = () => {
  return (
    <div>
      Pick the best option
      <div>
        {roles.map(role => (
          <Role {...role} />
        ))}
      </div>
      <NotSure />
    </div>
  );
};

export default Role;

const Role = props => {
  const { role, text, route } = props;
  return (
    <Link to={route}>
      <Icon />
      <div>I am {role}</div>
      <div>${text}</div>
    </Link>
  );
};

const NotSure = () => {
  return <Link>I’m not sure yet</Link>;
};
