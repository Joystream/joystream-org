import React from 'react';
import RoleCard from '../RoleCard';
import { array, object } from 'prop-types';

const propTypes = {
  roles: array.isRequired,
  content: object.isRequired,
};

const defaultProps = {
  roles: null,
  content: null,
};

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

RoleList.propTypes = propTypes;
RoleList.defaultProps = defaultProps;

export default RoleList;
