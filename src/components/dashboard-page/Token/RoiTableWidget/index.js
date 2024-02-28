import React from 'react';
import { object } from 'prop-types';

import WidgetHeading from '../../WidgetHeading';
import Table from '../../Table';
import Skeleton from '../../Skeleton';

import { columns, parseData } from './data';

import './style.scss';

const propTypes = {
  data: object,
};

const RoiTableWidget = ({ data }) => {
  const parsedData = parseData(data);

  if (!data) {
    return <Skeleton skeletonCn="roi-supply-block-skeleton__roi height-auto" />;
  }

  return (
    <div className="dashboard-token-roi-table-widget">
      <WidgetHeading
        heading="Return on investment (ROI)"
        headingWrapperCn="dashboard-token-roi-table-widget__heading"
        termDefinitionKey="roi"
      />
      <Table columns={columns} data={parsedData} />
    </div>
  );
};

RoiTableWidget.propTypes = propTypes;

export default RoiTableWidget;
