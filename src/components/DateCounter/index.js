import React from 'react';
import cn from 'classnames';
import { oneOfType, string, instanceOf, bool, func, node } from 'prop-types';
import Countdown from 'react-countdown-now';

import padNumber from '../../utils/padNumber';
import pluralString from '../../utils/pluralString';
import convertToCamelCase from '../../utils/convertToCamelCase';

import './style.scss';

const propTypes = {
  date: oneOfType([string, instanceOf(Date)]).isRequired,
  large: bool,
  light: bool,
  className: string,
  onTimeout: func,
  title: oneOfType([string, node]),
};

const defaultProps = {
  large: false,
  light: false,
  onTimeout: null,
  title: null,
};

const renderer = ({ total, days, hours, minutes, seconds }, { date, light, large, onTimeout, title, className, t }) => {
  let defaultTitle = 'Time to launch';
  let defaultSeparator = ':';
  let timeToDisplay = [];

  if (!total) {
    onTimeout && onTimeout();
    defaultTitle = 'Launched on';
    defaultSeparator = '/';
    timeToDisplay = [
      { label: 'day', value: new Date(date).getUTCDate() },
      { label: 'month', value: new Date(date).getUTCMonth() + 1 },
      { label: 'year', value: new Date(date).getUTCFullYear() },
    ];
  } else {
    const weeks = Math.floor(total / (1000 * 60 * 60 * 24 * 7));
    const parsedDays = Math.floor(days % 7);

    const timeObjects = [
      { label: pluralString('week', weeks), value: weeks },
      { label: pluralString('day', parsedDays), value: parsedDays },
      { label: pluralString('hour', hours), value: hours },
      { label: pluralString('minute', minutes), value: minutes },
      { label: pluralString('second', seconds), value: seconds },
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
    <div
      className={cn('DateCounter', className, {
        'DateCounter--light': light,
        'DateCounter--large': large,
      })}
    >
      <div className="DateCounter__title">{title || t(`dateCounter.${convertToCamelCase(defaultTitle)}`)}</div>
      <div className="DateCounter__container">
        {timeToDisplay.map((time, i) => {
          return (
            <React.Fragment key={time.label}>
              <div className="DateCounter__segment">
                <span className="DateCounter__value">{padNumber(time.value)}</span>
                <span className="DateCounter__label">{t(`dateCounter.${time.label}`)}</span>
              </div>
              {i + 1 !== timeToDisplay.length && (
                <span className="DateCounter__value, DateCounter__separator">{defaultSeparator}</span>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

const DateCounter = ({ date, ...props }) => {
  return <Countdown date={date} renderer={countdownProps => renderer(countdownProps, { date, ...props })} />;
};

DateCounter.propTypes = propTypes;
DateCounter.defaultProps = defaultProps;

export default DateCounter;
