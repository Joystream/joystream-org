import React from 'react';
import cn from 'classnames';

import Skeleton from '../../Skeleton';

import './style.scss';

export const PriceBlockSkeleton = () => {
  return (
    <div className="price-block-skeleton">
      <Skeleton skeletonCn="price-block-skeleton__chart" />
      {Array.from({ length: 3 }, (_, i) => {
        return (
          <Skeleton key={i} skeletonCn={cn('price-block-skeleton__stats-widget', { 'height-reduced': i === 2 })} />
        );
      })}
    </div>
  );
};

export const SupplyBlockSkeleton = () => {
  return <Skeleton skeletonCn="supply-block-skeleton" />;
};

export const ExchangeBlockSkeleton = bps => {
  const skeletonsQuantity = bps === 'xxs' || bps === 'xs' || bps === 'sm' ? 4 : 8;
  return (
    <div className="exchange-block-skeleton">
      {Array.from({ length: skeletonsQuantity }, (_, i) => {
        return <Skeleton key={i} skeletonCn="exchange-block-skeleton__option" />;
      })}
    </div>
  );
};

export const AllocationMintingBlockSkeleton = () => {
  return (
    <div className="allocation-minting-block-skeleton">
      <Skeleton skeletonCn="allocation-minting-block-skeleton__allocation" />
      <Skeleton skeletonCn="allocation-minting-block-skeleton__minting" />
    </div>
  );
};

export const SupplyAprBlockSkeleton = () => {
  return (
    <div className="supply-apr-block-skeleton">
      {Array.from({ length: 2 }, (_, i) => {
        return <Skeleton key={i} skeletonCn="supply-apr-block-skeleton__stats-widget" />;
      })}
    </div>
  );
};

export const RoiSupplyBlockSkeleton = () => {
  return (
    <div className="roi-supply-block-skeleton">
      <Skeleton skeletonCn="roi-supply-block-skeleton__roi" />
      <Skeleton skeletonCn="roi-supply-block-skeleton__supply" />
    </div>
  );
};
