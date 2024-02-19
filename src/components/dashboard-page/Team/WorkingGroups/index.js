import React from 'react';
import { string, shape, arrayOf, bool } from 'prop-types';

import Carousel from '../../Carousel';
import { WorkingGroupsBlockSkeleton } from '../Skeletons';

import { ReactComponent as EmptyAvatar } from '../../../../assets/svg/dashboard/empty-avatar.svg';

import { termDefinitions } from '../../../../data/pages/dashboard/termDefinitions';

import './style.scss';

const workingGroupPropTypes = {
  name: string.isRequired,
  logo: string.isRequired,
  link: string.isRequired,
  lead: shape({
    avatar: string,
    username: string,
  }),
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
                  style={{ backgroundImage: `url(${lead?.avatar})` }}
                ></div>
                <p className="dashboard-team-working-groups__group-lead-username">{lead?.username}</p>
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
              {workers.map((worker, index) => {
                return (
                  <li
                    key={`${worker.username}-${index}`}
                    className="dashboard-team-working-groups__group-workers-list-item"
                  >
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
  groups: arrayOf(shape(workingGroupPropTypes)).isRequired,
  loading: bool,
};

const WorkingGroups = ({ groups, loading }) => {
  return (
    <div className="dashboard-team-working-groups">
      <div className="dashboard-team-working-groups__description-widget-wrapper">
        <div className="dashboard-team-working-groups__description-widget">
          <h3 className="dashboard-team-working-groups__description-widget-heading">Working groups</h3>
          <p className="dashboard-team-working-groups__description">{termDefinitions.workingGroups}</p>
        </div>
      </div>

      {loading ? (
        <WorkingGroupsBlockSkeleton />
      ) : (
        <Carousel withLgSlides>
          {groups.map((group, index) => {
            return <WorkingGroup key={`${group.name}-${index}`} {...group} />;
          })}
        </Carousel>
      )}
    </div>
  );
};

WorkingGroups.propTypes = workingGroupsPropTypes;

export default WorkingGroups;
