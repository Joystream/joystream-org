import React, { useState } from "react";
import { ReactComponent as ArrowSvg } from "../../assets/svg/slider_left.svg";

import "./style.scss";

function TextSlider({
  className,
  slides,
  sliderClassName,
  slideClassName,
  onclick,
}) {
  const [active, setActive] = useState([]);

  return (
    <div className={className}>
      <div className={sliderClassName}>
        {slides.map((tag, index) => (
          <span
            index={index}
            className={slideClassName}
            key={index}
            onClick={() => onclick(tag)}
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
