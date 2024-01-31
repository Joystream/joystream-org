import React from 'react';

import DashboardWidgetHeading from '../../../DashboardWidgetHeading';
import ActionButton from '../ActionButton';

import { getDaysLeftToNextElection } from './utils';

import './style.scss';

const CurrentCouncil = () => {
  // Assuming service duration is 14 days
  const daysInService = 14;
  const nextElectionDate = '2024-02-07';

  const daysLeftToNextElection = getDaysLeftToNextElection(nextElectionDate);
  const remainingDaysInServicePercentage = Math.round((daysLeftToNextElection / daysInService) * 100);

  return (
    <div className="dashboard-team-current-council">
      <DashboardWidgetHeading heading="Current council" />
      <div className="dashboard-team-current-council__container">
        <div>
          <h4 className="dashboard-team-current-council__info-label">Elected on</h4>
          <p className="dashboard-team-current-council__info">28 Nov 2023</p>
        </div>
        <div>
          <div className="dashboard-team-current-council__progress-bar">
            <div
              className="dashboard-team-current-council__progress-bar-content"
              style={{ width: `${remainingDaysInServicePercentage}%` }}
            ></div>
          </div>
          <h4 className="dashboard-team-current-council__info-label">
            <span>{daysLeftToNextElection}</span>&nbsp;Days until next election
          </h4>
        </div>
        <div>
          <h4 className="dashboard-team-current-council__info-label">Weekly councilor salary</h4>
          <p className="dashboard-team-current-council__info">300 000 JOY</p>
        </div>
        <ActionButton text="Read council plan" />
      </div>
    </div>
  );
};

export default CurrentCouncil;
