import React from 'react';

import { ReactComponent as ArrowIcon } from '../../../assets/svg/arrow-down-small.svg';
import PayoutsBackgroundImage from '../../../assets/images/landing/payouts-background.png';
import { ArrowButton } from '../../ArrowButton';

import './style.scss';

const YoutubeSync = () => {
  return (
    <div className="IndexPage__youtube-sync-wrapper">
      <div className="IndexPage__youtube-sync">
        <div className="IndexPage__youtube-sync__content">
          <div className="IndexPage__youtube-sync__content__coming-soon">Coming later this year</div>
          <h3 className="IndexPage__youtube-sync__content__section-title">YOUTUBE SYNC</h3>
          <h2 className="IndexPage__youtube-sync__content__title">
            Have your YouTube videos uploaded and backed up automatically
          </h2>
          <p className="IndexPage__youtube-sync__content__subtitle">
            Reach new audience with minimum effort. YouTube Partner Program will allow participants to have their videos
            uploaded & backed up on Joystream automatically as they keep creating.
          </p>
          <a href="#0" className="IndexPage__youtube-sync__content__link">
            Learn more
            <ArrowIcon className="IndexPage__youtube-sync__content__link__arrow" />
          </a>
        </div>
        <div className="IndexPage__youtube-sync__illustration">
          <img src={PayoutsBackgroundImage} className="IndexPage__youtube-sync__illustration__image" alt="" />
        </div>
      </div>
      <div className="IndexPage__youtube-sync-cta">
        <h3 className="IndexPage__youtube-sync-cta__section-title">GET STARTED NOW</h3>
        <h2 className="IndexPage__youtube-sync-cta__title">
          Stay one step ahead. Join the future of online video content today.
        </h2>
        <ArrowButton
          className="IndexPage__youtube-sync-cta__button"
          textClassname="IndexPage__youtube-sync-cta__button-text"
          link="#0"
          text="Claim your channel"
        />
      </div>
    </div>
  );
};

export default YoutubeSync;
