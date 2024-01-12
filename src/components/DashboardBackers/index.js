import React from 'react';
import { func, bool } from 'prop-types';

import DashboardSectionHeader from '../DashboardSectionHeader';
import DashboardWidgetHeading from '../DashboardWidgetHeading';
import DashboardStatsWidget from '../DashboardStatsWidget';
import { PressStory } from '../about-page/Press';

import { backers } from './data';

import './style.scss';

const propTypes = {
  t: func.isRequired,
  shouldAddScrollOffset: bool,
};

const DashboardBackers = ({ t, shouldAddScrollOffset }) => {
  return (
    <section className="dashboard-backers">
      <div className="dashboard-backers__container">
        <DashboardSectionHeader
          sectionId="backers"
          sectionHeading="Backers"
          shouldAddScrollOffset={shouldAddScrollOffset}
        />
        <DashboardWidgetHeading heading="Including" headingWrapperCn="dashboard-backers__heading" />
        <ul className="dashboard-backers__backers-list">
          {backers.map(({ key, Icon }) => {
            return (
              <li key={key} className="dashboard-backers__backers-list-item">
                <div className="dashboard-backers__backer">
                  <Icon className="dashboard-backers__backer-icon" />
                </div>
              </li>
            );
          })}
        </ul>
        <div className="dashboard-backers__coindesk-widgets-wrapper">
          <DashboardStatsWidget heading="Final venture round" text="$60M" helperText="FDV Valuation | Q1 2021" />
          <PressStory t={t} pressStoryLinkCn="dashboard-backers__coindesk-story-link" withAltArticleScreenshot />
        </div>
      </div>
    </section>
  );
};

DashboardBackers.propTypes = propTypes;

export default DashboardBackers;
