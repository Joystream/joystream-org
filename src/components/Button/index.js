import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import cn from 'classnames';

import './style.scss';

const propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  href: PropTypes.string,
  to: PropTypes.string,
  reversed: PropTypes.bool,
  secondary: PropTypes.bool,
  large: PropTypes.bool,
  small: PropTypes.bool,
  light: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

const defaultProps = {
  onClick: null,
  href: null,
  to: null,
  reversed: false,
  secondary: false,
  large: false,
  small: false,
  light: false,
  disabled: false,
  className: '',
};

const Button = ({ href, to, className, children, reversed, secondary, light, large, small, disabled, ...props }) => {
  const classes = cn(className, 'Button', {
    'Button--reversed': reversed,
    'Button--secondary': secondary,
    'Button--large': large,
    'Button--small': small,
    'Button--light': light,
    'Button--disabled': disabled,
  });

  if (to) {
    return (
      <Link {...props} className={classes} to={to}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a {...props} className={classes} href={href}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" {...props} className={classes}>
      {children}
    </button>
  );
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
