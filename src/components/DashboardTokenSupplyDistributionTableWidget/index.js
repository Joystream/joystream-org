import React from 'react';

import DashboardWidgetHeading from '../DashboardWidgetHeading';
import DashboardTable from '../DashboardTable';

import { columns, data } from './data';

import './style.scss';

const DashboardTokenSupplyDistributionTableWidget = () => {
  return (
    <div className="dashboard-token-supply-distribution-table-widget">
      <DashboardWidgetHeading
        heading="Supply distribution"
        headingWrapperCn="dashboard-token-supply-distribution-table-widget__heading"
      />
      <DashboardTable columns={columns} data={data} tableCn="dashboard-token-supply-distribution-table-widget__table" />
    </div>
  );
};

export default DashboardTokenSupplyDistributionTableWidget;
