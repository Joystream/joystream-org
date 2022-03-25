import React from 'react';
import GetStartedHeroImage from '../../../assets/svg/hero-getting-started.svg';
import GetStartedHeroAlt from '../../../assets/svg/hero-getting-started-alt.svg';
import { ReactComponent as Arrow } from '../../../assets/svg/arrow-down-small.svg';

import './style.scss';

const GetStartedHero = ({ t }) => (
  <div className="GetStarted__hero-wrapper">
    <div className="GetStarted__hero">
      <div className="GetStarted__hero__content">
        <h1 className="GetStarted__hero__title">{t('getStarted.hero.title')}</h1>
        <p className="GetStarted__hero__subtitle">{t('getStarted.hero.subtitle')}</p>
        <a href="#opportunities">
          <div className="GetStarted__hero__button">
            <p className="GetStarted__hero__button-text">{t('getStarted.hero.buttonText')}</p>
            <Arrow className="GetStarted__hero__button-arrow" />
          </div>
        </a>
      </div>
      <img src={GetStartedHeroImage} className="GetStarted__hero__image" alt={t('getStarted.hero.imageAlt')} />
      <img src={GetStartedHeroAlt} className="GetStarted__hero__image-alt" alt={t('getStarted.hero.imageAlt')} />
    </div>
  </div>
);

export default GetStartedHero;
