import React from 'react';
import RoleCard from '../RoleCard';

const RoleList = ({ roles, content }) => {
  return (
    <>
      {roles.map(role => {
        const count = role.key ? content[role.key] || '-' : role.count;
        return <RoleCard {...role} key={role.title} count={count} />;
      })}
    </>
  );
};

export default RoleList;
