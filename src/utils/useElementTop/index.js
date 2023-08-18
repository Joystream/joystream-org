import { useState, useEffect, useRef } from 'react';

export default function useElementTop(id) {
  const [top, setTop] = useState(0);
  const elementRef = useRef(null);

  useEffect(() => {
    function handleResize() {
      if (elementRef.current) {
        setTop(elementRef.current.getBoundingClientRect().top);
      }
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [id]);

  useEffect(() => {
    if (elementRef.current) {
      setTop(elementRef.current.getBoundingClientRect().top);
    }
  }, []);
  console.log(elementRef);
  return [top, elementRef];
}
