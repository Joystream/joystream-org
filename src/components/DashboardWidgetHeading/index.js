import React from 'react';
import cn from 'classnames';
import { string } from 'prop-types';

import { ReactComponent as InfoIcon } from '../../assets/svg/dashboard/info-icon.svg';

import './style.scss';

const propTypes = {
  heading: string.isRequired,
  info: string,
  headingWrapperCn: string,
};

const defaultProps = {
  info:
    // eslint-disable-next-line max-len
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lacinia elit sem, condimentum malesuada dolor imperdiet sit amet.',
  headingWrapperCn: 'base-margin',
};

const DashboardWidgetHeading = ({ heading, info, headingWrapperCn }) => {
  return (
    <div className={cn('dashboard-widget-heading', { [headingWrapperCn]: headingWrapperCn })}>
      <h3 className="dashboard-widget-heading__heading">{heading}</h3>
      {info && (
        <div className="dashboard-widget-heading__icon-wrapper">
          <InfoIcon />
          <div className="dashboard-widget-heading__info-wrapper">
            <p className="dashboard-widget-heading__info">{info}</p>
          </div>
        </div>
      )}
    </div>
  );
};

const altPropTypes = {};

const altDefaultProps = {
  info:
    // eslint-disable-next-line max-len
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lacinia elit sem, condimentum malesuada dolor imperdiet sit amet.',
};

export const DashboardWidgetAltHeading = ({ headingLabel, headingValue, info, headingWrapperCn }) => {
  return (
    <div className={cn('dashboard-widget-heading', { [headingWrapperCn]: headingWrapperCn })}>
      <div className="dashboard-widget-heading__wrapper">
        <h2 className="dashboard-widget-heading__label">{`${headingLabel}:`}</h2>
        <p className="dashboard-widget-heading__value">{headingValue}</p>
      </div>
      {info && (
        <div className="dashboard-widget-heading__icon-wrapper">
          <InfoIcon />
          <div className="dashboard-widget-heading__info-wrapper">
            <p className="dashboard-widget-heading__info">{info}</p>
          </div>
        </div>
      )}
    </div>
  );
};

DashboardWidgetHeading.propTypes = propTypes;
DashboardWidgetHeading.defaultProps = defaultProps;

DashboardWidgetAltHeading.propTypes = altPropTypes;
DashboardWidgetAltHeading.defaultProps = altDefaultProps;

export default DashboardWidgetHeading;
