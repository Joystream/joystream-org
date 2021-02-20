import React from 'react';
import GetStartedHeroImage from '../../../assets/svg/hero-getting-started.svg';
import GetStartedHeroAlt from '../../../assets/svg/hero-getting-started-alt.svg';
import { ReactComponent as Arrow } from '../../../assets/svg/arrow-down-small.svg';

import './style.scss';

const GetStartedHero = () => (
  <div className="GetStarted__hero-wrapper">
    <div className="GetStarted__hero">
      <div className="GetStarted__hero__content">
        <h1 className="GetStarted__hero__title">How to Contribute and Participate</h1>
        <p className="GetStarted__hero__subtitle">
          Read more about the current ways you can add value to the project and earn rewards for doing so.
        </p>
        <a href="#opportunities">
          <div className="GetStarted__hero__button">
            <p className="GetStarted__hero__button-text">View opportunities</p>
            <Arrow className="GetStarted__hero__button-arrow" />
          </div>
        </a>
      </div>
      <img src={GetStartedHeroImage} className="GetStarted__hero__image" alt="getting started hero" />
      <img src={GetStartedHeroAlt} className="GetStarted__hero__image-alt" alt="alternate getting started hero" />
    </div>
  </div>
);

export default GetStartedHero;
