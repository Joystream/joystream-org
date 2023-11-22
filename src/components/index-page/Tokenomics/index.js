import React from 'react';
import { VictoryChart, VictoryTheme, VictoryLine } from 'victory';
// import { Trans } from 'react-i18next';

import { ReactComponent as InfoIcon } from '../../../assets/svg/info.svg';
import { ReactComponent as GraphIllustration } from '../../../assets/svg/landing/graph.svg';

import './style.scss';
import { color } from 'd3-color';

const Container = ({ title, type, children }) => {
  return (
    <div
      className={`IndexPage__tokenomics__metrics__container-wrapper IndexPage__tokenomics__metrics__container-wrapper--${type}`}
    >
      <div className="IndexPage__tokenomics__metrics__container">
        <div className="IndexPage__tokenomics__metrics__container__title">
          {title}
          <div className="IndexPage__tokenomics__metrics__container__title__info">
            <InfoIcon />
            <div className="IndexPage__tokenomics__metrics__container__title__info__modal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis aliquam ultricies.
            </div>
          </div>
        </div>
        <div className="IndexPage__tokenomics__metrics__container__content">{children}</div>
      </div>
    </div>
  );
};

const parseValue = (value, price = undefined) => {
  if (!value) return '0';

  if (price && price === 0) {
    return '0';
  }

  let options = {};
  if (price) {
    value = Math.round(value * price);
    options = { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 };
  }

  const intlNumber = new Intl.NumberFormat('en-US', options).formatToParts(value);
  return intlNumber.map(part => (part.value === ',' ? ' ' : part.value)).join('');
};

const Tokenomics = ({ tokenomicsData, priceData, t }) => {
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
                <p className="IndexPage__tokenomics__metrics__container__content__price__value">
                  ${priceData.price.toFixed(6)}
                </p>
                <p className="IndexPage__tokenomics__metrics__container__content__price__change">+2% Last week</p>
                {/* <GraphIllustration className="IndexPage__tokenomics__metrics__container__content__price__graph" /> */}
                <div className="IndexPage__tokenomics__metrics__container__content__price__graph">
                  <VictoryLine
                    height={220}
                    width={600}
                    style={{
                      data: { stroke: 'rgba(12, 152, 70, 1)', strokeWidth: '4px' },
                    }}
                    domainPadding={{ y: [2, 2] }}
                    data={[
                      { x: 1, y: 0.0533692591 },
                      { x: 2, y: 0.0544436229 },
                      { x: 3, y: 0.0530284464 },
                      { x: 4, y: 0.0545367403 },
                      { x: 5, y: 0.0540234854 },
                      { x: 6, y: 0.0486381801 },
                      { x: 7, y: 0.0455625053 },
                      { x: 8, y: 0.0459339375 },
                      { x: 9, y: 0.0470466089 },
                      { x: 10, y: 0.0469815991 },
                      { x: 11, y: 0.044788736 },
                      { x: 12, y: 0.0441737527 },
                      { x: 13, y: 0.0454796688 },
                      { x: 14, y: 0.046046341 },
                      { x: 15, y: 0.0465706289 },
                      { x: 16, y: 0.0468192073 },
                      { x: 17, y: 0.0452967397 },
                      { x: 18, y: 0.0457203189 },
                      { x: 19, y: 0.0447609392 },
                      { x: 20, y: 0.04371067 },
                      { x: 21, y: 0.0422706662 },
                      { x: 22, y: 0.042132806 },
                      { x: 23, y: 0.0418618022 },
                    ]}
                  />
                </div>
              </div>
            }
          />
          <Container
            title="Market cap"
            type="market-cap"
            children={
              <p className="IndexPage__tokenomics__metrics__container__content__simple-value">
                {parseValue(tokenomicsData?.circulatingSupply, priceData.price)}
              </p>
            }
          />
          <Container
            title="Total supply"
            type="total-supply"
            children={
              <p className="IndexPage__tokenomics__metrics__container__content__simple-value">
                {parseValue(tokenomicsData?.totalSupply)}
              </p>
            }
          />
          <Container
            title="Circulating supply"
            type="circulating-supply"
            children={
              <p className="IndexPage__tokenomics__metrics__container__content__simple-value">
                {parseValue(tokenomicsData?.circulatingSupply)}
              </p>
            }
          />
          <Container
            title="FDV"
            type="fdv"
            children={
              <p className="IndexPage__tokenomics__metrics__container__content__simple-value">
                {parseValue(tokenomicsData?.totalSupply, priceData.price)}
              </p>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
