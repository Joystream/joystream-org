import React from 'react';
import { string, node, func } from 'prop-types';

import './style.scss';

const propTypes = {
  children: string,
  icon: node,
  clickHandler: func,
};

const defaultProps = {
  children: null,
  icon: null,
  clickHandler: null,
};

const Chip = ({ children, icon, ...props }) => {
  const Icon = icon;

  return (
    <button className="Chip" {...props}>
      {icon && <Icon className="Chip__icon" />}
      {children}
    </button>
  );
};

Chip.propTypes = propTypes;
Chip.defaultProps = defaultProps;

export default Chip;
