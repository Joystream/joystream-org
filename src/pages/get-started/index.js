import React from 'react';
import BaseLayout from '../../components/_layouts/Base';
import SiteMetadata from '../../components/SiteMetadata';
import { ReactComponent as Arrow } from '../../assets/svg/arrow-down-small.svg';

import GetStartedHero from '../../components/get-started/Hero';
import GetStartedHowTo from '../../components/get-started/HowTo';
import GetStartedBounties from '../../components/get-started/Bounties';

import './style.scss';

const GetStarted = () => {
  return (
    <BaseLayout>
      <SiteMetadata
        title="Getting Started"
        description="Get involved in the creation and management of ..." //needs updating
      />

      <GetStartedHero />

      <GetStartedHowTo />

      <GetStartedBounties />

      <div className="GetStarted__cta-wrapper">
        <div className="GetStarted__cta">
          <h2 className="GetStarted__cta__text">Join telegram and change the online video industry with us</h2>
          <a target="_blank" href="https://t.me/JoyStreamOfficial">
            <div className="GetStarted__cta__button">
              <p className="GetStarted__cta__button-text">Open telegram</p>
              <Arrow className="GetStarted__cta__button-arrow" />
            </div>
          </a>
        </div>
      </div>
    </BaseLayout>
  );
};

export default GetStarted;
