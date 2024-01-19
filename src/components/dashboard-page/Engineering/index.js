import React, { useState } from 'react';
import { bool } from 'prop-types';

import DashboardSectionHeader from '../../DashboardSectionHeader';
import GithubStats from './GithubStats';
import DashboardStatsWidget from '../../DashboardStatsWidget';
import ChartWidget from './ChartWidget';

import { generateChartMockData, githubStats } from './data';

import './style.scss';

const propTypes = {
  shouldAddScrollOffset: bool,
};

const Engineering = ({ shouldAddScrollOffset }) => {
  const [chartData] = useState(() => generateChartMockData());

  return (
    <section className="dashboard-engineering">
      <div className="dashboard-engineering__container">
        <DashboardSectionHeader
          sectionId="engineering"
          sectionHeading="Engineering"
          shouldAddScrollOffset={shouldAddScrollOffset}
        />
        <div className="dashboard-engineering__stats-wrapper">
          <div className="dashboard-engineering__github-stats">
            {githubStats.map((stats, index) => (
              <GithubStats key={index} {...stats} />
            ))}
          </div>
          <DashboardStatsWidget heading="Followers" text="590" helperText="+2% Last month" />
        </div>
        <ChartWidget chartData={chartData} />
      </div>
    </section>
  );
};

Engineering.propTypes = propTypes;

export default Engineering;
