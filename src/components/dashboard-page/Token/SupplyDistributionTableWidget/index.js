import React from 'react';

import WidgetHeading from '../../WidgetHeading';
import Table from '../../Table';

import { columns, data } from './data';

import './style.scss';

const SupplyDistributionTableWidget = () => {
  return (
    <div className="dashboard-token-supply-distribution-table-widget">
      <WidgetHeading
        heading="Supply distribution"
        headingWrapperCn="dashboard-token-supply-distribution-table-widget__heading"
      />
      <Table columns={columns} data={data} tableCn="dashboard-token-supply-distribution-table-widget__table" />
    </div>
  );
};

export default SupplyDistributionTableWidget;
