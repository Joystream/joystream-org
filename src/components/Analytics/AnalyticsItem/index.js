import React from 'react';
import { string, func, oneOfType, number } from 'prop-types';

import './style.scss';

const propTypes = {
  image: oneOfType([string, func]).isRequired,
  title: string.isRequired,
  value: oneOfType([string, number]).isRequired,
};

const AnalyticsItem = ({ image: Image, title, value }) => {
  return (
    <div className="AnalyticsItem">
      <Image className="AnalyticsItem__image" />
      <div>
        <p className="AnalyticsItem__title">{title}</p>
        <p className="AnalyticsItem__value">{value}</p>
      </div>
    </div>
  );
};

AnalyticsItem.propTypes = propTypes;

export default AnalyticsItem;
