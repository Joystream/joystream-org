import React from 'react';

import Skeleton from '../../Skeleton';

import './style.scss';

export const TractionContentSkeleton = () => {
  return (
    <div className="traction-content-skeleton">
      {Array.from({ length: 4 }, (_, i) => {
        return <Skeleton key={i} skeletonCn="traction-content-skeleton__item" />;
      })}
    </div>
  );
};
