import React from 'react';
import { object } from 'prop-types';

import WidgetHeading from '../../WidgetHeading';
import Table from '../../Table';

import { columns, parseData } from './data';

import './style.scss';

const propTypes = {
  data: object,
};

const SupplyDistributionTableWidget = ({ data }) => {
  const parsedData = parseData(data);

  return (
    <div className="dashboard-token-supply-distribution-table-widget">
      <WidgetHeading
        heading="Supply distribution"
        headingWrapperCn="dashboard-token-supply-distribution-table-widget__heading"
        termDefinitionKey="supplyDistribution"
      />
      <Table columns={columns} data={parsedData} tableCn="dashboard-token-supply-distribution-table-widget__table" />
    </div>
  );
};

SupplyDistributionTableWidget.propTypes = propTypes;

export default SupplyDistributionTableWidget;
