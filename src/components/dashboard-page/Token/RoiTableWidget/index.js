import React from 'react';

import WidgetHeading from '../../WidgetHeading';
import Table from '../../Table';

import { columns, data } from './data';

import './style.scss';

const RoiTableWidget = () => {
  return (
    <div className="dashboard-token-roi-table-widget">
      <WidgetHeading
        heading="Return on investment (ROI)"
        headingWrapperCn="dashboard-token-roi-table-widget__heading"
      />
      <Table columns={columns} data={data} />
    </div>
  );
};

export default RoiTableWidget;
