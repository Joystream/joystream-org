import React from 'react';
import { Trans, Link } from 'gatsby-plugin-react-i18next';
import HeroImage from '../../../assets/svg/hero-builder.svg';
import { ReactComponent as Arrow } from '../../../assets/svg/arrow-down-small.svg';

import './style.scss';

const Hero = ({ t }) => {
  return (
    <div className="IndexPage__hero-wrapper">
      <div className="IndexPage__hero">
        <div className="IndexPage__hero__content">
          <h1 className="IndexPage__hero__title">{t('landing.hero.title')}</h1>
          <p className="IndexPage__hero__subtitle">
            <Trans i18nKey="landing.hero.subtitle" components={[<br />]} />
          </p>
          <Link to="/start-here/what-is-joystream" className="IndexPage__hero__button-container">
            <div className="IndexPage__hero__button">
              <p className="IndexPage__hero__button-text">{t('button.getStarted.text')}</p>
              <Arrow className="IndexPage__hero__button-arrow" />
            </div>
          </Link>
        </div>
        <img src={HeroImage} className="IndexPage__hero__image" alt="getting started hero" />
        <img src={HeroImage} className="IndexPage__hero__image-alt" alt="alternate getting started hero" />
      </div>
    </div>
  );
};

export default Hero;
