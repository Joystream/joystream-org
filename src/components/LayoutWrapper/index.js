import React from 'react';
import cn from 'classnames';
import { node, string, bool } from 'prop-types';

import './style.scss';

const propTypes = {
  children: node.isRequired,
  dark: bool,
  className: string,
};

const defaultProps = {
  className: '',
  dark: false,
};

const LayoutWrapper = ({ children, dark, gradient, className, ...props }) => {
  const classes = cn('LayoutWrapper', {
    'LayoutWrapper--dark': dark,
    'LayoutWrapper--gradient': gradient,
  });

  return (
    <div className={classes} {...props}>
      <div className="LayoutWrapper__container">{children}</div>
    </div>
  );
};

LayoutWrapper.propTypes = propTypes;
LayoutWrapper.defaultProps = defaultProps;

export default LayoutWrapper;
