import React from 'react';
import { object } from 'prop-types';

import WidgetHeading from '../../WidgetHeading';
import ActionButton from '../ActionButton';

import { parseCouncilTermLength } from '../utils';
import { termDefinitions } from '../../../../data/pages/dashboard/termDefinitions';

import './style.scss';

const propTypes = {
  data: object,
};

const viewPastCouncilsLink = 'https://pioneerapp.xyz/#/council/past-councils';

const Council = ({ data }) => {
  return (
    <div className="dashboard-team-council-wrapper">
      <div className="dashboard-team-council">
        <div className="dashboard-team-council__container">
          <div className="dashboard-team-council__description-wrapper">
            <h2 className="dashboard-team-council__heading">Council</h2>
            <p className="dashboard-team-council__role-description">{termDefinitions.council}</p>
          </div>
          <div className="dashboard-team-council__terms-actions-wrapper">
            <ul className="dashboard-team-council__terms-list">
              <li className="dashboard-team-council__terms-list-item">
                <WidgetHeading heading="Current term" isDim termDefinitionKey="currentTerm" />
                <p className="dashboard-team-council__term">{data?.currentTerm}</p>
              </li>
              <li className="dashboard-team-council__terms-list-item">
                <WidgetHeading heading="Term length" isDim termDefinitionKey="termLength" />
                <p className="dashboard-team-council__term">{parseCouncilTermLength(data)}</p>
              </li>
            </ul>
            <a href={viewPastCouncilsLink} target="_blank" rel="noreferrer">
              <ActionButton text="View past councils" buttonCn="dashboard-team-council__action-button" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

Council.propTypes = propTypes;

export default Council;
