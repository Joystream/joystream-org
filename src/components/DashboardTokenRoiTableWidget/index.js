import React from 'react';

import DashboardWidgetHeading from '../DashboardWidgetHeading';
import DashboardTable from '../DashboardTable';

import { columns, data } from './data';

import './style.scss';

const DashboardTokenRoiTableWidget = () => {
  return (
    <div className="dashboard-token-roi-table-widget">
      <DashboardWidgetHeading
        heading="Return on investment (ROI)"
        headingWrapperCn="dashboard-token-roi-table-widget__heading"
      />
      <DashboardTable columns={columns} data={data} />
    </div>
  );
};

export default DashboardTokenRoiTableWidget;
