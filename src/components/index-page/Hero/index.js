import React from 'react';

import { ArrowButton } from '../../ArrowButton';

import AtlasHeroBackgroundImage from '../../../assets/images/landing/atlas-hero-background.png';
import { ReactComponent as Arrow } from '../../../assets/svg/arrow-down-small.svg';

import './style.scss';

const Hero = ({ t }) => {
  return (
    <div className="IndexPage__hero-wrapper">
      <div className="IndexPage__hero">
        <h1 className="IndexPage__hero__title">The streaming platform with more power to <span>creators</span></h1>
        <h3 className="IndexPage__hero__subtitle">Built on blockchain and managed by Joystream DAO.</h3>
        <ArrowButton
          link="https://play.joystream.org/studio/"
          text="Claim your channel"
          className="IndexPage__hero__button"
          textClassname="IndexPage__hero__button-text"
        />
        <img
          className='IndexPage__hero__image'
          src={AtlasHeroBackgroundImage}
          alt="video playing on atlas, next to the video is a bid section for the associated NFT"
        />
      </div>
    </div>
  );
};

export default Hero;
