import React, { useState, useEffect, useRef } from 'react';
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

const Graph = ({ data }) => {
  const graphWrapperRef = useRef(null);
  const [{ width, height }, setDimensions] = useState({ width: 600, height: 120 });
  const updateDimensions = () => {
    if (graphWrapperRef.current) {
      setDimensions({
        width: graphWrapperRef.current.offsetWidth,
        height: graphWrapperRef.current.offsetHeight,
      });
    }
  };

  useEffect(() => {
    window.addEventListener('resize', updateDimensions);

    updateDimensions();
    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, [graphWrapperRef.current]);

  return (
    <div ref={graphWrapperRef} className="IndexPage__tokenomics__metrics__container__content__price__graph-wrapper">
      <div className="IndexPage__tokenomics__metrics__container__content__price__graph">
        <svg viewBox={'0 0' + ' ' + width + ' ' + height} preserveAspectRatio="none" width="100%">
          <VictoryLine
            height={height}
            width={width}
            style={{
              data: { stroke: 'rgba(12, 152, 70, 1)', strokeWidth: '4px' },
            }}
            domainPadding={{ x: [0, 0], y: [2, 2] }}
            data={data}
            padding={{ top: 0, bottom: 0, left: 0, right: 0 }}
            standalone={false}
          />
        </svg>
      </div>
    </div>
  );
};

const Tokenomics = ({ tokenomicsData, priceData, t }) => {
  const graphData = tokenomicsData?.tokenPrices
    ? tokenomicsData.tokenPrices.map((item, index) => ({ x: index + 1, y: Number(item.price) }))
    : [{ x: 0, y: 0 }];
  const lastWeekChange = tokenomicsData?.lastWeekChange ?? 0;

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
                <p className="IndexPage__tokenomics__metrics__container__content__price__change">
                  {Math.round(lastWeekChange)}% Last week
                </p>
                <Graph data={graphData} />
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
