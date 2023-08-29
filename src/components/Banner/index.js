import React from 'react';
import cn from 'classnames';

import './style.scss';
function Banner({ icon, title, information, label, className }) {
  return (
    <div className={cn('Banner', className)}>
      <div className="Banner__head">
        <span className="Banner__icon">{icon}</span>
        <span className="Banner__title">{title}</span>
      </div>
      <div className="Banner__content">{information}</div>
      {label}
    </div>
  );
}

export default Banner;
