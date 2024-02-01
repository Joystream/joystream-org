import React from 'react';

import WidgetHeading, { DashboardWidgetAltHeading } from '../../WidgetHeading';
import MintingChart from '../MintingChart';

import './style.scss';

const MintingChartWidget = () => {
  return (
    <div className="dashboard-token-minting-chart-widget">
      <div className="dashboard-token-minting-chart-widget__heading">
        <WidgetHeading heading="Minting" headingWrapperCn="" />
        <DashboardWidgetAltHeading headingLabel="Annual inflation" headingValue="2%" />
      </div>
      <MintingChart />
    </div>
  );
};

export default MintingChartWidget;
