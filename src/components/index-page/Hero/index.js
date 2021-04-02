import React from 'react';
import HeroImage from '../../../assets/svg/hero-builder.svg';
import { ReactComponent as Arrow } from '../../../assets/svg/arrow-down-small.svg';
import { Link } from 'gatsby';

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

const Hero = ({ statusData }) => {
  return (
    <div className="IndexPage__hero-wrapper">
      <div className="IndexPage__hero">
        <div className="IndexPage__hero__content">
          <h1 className="IndexPage__hero__title">
            The video <br /> platform DAO
          </h1>
          <p className="IndexPage__hero__subtitle">
            Together, we are building a video platform controlled, owned, and operated by its users.
          </p>
          <Link to="/get-started" className="IndexPage__hero__button-container">
            <div className="IndexPage__hero__button">
              <p className="IndexPage__hero__button-text">Start earning</p>
              <Arrow className="IndexPage__hero__button-arrow" />
            </div>
          </Link>
        </div>
        <img src={HeroImage} className="IndexPage__hero__image" alt="getting started hero" />
        <img src={HeroImage} className="IndexPage__hero__image-alt" alt="alternate getting started hero" />
      </div>
      {/* <div className="IndexPage__hero__metrics-wrapper">
        <h2 className="IndexPage__hero__metrics__title">Testnet Metrics</h2>
        <div className="IndexPage__hero__metrics">
          {statusData ? (
            <>
              <TestnetMetric title="Participation Payout" metric="$24029" />
              <TestnetMetric title="Active Validators" metric={statusData?.validators?.count ?? '-'} />
              <TestnetMetric title="Block Height" metric={formatBlockHeight(statusData?.finalizedBlockHeight)} />
              <TestnetMetric title="Memberships" metric={statusData?.memberships?.platform_members ?? '-'} />
            </>
          ) : (
            <>
              <TestnetMetricPlaceholder/>
              <TestnetMetricPlaceholder/>
              <TestnetMetricPlaceholder/>
              <TestnetMetricPlaceholder/>
            </>
          )}
        </div>
      </div> */}
    </div>
  );
};

export default Hero;
