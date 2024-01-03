import React, { useState } from 'react';
import cn from 'classnames';
import { string } from 'prop-types';

import DashboardWidgetHeading from '../DashboardWidgetHeading';
import DashboardTokenPriceChart from '../DashboardTokenPriceChart';

import { generateChartMockData } from '../DashboardTokenPriceChart/utils';

import './style.scss';

const propTypes = {
  widgetCn: string,
};

const DashboardTokenPriceChartWidget = ({ widgetCn }) => {
  const [data] = useState(() => generateChartMockData());
  const currentPrice = Number(data.at(-1).price).toFixed(6);
  const currentPriceWithCurrency = `$${currentPrice}`;
  const growthRate = '+2% Last week';

  return (
    <div className={cn('dashboard-token-price-chart-widget', { [widgetCn]: widgetCn })}>
      <DashboardWidgetHeading heading="Price" />
      <p className="dashboard-token-price-chart-widget__current-price">{currentPriceWithCurrency}</p>
      <p className="dashboard-token-price-chart-widget__growth-rate">{growthRate}</p>
      <DashboardTokenPriceChart data={data} />
    </div>
  );
};

DashboardTokenPriceChartWidget.propTypes = propTypes;

export default DashboardTokenPriceChartWidget;
