import cn from 'classnames';
import { arrayOf, node, oneOf, oneOfType, shape } from 'prop-types';
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  DotGroup,
  Slide as ReactSlide,
  Slider as ReactSlider,
} from 'pure-react-carousel';
import React, { createRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { ReactComponent as ArrowSvg } from '../../assets/svg/arrow-down-small.svg';

import 'pure-react-carousel/dist/react-carousel.es.css';
import './style.scss';

const availableThemes = ['white', 'blue', 'black'];

const SliderThemeContext = React.createContext({});

export const ThemeSlide = ({ children, className, ...props }) => {
  const { selectedTheme } = React.useContext(SliderThemeContext);

  return (
    <div className={cn('Slider__slide', `Slider__slide--${selectedTheme}`, className)} {...props}>
      {children}
    </div>
  );
};

ThemeSlide.propTypes = {
  theme: oneOf(availableThemes),
};

const sizes = {
  small: [305, 171],
  default: [246, 152],
  large: [441, 300],
};

const propTypes = {
  size: oneOf(['small', 'default', 'large']),
  themes: arrayOf(oneOf(availableThemes)),
  slides: oneOfType([
    arrayOf(node),
    arrayOf(
      shape({
        white: node,
        blue: node,
        black: node,
      })
    ),
  ]),
};

export const Slider = ({ withSpacing, slides, themes = [], size = 'default' }) => {
  const [offsetLeft, setOffsetLeft] = useState(0);
  const [selectedTheme, setTheme] = useState('white');
  const containerRef = createRef();

  React.useEffect(() => {
    const onResize = () => {
      const $slider = ReactDOM.findDOMNode(containerRef.current);
      if (!$slider) return;

      setOffsetLeft($slider.getBoundingClientRect().left);
    };

    onResize();
    window.addEventListener('resize', onResize);

    return () => window.removeEventListener('resize', onResize);
  }, [containerRef]);

  return (
    <CarouselProvider
      naturalSlideWidth={sizes[size][0] + (withSpacing ? 20 : 0)}
      naturalSlideHeight={sizes[size][1]}
      totalSlides={slides.length}
      visibleSlides={1}
      className={cn('Slider', {
        'Slider--large': size === 'large',
      })}
    >
      <SliderThemeContext.Provider value={{ selectedTheme }}>
        <div className="Slider__track" style={{ width: `calc(100vw - ${offsetLeft}px)` }}>
          <ReactSlider ref={containerRef} className="Slider__carousel">
            {slides.map((slide, i) => {
              const themeSlide = slide[selectedTheme] || slide;

              return (
                <ReactSlide
                  className="Slider__slide"
                  innerClassName={cn(withSpacing && 'Slider__slide-inner--spaced')}
                  key={i}
                  index={i}
                >
                  {typeof themeSlide === 'string' ? <img alt="" src={themeSlide} /> : themeSlide}
                </ReactSlide>
              );
            })}
          </ReactSlider>
        </div>
        <div className="Slider__controls">
          <div className="Slider__inner-controls">
            <ButtonBack className="Slider__button">
              <ArrowSvg className="Slider__arrow Slider__arrow--back" />
            </ButtonBack>
            <DotGroup
              className="Slider__dots"
              renderDots={({ currentSlide, visibleSlides, totalSlides }) => {
                return (
                  <div
                    className="Slider__indicator"
                    style={{
                      width: `${(visibleSlides / totalSlides) * 100}%`,
                      transform: `translateX(${currentSlide * 100}%)`,
                    }}
                  />
                );
              }}
            />
            <ButtonNext className="Slider__button">
              <ArrowSvg className="Slider__arrow Slider__arrow--forward" />
            </ButtonNext>
          </div>

          {themes.length > 0 && (
            <div className="Slider__themes">
              {themes.map(themeName => {
                return (
                  <button
                    key={themeName}
                    className={cn('Slider__theme', `Slider__theme--${themeName}`, {
                      'Slider__theme--selected': themeName === selectedTheme,
                    })}
                    onClick={() => setTheme(themeName)}
                  />
                );
              })}
            </div>
          )}
        </div>
      </SliderThemeContext.Provider>
    </CarouselProvider>
  );
};

Slider.propTypes = propTypes;
