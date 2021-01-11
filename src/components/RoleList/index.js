import React from 'react';
import RoleCard from '../RoleCard';
import { array, object } from 'prop-types';

const propTypes = {
  roles: array.isRequired,
  content: object.isRequired,
};

const RoleList = ({ roles, content, oldTestnet }) => {
  return (
    <>
      {roles.map(role => {
        const count = role.key ? content[role.key] || '-' : role.count;
        return <RoleCard {...role} key={role.title} count={count} oldTestnet={oldTestnet} />;
      })}
    </>
  );
};

RoleList.propTypes = propTypes;

export default RoleList;
