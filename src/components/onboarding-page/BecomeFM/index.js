import React, { useState, useRef, useEffect } from 'react';
import useScroll from '../../../utils/useScroll';
import useWindowDimensions from '../../../utils/useWindowDimensions';
import './style.scss';

const NumberStep = ({ text, otherText }) => {
  return (
    <div className="BecomeFM__number-step">
      <div className="BecomeFM__number-step__texts">
        <p className="BecomeFM__number-step__text">{text}</p>
        <p className="BecomeFM__number-step__other-text">{otherText ?? text}</p>
      </div>
    </div>
  );
};

const BecomeFM = ({ t }) => {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const componentRef = useRef();
  const { scrollPosition } = useScroll();
  const { height } = useWindowDimensions();

  useEffect(() => {
    if (
      scrollPosition &&
      componentRef?.current?.offsetTop &&
      height &&
      scrollPosition >= componentRef.current.offsetTop - height
    ) {
      setShouldAnimate(true);
    }
  }, [scrollPosition, height]);

  return (
    <div ref={componentRef} className="BecomeFM__wrapper">
      <div className="BecomeFM__title__wrapper">
        <h2 className="BecomeFM__title">{t('onboarding.page3.fmSteps.title')}</h2>
      </div>
      <div className="BecomeFM__content">
        <div
          className={`BecomeFM__howto__number-steps ${shouldAnimate ? 'BecomeFM__howto__number-steps--animated' : ''}`}
        >
          <div className="BecomeFM__howto__number-step">{t('numbers.one')}</div>
          <div className="BecomeFM__howto__number-step-separator BecomeFM__howto__number-step-separator--active"></div>
          <div className="BecomeFM__howto__number-step">{t('numbers.two')}</div>
          <div className="BecomeFM__howto__number-step-separator BecomeFM__howto__number-step-separator--long"></div>
          <div className="BecomeFM__howto__number-step">{t('numbers.three')}</div>
        </div>
        <div className="BecomeFM__number-steps">
          <NumberStep
            text={t('onboarding.page3.fmSteps.step1.title')}
            otherText={t('onboarding.page3.fmSteps.step1.text')}
          />
          <NumberStep
            text={t('onboarding.page3.fmSteps.step2.title')}
            otherText={t('onboarding.page3.fmSteps.step2.text')}
          />
          <NumberStep
            text={t('onboarding.page3.fmSteps.step3.title')}
            otherText={t('onboarding.page3.fmSteps.step3.text')}
          />
        </div>
      </div>
    </div>
  );
};

export default BecomeFM;
