import React from 'react';
import { string, node, func, oneOfType, number } from 'prop-types';

import { ReactComponent as InfoIcon } from '../../assets/svg/info.svg';

import './style.scss';

const propTypes = {
  children: oneOfType([string, node, number]),
  icon: oneOfType([func, string]),
  onClick: func,
};

const defaultProps = {
  children: null,
  onClick: null,
  icon: InfoIcon,
};

const Chip = ({ children, icon: Icon, ...props }) => {
  return (
    <button className="Chip" {...props}>
      <Icon className="Chip__icon" />
      {children && <span className="Chip__text">{children}</span>}
    </button>
  );
};

Chip.propTypes = propTypes;
Chip.defaultProps = defaultProps;

export default Chip;
