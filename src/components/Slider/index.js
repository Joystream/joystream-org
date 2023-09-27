import cn from 'classnames';
import { arrayOf, node, number, oneOf, oneOfType, shape } from 'prop-types';
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  DotGroup,
  Slide as ReactSlide,
  Slider as ReactSlider,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import React, { createRef, useState } from 'react';
import { ReactComponent as ArrowSvg } from '../../assets/svg/arrow-down-small.svg';
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
  step: number,
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

export const Slider = ({ className, withSpacing, slides, themes = [], size = 'default' }) => {
  const [selectedTheme, setTheme] = useState('white');
  const containerRef = createRef();
  const [screenWidth, setScreenWidth] = useState();
  const visibleSlides = screenWidth < 768 ? 1 : 2;

  React.useEffect(() => {
    const updateScreenWidth = () => setScreenWidth(window.innerWidth);
    updateScreenWidth();

    window.addEventListener('resize', updateScreenWidth);
    return () => window.removeEventListener('resize', updateScreenWidth);
  }, []);

  return (
    <CarouselProvider
      naturalSlideWidth={sizes[size][0] + (withSpacing ? 20 : 0)}
      naturalSlideHeight={sizes[size][1]}
      totalSlides={slides.length}
      visibleSlides={visibleSlides}
      className={cn(
        'Slider',
        {
          'Slider--large': size === 'large',
          'Slider--spaced': withSpacing,
        },
        className
      )}
    >
      <SliderThemeContext.Provider value={{ selectedTheme }}>
        <ReactSlider ref={containerRef} className="Slider__carousel">
          {slides.map((slide, i) => {
            const themeSlide = slide[selectedTheme] || slide;

            return (
              <ReactSlide
                className="Slider__slide"
                innerClassName={cn('Slider__slide-inner', withSpacing && 'Slider__slide-inner--spaced')}
                key={i}
                index={i}
              >
                {typeof themeSlide === 'string' ? <img alt="" src={themeSlide} /> : themeSlide}
              </ReactSlide>
            );
          })}
        </ReactSlider>
        <div className="Slider__controls">
          <div className="Slider__inner-controls">
            <ButtonBack className="Slider__button">
              <ArrowSvg className="Slider__arrow Slider__arrow--back" />
            </ButtonBack>
            <DotGroup
              className="Slider__dots"
              renderDots={({ currentSlide, totalSlides }) => {
                return (
                  <div
                    className="Slider__indicator"
                    style={{
                      width: `${(1 / (totalSlides - (visibleSlides === 2 ? 1 : 0))) * 100}%`,
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
