import React, { useRef, useEffect, useState, createContext } from 'react';

export const ScrollContext = createContext({});

export const ScrollProvider = ({ children }) => {
  const scrollPositionRef = useRef(0);
  const [isScrollUp, setIsScrollUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrollUp(scrollPositionRef.current > window.pageYOffset);
      scrollPositionRef.current = window.pageYOffset;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ScrollContext.Provider value={{ scrollPosition: scrollPositionRef.current, isScrollUp }}>
      {children}
    </ScrollContext.Provider>
  );
};
