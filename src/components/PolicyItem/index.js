import React from 'react';
import { string, node, oneOfType } from 'prop-types';
import cn from 'classnames';

import './style.scss';

const propTypes = {
  title: string,
  children: oneOfType([string, node]),
  className: string,
};

const defaultProps = {
  title: '',
  className: '',
};

const PolicyItem = ({ title, children, className, ...props }) => {
  return (
    <div className={`PolicyItem ${className}`} {...props}>
      <p className={cn('PolicyItem__title', { 'PolicyItem__title--padded': !title })}>{title}</p>
      {children}
    </div>
  );
};

PolicyItem.propTypes = propTypes;
PolicyItem.defaultProps = defaultProps;

export default PolicyItem;
