import React from 'react';
import cn from 'classnames';
import { string, bool } from 'prop-types';

import { ReactComponent as InfoIcon } from '../../../assets/svg/dashboard/info-icon.svg';

import { termDefinitions } from '../../../data/pages/dashboard/termDefinitions';

import './style.scss';

const propTypes = {
  heading: string.isRequired,
  termDefinitionKey: string,
  headingWrapperCn: string,
  isDim: bool,
  helperText: string,
};

const defaultProps = {
  headingWrapperCn: 'base-margin',
};

const DashboardWidgetHeading = ({ heading, termDefinitionKey, headingWrapperCn, isDim, helperText }) => {
  return (
    <div className={cn('dashboard-widget-heading', { 'dim-heading': isDim, [headingWrapperCn]: headingWrapperCn })}>
      <h3 className={cn('dashboard-widget-heading__heading', { 'dim-heading': isDim })}>
        {heading}
        {!!helperText && (
          <>
            &nbsp;<span>{helperText}</span>
          </>
        )}
      </h3>
      {termDefinitionKey && !!termDefinitions[termDefinitionKey] && (
        <div className="dashboard-widget-heading__icon-wrapper">
          <InfoIcon />
          <div className="dashboard-widget-heading__info-wrapper">
            <p className="dashboard-widget-heading__info">{termDefinitions[termDefinitionKey]}</p>
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

export const DashboardWidgetAltHeading = ({
  headingLabel,
  headingValue,
  info,
  headingWrapperCn,
  termDefinitionKey,
}) => {
  return (
    <div className={cn('dashboard-widget-heading', { [headingWrapperCn]: headingWrapperCn })}>
      <div className="dashboard-widget-heading__wrapper">
        <h2 className="dashboard-widget-heading__label">{`${headingLabel}:`}</h2>
        <p className="dashboard-widget-heading__value">{headingValue}</p>
      </div>
      {!!termDefinitionKey && !!termDefinitions[termDefinitionKey] && (
        <div className="dashboard-widget-heading__icon-wrapper">
          <InfoIcon />
          <div className="dashboard-widget-heading__info-wrapper">
            <p className="dashboard-widget-heading__info">{termDefinitions[termDefinitionKey]}</p>
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
