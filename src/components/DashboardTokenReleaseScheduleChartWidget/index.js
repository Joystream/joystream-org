import React from 'react';

import DashboardWidgetHeading from '../DashboardWidgetHeading';
import DashboardTokenReleaseScheduleChart from '../DashboardTokenReleaseScheduleChart';

import './style.scss';

const DashboardTokenReleaseScheduleChartWidget = () => {
  return (
    <div className="dashboard-token-release-schedule-chart-widget">
      <DashboardWidgetHeading heading="Release schedule" />
      <DashboardTokenReleaseScheduleChart />
    </div>
  );
};

export default DashboardTokenReleaseScheduleChartWidget;
