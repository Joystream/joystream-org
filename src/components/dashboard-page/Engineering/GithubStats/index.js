import React from 'react';
import { string } from 'prop-types';

import WidgetHeading from '../../WidgetHeading';

import './style.scss';

const propTypes = {
  metrics: string.isRequired,
  value: string.isRequired,
};

export const GithubStats = ({ metrics, value }) => {
  return (
    <div className="dashboard-engineering-github-stats">
      <WidgetHeading heading={metrics} isDim />
      <p className="dashboard-engineering-github-stats__value">{value}</p>
    </div>
  );
};

GithubStats.propTypes = propTypes;

export default GithubStats;
