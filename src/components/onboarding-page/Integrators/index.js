import React, { useState } from 'react';
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

  const section1Title = t('onboarding.integrators.section1.title');
  const section2Title = t('onboarding.integrators.section2.title');
  const section3Title = t('onboarding.integrators.section3.title');

  return (
    <div className="Integrators__wrapper">
      <div className="Integrators__content">
        <div className="Integrators__animation__wrapper">
          <div className="Integrators__animation">
            {shouldAnimateFirst && (
              <Lottie options={{ ...defaultOptions, animationData: animationData1 }} height={340} width={520} />
            )}
            {shouldAnimateSecond && (
              <Lottie options={{ ...defaultOptions, animationData: animationData2 }} height={340} width={520} />
            )}
            {shouldAnimateThird && (
              <Lottie options={{ ...defaultOptions, animationData: animationData3 }} height={340} width={520} />
            )}
          </div>
        </div>
        <div className="Integrators__text__wrapper">
          <div className="Integrators__animation__mobile__wrapper">
            <div className="Integrators__animation__mobile">
              {shouldAnimateFirst && (
                <Lottie options={{ ...defaultOptions, animationData: animationData1 }} height={340} width={520} />
              )}
              {shouldAnimateSecond && (
                <Lottie options={{ ...defaultOptions, animationData: animationData2 }} height={340} width={520} />
              )}
              {shouldAnimateThird && (
                <Lottie options={{ ...defaultOptions, animationData: animationData3 }} height={340} width={520} />
              )}
            </div>
          </div>
          <div className="Integrators__text">
            <div className="Integrators__online-text">
              <OnlineIcon className="Integrators__online-icon" />
              {t('onboarding.integrators.online')}
            </div>
            <h2 className="Integrators__title">
              {section1Title.split('<br/>').map((line, index) => {
                return <span key={index}>{line}</span>;
              })}
            </h2>
            <h2 className="Integrators__title--mobile">{section1Title.split('<br/>').join(' ')}</h2>
            <Waypoint
              bottomOffset={0}
              topOffset={452}
              onEnter={() => {
                setShouldAnimateThird(false);
                setShouldAnimateSecond(false);
                setShouldAnimateFirst(true);
              }}
            />
          </div>
          <div className="Integrators__text">
            <div className="Integrators__online-text">
              <OnlineIcon className="Integrators__online-icon" />
              {t('onboarding.integrators.online')}
            </div>
            <h2 className="Integrators__title">
              {section2Title.split('<br/>').map((line, index) => {
                return <span key={index}>{line}</span>;
              })}
            </h2>
            <h2 className="Integrators__title--mobile">{section2Title.split('<br/>').join(' ')}</h2>
            <Waypoint
              className="IntegratorsclassName"
              bottomOffset={452}
              topOffset={452}
              onEnter={() => {
                setShouldAnimateFirst(false);
                setShouldAnimateThird(false);
                setShouldAnimateSecond(true);
              }}
            />
          </div>
          <div className="Integrators__text">
            <div className="Integrators__online-text">
              <OnlineIcon className="Integrators__online-icon" />
              {t('onboarding.integrators.online')}
            </div>
            <h2 className="Integrators__title">
              {section3Title.split('<br/>').map((line, index) => {
                return <span key={index}>{line}</span>;
              })}
            </h2>
            <h2 className="Integrators__title--mobile">{section3Title.split('<br/>').join(' ')}</h2>
            <Waypoint
              topOffset={0}
              bottomOffset={452}
              onEnter={() => {
                setShouldAnimateFirst(false);
                setShouldAnimateSecond(false);
                setShouldAnimateThird(true);
              }}
            />
            <div className="Integrators__button" role="presentation" onClick={onChatWithIntegrator}>
              <p className="Integrators__button-text">{t('onboarding.integrators.button')}</p>
              <Arrow className="Integrators__button-arrow" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Integrators;
