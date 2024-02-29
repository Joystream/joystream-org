import React from 'react';
import cn from 'classnames';
import { string, func } from 'prop-types';

import { ReactComponent as AccentPointer } from '../../../assets/svg/dashboard/accent-pointer.svg';

import './style.scss';

const propTypes = {
  text: string.isRequired,
  onClick: func,
  buttonCn: string,
};

const ArrowButton = ({ text, onClick, buttonCn }) => {
  return (
    <button className={cn('arrow-button', { [buttonCn]: !!buttonCn })} onClick={onClick}>
      {text}
      <AccentPointer />
    </button>
  );
};

ArrowButton.propTypes = propTypes;

export default ArrowButton;
