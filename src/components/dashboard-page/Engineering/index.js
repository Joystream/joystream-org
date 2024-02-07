import React from 'react';
import { object } from 'prop-types';

import SectionHeader from '../SectionHeader';
import GithubStats from './GithubStats';
import StatsWidget from '../StatsWidget';
import ChartWidget from './ChartWidget';
import WidgetHeading from '../WidgetHeading';
import Contributors from './Contributors';

import { parseGithubStats, parseFollowersCount, parseContributions, parseContributors } from './data';

import './style.scss';

const propTypes = {
  data: object,
};

const Engineering = ({ data }) => {
  const parsedGithubStats = parseGithubStats(data);

  const parsedContributions = parseContributions(data?.commits);

  const parsedContributors = parseContributors(data?.contributors);

  return (
    <section className="dashboard-engineering">
      <div className="dashboard-engineering__container">
        <SectionHeader sectionId="engineering" sectionHeading="Engineering" />
        <div className="dashboard-engineering__stats-wrapper">
          <div className="dashboard-engineering__github-stats-widget">
            <WidgetHeading heading="Github stats" />
            <div className="dashboard-engineering__github-stats">
              {parsedGithubStats.map((stats, index) => (
                <GithubStats key={index} {...stats} />
              ))}
            </div>
          </div>
          <StatsWidget heading="Followers" text={parseFollowersCount(data)} helperText="+2% Last month" />
        </div>
        <ChartWidget chartData={parsedContributions} />
        <div className="dashboard-engineering__contributors">
          <WidgetHeading
            heading="Contributors"
            helperText={`(${parsedContributors.length})`}
            headingWrapperCn="dashboard-engineering__contributors-heading"
          />
          <Contributors contributors={parsedContributors} />
        </div>
      </div>
    </section>
  );
};

Engineering.propTypes = propTypes;

export default Engineering;
