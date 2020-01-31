import cn from 'classnames';
import { oneOf } from 'prop-types';
import React from 'react';
import { ReactComponent } from '../../assets/svg/arrow-down-small.svg';
import './style.scss';

const propTypes = {
  direction: oneOf(['up', 'down']),
  variant: oneOf(['on-black', 'on-white', 'on-blue']),
};

const defaultProps = {
  children: 'More',
  direction: 'down',
  variant: 'on-black',
};

const ActionButton = ({ children, direction, className, variant, ...props }) => {
  return (
    <div className={cn('ActionButton', className, `ActionButton--${variant}`)} {...props}>
      <div className="ActionButton__text">{children}</div>
      <div className="ActionButton__button">
        <ReactComponent
          className={cn('ActionButton__arrow', { 'ActionButton__arrow--top': direction === 'up' })}
          alt=""
        />
      </div>
    </div>
  );
};

ActionButton.defaultProps = defaultProps;
ActionButton.propTypes = propTypes;
export default ActionButton;
