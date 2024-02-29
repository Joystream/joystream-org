import React from 'react';
import { object } from 'prop-types';

import WidgetHeading, { DashboardWidgetAltHeading } from '../../WidgetHeading';
import MintingChart from '../MintingChart';

import { parseInflationPercentage, generateChartData } from './utils';

import './style.scss';

const propTypes = {
  data: object,
};

const MintingChartWidget = ({ data }) => {
  const parsedJoyAnnualInflation = parseInflationPercentage(data?.joyAnnualInflation);
  const chartData = generateChartData(data?.tokenMintingData);

  // When no tokenMintingData is provided labels are hidden because fallback values are inaccurate
  const values = Object.values(data?.tokenMintingData || {});
  const withLabelsHidden = !values.length || values.some(pie => !pie);

  return (
    <div className="dashboard-token-minting-chart-widget">
      <div className="dashboard-token-minting-chart-widget__heading">
        <WidgetHeading heading="Minting" headingWrapperCn="" termDefinitionKey="minting" />
        <DashboardWidgetAltHeading
          headingLabel="Annual inflation"
          headingValue={parsedJoyAnnualInflation}
          termDefinitionKey="annualInflation"
          headingWrapperCn="dashboard-token-minting-chart-widget__alt-heading"
        />
      </div>
      <MintingChart data={chartData} withLabelsHidden={withLabelsHidden} />
    </div>
  );
};

MintingChartWidget.propTypes = propTypes;

export default MintingChartWidget;
