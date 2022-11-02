import React from 'react';
import Plx from 'react-plx';
import { Trans } from 'gatsby-plugin-react-i18next';

import { ReactComponent as ArrowIcon } from '../../../assets/svg/arrow-down-small.svg';
import CreatorTokensBackground from '../../../assets/images/landing/creator-tokens-background.png';
import CreatorTokensForeground from '../../../assets/images/landing/creator-tokens-foreground.png';
import Fundraising from '../../../assets/images/landing/creator-tokens-fundraising.png';
import StableIncome from '../../../assets/images/landing/creator-tokens-stable-income.png';
import SecureListing from '../../../assets/images/landing/creator-tokens-secure-listing.png';
import ShareUpside from '../../../assets/images/landing/creator-tokens-share-upside.png';

import { ArrowButton } from '../../ArrowButton';

import './style.scss';

const parallaxDataForeground = [
  {
    start: 'self',
    duration: 1400,
    easing: 'easeIn',
    properties: [
      {
        startValue: 250,
        endValue: 0,
        property: 'translateY',
        unit: 'px',
      },
    ],
  },
];

const CreatorTokens = ({ t }) => {
  return (
    <section className="IndexPage__creator-tokens-wrapper">
      <div className="IndexPage__creator-tokens">
        <div className="IndexPage__creator-tokens__main">
          <div className="IndexPage__creator-tokens__main__content">
            <span className="IndexPage__creator-tokens__main__content__section-title">
              {t('landing.creatorTokens.hero.sectionTitle')}
            </span>
            <h2 className="IndexPage__creator-tokens__main__content__title">
              <Trans i18nKey="landing.creatorTokens.hero.title" components={{ br: <br /> }} />
            </h2>
            <p className="IndexPage__creator-tokens__main__content__subtitle">
              {t('landing.creatorTokens.hero.subtitle')}
            </p>
            <a
              href="https://forms.gle/soSRzZHq6Pg1yxG2A"
              target="_blank"
              className="IndexPage__creator-tokens__main__content__link"
            >
              {t('landing.creatorTokens.hero.link')}
              <ArrowIcon className="IndexPage__creator-tokens__main__content__link__arrow" />
            </a>
          </div>
          <div className="IndexPage__creator-tokens__main__illustration">
            <img
              src={CreatorTokensBackground}
              className="IndexPage__creator-tokens__main__illustration__background"
              alt="(creator) token tab on atlas, showing a video and the status of your token (right)"
            />
            <Plx parallaxData={parallaxDataForeground} animateWhenNotInViewport={true}>
              <img
                src={CreatorTokensForeground}
                className="IndexPage__creator-tokens__main__illustration__foreground"
                alt="token holders list popup"
              />
            </Plx>
            <div className="IndexPage__creator-tokens__main__overlay"></div>
          </div>
        </div>
        <div className="IndexPage__creator-tokens__grid">
          <section className="IndexPage__creator-tokens__fundraising">
            <div className="IndexPage__creator-tokens__fundraising__illustration">
              <img
                src={Fundraising}
                className="IndexPage__creator-tokens__fundraising__illustration__image"
                alt="popup allowing you to buy/sell creator token"
              />
            </div>
            <div className="IndexPage__creator-tokens__fundraising__content">
              <span className="IndexPage__creator-tokens__fundraising__content__section-title">
                {t('landing.creatorTokens.fundraising.sectionTitle')}
              </span>
              <h3 className="IndexPage__creator-tokens__fundraising__content__title">
                <Trans i18nKey="landing.creatorTokens.fundraising.title" components={{ br: <br /> }} />
              </h3>
              <p className="IndexPage__creator-tokens__fundraising__content__subtitle">
                {t('landing.creatorTokens.fundraising.subtitle')}
              </p>
            </div>
          </section>
          <section className="IndexPage__creator-tokens__stable-income">
            <div className="IndexPage__creator-tokens__stable-income__illustration">
              <img
                src={StableIncome}
                className="IndexPage__creator-tokens__stable-income__illustration__image"
                alt="patronage (how many tokens you wish to receive based on the supply of your tokens on the market) slider popup that goes from 0% to 30%"
              />
            </div>
            <div className="IndexPage__creator-tokens__stable-income__content">
              <span className="IndexPage__creator-tokens__stable-income__content__section-title">
                {t('landing.creatorTokens.stableIncome.sectionTitle')}
              </span>
              <h3 className="IndexPage__creator-tokens__stable-income__content__title">
                {t('landing.creatorTokens.stableIncome.title')}
              </h3>
              <p className="IndexPage__creator-tokens__stable-income__content__subtitle">
                {t('landing.creatorTokens.stableIncome.subtitle')}
              </p>
            </div>
          </section>
          <section className="IndexPage__creator-tokens__secure-listing">
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
              <span className="IndexPage__creator-tokens__secure-listing__content__section-title">
                {t('landing.creatorTokens.secureListing.sectionTitle')}
              </span>
              <h3 className="IndexPage__creator-tokens__secure-listing__content__title">
                <Trans i18nKey="landing.creatorTokens.secureListing.title" components={{ br: <br /> }} />
              </h3>
              <p className="IndexPage__creator-tokens__secure-listing__content__subtitle">
                {t('landing.creatorTokens.secureListing.subtitle')}
              </p>
            </div>
          </section>
          <section className="IndexPage__creator-tokens__share-upside">
            <div className="IndexPage__creator-tokens__share-upside__illustration">
              <img
                src={ShareUpside}
                className="IndexPage__creator-tokens__share-upside__illustration__image"
                alt={'shows active revenue split popup with a counter and button with the title "stake"'}
              />
            </div>
            <div className="IndexPage__creator-tokens__share-upside__content">
              <span className="IndexPage__creator-tokens__share-upside__content__section-title">
                {t('landing.creatorTokens.shareUpside.sectionTitle')}
              </span>
              <h3 className="IndexPage__creator-tokens__share-upside__content__title">
                <Trans i18nKey="landing.creatorTokens.shareUpside.title" components={{ br: <br /> }} />
              </h3>
              <p className="IndexPage__creator-tokens__share-upside__content__subtitle">
                {t('landing.creatorTokens.shareUpside.subtitle')}
              </p>
            </div>
          </section>
        </div>
      </div>
      <div className="IndexPage__atlas-cta">
        <figure>
          <blockquote className="IndexPage__atlas-cta__title">
            <Trans i18nKey="landing.videoNFTs.cta.title" components={{ br: <br /> }} />
          </blockquote>
          <figcaption className="IndexPage__atlas-cta__caption">
            <p className="IndexPage__atlas-cta__caption__about">{t('landing.videoNFTs.cta.about')}</p>
            <cite>
              <p className="IndexPage__atlas-cta__caption__podcast">{t('landing.videoNFTs.cta.podcast')}</p>
            </cite>
          </figcaption>
        </figure>
        <ArrowButton
          className="IndexPage__atlas-cta__button"
          text={t('landing.videoNFTs.cta.button')}
          textClassname="IndexPage__atlas-cta__button-text"
          link="https://play.joystream.org/studio/"
        />
      </div>
    </section>
  );
};

export default CreatorTokens;
