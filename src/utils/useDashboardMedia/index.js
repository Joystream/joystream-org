import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

export default function useDashboardMedia() {
  const [currentBreakpoints, setCurrentBreakpoints] = useState('xxs');

  const isXxs = useMediaQuery({ maxWidth: 424 });
  const isXs = useMediaQuery({ minWidth: 425, maxWidth: 767 });
  const isSm = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isMd = useMediaQuery({ minWidth: 1024, maxWidth: 1439 });
  const isLg = useMediaQuery({ minWidth: 1440, maxWidth: 1919 });
  const isXl = useMediaQuery({ minWidth: 1920 });

  useEffect(() => {
    if (isXxs) {
      setCurrentBreakpoints('xxs');
    } else if (isXs) {
      setCurrentBreakpoints('xs');
    } else if (isSm) {
      setCurrentBreakpoints('sm');
    } else if (isMd) {
      setCurrentBreakpoints('md');
    } else if (isLg) {
      setCurrentBreakpoints('lg');
    } else if (isXl) {
      setCurrentBreakpoints('xl');
    }
  }, [isXxs, isXs, isSm, isMd, isLg, isXl]);

  return { currentBreakpoints };
}
