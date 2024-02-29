import React from 'react';

import Skeleton from '../../Skeleton';

import './style.scss';

export const StatsBlockSkeleton = () => {
  return (
    <div className="stats-block-skeleton">
      <Skeleton skeletonCn="stats-block-skeleton__github-stats" />
      <Skeleton skeletonCn="stats-block-skeleton__followers" />
    </div>
  );
};

export const ChartBlockSkeleton = () => {
  return <Skeleton skeletonCn="chart-block-skeleton" />;
};

export const ContributorsBlockSkeleton = () => {
  return <Skeleton skeletonCn="contributors-block-skeleton" />;
};
