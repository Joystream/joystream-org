import React, { useState, useMemo } from 'react';
import cn from 'classnames';
import { CarouselProvider, Slider, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { arrayOf, node } from 'prop-types';

import useDashboardMedia from '../../utils/useDashboardMedia';

import { ReactComponent as ChevronRight } from '../../assets/svg/dashboard/chevron-right.svg';

import './style.scss';

const propTypes = {
  children: arrayOf(node),
};

const DashboardCarousel = ({ children }) => {
  const totalSlides = children.length;
  const [currentSlide, setCurrentSlide] = useState(0);
  const { currentBreakpoints } = useDashboardMedia();

  const visibleSlides = useMemo(
    () =>
      currentBreakpoints === 'xxs'
        ? 1.05
        : currentBreakpoints === 'xs'
        ? 1.45
        : currentBreakpoints === 'sm'
        ? 2
        : currentBreakpoints === 'md'
        ? 3
        : currentBreakpoints === 'lg'
        ? 4
        : currentBreakpoints === 'xl'
        ? // ? 2
          4
        : 2,
    [currentBreakpoints]
  );

  const largeScreens =
    currentBreakpoints === 'sm' ||
    currentBreakpoints === 'md' ||
    currentBreakpoints === 'lg' ||
    currentBreakpoints === 'xl';

  const isButtonPrevSlideVisible = currentSlide > 0 && largeScreens;
  const isButtonNextSlideVisible =
    visibleSlides < totalSlides && totalSlides - visibleSlides > currentSlide && largeScreens;

  console.log(totalSlides);

  return (
    <CarouselProvider
      className="dashboard-carousel"
      totalSlides={totalSlides}
      visibleSlides={visibleSlides}
      isIntrinsicHeight
      currentSlide={currentSlide}
      // dragEnabled={false}
    >
      <Slider>{children}</Slider>
      <ButtonBack
        className={cn('dashboard-carousel__button dashboard-carousel__button-prev-slide', {
          'is-button-visible': isButtonPrevSlideVisible,
        })}
        onClick={() => setCurrentSlide(prevSlide => prevSlide - 1)}
      >
        <ChevronRight />
      </ButtonBack>
      <ButtonNext
        className={cn('dashboard-carousel__button dashboard-carousel__button-next-slide', {
          'is-button-visible': isButtonNextSlideVisible,
        })}
        onClick={() => setCurrentSlide(prevSlide => prevSlide + 1)}
      >
        <ChevronRight />
      </ButtonNext>
      <div
        className={cn('dashboard-carousel__prev-overlay dashboard-carousel__overlay', {
          visible: isButtonPrevSlideVisible,
        })}
      ></div>
      <div
        className={cn('dashboard-carousel__next-overlay dashboard-carousel__overlay', {
          visible: isButtonNextSlideVisible,
        })}
      ></div>
    </CarouselProvider>
  );
};

DashboardCarousel.propTypes = propTypes;

export default DashboardCarousel;
