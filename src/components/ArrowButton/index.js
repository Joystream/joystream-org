import React from 'react';
import Button from '../Button';

import { ReactComponent as Arrow } from '../../assets/svg/arrow-down-small.svg'

import './style.scss';

export const ArrowButton = ({ link, text, className, onClick, state, to, style, ...props }) => {
  const children = (
    <div className="ArrowButton">
      <span className="ArrowButton__text"> {text} </span>
      <Arrow className="ArrowButton__arrow" />
    </div>
  );

  if (link) {
    return (
      <Button style={{ padding: 0, ...style }} className={`${className}`} href={link} {...props}>
        {children}
      </Button>
    );
  } else if (to) {
    return (
      <Button style={{ padding: 0, ...style }} className={`${className}`} to={to} state={state} {...props}>
        {children}
      </Button>
    );
  } else {
    return (
      <Button style={{ padding: 0, ...style }} className={`${className}`} onClick={onClick} {...props}>
        {children}
      </Button>
    );
  }
};