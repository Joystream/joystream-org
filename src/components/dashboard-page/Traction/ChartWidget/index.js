import React from 'react';
import { string, number, arrayOf, shape, bool } from 'prop-types';

import WidgetHeading from '../../WidgetHeading';

import Chart from '../Chart';

import './style.scss';

const propTypes = {
  heading: string.isRequired,
  valueOfIndicator: string.isRequired,
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
  termDefinitionKey: string,
  withYAxisMarginReduced: bool,
};

const ChartWidget = ({
  heading,
  valueOfIndicator,
  growthRate,
  indicator,
  chartData,
  chartHeight,
  termDefinitionKey,
  withYAxisMarginReduced,
}) => {
  const growthRateWithSign = growthRate > 0 ? `+${growthRate}` : growthRate;

  return (
    <div className="dashboard-traction-chart-widget">
      <WidgetHeading heading={heading} termDefinitionKey={termDefinitionKey} />
      <p className="dashboard-traction-chart-widget__indicator-value">{valueOfIndicator}</p>
      <p className="dashboard-traction-chart-widget__growth-rate">{`${growthRateWithSign}% Changes`}</p>
      <h4 className="dashboard-traction-chart-widget__indicator">{`${indicator} per week`}</h4>
      <Chart data={chartData} chartHeight={chartHeight} withYAxisMarginReduced={withYAxisMarginReduced} />
    </div>
  );
};

ChartWidget.propTypes = propTypes;

export default ChartWidget;
