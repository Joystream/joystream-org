import React, { useState } from 'react';

import SectionHeader from '../SectionHeader';
import GithubStats from './GithubStats';
import StatsWidget from '../StatsWidget';
import ChartWidget from './ChartWidget';
import WidgetHeading from '../WidgetHeading';
import Contributors from './Contributors';

import { generateChartMockData, githubStats, contributors } from './data';

import './style.scss';

const Engineering = () => {
  const [chartData] = useState(() => generateChartMockData());

  return (
    <section className="dashboard-engineering">
      <div className="dashboard-engineering__container">
        <SectionHeader sectionId="engineering" sectionHeading="Engineering" />
        <div className="dashboard-engineering__stats-wrapper">
          <div className="dashboard-engineering__github-stats-widget">
            <WidgetHeading heading="Github stats" />
            <div className="dashboard-engineering__github-stats">
              {githubStats.map((stats, index) => (
                <GithubStats key={index} {...stats} />
              ))}
            </div>
          </div>
          <StatsWidget heading="Followers" text="590" helperText="+2% Last month" />
        </div>
        <ChartWidget chartData={chartData} />
        <div className="dashboard-engineering__contributors">
          <WidgetHeading
            heading="Contributors"
            helperText={`(${contributors.length})`}
            headingWrapperCn="dashboard-engineering__contributors-heading"
          />
          <Contributors contributors={contributors} />
        </div>
      </div>
    </section>
  );
};

export default Engineering;
