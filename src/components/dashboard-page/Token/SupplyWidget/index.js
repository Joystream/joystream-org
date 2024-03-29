import React from 'react';
import { string, object } from 'prop-types';

import WidgetHeading from '../../WidgetHeading';

import { ReactComponent as WarningIcon } from '../../../../assets/svg/dashboard/warning-icon.svg';
import { ReactComponent as PlayAltIcon } from '../../../../assets/svg/dashboard/play-alt-icon.svg';

import { getTokenSupplyMetrics, learWhyVideo } from './data';

import './style.scss';

const dashboardTokenSupplyStatsPropTypes = {
  figure: string.isRequired,
  tokenRate: string.isRequired,
  rate: string.isRequired,
};

const SupplyStats = ({ figure, tokenRate, rate }) => {
  return (
    <div className="dashboard-token-supply-stats">
      <h3 className="dashboard-token-supply-stats__figure">{figure}</h3>
      <p className="dashboard-token-supply-stats__token-rate">{tokenRate}</p>
      <p className="dashboard-token-supply-stats__rate">{rate}</p>
    </div>
  );
};

SupplyStats.propTypes = dashboardTokenSupplyStatsPropTypes;

const supplyWidgetPropTypes = {
  data: object,
};

const SupplyWidget = ({ data }) => {
  const tokenSupplyMetrics = getTokenSupplyMetrics(data);

  return (
    <div className="dashboard-token-supply-widget">
      <WidgetHeading heading="Supply" termDefinitionKey="supply" />
      <div className="dashboard-token-supply-widget__content">
        {tokenSupplyMetrics.map((tokenSupplyStats, index) => {
          return <SupplyStats key={index} {...tokenSupplyStats} />;
        })}
        <div className="dashboard-token-supply-widget__notice">
          <div className="dashboard-token-supply-widget__notice-text-wrapper">
            <WarningIcon />
            <p className="dashboard-token-supply-widget__notice-text">Joy tokens does not have max supply</p>
          </div>
          <a href={learWhyVideo.source} target="_blank" rel="noreferrer">
            <button className="dashboard-token-supply-widget__notice-button">
              <PlayAltIcon />
              Learn why&nbsp;<span>{`(${learWhyVideo.duration})`}</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

SupplyWidget.propTypes = supplyWidgetPropTypes;

export default SupplyWidget;
