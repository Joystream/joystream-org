import React from 'react';

import SectionHeader from '../SectionHeader';
import PriceChartWidget from './PriceChartWidget';
import StatsWidget from '../StatsWidget';
import SupplyWidget from './SupplyWidget';
// import DashboardJoyCarousel from '../JoyCarousel';
import Exchange from './Exchange';
import ReleaseScheduleChartWidget from './ReleaseScheduleChartWidget';
import AllocationTableWidget from './AllocationTableWidget';
import MintingChartWidget from './MintingChartWidget';
import RoiTableWidget from './RoiTableWidget';
import SupplyDistributionTableWidget from './SupplyDistributionTableWidget';

import { tokenPriceMetrics } from './data';

import './style.scss';

const Token = () => {
  return (
    <section className="dashboard-token">
      <div className="dashboard-token__container">
        <SectionHeader sectionId="token" sectionHeading="Token" />
        <div className="dashboard-token__price-metrics-grid grid-indents">
          <PriceChartWidget widgetCn="dashboard-token__price-chart-widget" />
          {tokenPriceMetrics.map((tokenPriceStats, index) => {
            return (
              <StatsWidget
                key={index}
                heading={tokenPriceStats.figure}
                text={tokenPriceStats.rate}
                helperText={tokenPriceStats.growthRate}
              />
            );
          })}
        </div>

        <SupplyWidget />

        {/* <DashboardJoyCarousel /> */}

        <Exchange />

        <ReleaseScheduleChartWidget />

        <div className="dashboard-token__allocation-minting-grid grid-indents">
          <AllocationTableWidget />
          <MintingChartWidget />
        </div>

        <div className="dashboard-token__percentage-widgets-grid grid-indents">
          <StatsWidget heading="Supply staked for validation" text="25%" withTextSizeIncreasedFromMd />
          <StatsWidget heading="APR on staking" text="2.5%" withTextSizeIncreasedFromMd />
        </div>

        <div className="dashboard-token__stats-tables-grid grid-indents">
          <RoiTableWidget />
          <SupplyDistributionTableWidget />
        </div>
      </div>
    </section>
  );
};

export default Token;
