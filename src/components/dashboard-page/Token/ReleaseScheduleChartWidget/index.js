import React from 'react';

import WidgetHeading from '../../WidgetHeading';
import ReleaseScheduleChart from '../ReleaseScheduleChart';

import './style.scss';

const ReleaseScheduleChartWidget = () => {
  return (
    <div className="dashboard-token-release-schedule-chart-widget">
      <WidgetHeading heading="Release schedule" />
      <ReleaseScheduleChart />
    </div>
  );
};

export default ReleaseScheduleChartWidget;
