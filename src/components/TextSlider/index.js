import React, { useState } from "react";
import { ReactComponent as ArrowSvg } from "../../assets/svg/slider_left.svg";
import cn from "classnames";

import "./style.scss";

function TextSlider({
  className,
  slides,
  sliderClassName,
  slideClassName,
  onclick,
}) {
  const [active, setActive] = useState(-1);

  return (
    <div className={className}>
      <div className={sliderClassName}>
        {slides.map((tag, index) => (
          <span
            index={index}
            className={cn(slideClassName, {
              "TextSlider__button--active": index === active,
            })}
            key={index}
            onClick={() => {
              index === active ? onclick("") : onclick(tag);
              index === active ? setActive(-1) : setActive(index);
            }}
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
