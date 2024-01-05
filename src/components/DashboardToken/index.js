import React from 'react';

import DashboardSectionHeader from '../DashboardSectionHeader';
import DashboardTokenPriceChartWidget from '../DashboardTokenPriceChartWidget';
import DashboardStatsWidget from '../DashboardStatsWidget';
import DashboardTokenSupplyWidget from '../DashboardTokenSupplyWidget';
import DashboardJoyCarousel from '../DashboardJoyCarousel';
// import DashboardTokenReleaseScheduleChartWidget from '../DashboardTokenReleaseScheduleChartWidget';
// import DashboardTable from '../DashboardTable';

import DashboardTokenReleaseScheduleChart from '../DashboardTokenReleaseScheduleChart';

import { tokenPriceMetrics } from './data';

import './style.scss';

const DashboardToken = () => {
  return (
    <section className="dashboard-token">
      <div className="dashboard-token__container">
        <DashboardSectionHeader sectionId="token" sectionHeading="Token" />
        <div className="dashboard-token__price-metrics-grid">
          <DashboardTokenPriceChartWidget widgetCn="dashboard-token__price-chart-widget" />
          {tokenPriceMetrics.map((tokenPriceStats, index) => {
            return (
              <DashboardStatsWidget
                key={index}
                heading={tokenPriceStats.figure}
                text={tokenPriceStats.rate}
                helperText={tokenPriceStats.growthRate}
              />
            );
          })}
        </div>

        <DashboardTokenSupplyWidget />

        <DashboardJoyCarousel />

        <DashboardTokenReleaseScheduleChart />

        {/* <DashboardTokenReleaseScheduleChartWidget /> */}
        {/* <DashboardTable /> */}
      </div>
    </section>
  );
};

export default DashboardToken;
