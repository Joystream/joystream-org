import React from 'react';
import { object } from 'prop-types';

import WidgetHeading from '../../WidgetHeading';
import ActionButton from '../ActionButton';

import { parseWeeklySalaryInJOY, getDaysLeftToNextElection } from './utils';
import { formatDateToShowInTooltip as parseElectedOnDate } from '../../Token/PriceChart/utils';

import './style.scss';

const propTypes = {
  data: object,
};

const readCouncilPlanLink = 'https://pioneerapp.xyz/#/forum/category/7';

const CurrentCouncil = ({ data }) => {
  const parsedElectionDate = parseElectedOnDate(data?.electedOnDate);

  const parsedWeeklySalaryInJoy = parseWeeklySalaryInJOY(data?.weeklySalaryInJOY);

  const daysInService = data?.termLength;
  const nextElectionDate = data?.nextElectionDate;

  const daysLeftToNextElection = getDaysLeftToNextElection(nextElectionDate);
  const remainingDaysInServicePercentage = Math.round((daysLeftToNextElection / daysInService) * 100);

  return (
    <div className="dashboard-team-current-council">
      <WidgetHeading heading="Current council" />
      <div className="dashboard-team-current-council__container">
        <div>
          <h4 className="dashboard-team-current-council__info-label">Elected on</h4>
          <p className="dashboard-team-current-council__info">{parsedElectionDate}</p>
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
          <p className="dashboard-team-current-council__info">{parsedWeeklySalaryInJoy}</p>
        </div>
        <a href={readCouncilPlanLink} target="_blank" rel="noreferrer">
          <ActionButton text="Read council plan" />
        </a>
      </div>
    </div>
  );
};

CurrentCouncil.propTypes = propTypes;

export default CurrentCouncil;
