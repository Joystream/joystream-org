import React, { useState } from 'react';
import cn from 'classnames';
import { string, func, arrayOf, shape } from 'prop-types';

import WidgetHeading from '../../WidgetHeading';

import './style.scss';

const followerPropTypes = {
  avatar: string.isRequired,
  name: string.isRequired,
  username: string.isRequired,
  followersQuantity: string.isRequired,
  setIsCarouselRunning: func.isRequired,
};

const Follower = ({ avatar, name, username, followersQuantity, setIsCarouselRunning }) => {
  return (
    <a href={`https://twitter.com/${username}`} target="_blank" rel="noreferrer">
      <div
        className="dashboard-community-followers__follower"
        onMouseEnter={() => setIsCarouselRunning(false)}
        onMouseLeave={() => setIsCarouselRunning(true)}
      >
        <img src={avatar} alt={`${username}-avatar`} className="dashboard-community-followers__follower-avatar" />
        <h4 className="dashboard-community-followers__follower-name">{name}</h4>
        <p className="dashboard-community-followers__follower-username">{`@${username}`}</p>
        <p className="dashboard-community-followers__follower-subscribers">
          <span>{followersQuantity}</span>
          &nbsp;Followers
        </p>
      </div>
    </a>
  );
};

Follower.propTypes = followerPropTypes;

const { setIsCarouselRunning, ...followersRelatedPropTypes } = followerPropTypes;

const followersPropTypes = {
  followers: arrayOf(shape(followersRelatedPropTypes)),
};

const Followers = ({ followers }) => {
  const shouldRenderAsCarousel = followers.length > 4;
  const [isCarouselRunning, setIsCarouselRunning] = useState(true);

  const renderFollowersList = ({ setIsCarouselRunning }) => {
    return (
      <ul
        className={cn('dashboard-community-followers__list', {
          'in-carousel': shouldRenderAsCarousel,
          'carousel-paused': !isCarouselRunning,
        })}
      >
        {followers.map((follower, index) => (
          <li key={`${follower.username}-${index}`} className="dashboard-community-followers__list-item">
            <Follower {...follower} setIsCarouselRunning={setIsCarouselRunning} />
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="dashboard-community-followers">
      <WidgetHeading
        heading="Featured followers"
        headingWrapperCn="dashboard-community-followers__heading"
        termDefinitionKey="featuredFollowers"
      />
      <div className={cn('dashboard-community-followers__grid', { 'as-carousel': shouldRenderAsCarousel })}>
        {renderFollowersList({ setIsCarouselRunning })}
        {shouldRenderAsCarousel && renderFollowersList({ setIsCarouselRunning })}
      </div>
    </div>
  );
};

Followers.propTypes = followersPropTypes;

export default Followers;
