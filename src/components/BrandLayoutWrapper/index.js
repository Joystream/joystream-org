import React from 'react';
import cn from 'classnames';
import { node, string, bool } from 'prop-types';

import './style.scss';

const propTypes = {
  children: node.isRequired,
  dark: bool,
  blue: bool,
  className: string,
};

const defaultProps = {
  className: '',
  dark: false,
  blue: false,
};

const BrandLayoutWrapper = ({ children, dark, blue, className, ...props }) => {
  const classes = cn('BrandLayoutWrapper', className, {
    'BrandLayoutWrapper--dark': dark,
    'BrandLayoutWrapper--blue': blue,
  });

  return (
    <div className={classes} {...props}>
      <div className={cn('BrandLayoutWrapper__container', className && `${className}__container`)}>{children}</div>
    </div>
  );
};

BrandLayoutWrapper.propTypes = propTypes;
BrandLayoutWrapper.defaultProps = defaultProps;

export default BrandLayoutWrapper;
