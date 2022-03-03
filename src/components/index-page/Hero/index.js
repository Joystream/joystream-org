import React from 'react';
import { Trans, Link } from 'gatsby-plugin-react-i18next';
import HeroImage from '../../../assets/svg/hero-builder.svg';
import { ReactComponent as Arrow } from '../../../assets/svg/arrow-down-small.svg';

import './style.scss';

const TestnetMetric = ({ title, metric }) => (
  <div className="IndexPage__hero__metric">
    <h3 className="IndexPage__hero__metric__title">{title}</h3>
    <p className="IndexPage__hero__metric__value">{metric}</p>
  </div>
);

const TestnetMetricPlaceholder = () => (
  <div className="IndexPage__hero__metric IndexPage__hero__metric--placeholder">
    <div className="IndexPage__hero__metric__title-placeholder"></div>
    <div className="IndexPage__hero__metric__value-placeholder"></div>
  </div>
);

const formatBlockHeight = blockheight => {
  if (!blockheight && blockheight !== 0) {
    return '-';
  }

  if (blockheight < 1000) {
    return blockheight;
  }

  return `${Math.floor(blockheight / 1000)}k`;
};

const OLD_PAYOUTS = 28554;

const Hero = ({ statusData, t }) => {
  return (
    <div className="IndexPage__hero-wrapper">
      <div className="IndexPage__hero">
        <div className="IndexPage__hero__content">
          <h1 className="IndexPage__hero__title">{t('landing.hero.title')}</h1>
          <p className="IndexPage__hero__subtitle">
            <Trans i18nKey="landing.hero.subtitle" components={[<br />]} />
          </p>
          <Link to="/start-here/what-is-joystream" className="IndexPage__hero__button-container">
            <div className="IndexPage__hero__button">
              <p className="IndexPage__hero__button-text">{t('button.getStarted.text')}</p>
              <Arrow className="IndexPage__hero__button-arrow" />
            </div>
          </Link>
        </div>
        <img src={HeroImage} className="IndexPage__hero__image" alt="getting started hero" />
        <img src={HeroImage} className="IndexPage__hero__image-alt" alt="alternate getting started hero" />
      </div>
      <div className="IndexPage__hero__metrics-wrapper">
        <h2 className="IndexPage__hero__metrics__title">{t('landing.hero.metrics.mainTitle')}</h2>
        <div className="IndexPage__hero__metrics">
          {statusData ? (
            <>
              <TestnetMetric
                title={t('landing.hero.metrics.titles.participationPayout')}
                metric={statusData?.totalUSDPaid ? `$${Math.floor(statusData?.totalUSDPaid + OLD_PAYOUTS)}` : '-'}
              />
              <TestnetMetric
                title={t('landing.hero.metrics.titles.activeValidators')}
                metric={statusData?.validators?.count ?? '-'}
              />
              <TestnetMetric
                title={t('landing.hero.metrics.titles.blockHeight')}
                metric={formatBlockHeight(statusData?.finalizedBlockHeight)}
              />
              <TestnetMetric
                title={t('landing.hero.metrics.titles.memberships')}
                metric={statusData?.memberships?.platform_members ?? '-'}
              />
            </>
          ) : (
            <>
              <TestnetMetricPlaceholder />
              <TestnetMetricPlaceholder />
              <TestnetMetricPlaceholder />
              <TestnetMetricPlaceholder />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
