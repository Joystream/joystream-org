import React, { useState, useRef, useEffect } from 'react';
import Lottie from 'react-lottie';
import { ReactComponent as Arrow } from '../../../assets/svg/arrow-down-small.svg';
import { ReactComponent as OnlineIcon } from '../../../assets/svg/integrators-online-icon.svg';
import animationData1 from './animation-1';
import animationData2 from './animation-2';
import animationData3 from './animation-3';
import { Waypoint } from 'react-waypoint';

import './style.scss';

const defaultOptions = {
  loop: false,
  autoplay: true,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const Integrators = ({ t, onChatWithIntegrator }) => {
  const [shouldAnimateFirst, setShouldAnimateFirst] = useState(false);
  const [shouldAnimateSecond, setShouldAnimateSecond] = useState(false);
  const [shouldAnimateThird, setShouldAnimateThird] = useState(false);

  return (
    <div className="Integrators__wrapper">
      <div className="Integrators__content">
        <div className="Integrators__animation">
          <Waypoint onEnter={() => setShouldAnimateFirst(true)} />
          {shouldAnimateFirst && (
            <Lottie options={{ ...defaultOptions, animationData: animationData1 }} height={340} width={520} />
          )}
        </div>
        <div className="Integrators__text">
          <div className="Integrators__online-text">
            <OnlineIcon className="Integrators__online-icon" />
            {t('onboarding.integrators.online')}
          </div>
          <h2 className="Integrators__title">
            {t('onboarding.integrators.section1.title')
              .split('<br/>')
              .map((line, index) => {
                return (
                  <span key={index}>
                    {line}
                    <br />
                    <br />
                  </span>
                );
              })}
          </h2>
        </div>
      </div>
      <div className="Integrators__content">
        <div className="Integrators__animation">
          <Waypoint onEnter={() => setShouldAnimateSecond(true)} />
          {shouldAnimateSecond && (
            <Lottie options={{ ...defaultOptions, animationData: animationData2 }} height={340} width={520} />
          )}
        </div>
        <div className="Integrators__text">
          <div className="Integrators__online-text">
            <OnlineIcon className="Integrators__online-icon" />
            {t('onboarding.integrators.online')}
          </div>
          <h2 className="Integrators__title">
            {t('onboarding.integrators.section2.title')
              .split('<br/>')
              .map((line, index) => {
                return (
                  <span key={index}>
                    {line}
                    <br />
                    <br />
                  </span>
                );
              })}
          </h2>
        </div>
      </div>
      <div className="Integrators__content">
        <div className="Integrators__animation">
          <Waypoint onEnter={() => setShouldAnimateThird(true)} />
          {shouldAnimateThird && (
            <Lottie options={{ ...defaultOptions, animationData: animationData3 }} height={340} width={520} />
          )}
        </div>
        <div className="Integrators__text">
          <div className="Integrators__online-text">
            <OnlineIcon className="Integrators__online-icon" />
            {t('onboarding.integrators.online')}
          </div>
          <h2 className="Integrators__title">
            {t('onboarding.integrators.section3.title')
              .split('<br/>')
              .map((line, index) => {
                return (
                  <span key={index}>
                    {line}
                    <br />
                    <br />
                  </span>
                );
              })}
          </h2>
          <div className="Integrators__button" role="presentation" onClick={onChatWithIntegrator}>
            <p className="Integrators__button-text">{t('onboarding.integrators.button')}</p>
            <Arrow className="Integrators__button-arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Integrators;
