import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import './style.scss';

const propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  href: PropTypes.string,
  disabled: PropTypes.bool,
  reversed: PropTypes.bool,
  secondary: PropTypes.bool,
  secondaryReversed: PropTypes.bool,
  secondaryLarge: PropTypes.bool,
  defaultBtn: PropTypes.bool,
};

const defaultProps = {
  children: null,
  onClick: null,
  href: null,
  disabled: false,
  reversed: false,
  secondary: false,
  secondaryReversed: false,
  secondaryLarge: false,
  defaultBtn: false,
};

const Button = ({
  href,
  to,
  className,
  children,
  disabled,
  reversed,
  secondary,
  secondaryReversed,
  secondaryLarge,
  defaultBtn,
  ...props
}) => {
  const variantsClasses = {
    'Button--reversed': reversed,
    Secondary: secondary,
    'Secondary Secondary--reversed': secondaryReversed,
    'Secondary Secondary--large': secondaryLarge,
    Default: defaultBtn,
  };
  const classes = classNames(className, 'Button', variantsClasses);

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
    <button type="button" {...props} className={classes} disabled={disabled}>
      {children}
    </button>
  );
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
