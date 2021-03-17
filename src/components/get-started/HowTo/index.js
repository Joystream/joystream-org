import React, { useState, useRef, useEffect } from 'react';
import useScroll from '../../../utils/useScroll';
import useWindowDimensions from '../../../utils/useWindowDimensions';

import './style.scss';

const GetStartedHowTo = () => {
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
  }, [scrollPosition]);

  return (
    <div ref={componentRef} className="GetStarted__howto-wrapper">
      <div className="GetStarted__howto">
        <h2 className="GetStarted__howto__title">How to start</h2>
        <div className="GetStarted__howto__number-steps-wrapper">
          <div
            className={`GetStarted__howto__number-steps ${
              shouldAnimate ? 'GetStarted__howto__number-steps--animated' : ''
            }`}
          >
            <div className="GetStarted__howto__number-step">1</div>
            <div className="GetStarted__howto__number-step-separator GetStarted__howto__number-step-separator--active"></div>
            <div className="GetStarted__howto__number-step">2</div>
            <div className="GetStarted__howto__number-step-separator"></div>
            <div className="GetStarted__howto__number-step">3</div>
            <div className="GetStarted__howto__number-step-separator"></div>
            <div className="GetStarted__howto__number-step">4</div>
          </div>
          <div className="GetStarted__howto__text-steps">
            <div className="GetStarted__howto__text-step">Join our Discord</div>
            <div className="GetStarted__howto__text-step">Receive free testnet tokens</div>
            <div className="GetStarted__howto__text-step">Create membership on-chain</div>
            <div className="GetStarted__howto__text-step">Pick one of the opportunities below</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStartedHowTo;
