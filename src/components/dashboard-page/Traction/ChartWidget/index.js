import React from 'react';
import { string, number, arrayOf, shape } from 'prop-types';

import DashboardWidgetHeading from '../../../DashboardWidgetHeading';

import Chart from '../Chart';

import './style.scss';

const propTypes = {
  heading: string.isRequired,
  valueOfIndicatorInThousands: number.isRequired,
  growthRate: number.isRequired,
  indicator: string.isRequired,
  chartData: arrayOf(
    shape({
      month: string.isRequired,
      0: number.isRequired,
      1: number.isRequired,
      2: number.isRequired,
      3: number.isRequired,
    })
  ),
  chartHeight: number,
};

const ChartWidget = ({ heading, valueOfIndicatorInThousands, growthRate, indicator, chartData, chartHeight }) => {
  const growthRateWithSign = growthRate > 0 ? `+${growthRate}` : growthRate;

  return (
    <div className="dashboard-traction-chart-widget">
      <DashboardWidgetHeading heading={heading} />
      <p className="dashboard-traction-chart-widget__indicator-value">{`${valueOfIndicatorInThousands}K`}</p>
      <p className="dashboard-traction-chart-widget__growth-rate">{`${growthRateWithSign}% Changes`}</p>
      <h4 className="dashboard-traction-chart-widget__indicator">{`${indicator} per week`}</h4>
      <Chart data={chartData} chartHeight={chartHeight} />
    </div>
  );
};

ChartWidget.propTypes = propTypes;

export default ChartWidget;
