import React from 'react';

import Table from '../../Table';
import WidgetHeading from '../../WidgetHeading';

import { columns, data } from './data';

import './style.scss';

const AllocationTableWidget = () => {
  return (
    <div className="dashboard-token-allocation-table-widget">
      <WidgetHeading heading="Token allocation" headingWrapperCn="dashboard-token-allocation-table-widget__heading" />
      <div className="dashboard-token-allocation-table-widget__table-wrapper">
        <Table columns={columns} data={data} tableCn="dashboard-token-allocation-table-widget__table" />
      </div>
    </div>
  );
};

export default AllocationTableWidget;
