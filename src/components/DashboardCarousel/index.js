import React, { useState, useMemo } from 'react';
import { useMediaQuery } from 'react-responsive';
import cn from 'classnames';
import { CarouselProvider, Slider, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { arrayOf, node } from 'prop-types';

import { ReactComponent as ChevronRight } from '../../assets/svg/dashboard/chevron-right.svg';

import './style.scss';

const propTypes = {
  children: arrayOf(node),
};

const DashboardCarousel = ({ children }) => {
  const totalSlides = children.length;
  const [currentSlide, setCurrentSlide] = useState(0);

  const isXxs = useMediaQuery({ maxWidth: 424 });
  const isXs = useMediaQuery({ minWidth: 425, maxWidth: 767 });
  const isSm = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isMd = useMediaQuery({ minWidth: 1024, maxWidth: 1439 });
  const isLg = useMediaQuery({ minWidth: 1440, maxWidth: 1919 });
  const isXl = useMediaQuery({ minWidth: 1920 });

  const visibleSlides = useMemo(() => (isXxs ? 1.05 : isXs ? 1.45 : isSm ? 2 : isMd ? 3 : isLg ? 4 : isXl ? 2 : 2), [
    isXxs,
    isXs,
    isSm,
    isMd,
    isLg,
    isXl,
  ]);

  const largeScreens = isSm || isMd || isLg || isXl;

  const isButtonPrevSlideVisible = currentSlide > 0 && largeScreens;
  const isButtonNextSlideVisible =
    visibleSlides < totalSlides && totalSlides - visibleSlides > currentSlide && largeScreens;

  return (
    <CarouselProvider
      className="dashboard-carousel"
      totalSlides={totalSlides}
      visibleSlides={visibleSlides}
      isIntrinsicHeight
      currentSlide={currentSlide}
      dragEnabled={false}
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
    </CarouselProvider>
  );
};

DashboardCarousel.propTypes = propTypes;

export default DashboardCarousel;
