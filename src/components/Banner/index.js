import React from 'react';
import cn from 'classnames';
import { ReactComponent as Close } from '../../assets/svg/close_banner.svg';

import './style.scss';
function Banner({ icon, title, information, label, className, close }) {
  return (
    <div className={cn('Banner', className)}>
      <div className="Banner__head__icon">
        <div className="Banner__head">
          <div className="Banner__icon">{icon}</div>
          <div className="Banner__title">{title}</div>
        </div>
        {close ? (
          <button onClick={close} className="Banner__close">
            <Close className="Banner__icon__close" />
          </button>
        ) : (
          <></>
        )}
      </div>
      <div className="Banner__content">{information}</div>
      {label}
    </div>
  );
}

export default Banner;
