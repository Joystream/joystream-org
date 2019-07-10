import React from 'react';
import { string, node, func, oneOfType, number, bool } from 'prop-types';
import Link from '../Link';

import { linkPropTypes } from '../../propTypes';
import './style.scss';
import cn from 'classnames';

const propTypes = {
  ...linkPropTypes,
  children: oneOfType([string, node, number]),
  image: func.isRequired,
  title: string.isRequired,
  className: string,
  disabled: bool,
};

const defaultProps = {
  children: null,
  className: '',
};

const Pane = ({
  title,
  children,
  image: Image,
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
