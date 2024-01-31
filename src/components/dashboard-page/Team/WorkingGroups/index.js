import React from 'react';
import { string, shape, arrayOf } from 'prop-types';

import DashboardCarousel from '../../../DashboardCarousel';

import { ReactComponent as EmptyAvatar } from '../../../../assets/svg/dashboard/empty-avatar.svg';

import './style.scss';

const workingGroupPropTypes = {
  name: string.isRequired,
  logo: string.isRequired,
  link: string.isRequired,
  lead: shape({
    avatar: string.isRequired,
    username: string.isRequired,
  }).isRequired,
  currentBudget: string.isRequired,
  workers: arrayOf(
    shape({
      avatar: string,
      username: string.isRequired,
    })
  ).isRequired,
};

const WorkingGroup = ({ name, logo, link, lead, currentBudget, workers }) => {
  return (
    <a className="dashboard-team-working-groups__group-link" href={link} target="_blank" rel="noreferrer">
      <div className="dashboard-team-working-groups__group">
        <div
          className="dashboard-team-working-groups__group-inner-bg"
          style={{ backgroundImage: `url(${logo})` }}
        ></div>
        <div className="dashboard-team-working-groups__group-inner-bg-overlay"></div>

        <div className="dashboard-team-working-groups__group-content-container">
          <div>
            <div className="dashboard-team-working-groups__group-logo-wrapper">
              <img className="dashboard-team-working-groups__group-logo" src={logo} alt="working-group-logo" />
            </div>
            <h4 className="dashboard-team-working-groups__group-name">{name}</h4>
          </div>

          <div className="dashboard-team-working-groups__group-lead-and-budget">
            <div className="dashboard-team-working-groups__group-lead">
              <h4 className="dashboard-team-working-groups__group-labels">WG Lead:</h4>
              <div className="dashboard-team-working-groups__group-lead-avatar-name-wrapper">
                <div
                  className="dashboard-team-working-groups__group-lead-avatar"
                  style={{ backgroundImage: `url(${lead.avatar})` }}
                ></div>
                <p className="dashboard-team-working-groups__group-lead-username">{lead.username}</p>
              </div>
            </div>

            <div className="dashboard-team-working-groups__group-budget">
              <h4 className="dashboard-team-working-groups__group-labels">Current budget:</h4>
              <p className="dashboard-team-working-groups__group-budget-value">{currentBudget}</p>
            </div>
          </div>

          <div className="dashboard-team-working-groups__group-workers">
            {/* eslint-disable-next-line max-len */}
            <h4 className="dashboard-team-working-groups__group-labels with-margin-bottom-increased">{`Workers (${workers.length})`}</h4>
            <ul className="dashboard-team-working-groups__group-workers-list">
              {workers.map(worker => {
                return (
                  <li key={worker.username} className="dashboard-team-working-groups__group-workers-list-item">
                    <div className="dashboard-team-working-groups__group-worker-tag">
                      {!!worker.avatar ? (
                        <div
                          className="dashboard-team-working-groups__group-lead-avatar size-reduced"
                          style={{ backgroundImage: `url(${worker.avatar})` }}
                        ></div>
                      ) : (
                        <EmptyAvatar />
                      )}
                      <p className="dashboard-team-working-groups__group-worker-username">{worker.username}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </a>
  );
};

WorkingGroup.propTypes = workingGroupPropTypes;

const workingGroupsPropTypes = {
  groups: arrayOf(workingGroupPropTypes).isRequired,
};

const WorkingGroups = ({ groups }) => {
  return (
    <div className="dashboard-team-working-groups">
      <div className="dashboard-team-working-groups__description-widget-wrapper">
        <div className="dashboard-team-working-groups__description-widget">
          <h3 className="dashboard-team-working-groups__description-widget-heading">Working groups</h3>
          <p className="dashboard-team-working-groups__description">
            Lorem ipsum dolor sit amet consectetur. Parturient urna massa arcu mi. Habitant sagittis adipiscing tempus
            integer risus vel gravida adipiscing. Nec ipsum diam varius augue odio magna pharetra orci. Malesuada luctus
            sit volutpat faucibus.
          </p>
        </div>
      </div>
      <DashboardCarousel withLgSlides>
        {groups.map((group, index) => {
          return <WorkingGroup key={`${group.name}-${index}`} {...group} />;
        })}
      </DashboardCarousel>
    </div>
  );
};

WorkingGroups.propTypes = workingGroupsPropTypes;

export default WorkingGroups;
