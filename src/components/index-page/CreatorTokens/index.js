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
    end: 3500,
    easing: 'easeIn',
    properties: [
      {
        startValue: 250,
        endValue: 0,
        property: 'translateY',
        unit: "px"
      },
    ],
  },
  {
    start: 3500,
    end: 3800,
    properties: [
      {
        startValue: 0,
        endValue: 0,
        property: 'translateY',
        unit: "px"
      },
    ],
  },
  {
    start: 3800,
    end: 4400,
    easing: 'easeIn',
    properties: [
      {
        startValue: 0,
        endValue: -125,
        property: 'translateY',
        unit: "px"
      },
    ],
  }
];


const CreatorTokens = ({ t }) => {
  return (
    <div className="IndexPage__creator-tokens-wrapper">
      <div className="IndexPage__creator-tokens">
        <div className="IndexPage__creator-tokens__hero">
          <div className="IndexPage__creator-tokens__hero__coming-soon">Coming early 2023</div>
          <h3 className="IndexPage__creator-tokens__hero__section-title">Creator tokens</h3>
          <h2 className="IndexPage__creator-tokens__hero__title">
            New ways to engage and <br /> get support from your audience
          </h2>
          <p className="IndexPage__creator-tokens__hero__subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet rhoncus iaculis viverra nunc gravida a
            egestas. Urna pellentesque laoreet facilisis pharetra at arcu vitae.
          </p>
          <a href="#0" target="_blank" className="IndexPage__creator-tokens__hero__link">
            Sign up for beta tests
            <ArrowIcon className="IndexPage__creator-tokens__hero__link__arrow" />
          </a>
          <div className='IndexPage__creator-tokens__hero__illustration'>
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
              [Not only do we offer AMM, but there’s also the manual sale option, which gives you more control over how
              you want to sell your token]
            </p>
          </div>
        </div>
        <div className="IndexPage__creator-tokens__stable-income">
          <div className="IndexPage__creator-tokens__stable-income__content">
            <h5 className="IndexPage__creator-tokens__stable-income__content__section-title">STABLE INCOME</h5>
            <h4 className="IndexPage__creator-tokens__stable-income__content__title">
              Invest in other creators <br /> and receive regular payouts
            </h4>
            <p className="IndexPage__creator-tokens__stable-income__content__subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet rhoncus iaculis viverra nunc gravida a
              egestas. Urna pellentesque laoreet facilisis pharetra at arcu vitae.
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
              Yes to whitelists & vesting schedules.
              <br />
              No to monkey business.
            </h4>
            <p className="IndexPage__creator-tokens__secure-listing__content__subtitle">
              [Mention that Joystream takes active efforts to implement mechanisms protecting token owners from scams
              and malicious investors]
            </p>
          </div>
        </div>
        <div className="IndexPage__creator-tokens__share-upside">
          <div className="IndexPage__creator-tokens__share-upside__content">
            <h5 className="IndexPage__creator-tokens__share-upside__content__section-title">
              SHARE UPSIDE WITH THE COMMUNITY
            </h5>
            <h4 className="IndexPage__creator-tokens__share-upside__content__title">[Revenue split feature]</h4>
            <p className="IndexPage__creator-tokens__share-upside__content__subtitle">
              [this explains one reason why community will be interested. Here you can also talk about how they become a
              stakeholder that can get more aligned with helping you grow]
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
