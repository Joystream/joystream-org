import React, { useState, useRef, useEffect } from 'react';
import useScroll from '../../../utils/useScroll';
import useWindowDimensions from '../../../utils/useWindowDimensions';

import './style.scss';

const GetStartedHowTo = ({ t }) => {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const componentRef = useRef();
  const { scrollPosition } = useScroll();
  const { height } = useWindowDimensions();

  useEffect(() => {
    if (scrollPosition && componentRef?.current?.offsetTop && height) {
      if (scrollPosition >= componentRef.current.offsetTop - height * 0.3) {
        setShouldAnimate(true);
      }
    }
  }, [height, scrollPosition]);

  return (
    <div ref={componentRef} className="GetStarted__howto-wrapper">
      <div className="GetStarted__howto">
        <h2 className="GetStarted__howto__title">{t('getStarted.howToStart.title')}</h2>
        <div className="GetStarted__howto__number-steps-wrapper">
          <div
            className={`GetStarted__howto__number-steps ${
              shouldAnimate ? 'GetStarted__howto__number-steps--animated' : ''
            }`}
          >
            <div className="GetStarted__howto__number-step">{t('numbers.one')}</div>
            <div className="GetStarted__howto__number-step-separator GetStarted__howto__number-step-separator--active"></div>
            <div className="GetStarted__howto__number-step">{t('numbers.two')}</div>
            <div className="GetStarted__howto__number-step-separator"></div>
            <div className="GetStarted__howto__number-step">{t('numbers.three')}</div>
            <div className="GetStarted__howto__number-step-separator"></div>
            <div className="GetStarted__howto__number-step">{t('numbers.four')}</div>
          </div>
          <div className="GetStarted__howto__text-steps">
            <div className="GetStarted__howto__text-step">{t('getStarted.howToStart.discord')}</div>
            <div className="GetStarted__howto__text-step">{t('getStarted.howToStart.tokens')}</div>
            <div className="GetStarted__howto__text-step">{t('getStarted.howToStart.membership')}</div>
            <div className="GetStarted__howto__text-step">{t('getStarted.howToStart.opportunities')}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStartedHowTo;
