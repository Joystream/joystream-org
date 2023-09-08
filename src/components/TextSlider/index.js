import React, { useState } from 'react';
import { ReactComponent as ArrowSvg } from '../../assets/svg/slider_left.svg';
import cn from 'classnames';

import './style.scss';

function TextSlider({
  className,
  slides,
  sliderClassName,
  slideClassName,
  onclick,
  select,
}) {
  return (
    <div className={className}>
      <div className={sliderClassName}>
        {slides.map((tag, index) => (
          <span
            index={index}
            className={cn(slideClassName, {
              'TextSlider__button--active': index === select,
            })}
            key={index}
            onClick={() => {
              onclick(tag);
            }}
            onKeyPress={() => {
              onclick(tag);
            }}
            role="button"
            tabIndex={0}
          >
            {tag}
          </span>
        ))}
      </div>
      <button className="TextSlider__button TextSlider__button--backward">
        <ArrowSvg className="TextSlider__button__icon--backward" />
      </button>
      <button className="TextSlider__button TextSlider__button--forward">
        <ArrowSvg className="TextSlider__button__icon--forward" />
      </button>
    </div>
  );
}

export default TextSlider;
