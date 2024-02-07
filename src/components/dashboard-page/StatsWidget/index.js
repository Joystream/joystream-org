import React from 'react';
import cn from 'classnames';
import { string, bool, oneOfType, number } from 'prop-types';

import WidgetHeading from '../WidgetHeading';

import './style.scss';

const propTypes = {
  heading: string.isRequired,
  text: oneOfType([string, number]).isRequired,
  helperText: string,
  withTextSizeIncreasedFromMd: bool,
};

const DashboardStatsWidget = ({ heading, text, helperText, withTextSizeIncreasedFromMd }) => {
  return (
    <div className="dashboard-stats-widget">
      <WidgetHeading heading={heading} headingWrapperCn="dashboard-stats-widget__heading" />
      <div className="dashboard-stats-widget__text-wrapper">
        <p
          className={cn('dashboard-stats-widget__text', {
            'with-text-size-increased-from-md': withTextSizeIncreasedFromMd,
          })}
        >
          {text}
        </p>
        {!!helperText && <p className="dashboard-stats-widget__helper-text">{helperText}</p>}
      </div>
    </div>
  );
};

DashboardStatsWidget.propTypes = propTypes;

export default DashboardStatsWidget;
