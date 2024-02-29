import React from 'react';
import { string, arrayOf, shape, oneOf } from 'prop-types';

import ArrowButton from '../../ArrowButton';

import { renderSocialMediaLogo, jsgenesisLink } from '../utils';
import { termDefinitions } from '../../../../data/pages/dashboard/termDefinitions';

import './style.scss';

const founderPropTypes = {
  name: string.isRequired,
  avatar: string.isRequired,
  socialMediaUsernames: arrayOf(
    shape({
      socialMedia: oneOf(['email', 'twitter', 'telegram', 'discord']).isRequired,
      username: string.isRequired,
    })
  ).isRequired,
};

const Founder = ({ name, avatar, socialMediaUsernames }) => {
  return (
    <div className="dashboard-team-jsgenesis__founder">
      <div className="dashboard-team-jsgenesis__founder-avatar" style={{ backgroundImage: `url(${avatar})` }} />

      <div className="dashboard-team-jsgenesis__founder-role-name-wrapper">
        <p className="dashboard-team-jsgenesis__founder-role">Co-Founder</p>
        <h4 className="dashboard-team-jsgenesis__founder-name">{name}</h4>
      </div>

      <div className="dashboard-team-jsgenesis__founder-social-media-usernames-wrapper">
        {socialMediaUsernames.map((sm, idx) => {
          return (
            <div key={idx} className="dashboard-team-jsgenesis__founder-social-media-tag">
              {renderSocialMediaLogo(sm.socialMedia)}
              <p className="dashboard-team-jsgenesis__founder-social-media-username">{sm.username}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

Founder.propTypes = founderPropTypes;

const jsgenesisPropTypes = {
  founders: arrayOf(shape(founderPropTypes)).isRequired,
};

const Jsgenesis = ({ founders }) => {
  return (
    <a href={jsgenesisLink} target="_blank" rel="noreferrer">
      <div className="dashboard-team-jsgenesis">
        <div className="dashboard-team-jsgenesis__description-widget-wrapper">
          <div className="dashboard-team-jsgenesis__description-widget">
            <h3 className="dashboard-team-jsgenesis__description-widget-heading">Jsgenesis</h3>
            <div className="dashboard-team-jsgenesis__description-button-wrapper">
              <p className="dashboard-team-jsgenesis__description">{termDefinitions.jsgenesis}</p>
              <ArrowButton text="Read more" buttonCn="dashboard-team-jsgenesis__button-read-more" />
            </div>
          </div>
        </div>
        {founders.map((founder, idx) => {
          return <Founder key={idx} {...founder} />;
        })}
      </div>
    </a>
  );
};

Jsgenesis.propTypes = jsgenesisPropTypes;

export default Jsgenesis;
