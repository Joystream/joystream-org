import React from 'react';

import DashboardTable from '../DashboardTable';
import DashboardWidgetHeading from '../DashboardWidgetHeading';

import { columns, data } from './data';

import './style.scss';

const DashboardTokenAllocationTableWidget = () => {
  return (
    <div className="dashboard-token-allocation-table-widget">
      <DashboardWidgetHeading
        heading="Token allocation"
        headingWrapperCn="dashboard-token-allocation-table-widget__heading"
      />
      <div className="dashboard-token-allocation-table-widget__table-wrapper">
        <DashboardTable columns={columns} data={data} tableCn="dashboard-token-allocation-table-widget__table" />
      </div>
    </div>
  );
};

export default DashboardTokenAllocationTableWidget;
