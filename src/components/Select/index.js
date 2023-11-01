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

const Select = ({ className, ...props }) => {
  const classes = cn('Select', className);
  return <select className={classes} {...props} />;
};

Select.propTypes = propTypes;
Select.defaultProps = defaultProps;

export default Select;
