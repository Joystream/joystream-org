import React from 'react';
import { string, node, func, oneOfType, number, bool } from 'prop-types';
import Link from '../Link';

import './style.scss';
import cn from 'classnames';

const propTypes = {
  title: string.isRequired,
  image: func.isRequired,
  children: oneOfType([string, node, number]),
  className: string,
  disabled: bool,
  to: (props, propName, componentName) => {
    if (!props.disabled & !props.to && !props.href) {
      return new Error(
        `One of props 'to' or 'href' was not specified in '${componentName}'.`
      );
    }
  },
  href: (props, propName, componentName) => {
    if (!props.disabled & !props.to && !props.href) {
      return new Error(
        `One of props 'href' or 'to' was not specified in '${componentName}'.`
      );
    }
  },
};

const defaultProps = {
  children: null,
  className: '',
  disabled: false,
};

const Pane = ({
  title,
  image: Image,
  children,
  className,
  disabled,
  ...props
}) => {
  const classes = cn('Pane', className, {
    'Pane--disabled': disabled,
  });

  const Parent = disabled ? 'div' : Link;

  return (
    <Parent className={classes} {...props}>
      <div className="Pane__wrapper">
        <Image className="Pane__img" />
      </div>
      <div className="Pane__content">
        <p className="Pane__title">{title}</p>
        <p className="Pane__paragraph">{children}</p>
      </div>
    </Parent>
  );
};

Pane.propTypes = propTypes;
Pane.defaultProps = defaultProps;

export default Pane;
