import React from 'react';
import Plx from 'react-plx';

import { ReactComponent as ArrowIcon } from '../../../assets/svg/arrow-down-small.svg';
import CreatorTokensBackground from '../../../assets/images/landing/creator-tokens-background.png';
import CreatorTokensForeground from '../../../assets/images/landing/creator-tokens-foreground.png';
import Fundraising from '../../../assets/images/landing/fundraising.png';
import StableIncome from '../../../assets/images/landing/stable-income.png';
import SecureListing from '../../../assets/images/landing/secure-listing.png';
import ShareUpside from '../../../assets/images/landing/share-upside.png';

import './style.scss';

const parallaxDataForeground = [
  {
    start: 0,
    end: 3700,
    easing: 'easeIn',
    properties: [
      {
        startValue: 280,
        endValue: 0,
        property: 'translateY',
        unit: 'px',
      },
    ],
  },
  {
    start: 3700,
    end: 4100,
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
    start: 4100,
    end: 4800,
    easing: 'easeIn',
    properties: [
      {
        startValue: 0,
        endValue: -125,
        property: 'translateY',
        unit: 'px',
      },
    ],
  },
];

const CreatorTokens = ({ t }) => {
  return (
    <div className="IndexPage__creator-tokens-wrapper">
      <div className="IndexPage__creator-tokens">
        <div className="IndexPage__creator-tokens__hero">
          <div className="IndexPage__creator-tokens__hero__coming-soon">Coming early 2023</div>
          <h3 className="IndexPage__creator-tokens__hero__section-title">CREATOR TOKENS</h3>
          <h2 className="IndexPage__creator-tokens__hero__title">
            New ways to engage and <br /> get support from your audience
          </h2>
          <p className="IndexPage__creator-tokens__hero__subtitle">
            Turn viewers into evengelists [?] by letting them hold a share in your channel when they buy your own
            channel token.
          </p>
          <a href="#0" target="_blank" className="IndexPage__creator-tokens__hero__link">
            Sign up for beta tests
            <ArrowIcon className="IndexPage__creator-tokens__hero__link__arrow" />
          </a>
          <div className="IndexPage__creator-tokens__hero__illustration">
            <img
              src={CreatorTokensBackground}
              className="IndexPage__creator-tokens__hero__illustration__background"
              alt="(creator) token tab on atlas, showing a video and the status of your token (right)"
            />
            <Plx parallaxData={parallaxDataForeground} animateWhenNotInViewport={true}>
              <img
                src={CreatorTokensForeground}
                className="IndexPage__creator-tokens__hero__illustration__foreground"
                alt="token holders list popup"
              />
            </Plx>
          </div>
          <div className="IndexPage__creator-tokens__hero__overlay"></div>
        </div>
        <div className="IndexPage__creator-tokens__fundraising">
          <div className="IndexPage__creator-tokens__fundraising__illustration">
            <img
              src={Fundraising}
              className="IndexPage__creator-tokens__fundraising__illustration__image"
              alt="popup allowing you to buy/sell creator token"
            />
          </div>
          <div className="IndexPage__creator-tokens__fundraising__content">
            <h5 className="IndexPage__creator-tokens__fundraising__content__section-title">FUND RAISING</h5>
            <h4 className="IndexPage__creator-tokens__fundraising__content__title">
              Put your token sale on autopilot <br /> or sell it on your own terms
            </h4>
            <p className="IndexPage__creator-tokens__fundraising__content__subtitle">
              Have your token supply follow the demand effortlessly with the Automated Market Maker, or go with Custom
              Sale to decide on the exact terms you want your token to be traded on.
            </p>
          </div>
        </div>
        <div className="IndexPage__creator-tokens__stable-income">
          <div className="IndexPage__creator-tokens__stable-income__content">
            <h5 className="IndexPage__creator-tokens__stable-income__content__section-title">STABLE INCOME</h5>
            <h4 className="IndexPage__creator-tokens__stable-income__content__title">
              Receive stable stream of tokens every year
            </h4>
            <p className="IndexPage__creator-tokens__stable-income__content__subtitle">
              Have your token supply follow the demand effortlessly with the Automated Market Maker, or go with Custom
              Sale to decide on the exact terms you want your token to be traded on.
            </p>
          </div>
          <div className="IndexPage__creator-tokens__stable-income__illustration">
            <img
              src={StableIncome}
              className="IndexPage__creator-tokens__stable-income__illustration__image"
              alt="patronage (how many tokens you wish to receive based on the supply of your tokens on the market) slider popup that goes from 0% to 30%"
            />
          </div>
        </div>
        <div className="IndexPage__creator-tokens__secure-listing">
          <div className="IndexPage__creator-tokens__secure-listing__illustration">
            <img
              src={SecureListing}
              className="IndexPage__creator-tokens__secure-listing__illustration__image"
              alt={
                'in the foreground: popup with graph of some asset and on top it says: "Buy $TRS", in the background: second part of the same popup, allows you to buy the asset'
              }
            />
          </div>
          <div className="IndexPage__creator-tokens__secure-listing__content">
            <h5 className="IndexPage__creator-tokens__secure-listing__content__section-title">SECURE LISTING</h5>
            <h4 className="IndexPage__creator-tokens__secure-listing__content__title">
              Yes to whitelists & vesting schedules.<br /> No to monkey business.
            </h4>
            <p className="IndexPage__creator-tokens__secure-listing__content__subtitle">
              Flexible vesting schedule allows you to specify at what rate the newly purchased tokens should be
              unlocked. Paired with ability to run whitelist-only sales, it provides everything you need to feel safe
              about your investments.
            </p>
          </div>
        </div>
        <div className="IndexPage__creator-tokens__share-upside">
          <div className="IndexPage__creator-tokens__share-upside__content">
            <h5 className="IndexPage__creator-tokens__share-upside__content__section-title">
              SHARE UPSIDE WITH THE COMMUNITY
            </h5>
            <h4 className="IndexPage__creator-tokens__share-upside__content__title">
              Invest in other creators to receive <br /> a portion of their revenue
            </h4>
            <p className="IndexPage__creator-tokens__share-upside__content__subtitle">
              Support other creators and receive a portion of their revenue, or reward your audience by sharing some of
              your channel’s earnings with them.
            </p>
          </div>
          <div className="IndexPage__creator-tokens__share-upside__illustration">
            <img
              src={ShareUpside}
              className="IndexPage__creator-tokens__share-upside__illustration__image"
              alt={'shows active revenue split popup with a counter and button with the title "stake"'}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorTokens;
