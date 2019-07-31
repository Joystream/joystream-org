import React from 'react';
import { string, node, oneOfType } from 'prop-types';
import cn from 'classnames';

import './style.scss';

const propTypes = {
  title: string,
  children: oneOfType([string, node]).isRequired,
  className: string,
};

const defaultProps = {
  title: '',
  className: '',
};

const PolicyItem = ({ title, children, className, ...props }) => {
  return (
    <div className={`PolicyItem ${className}`} {...props}>
      {title && <p className="PolicyItem__title">{title}</p>}
      <div className={cn('PolicyItem__content', { 'PolicyItem__content--padded': !title })}>{children}</div>
    </div>
  );
};

PolicyItem.propTypes = propTypes;
PolicyItem.defaultProps = defaultProps;

export default PolicyItem;
