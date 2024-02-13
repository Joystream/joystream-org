import React from 'react';
import { string, oneOfType, number } from 'prop-types';

import WidgetHeading from '../../WidgetHeading';

import './style.scss';

const propTypes = {
  metrics: string.isRequired,
  value: oneOfType([string, number]),
  termDefinitionKey: string,
};

export const GithubStats = ({ metrics, value, termDefinitionKey }) => {
  return (
    <div className="dashboard-engineering-github-stats">
      <WidgetHeading heading={metrics} isDim termDefinitionKey={termDefinitionKey} />
      <p className="dashboard-engineering-github-stats__value">{value}</p>
    </div>
  );
};

GithubStats.propTypes = propTypes;

export default GithubStats;
