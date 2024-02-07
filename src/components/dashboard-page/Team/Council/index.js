import React from 'react';
import { object } from 'prop-types';

import WidgetHeading from '../../WidgetHeading';
import ActionButton from '../ActionButton';

import { parseCouncilTermLength } from '../utils';

import './style.scss';

const propTypes = {
  data: object,
};

const Council = ({ data }) => {
  return (
    <div className="dashboard-team-council-wrapper">
      <div className="dashboard-team-council">
        <div className="dashboard-team-council__container">
          <div className="dashboard-team-council__description-wrapper">
            <h2 className="dashboard-team-council__heading">Council</h2>
            <p className="dashboard-team-council__role-description">
              Lorem ipsum dolor sit amet consectetur. Parturient urna massa arcu mi. Habitant sagittis adipiscing tempus
              integer risus vel gravida adipiscing. Nec ipsum diam varius augue odio magna pharetra orci. Malesuada
              luctus sit volutpat faucibus.
            </p>
          </div>
          <div className="dashboard-team-council__terms-actions-wrapper">
            <ul className="dashboard-team-council__terms-list">
              <li className="dashboard-team-council__terms-list-item">
                <WidgetHeading heading="Current term" isDim />
                <p className="dashboard-team-council__term">{data?.currentTerm}</p>
              </li>
              <li className="dashboard-team-council__terms-list-item">
                <WidgetHeading heading="Term length" isDim />
                <p className="dashboard-team-council__term">{parseCouncilTermLength(data)}</p>
              </li>
            </ul>
            <ActionButton text="View past councils" buttonCn="dashboard-team-council__action-button" />
          </div>
        </div>
      </div>
    </div>
  );
};

Council.propTypes = propTypes;

export default Council;
