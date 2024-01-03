import React from 'react';
import { string } from 'prop-types';

import DashboardWidgetHeading from '../DashboardWidgetHeading';

import './style.scss';

const propTypes = {
  heading: string.isRequired,
  text: string.isRequired,
  helperText: string,
};

const DashboardStatsWidget = ({ heading, text, helperText }) => {
  return (
    <div className="dashboard-stats-widget">
      <DashboardWidgetHeading heading={heading} headingWrapperCn="dashboard-stats-widget__heading" />
      <p className="dashboard-stats-widget__text">{text}</p>
      {!!helperText && <p className="dashboard-stats-widget__helper-text">{helperText}</p>}
    </div>
  );
};

DashboardStatsWidget.propTypes = propTypes;

export default DashboardStatsWidget;
