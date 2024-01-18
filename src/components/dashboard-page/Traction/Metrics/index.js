import React from 'react';
import { string, number } from 'prop-types';

import DashboardWidgetHeading from '../../../DashboardWidgetHeading';

import './style.scss';

const propTypes = {
  indicator: string.isRequired,
  value: string.isRequired,
  growthRate: number,
};

const Metrics = ({ indicator, value, growthRate }) => {
  return (
    <div className="dashboard-traction-metrics">
      <DashboardWidgetHeading heading={indicator} isDim />
      <p className="dashboard-traction-metrics__value">{value}</p>
      {!!growthRate && <p className="dashboard-traction-metrics__growth-rate">{`+${growthRate}% Last week`}</p>}
    </div>
  );
};

Metrics.propTypes = propTypes;

export default Metrics;
