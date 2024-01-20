import React, { useState } from 'react';
import { bool } from 'prop-types';

import DashboardSectionHeader from '../../DashboardSectionHeader';
import GithubStats from './GithubStats';
import DashboardStatsWidget from '../../DashboardStatsWidget';
import ChartWidget from './ChartWidget';
import DashboardWidgetHeading from '../../DashboardWidgetHeading';
import Contributors from './Contributors';

import { generateChartMockData, githubStats, contributors } from './data';

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
        <div className="dashboard-engineering__contributors">
          <DashboardWidgetHeading
            heading="Contributors"
            headingWrapperCn="dashboard-engineering__contributors-heading"
          />
          <Contributors contributors={contributors} />
        </div>
      </div>
    </section>
  );
};

Engineering.propTypes = propTypes;

export default Engineering;
