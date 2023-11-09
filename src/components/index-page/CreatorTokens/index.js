import React from 'react';
import Plx from 'react-plx';
import { Trans } from 'gatsby-plugin-react-i18next';

import { ReactComponent as ArrowIcon } from '../../../assets/svg/arrow-down-small.svg';
import CreatorTokensBackground from '../../../assets/images/landing/creator-tokens-background.webp';
import CreatorTokensForeground from '../../../assets/images/landing/creator-tokens-foreground.webp';
import Fundraising from '../../../assets/images/landing/creator-tokens-fundraising.webp';
import StableIncome from '../../../assets/images/landing/creator-tokens-stable-income.webp';
import SecureListing from '../../../assets/images/landing/creator-tokens-secure-listing.webp';
import ShareUpside from '../../../assets/images/landing/creator-tokens-share-upside.webp';

import { ArrowButton } from '../../ArrowButton';

import './style.scss';

const parallaxDataForeground = [
  {
    startOffset: -250,
    start: 'self',
    duration: 1200,
    easing: 'easeIn',
    properties: [
      {
        startValue: -200,
        endValue: -450,
        property: 'translateY',
        unit: 'px',
      },
    ],
  },
];

const GridItem = ({ image, sectionTitle, title, subtitle }) => (
  <section className="IndexPage__creator-tokens__grid-item">
    <div className="IndexPage__creator-tokens__grid-item__illustration">
      <img
        src={image}
        className="IndexPage__creator-tokens__grid-item__illustration__image"
        alt="popup allowing you to buy/sell creator token"
      />
    </div>
    <div className="IndexPage__creator-tokens__grid-item__content">
      <span className="IndexPage__creator-tokens__grid-item__content__section-title">{sectionTitle}</span>
      <h3 className="IndexPage__creator-tokens__grid-item__content__title">{title}</h3>
      <p className="IndexPage__creator-tokens__grid-item__content__subtitle">{subtitle}</p>
    </div>
  </section>
);

const CreatorTokens = ({ t }) => {
  return (
    <section className="IndexPage__creator-tokens-wrapper" id="creator-tokens">
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
          <GridItem
            image={Fundraising}
            sectionTitle={t('landing.creatorTokens.fundraising.sectionTitle')}
            title={<Trans i18nKey="landing.creatorTokens.fundraising.title" components={{ br: <br /> }} />}
            subtitle={t('landing.creatorTokens.fundraising.subtitle')}
          />
          <GridItem
            image={StableIncome}
            sectionTitle={t('landing.creatorTokens.stableIncome.sectionTitle')}
            title={<Trans i18nKey="landing.creatorTokens.stableIncome.title" components={{ br: <br /> }} />}
            subtitle={t('landing.creatorTokens.stableIncome.subtitle')}
          />
          <GridItem
            image={SecureListing}
            sectionTitle={t('landing.creatorTokens.secureListing.sectionTitle')}
            title={<Trans i18nKey="landing.creatorTokens.secureListing.title" components={{ br: <br /> }} />}
            subtitle={t('landing.creatorTokens.secureListing.subtitle')}
          />
          <GridItem
            image={ShareUpside}
            sectionTitle={t('landing.creatorTokens.shareUpside.sectionTitle')}
            title={<Trans i18nKey="landing.creatorTokens.shareUpside.title" components={{ br: <br /> }} />}
            subtitle={t('landing.creatorTokens.shareUpside.subtitle')}
          />
        </div>
      </div>
    </section>
  );
};

export default CreatorTokens;
