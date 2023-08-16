import { Link as I18nLink } from 'gatsby-plugin-react-i18next';
import Link from '../Link';
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
  light: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  noWrap: PropTypes.bool,
};

const defaultProps = {
  onClick: null,
  href: null,
  to: null,
  reversed: false,
  secondary: false,
  large: false,
  light: false,
  disabled: false,
  className: '',
  noWrap: false,
};

const Button = ({ href, to, className, children, reversed, secondary, light, large, disabled, noWrap, ...props }) => {
  const classes = cn(className, 'Button', {
    'Button--reversed': reversed,
    'Button--secondary': secondary,
    'Button--large': large,
    'Button--light': light,
    'Button--disabled': disabled,
    'Button--nowrap': noWrap,
  });

  if (to) {
    return (
      <I18nLink {...props} className={classes} to={to}>
        {children}
      </I18nLink>
    );
  }

  if(href && href.startsWith('#')) {
    return (
      <Link {...props} className={classes} href={href}>
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
