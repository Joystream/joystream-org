import React from 'react';
import Plx from 'react-plx';

import { ArrowButton } from '../../ArrowButton';

import PayoutsBackgroundImage from '../../../assets/images/landing/payouts-background.png';
import PayoutsForeground from '../../../assets/images/landing/payouts-foreground.png';
import { ReactComponent as YoutubeLogo } from '../../../assets/svg/landing/youtube-logo.svg';
import { ReactComponent as ConnectionIcon } from '../../../assets/svg/landing/connection-icon.svg';
import { ReactComponent as JoystreamLogo } from '../../../assets/svg/logo-mark.svg';

import './style.scss';

const parallaxDataBackground = [
  {
    start: 0,
    end: 1000,
    easing: 'easeInOut',
    properties: [
      {
        startValue: 100,
        endValue: 0,
        property: 'translateY',
        unit: 'px',
      },
    ],
  },
  {
    start: 1000,
    end: 1300,
    properties: [
      {
        startValue: 0,
        endValue: 0,
        property: 'translateY',
        unit: 'px',
      },
    ],
  },
  {
    start: 1300,
    end: 1800,
    easing: 'easeInOut',
    properties: [
      {
        startValue: 0,
        endValue: -150,
        property: 'translateY',
        unit: 'px',
      },
    ],
  },
];

const parallaxDataForeground = [
  {
    start: 0,
    end: 1000,
    easing: 'easeInOut',
    properties: [
      {
        startValue: 550,
        endValue: 280,
        property: 'translateY',
        unit: 'px',
      },
    ],
  },
  {
    start: 1000,
    end: 1300,
    properties: [
      {
        startValue: 280,
        endValue: 280,
        property: 'translateY',
        unit: 'px',
      },
    ],
  },
  {
    start: 1300,
    end: 1800,
    easing: 'easeInOut',
    properties: [
      {
        startValue: 280,
        endValue: 200,
        property: 'translateY',
        unit: 'px',
      },
    ],
  },
];

const Payouts = ({ t }) => {
  return (
    <div className="IndexPage__payouts-wrapper">
      <div className="IndexPage__payouts">
        <section className="IndexPage__payouts__content">
          <h3 className="IndexPage__payouts__content__section-title">PAYOUTS</h3>
          <h2 className="IndexPage__payouts__content__title">Receive payouts for uploading quality videos</h2>
          <p className="IndexPage__payouts__content__subtitle">
            Upload high quality videos to get cash rewadrs from the Joystream DAO council on a regular basis. Popular
            creators are rewarded higher.
          </p>
        </section>
        <div className="IndexPage__payouts__illustration">
          <Plx parallaxData={parallaxDataBackground} animateWhenNotInViewport={true}>
            <img
              src={PayoutsBackgroundImage}
              className="IndexPage__payouts__illustration__background"
              alt="my payments tab in atlas studio"
            />
          </Plx>
          <Plx parallaxData={parallaxDataForeground} animateWhenNotInViewport={true}>
            <img
              src={PayoutsForeground}
              className="IndexPage__payouts__illustration__foreground"
              alt="claim payout popup, in front of the my payments tab"
            />
          </Plx>
        </div>
      </div>
      <div className="IndexPage__payouts-cta">
        <div className="IndexPage__payouts-cta__content">
          <div className="IndexPage__payouts-cta__content__logos">
            <YoutubeLogo className="IndexPage__payouts-cta__content__logos__youtube" />
            <ConnectionIcon className="IndexPage__payouts-cta__content__logos__connection-icon" />
            <JoystreamLogo className="IndexPage__payouts-cta__content__logos__joystream" />
          </div>
          <p className="IndexPage__payouts-cta__content__title">
            Have a YouTube channel already? <br />
            Reupload your videos to receive a guaranteed payout in the YouTube Partner Program.
          </p>
        </div>
        <ArrowButton
          link="#"
          className="IndexPage__payouts-cta__link"
          text="Learn more"
          textClassname="IndexPage__payouts-cta__link-text"
        />
      </div>
    </div>
  );
};

export default Payouts;
