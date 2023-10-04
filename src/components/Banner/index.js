import React from 'react';
import cn from 'classnames';
import { ReactComponent as Close } from '../../assets/svg/postponed.svg';

import './style.scss';
function Banner({ icon, title, information, label, className, close }) {
  return (
    <div className={cn('Banner', className)}>
      <div className="Banner__close">
        {close ? (
          <button onClick={close}>
            <Close className="Banner__icon__close" />
          </button>
        ) : (
          <></>
        )}
      </div>
      <div className="Banner__head">
        <div className="Banner__icon">{icon}</div>
        <div className="Banner__title">{title}</div>
      </div>
      <div className="Banner__content">{information}</div>
      {label}
    </div>
  );
}

export default Banner;
