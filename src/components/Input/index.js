import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './style.scss';

const propTypes = {
  className: PropTypes.string,
};

const defaultProps = {
  className: '',
};

const Input = ({ className, ...props }) => {
  const classes = cn('Input', className);
  return <input className={classes} {...props} />;
};

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
