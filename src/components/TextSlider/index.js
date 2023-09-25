import React, { useEffect, useState } from 'react';
import { ReactComponent as ArrowSvg } from '../../assets/svg/slider_left.svg';
import cn from 'classnames';

import './style.scss';

function TextSlider({ slides, slideClassName, onclick, select }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isBackwardVisible, setIsBackwardVisible] = useState(false);
  const [isForwardVisible, setIsForwardVisible] = useState(false);

  const handlePrevClick = () => {};
  const handleNextClick = () => {};
  const handleResize = () => {
    const tagWidth = document.getElementById('my-tag').offsetWidth;
    if (tagWidth > 600) {
      setIsForwardVisible(true);
    } else {
      setIsForwardVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className="TextSlider">
      <div className="TextSlider__item" id="my-tag">
        {slides.map((tag, index) => (
          <span
            index={index}
            className={cn(slideClassName, {
              'TextSlider__button--active': index === select,
            })}
            key={index}
            onClick={() => {
              index === select ? onclick('') : onclick(tag);
            }}
            onKeyPress={() => {
              index === select ? onclick('') : onclick(tag);
            }}
            role="button"
            tabIndex={0}
          >
            {tag}
          </span>
        ))}
      </div>
      {isBackwardVisible ?? (
        <button
          className="TextSlider__button TextSlider__button--backward"
          onClick={handlePrevClick}
        >
          <ArrowSvg className="TextSlider__button__icon--backward" />
        </button>
      )}
      {isForwardVisible ?? (
        <button
          className="TextSlider__button TextSlider__button--forward"
          onClick={handleNextClick}
        >
          <ArrowSvg className="TextSlider__button__icon--forward" />
        </button>
      )}
    </div>
  );
}

export default TextSlider;
