import React from 'react';
import { string } from 'prop-types';

import WidgetHeading from '../../WidgetHeading';

import { ReactComponent as WarningIcon } from '../../../../assets/svg/dashboard/warning-icon.svg';
import { ReactComponent as PlayAltIcon } from '../../../../assets/svg/dashboard/play-alt-icon.svg';

import { tokenSupplyMetrics } from './data';

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

const SupplyWidget = () => {
  return (
    <div className="dashboard-token-supply-widget">
      <WidgetHeading heading="Supply" />
      <div className="dashboard-token-supply-widget__content">
        {tokenSupplyMetrics.map((tokenSupplyStats, index) => {
          return <SupplyStats key={index} {...tokenSupplyStats} />;
        })}
        <div className="dashboard-token-supply-widget__notice">
          <div className="dashboard-token-supply-widget__notice-text-wrapper">
            <WarningIcon />
            <p className="dashboard-token-supply-widget__notice-text">Joy tokens does not have max supply</p>
          </div>
          <button className="dashboard-token-supply-widget__notice-button">
            <PlayAltIcon />
            Learn why&nbsp;<span>(2:30min)</span>
          </button>
        </div>
      </div>
    </div>
  );
};

SupplyStats.propTypes = dashboardTokenSupplyStatsPropTypes;

export default SupplyWidget;
