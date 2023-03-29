import React from 'react';
import TypeWriter from 'typewriter-effect';
import Plx from 'react-plx';
import { Trans } from 'gatsby-plugin-react-i18next';

import { ArrowButton } from '../../ArrowButton';
import Button from '../../Button';

import AtlasHeroBackgroundImage from '../../../assets/images/landing/atlas-hero-background.webp';
import AtlasHeroForegroundImage from '../../../assets/images/landing/atlas-hero-foreground.webp';
import AtlasHeroButtonImage from '../../../assets/images/landing/atlas-hero-button.webp';

import './style.scss';

const parallaxDataForeground = [
  {
    start: 0,
    duration: 1400,
    easing: 'easeIn',
    properties: [
      {
        startValue: -700,
        endValue: -900,
        property: 'translateY',
      },
    ],
  },
];

const parallaxDataButton = [
  {
    start: 0,
    end: 1400,
    easing: 'easeIn',
    properties: [
      {
        startValue: -685,
        endValue: -985,
        property: 'translateY',
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
                      t('landing.hero.typewriterOptions.builders'),
                      t('landing.hero.typewriterOptions.users'),
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
        {/* <div className="IndexPage__hero__buttons">
          <ArrowButton
            link="#apps-built-on-joystream"
            text={t('landing.hero.viewApps')}
            className="IndexPage__hero__button"
            textClassname="IndexPage__hero__button-text"
          />
          <Button href="#start-your-community" className="IndexPage__hero__community-button">
            {t('landing.hero.startYourCommunity')}
          </Button>
        </div> */}
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
          <Plx
            parallaxData={parallaxDataButton}
            animateWhenNotInViewport={true}
            className="IndexPage__hero__illustration__button-plx"
          >
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
