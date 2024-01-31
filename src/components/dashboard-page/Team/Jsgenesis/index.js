import React from 'react';
import { string, arrayOf, shape, oneOf } from 'prop-types';

import ArrowButton from '../../ArrowButton';

import { renderSocialMediaLogo } from '../utils';

import './style.scss';

const founderPropTypes = {
  name: string.isRequired,
  avatar: string.isRequired,
  socialMediaUsernames: arrayOf(
    shape({
      socialMedia: oneOf(['emai', 'twitter', 'telegram', 'discord']).isRequired,
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
  founders: arrayOf(founderPropTypes).isRequired,
};

const Jsgenesis = ({ founders }) => {
  return (
    <div className="dashboard-team-jsgenesis">
      <div className="dashboard-team-jsgenesis__description-widget-wrapper">
        <div className="dashboard-team-jsgenesis__description-widget">
          <h3 className="dashboard-team-jsgenesis__description-widget-heading">Jsgenesis</h3>
          <div className="dashboard-team-jsgenesis__description-button-wrapper">
            <p className="dashboard-team-jsgenesis__description">
              Lorem ipsum dolor sit amet consectetur. Parturient urna massa arcu mi. Habitant sagittis adipiscing tempus
              integer risus vel gravida adipiscing. Nec ipsum diam varius augue odio magna pharetra orci. Malesuada
              luctus sit volutpat faucibus.
            </p>
            <ArrowButton text="Read more" buttonCn="dashboard-team-jsgenesis__button-read-more" />
          </div>
        </div>
      </div>
      {founders.map((founder, idx) => {
        return <Founder key={idx} {...founder} />;
      })}
    </div>
  );
};

Jsgenesis.propTypes = jsgenesisPropTypes;

export default Jsgenesis;
