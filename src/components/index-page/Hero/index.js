import React from 'react';
import TypeWriter from 'typewriter-effect';
import Plx from 'react-plx';

import { ArrowButton } from '../../ArrowButton';

import AtlasHeroBackgroundImage from '../../../assets/images/landing/atlas-hero-background.png';
import AtlasHeroForegroundImage from '../../../assets/images/landing/atlas-hero-foreground.png';
import AtlasHeroButtonImage from '../../../assets/images/landing/atlas-hero-button.png';

import './style.scss';

const parallaxDataForeground = [
  {
    start: "0px",
    end: "400px",
    easing: 'easeIn',
    properties: [
      {
        startValue: -720,
        endValue: -755,
        property: 'translateY',
        unit: "px"
      },
    ],
  },
  {
    start: 700,
    end: 1200,
    easing: 'easeOut',
    properties: [
      {
        startValue: -755,
        endValue: -855,
        property: 'translateY',
        unit: "px"
      },
    ],
  }
];

const parallaxDataButton = [
  {
    start: 0,
    duration: 400,
    easing: 'easeIn',
    properties: [
      {
        startValue: -680,
        endValue: -760,
        property: 'translateY',
      },
    ],
  },
  {
    start: 700,
    end: 1200,
    easing: 'easeOut',
    properties: [
      {
        startValue: -760,
        endValue: -880,
        property: 'translateY',
        unit: "px"
      },
    ],
  },
];

const Hero = ({ t }) => {
  return (
    <div className="IndexPage__hero-wrapper">
      <div className="IndexPage__hero">
        <h1 className="IndexPage__hero__title">
          The streaming platform with more power to
          <span>
            <TypeWriter
              options={{
                strings: ['creators', 'consumers', 'you', 'me', 'us'],
                autoStart: true,
                loop: true,
                wrapperClassName: 'IndexPage__hero__typewriter-title',
                cursorClassName: 'IndexPage__hero__typewriter-cursor',
              }}
            />
          </span>
        </h1>
        <p className="IndexPage__hero__subtitle">Built on blockchain and managed by Joystream DAO.</p>
        <ArrowButton
          link="https://play.joystream.org/studio/"
          text="Claim your channel"
          className="IndexPage__hero__button"
          textClassname="IndexPage__hero__button-text"
        />
        <div className="IndexPage__hero__illustration">
          <img
            className="IndexPage__hero__illustration__background"
            src={AtlasHeroBackgroundImage}
            alt="video playing on atlas"
          />
          <Plx parallaxData={parallaxDataForeground} animateWhenNotInViewport={true}>
            <img
              className="IndexPage__hero__illustration__foreground"
              src={AtlasHeroForegroundImage}
              alt="bid section for the associated video NFT"
            />
          </Plx>
          <Plx parallaxData={parallaxDataButton} animateWhenNotInViewport={true}>
            <img
              className="IndexPage__hero__illustration__button"
              src={AtlasHeroButtonImage}
              alt="place bid on NFT button"
            />
          </Plx>
        </div>
      </div>
    </div>
  );
};

export default Hero;
