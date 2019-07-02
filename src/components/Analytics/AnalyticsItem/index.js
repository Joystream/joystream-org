import React from 'react';
import { string, func, oneOfType, number } from 'prop-types';

import './style.scss';

const propTypes = {
  image: func.isRequired,
  title: string.isRequired,
  value: oneOfType([string, number]).isRequired,
};

const Analytics = ({ image: Image, title, value }) => {
  return (
    <div className="AnalyticsItem">
      <Image className="AnalyticsItem__image" />
      <p className="AnalyticsItem__title">{title}</p>
      <p className="AnalyticsItem__value">{value}</p>
    </div>
  );
};

Analytics.propTypes = propTypes;

export default Analytics;
