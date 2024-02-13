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
  termDefinitionKey: string,
  headingWrapperCn: string,
};

const DashboardStatsWidget = ({
  heading,
  text,
  helperText,
  withTextSizeIncreasedFromMd,
  termDefinitionKey,
  headingWrapperCn,
}) => {
  return (
    <div className="dashboard-stats-widget">
      <WidgetHeading
        heading={heading}
        headingWrapperCn={cn('dashboard-stats-widget__heading', { [headingWrapperCn]: !!headingWrapperCn })}
        termDefinitionKey={termDefinitionKey}
      />
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
