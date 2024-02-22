import React from 'react';
import { object, bool } from 'prop-types';

import SectionHeader from '../SectionHeader';
import GithubStats from './GithubStats';
import StatsWidget from '../StatsWidget';
import ChartWidget from './ChartWidget';
import WidgetHeading from '../WidgetHeading';
import Contributors from './Contributors';
import { StatsBlockSkeleton, ChartBlockSkeleton, ContributorsBlockSkeleton } from './Skeletons';

import { parseGithubStats, parseFollowersCount, parseContributions, parseContributors } from './data';

import './style.scss';

const propTypes = {
  data: object,
  loading: bool,
};

const Engineering = ({ data, loading }) => {
  const parsedGithubStats = parseGithubStats(data);

  const parsedContributions = parseContributions(data?.commits);

  const parsedContributors = parseContributors(data?.contributors);

  return (
    <section className="dashboard-engineering">
      <div className="dashboard-engineering__container">
        <SectionHeader sectionId="engineering" sectionHeading="Engineering" />

        {loading ? (
          <StatsBlockSkeleton />
        ) : (
          <div className="dashboard-engineering__stats-wrapper">
            <div className="dashboard-engineering__github-stats-widget">
              <WidgetHeading heading="Github stats" termDefinitionKey="githubStats" />
              <div className="dashboard-engineering__github-stats">
                {parsedGithubStats.map((stats, index) => (
                  <GithubStats key={index} {...stats} />
                ))}
              </div>
            </div>
            <StatsWidget heading="Followers" text={parseFollowersCount(data)} termDefinitionKey="followers" />
          </div>
        )}

        {loading ? <ChartBlockSkeleton /> : <ChartWidget chartData={parsedContributions} />}

        {loading ? (
          <ContributorsBlockSkeleton />
        ) : (
          <div className="dashboard-engineering__contributors">
            <WidgetHeading
              heading="Contributors"
              helperText={`(${data?.totalNumberOfContributors})`}
              headingWrapperCn="dashboard-engineering__contributors-heading"
              termDefinitionKey="contributors"
            />
            <Contributors topContributors={parsedContributors} />
          </div>
        )}
      </div>
    </section>
  );
};

Engineering.propTypes = propTypes;

export default Engineering;
