import React from 'react';

import Skeleton from '../../Skeleton';

import './style.scss';

export const CouncilsBlockSkeleton = () => {
  return <Skeleton skeletonCn="councils-block-skeleton" />;
};

export const WorkingGroupsBlockSkeleton = () => {
  return <Skeleton skeletonCn="working-groups-block-skeleton" />;
};
