import { useState, useEffect } from 'react';

function getScrollData() {
  let scrollPosition = 0;
  
  if(typeof window !== 'undefined') {
    const { scrollY } = window;
    scrollPosition = scrollY;
  }

  return {
        scrollPosition
  };
}

export default function useScroll() {
  const [scrollData, setScrollData] = useState(getScrollData());

  useEffect(() => {
    function handleScroll() {
      setScrollData(getScrollData());
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollData;
}