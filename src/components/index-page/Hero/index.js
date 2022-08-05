import React from 'react';
import TypeWriter from 'typewriter-effect';
import Plx from 'react-plx';
import { Trans } from 'gatsby-plugin-react-i18next';

import { ArrowButton } from '../../ArrowButton';

import AtlasHeroBackgroundImage from '../../../assets/images/landing/atlas-hero-background.png';
import AtlasHeroForegroundImage from '../../../assets/images/landing/atlas-hero-foreground.png';
import AtlasHeroButtonImage from '../../../assets/images/landing/atlas-hero-button.png';

import './style.scss';

const parallaxDataForeground = [
  {
    start: 0,
    end: 200,
    easing: 'easeIn',
    properties: [
      {
        startValue: -700,
        endValue: -728,
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
        startValue: -728,
        endValue: -805,
        property: 'translateY',
        unit: "px"
      },
    ],
  }
];

const parallaxDataButton = [
  {
    start: 0,
    duration: 200,
    easing: 'easeIn',
    properties: [
      {
        startValue: -680,
        endValue: -730,
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
        startValue: -730,
        endValue: -800,
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
          <Trans
            i18nKey="landing.hero.title"
            components={{
              span: <span />,
              typewriter: (
                <TypeWriter
                  options={{
                    strings: [
                      t('landing.hero.typewriterOptions.creators'),
                      t('landing.hero.typewriterOptions.consumers'),
                      t('landing.hero.typewriterOptions.you'),
                      t('landing.hero.typewriterOptions.me'),
                      t('landing.hero.typewriterOptions.us'),
                    ],
                    autoStart: true,
                    loop: true,
                    wrapperClassName: 'IndexPage__hero__typewriter-title',
                    cursorClassName: 'IndexPage__hero__typewriter-cursor',
                  }}
                />
              ),
            }}
          />
        </h1>
        <p className="IndexPage__hero__subtitle">{t('landing.hero.subtitle')}</p>
        <ArrowButton
          link="https://play.joystream.org/studio/"
          text={t('landing.hero.button')}
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
        <div className="IndexPage__hero__overlay"></div>
      </div>
    </div>
  );
};

export default Hero;
