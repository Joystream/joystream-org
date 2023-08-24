import React, { createRef, useState } from "react";
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Slide,
  Slider,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { ReactComponent as ArrowSvg } from "../../assets/svg/slider_left.svg";

import "./style.scss";

const sizes = {
  small: [305, 171],
  default: [246, 152],
  large: [441, 300],
};
function TextSlider({
  className,
  withSpacing,
  slides,
  size = "default",
  sliderClassName,
  slideClassName,
}) {
  const [screenWidth, setScreenWidth] = useState();
  const visibleSlides = screenWidth < 768 ? 1 : 2;

  React.useEffect(() => {
    const updateScreenWidth = () => setScreenWidth(window.innerWidth);
    updateScreenWidth();

    window.addEventListener("resize", updateScreenWidth);
    return () => window.removeEventListener("resize", updateScreenWidth);
  }, []);

  return (
    <CarouselProvider
      naturalSlideWidth={sizes[size][0] + (withSpacing ? 20 : 0)}
      naturalSlideHeight="10"
      totalSlides={slides.length + 1}
      className={className}
      visibleSlides={visibleSlides}
    >
      <Slider className={sliderClassName}>
        {slides.map((tag, index) => (
          <Slide index={index} className={slideClassName}>
            {tag}
          </Slide>
        ))}
      </Slider>
      <ButtonBack className="TextSlider__button">
        <ArrowSvg className="TextSlider__button__icon--backward" />
      </ButtonBack>
      <ButtonNext className="TextSlider__button">
        <ArrowSvg className="TextSlider__button__icon--forward" />
      </ButtonNext>
    </CarouselProvider>
  );
}

export default TextSlider;
