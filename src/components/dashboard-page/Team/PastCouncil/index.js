import React from 'react';
import { string, arrayOf, shape, oneOf, number } from 'prop-types';

import WidgetHeading from '../../WidgetHeading';

import { renderSocialMediaLogo } from '../utils';

import './style.scss';

const propTypes = {
  linkToPioneerProfile: string.isRequired,
  username: string.isRequired,
  avatar: string.isRequired,
  socialMediaUsernames: arrayOf(
    shape({
      socialMedia: oneOf(['email', 'twitter', 'telegram', 'discord']).isRequired,
      username: string.isRequired,
    })
  ).isRequired,
  timesServed: number.isRequired,
};

const PastCouncil = ({ linkToPioneerProfile, username, avatar, socialMediaUsernames, timesServed }) => {
  return (
    <a href={linkToPioneerProfile} target="_blank" rel="noreferrer">
      <div className="dashboard-team-past-council">
        <div className="dashboard-team-past-council__inner-bg" style={{ backgroundImage: `url(${avatar})` }}></div>
        <div className="dashboard-team-past-council__inner-bg-overlay"></div>

        <div className="dashboard-team-past-council__container">
          <div className="dashboard-team-past-council__avatar" style={{ backgroundImage: `url(${avatar})` }}></div>
          <h4 className="dashboard-team-past-council__username">{username}</h4>
          <div className="dashboard-team-past-council__social-media-usernames">
            {socialMediaUsernames.map((sm, idx) => {
              return (
                <div key={`${sm.socialMedia}-${idx}`} className="dashboard-team-past-council__social-media-tag">
                  {renderSocialMediaLogo(sm.socialMedia)}
                  <p className="dashboard-team-past-council__social-media-username">{sm.username}</p>
                </div>
              );
            })}
          </div>

          <div className="dashboard-team-past-council__times-served-box">
            <WidgetHeading heading="Times served" isDim termDefinitionKey="timesServed" />
            <p className="dashboard-team-past-council__times-served">{timesServed}</p>
          </div>
        </div>
      </div>
    </a>
  );
};

PastCouncil.propTypes = propTypes;

export default PastCouncil;
