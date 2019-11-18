import React from 'react';
import { string, func, oneOfType, number, bool } from 'prop-types';
import cn from 'classnames';

import './style.scss';

const propTypes = {
  image: oneOfType([string, func]).isRequired,
  title: string.isRequired,
  value: oneOfType([string, number]).isRequired,
  inline: bool,
};

const AnalyticsItem = ({ image: Image, title, value, inline }) => {
  return (
    <div className={cn('AnalyticsItem', { 'AnalyticsItem--inline': inline })}>
      <div className="AnalyticsItem__image-container">
        <Image className="AnalyticsItem__image" />
      </div>
      <div>
        <p className="AnalyticsItem__title">{title}</p>
        <p className="AnalyticsItem__value">{value}</p>
      </div>
    </div>
  );
};

AnalyticsItem.propTypes = propTypes;

export default AnalyticsItem;
