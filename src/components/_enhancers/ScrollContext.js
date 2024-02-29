import React, { useRef, useEffect, useState, createContext } from 'react';

export const ScrollContext = createContext({});

export const ScrollProvider = ({ children, minScrollDeltaThreshold = 0, withScrollInitiallyUp = false }) => {
  const scrollPositionRef = useRef(0);
  const [isScrollUp, setIsScrollUp] = useState(() => (withScrollInitiallyUp ? true : false));

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;
      const scrollDelta = scrollPositionRef.current - currentScrollY;

      if (Math.abs(scrollDelta) > minScrollDeltaThreshold) {
        setIsScrollUp(scrollDelta > 0);
        scrollPositionRef.current = currentScrollY;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [minScrollDeltaThreshold]);

  return (
    <ScrollContext.Provider value={{ scrollPosition: scrollPositionRef.current, isScrollUp }}>
      {children}
    </ScrollContext.Provider>
  );
};
