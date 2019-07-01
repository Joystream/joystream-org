import React from 'react';
import { string, node, func } from 'prop-types';

import './style.scss';

const propTypes = {
  label: string,
  icon: node,
  clickHandler: func,
};

const defaultProps = {
  label: null,
  icon: null,
  clickHandler: null,
};

const Chip = ({ label, icon, clickHandler }) => {
  const Icon = icon;

  return (
    <button
      onClick={e => {
        clickHandler(e);
      }}
      className="Chip"
    >
      {icon && <Icon className="Chip__icon" />}
      {label}
    </button>
  );
};

Chip.propTypes = propTypes;
Chip.defaultProps = defaultProps;

export default Chip;
