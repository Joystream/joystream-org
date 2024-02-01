import React from 'react';
import { arrayOf, shape, instanceOf, number } from 'prop-types';

import WidgetHeading from '../../WidgetHeading';
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
      <WidgetHeading heading="Contributions" />
      <Chart chartData={chartData} />
    </div>
  );
};

ChartWidget.propTypes = propTypes;

export default ChartWidget;
