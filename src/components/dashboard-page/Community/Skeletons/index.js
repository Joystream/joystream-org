import React from 'react';
import cn from 'classnames';

import Skeleton from '../../Skeleton';

import './style.scss';

export const SocialMediaBlockSkeleton = () => {
  return (
    <div className="social-media-block-skeleton">
      {Array.from({ length: 4 }, (_, i) => {
        return (
          <Skeleton
            key={i}
            skeletonCn={cn({
              'social-media-block-skeleton__lg-stats-widget': i === 0 || i === 1,
              'social-media-block-skeleton__sm-stats-widget': i === 2 || i === 3,
            })}
          />
        );
      })}
    </div>
  );
};

export const FollowersBlockSkeleton = () => {
  return <Skeleton skeletonCn="followers-block-skeleton" />;
};

export const OpenEventsBlockSkeleton = () => {
  return (
    <div className="open-events-block-skeleton">
      {Array.from({ length: 4 }, (_, i) => {
        return <Skeleton key={i} skeletonCn="open-events-block-skeleton__event" />;
      })}
    </div>
  );
};
