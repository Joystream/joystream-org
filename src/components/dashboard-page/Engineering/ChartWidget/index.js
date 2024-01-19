import React from 'react';
import { arrayOf, shape, instanceOf, number } from 'prop-types';

import DashboardWidgetHeading from '../../../DashboardWidgetHeading';
import Chart from '../Chart';

import './style.scss';

const propTypes = {
  chartData: arrayOf(
    shape({
      date: instanceOf(Date).isRequired,
      contributions: number.isRequired,
    })
  ).isRequired,
};

const ChartWidget = ({ chartData }) => {
  return (
    <div className="dashboard-engineering-chart-widget">
      <DashboardWidgetHeading heading="Contributions" />
      <Chart chartData={chartData} />
    </div>
  );
};

ChartWidget.propTypes = propTypes;

export default ChartWidget;
