import React from 'react';

import './style.scss';

const NumberStep = ({ number, text, otherText, isFirst, isMiddle, isLast }) => {
  return (
    <div className="BecomeFM__number-step">
      <div className="BecomeFM__number-step__number__wrapper">
        <div className={`BecomeFM__number-step__number ${isLast ? 'BecomeFM__number-step__number--white' : ''}`}>
          {number}
        </div>
        {isFirst && <div className="BecomeFM__number-step__line"></div>}
        {isMiddle && (
          <>
            <div className="BecomeFM__number-step__line-half-blue"></div>
            <div className="BecomeFM__number-step__line-half-white"></div>
          </>
        )}
      </div>
      <div className="BecomeFM__number-step__texts">
        <p className="BecomeFM__number-step__text">{text}</p>
        <p className="BecomeFM__number-step__other-text">{otherText ?? text}</p>
      </div>
    </div>
  );
};

const BecomeFM = ({ t }) => {
  return (
    <div className="BecomeFM__wrapper">
      <div className="BecomeFM__content">
        <h2 className="BecomeFM__title">{t('onboarding.page3.fmSteps.title')}</h2>

        <div className="BecomeFM__number-steps">
          <NumberStep
            isFirst
            number={t('numbers.one')}
            text={t('onboarding.page3.fmSteps.step1.title')}
            otherText={t('onboarding.page3.fmSteps.step1.text')}
          />
          <NumberStep
            isMiddle
            number={t('numbers.two')}
            text={t('onboarding.page3.fmSteps.step2.title')}
            otherText={t('onboarding.page3.fmSteps.step2.text')}
          />
          <NumberStep
            isLast
            number={t('numbers.three')}
            text={t('onboarding.page3.fmSteps.step3.title')}
            otherText={t('onboarding.page3.fmSteps.step3.text')}
          />
        </div>
      </div>
    </div>
  );
};

export default BecomeFM;
