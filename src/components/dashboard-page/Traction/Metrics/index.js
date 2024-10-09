import React from 'react';
import { string, number } from 'prop-types';

import WidgetHeading from '../../WidgetHeading';

import './style.scss';

const propTypes = {
  indicator: string.isRequired,
  value: string.isRequired,
  growthRate: number,
  termDefinitionKey: string,
};

const Metrics = ({ indicator, value, growthRate, termDefinitionKey }) => {
  return (
    <div className="dashboard-traction-metrics">
      <WidgetHeading heading={indicator} isDim termDefinitionKey={termDefinitionKey} />
      <p className="dashboard-traction-metrics__value">{value}</p>
      {/* {!!growthRate && <p className="dashboard-traction-metrics__growth-rate">{growthRate}</p>} */}
    </div>
  );
};

Metrics.propTypes = propTypes;

export default Metrics;
