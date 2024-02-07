import React from 'react';
import cn from 'classnames';
import { string, object } from 'prop-types';

import WidgetHeading from '../../WidgetHeading';
import PriceChart from '../PriceChart';

import { generateCoinMarketCapStats, parsePriceWeeklyChange } from '../PriceChart/utils';

import './style.scss';

const propTypes = {
  widgetCn: string,
  data: object,
};

const PriceChartWidget = ({ widgetCn, data }) => {
  const chartData = generateCoinMarketCapStats(data?.longTermPriceData, data?.longTermVolumeData);
  const currentPrice = Number(chartData.at(-1)?.price)?.toFixed(6);
  const currentPriceWithCurrency = `$${currentPrice}`;
  const growthRate = parsePriceWeeklyChange(data?.priceWeeklyChange);

  return (
    <div
      className={cn('dashboard-token-price-chart-widget', {
        [widgetCn]: widgetCn,
      })}
    >
      <WidgetHeading heading="Price" />
      <p className="dashboard-token-price-chart-widget__current-price">{currentPriceWithCurrency}</p>
      <p className="dashboard-token-price-chart-widget__growth-rate">{growthRate}</p>
      <PriceChart data={chartData} />
    </div>
  );
};

PriceChartWidget.propTypes = propTypes;

export default PriceChartWidget;
