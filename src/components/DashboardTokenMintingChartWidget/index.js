import React from 'react';

import DashboardWidgetHeading, { DashboardWidgetAltHeading } from '../DashboardWidgetHeading';
import DashboardTokenMintingChart from '../DashboardTokenMintingChart';

import './style.scss';

const DashboardTokenMintingChartWidget = () => {
  return (
    <div className="dashboard-token-minting-chart-widget">
      <div className="dashboard-token-minting-chart-widget__heading">
        <DashboardWidgetHeading heading="Minting" headingWrapperCn="" />
        <DashboardWidgetAltHeading headingLabel="Annual inflation" headingValue="2%" />
      </div>
      <DashboardTokenMintingChart />
    </div>
  );
};

export default DashboardTokenMintingChartWidget;
