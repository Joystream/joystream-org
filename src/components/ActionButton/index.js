import React from 'react';
import cn from 'classnames';
import arrowImg from '../../assets/svg/arrow-down-small.svg';

import './style.scss';

const defaultProps = {
  children: 'More',
};

const ActionButton = ({ children, className, ...props }) => {
  return (
    <div className={cn('ActionButton', className)} {...props}>
      <div className="ActionButton__text">{children}</div>
      <div className="ActionButton__button">
        <img src={arrowImg} alt="" />
      </div>
    </div>
  );
};

ActionButton.defaultProps = defaultProps;
export default ActionButton;
