import React, { useState } from 'react';
import cn from 'classnames';
import { string } from 'prop-types';

import WidgetHeading from '../../WidgetHeading';
import PriceChart from '../PriceChart';

import { generateCoinMarketCapStats } from '../PriceChart/utils';

import './style.scss';

const propTypes = {
  widgetCn: string,
};

const PriceChartWidget = ({ widgetCn }) => {
  const [data] = useState(() => generateCoinMarketCapStats());

  const currentPrice = Number(data.at(-1).price).toFixed(6);
  const currentPriceWithCurrency = `$${currentPrice}`;
  const growthRate = '+2% Last week';

  return (
    <div
      className={cn('dashboard-token-price-chart-widget', {
        [widgetCn]: widgetCn,
      })}
    >
      <WidgetHeading heading="Price" />
      <p className="dashboard-token-price-chart-widget__current-price">{currentPriceWithCurrency}</p>
      <p className="dashboard-token-price-chart-widget__growth-rate">{growthRate}</p>
      <PriceChart data={data} />
    </div>
  );
};

PriceChartWidget.propTypes = propTypes;

export default PriceChartWidget;
