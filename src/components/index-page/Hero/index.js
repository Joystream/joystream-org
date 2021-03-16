import React from 'react';
import GetStartedHeroImage from '../../../assets/svg/hero-builder.svg';
import GetStartedHeroAlt from '../../../assets/svg/hero-getting-started-alt.svg';
import { ReactComponent as Arrow } from '../../../assets/svg/arrow-down-small.svg';

import './style.scss';

const TestnetMetric = ({ title, metric }) => (
  <div className="IndexPage__hero__metric">
    <h3 className="IndexPage__hero__metric__title">{title}</h3>
    <p className="IndexPage__hero__metric__value">{metric}</p>
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

const Hero = ({ statusData }) => {
  return (
    <div className="IndexPage__hero-wrapper">
      <div className="IndexPage__hero">
        <div className="IndexPage__hero__content">
          <h1 className="IndexPage__hero__title">
            The video <br /> platform DAO
          </h1>
          <p className="IndexPage__hero__subtitle">
            Let’s create together a video platform controlled, owned, and operated by its users.
          </p>
          <a href="#opportunities">
            <div className="IndexPage__hero__button">
              <p className="IndexPage__hero__button-text">Start earning</p>
              <Arrow className="IndexPage__hero__button-arrow" />
            </div>
          </a>
        </div>
        <img src={GetStartedHeroImage} className="IndexPage__hero__image" alt="getting started hero" />
        <img src={GetStartedHeroImage} className="IndexPage__hero__image-alt" alt="alternate getting started hero" />
      </div>
      {statusData ? (
        <div className="IndexPage__hero__metrics-wrapper">
          <h2 className="IndexPage__hero__metrics__title">Testnet Metrics</h2>
          <div className="IndexPage__hero__metrics">
            <TestnetMetric title="Participation Payout" metric="$24029" />
            <TestnetMetric title="Active Validators" metric={statusData?.validators?.count ?? '-'} />
            <TestnetMetric title="Block Height" metric={formatBlockHeight(statusData?.finalizedBlockHeight)} />
            <TestnetMetric title="Memberships" metric={statusData?.memberships?.platform_members ?? '-'} />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Hero;
