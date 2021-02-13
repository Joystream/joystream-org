import React, { useEffect, useRef, useState, useCallback, useLayoutEffect } from 'react';
import { ReactComponent as Arrow } from '../../assets/svg/arrow-down-small.svg';

import './style.scss';

const SCROLL_AMOUNT = 300;

const CardCarousel = ({ children }) => {
  const listRef = useRef();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScrollLeft, setMaxScrollLeft] = useState(undefined);

  useEffect(() => {
    function handleResize() {
      setMaxScrollLeft(listRef.current.scrollWidth - listRef.current.clientWidth);
    }

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [children]);

  const scrollBy = amount => {
    listRef.current.scrollBy({
      left: amount,
      behavior: 'smooth',
    });
  };

  const setStructure = () => {
    if (children?.length <= 3) {
      return {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 400px)',
      };
    } else if (children?.length === 4) {
      return {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 295px)',
      };
    }

    return null;
  };

  return (
    <div className="CardCarousel">
      <div
        ref={listRef}
        onScrollCapture={e => setScrollPosition(e.target.scrollLeft)}
        className="CardCarousel__cards"
        style={{ ...setStructure() }}
      >
        {children}
      </div>
      {maxScrollLeft > 0 ? (
        <div className="CardCarousel__control">
          <div role='presentation' onClick={() => scrollBy(-SCROLL_AMOUNT)} className="CardCarousel__control__arrow-wrapper">
            <Arrow onClick={() => scrollBy(-SCROLL_AMOUNT)} className="CardCarousel__control__arrow-left" />
          </div>
          <div className="CardCarousel__control__tracker">
            <div
              style={{ width: '25%', marginLeft: `${(scrollPosition / maxScrollLeft) * 75}%` }}
              className="CardCarousel__control__tracker__position"
            ></div>
          </div>
          <div role='presentation' onClick={() => scrollBy(SCROLL_AMOUNT)} className="CardCarousel__control__arrow-wrapper">
            <Arrow onClick={() => scrollBy(SCROLL_AMOUNT)} className="CardCarousel__control__arrow-right" />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default CardCarousel;
