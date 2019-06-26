import React from 'react';
import cn from 'classnames';
import { oneOfType, string, instanceOf, bool } from 'prop-types';
import Countdown from 'react-countdown-now';

import padNumber from '../../utils/padNumber';

import './style.scss';

const propTypes = {
  date: oneOfType([string, instanceOf(Date)]),
  large: bool,
  light: bool,
};

const defaultProps = {
  date: '2019/06/26 17:04',
  large: false,
  light: false,
};

const renderer = ({ total, days, hours, minutes, seconds }, { date, light, large }) => {
  let defaultTitle = 'Time to launch';
  let defaultSeparator = ':';
  let timeToDisplay = [];

  if(!total) {
    defaultTitle = 'Launched on';
    defaultSeparator = '/';
    timeToDisplay = [
      { label: 'day', value: new Date(date).getUTCDate() },
      { label: 'month', value: new Date(date).getUTCMonth() },
      { label: 'year', value: new Date(date).getUTCFullYear() },
    ];
  } else {
    const weeks = Math.floor(total / (1000 * 60 * 60 * 24 * 7));
    const parsedDays = Math.floor(days % 7);

    const timeObjects = [
      { label: `week${weeks !== 1 ? 's' : ''}`, value: weeks },
      { label: `day${parsedDays !== 1 ? 's' : ''}`, value: parsedDays },
      { label: `hour${hours !== 1 ? 's' : ''}`, value: hours },
      { label: `minute${minutes !== 1 ? 's' : ''}`, value: minutes },
      { label: `second${seconds !== 1 ? 's' : ''}`, value: seconds },
    ];

    if (weeks >= 1) {
      timeToDisplay = timeObjects.slice(0, 3);
    } else if (weeks < 1 && parsedDays >= 1) {
      timeToDisplay = timeObjects.slice(1, 4);
    } else if (parsedDays < 1) {
      timeToDisplay = timeObjects.slice(2, timeObjects.length);
    }
  }

  return (
    <div className={ cn('DateCounter', { 'DateCounter--light': light, 'DateCounter--large': large }) }>
      <p className="DateCounter__title">{ defaultTitle }</p>
      <div className="DateCounter__container">
        { timeToDisplay.map((time, i) => {
          return (
            <React.Fragment key={ time.label }>
              <div className="DateCounter__segment">
                <span className="DateCounter__value">{ padNumber(time.value) }</span>
                <span className="DateCounter__label">{ time.label }</span>
              </div>
              { i + 1 !== timeToDisplay.length &&
                <span className="DateCounter__value, DateCounter__separator">
                  { defaultSeparator }
                </span> }
            </React.Fragment>
          );
        }) }
      </div>
    </div>
  );
};

const DateCounter = ({ date, ...props }) => {
  return (
    <Countdown
      date={ date }
      renderer={ (countdownProps) => renderer(countdownProps, { date, ...props }) } />
  );
};

DateCounter.propTypes = propTypes;
DateCounter.defaultProps = defaultProps;

export default DateCounter;
