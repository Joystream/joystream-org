import React from 'react';
import Plx from 'react-plx';
import { Trans } from 'gatsby-plugin-react-i18next';

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
          <div className="IndexPage__creator-tokens__hero__coming-soon">{t("landing.creatorTokens.hero.comingSoon")}</div>
          <h3 className="IndexPage__creator-tokens__hero__section-title">{t("landing.creatorTokens.hero.sectionTitle")}</h3>
          <h2 className="IndexPage__creator-tokens__hero__title">
            <Trans i18nKey="landing.creatorTokens.hero.title" components={{ br: <br/> }} />
          </h2>
          <p className="IndexPage__creator-tokens__hero__subtitle">
            {t("landing.creatorTokens.hero.subtitle")}
          </p>
          <a href="#0" target="_blank" className="IndexPage__creator-tokens__hero__link">
            {t("landing.creatorTokens.hero.link")}
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
            <h5 className="IndexPage__creator-tokens__fundraising__content__section-title">{t("landing.creatorTokens.fundraising.sectionTitle")}</h5>
            <h4 className="IndexPage__creator-tokens__fundraising__content__title">
              <Trans i18nKey="landing.creatorTokens.fundraising.title" components={{ br: <br/> }} />
            </h4>
            <p className="IndexPage__creator-tokens__fundraising__content__subtitle">
              {t("landing.creatorTokens.fundraising.subtitle")}
            </p>
          </div>
        </div>
        <div className="IndexPage__creator-tokens__stable-income">
          <div className="IndexPage__creator-tokens__stable-income__content">
            <h5 className="IndexPage__creator-tokens__stable-income__content__section-title">{t("landing.creatorTokens.stableIncome.sectionTitle")}</h5>
            <h4 className="IndexPage__creator-tokens__stable-income__content__title">
              {t("landing.creatorTokens.stableIncome.title")}
            </h4>
            <p className="IndexPage__creator-tokens__stable-income__content__subtitle">
              {t("landing.creatorTokens.stableIncome.subtitle")}
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
            <h5 className="IndexPage__creator-tokens__secure-listing__content__section-title">{t("landing.creatorTokens.secureListing.sectionTitle")}</h5>
            <h4 className="IndexPage__creator-tokens__secure-listing__content__title">
              <Trans i18nKey="landing.creatorTokens.secureListing.title" components={{ br: <br/> }} />
            </h4>
            <p className="IndexPage__creator-tokens__secure-listing__content__subtitle">
              {t("landing.creatorTokens.secureListing.subtitle")}
            </p>
          </div>
        </div>
        <div className="IndexPage__creator-tokens__share-upside">
          <div className="IndexPage__creator-tokens__share-upside__content">
            <h5 className="IndexPage__creator-tokens__share-upside__content__section-title">
              {t("landing.creatorTokens.shareUpside.sectionTitle")}
            </h5>
            <h4 className="IndexPage__creator-tokens__share-upside__content__title">
              <Trans i18nKey="landing.creatorTokens.shareUpside.title" components={{ br: <br/> }} />
            </h4>
            <p className="IndexPage__creator-tokens__share-upside__content__subtitle">
              {t("landing.creatorTokens.shareUpside.subtitle")}
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
