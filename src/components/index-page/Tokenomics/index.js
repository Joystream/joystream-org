import React from 'react';
// import { Trans } from 'react-i18next';

import { ReactComponent as InfoIcon } from '../../../assets/svg/info.svg';
import { ReactComponent as GraphIllustration } from '../../../assets/svg/landing/graph.svg';

import './style.scss';

const Container = ({ title, type, children }) => {
  return (
    <div
      className={`IndexPage__tokenomics__metrics__container-wrapper IndexPage__tokenomics__metrics__container-wrapper--${type}`}
    >
      <div className="IndexPage__tokenomics__metrics__container">
        <div className="IndexPage__tokenomics__metrics__container__title">
          {title}
          <InfoIcon className="IndexPage__tokenomics__metrics__container__title__info" />
        </div>
        <div className="IndexPage__tokenomics__metrics__container__content">{children}</div>
      </div>
    </div>
  );
};

const Tokenomics = ({ t }) => {
  return (
    <section className="IndexPage__tokenomics-wrapper">
      <div className="IndexPage__tokenomics">
        <header className="IndexPage__tokenomics__header">
          <span className="IndexPage__tokenomics__header__section-title">{t('landing.tokenomics.sectionTitle')}</span>
          <h2 className="IndexPage__tokenomics__header__title">Token Metrics</h2>
        </header>
        <div className="IndexPage__tokenomics__metrics">
          <Container
            title="Price"
            type="price"
            children={
              <div className="IndexPage__tokenomics__metrics__container__content__price">
                <p className="IndexPage__tokenomics__metrics__container__content__price__value">$0.005452</p>
                <p className="IndexPage__tokenomics__metrics__container__content__price__change">+2% Last week</p>
                <GraphIllustration className="IndexPage__tokenomics__metrics__container__content__price__graph" />
              </div>
            }
          />
          <Container
            title="Market cap"
            type="market-cap"
            children={<p className="IndexPage__tokenomics__metrics__container__content__simple-value">1 001 002 450</p>}
          />
          <Container
            title="Total supply"
            type="total-supply"
            children={<p className="IndexPage__tokenomics__metrics__container__content__simple-value">1 022 914 460</p>}
          />
          <Container
            title="Circulating supply"
            type="circulating-supply"
            children={<p className="IndexPage__tokenomics__metrics__container__content__simple-value">284 999 234</p>}
          />
          <Container
            title="FDV"
            type="fdv"
            children={<p className="IndexPage__tokenomics__metrics__container__content__simple-value">$5 577 184</p>}
          />
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
