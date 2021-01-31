import React from 'react';
import { ArrowButton } from '../../index';
import useWindowDimensions from '../../../../utils/useWindowDimensions';
import Countdown from 'react-countdown-now';

import './style.scss';

const formatDate = ({ days, hours, minutes }) => {
  if (days < 7) {
    return {
      weeks: 0,
      days,
      hours,
      minutes,
    };
  } else {
    let weeks = Math.floor(days / 7);
    return {
      weeks,
      days: days - weeks * 7,
      hours,
      minutes,
    };
  }
};

const FoundingMembersCounter = ({ latterDate }) => {
  const renderSegment = (label, number) => {
    if (number !== 0) {
      return (
        <div className="FoundingMembersPage__counter__segment">
          <p className="FoundingMembersPage__counter__number">{number}</p>
          <p className="FoundingMembersPage__counter__label">{label}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <Countdown
      date={latterDate}
      renderer={({ completed, ...otherProps }) => {
        const { weeks, days, hours, minutes } = formatDate(otherProps);

        return (
          <div className="FoundingMembersPage__counter">
            {weeks ? (
              <>
                {renderSegment('WEEKS', weeks)}
                {renderSegment('DAYS', days)}
              </>
            ) : (
              <>
                {renderSegment('DAYS', days)}
                {renderSegment('HOURS', hours)}
                {renderSegment('MINUTES', minutes)}
              </>
            )}
          </div>
        );
      }}
    />
  );
};

const ScoringPeriod = ({ formerDate, latterDate }) => {
  const now = new Date();

  // Calculate percentage of time passed between former date and now.

  const timeDifferenceBetweenDates = Math.abs(latterDate - formerDate) / (1000 * 60 * 60 * 24);
  const timeDifferenceUntilNow = Math.abs(now - formerDate) / (1000 * 60 * 60 * 24);
  const percent = timeDifferenceUntilNow / timeDifferenceBetweenDates;

  const { width } = useWindowDimensions();

  return (
    <section className="FoundingMembersPage__period" style={{ display: percent <= 1 ? 'block' : 'none' }}>
      <div className="FoundingMembersPage__period__header">
        <h2 className="FoundingMembersPage__period__title">Current scoring period</h2>
        <p className="FoundingMembersPage__period__subtitle">
          <span>Current period number</span> #1
        </p>
      </div>
      <div className="FoundingMembersPage__period__content">
        <div className="FoundingMembersPage__period__counter">
          <p className="FoundingMembersPage__period__counter__subtitle">{percent <= 1 ? 'ENDS' : 'ENDED ON'}</p>
          <FoundingMembersCounter latterDate={latterDate} />
          {percent <= 1 ? (
            <div className="FoundingMembersPage__period__percentage">
              <div className="FoundingMembersPage__period__percentage__line">
                <div
                  style={{ width: `${percent * 100}%` }}
                  className="FoundingMembersPage__period__percentage__filled"
                ></div>
              </div>
              <div className="FoundingMembersPage__period__percentage__dates">
                <p>
                  {formerDate.getDate()} {formerDate.toLocaleString('default', { month: 'long' })}
                </p>
                <p>
                  {latterDate.getDate()} {latterDate.toLocaleString('default', { month: 'long' })}
                </p>
              </div>
            </div>
          ) : null}
        </div>
        <div className="FoundingMembersPage__period__buttons">
          <ArrowButton
            className="FoundingMembersPage__period__summary-button"
            link="/founding-members/form"
            text="Submit summary"
          />
          <ArrowButton
            className="FoundingMembersPage__period__announcement-button"
            link="https://github.com/Joystream/founding-member/blob/master/scoring-periods/1.md"
            text={width > 920 ? 'Period announcement' : 'Announcement'}
          />
        </div>
      </div>
    </section>
  );
};

export const ScoringPeriodCounter = ({ className, formerDate, latterDate }) => {
  const now = new Date();

  // Calculate percentage of time passed between former date and now.

  const timeDifferenceBetweenDates = Math.abs(latterDate - formerDate) / (1000 * 60 * 60 * 24);
  const timeDifferenceUntilNow = Math.abs(now - formerDate) / (1000 * 60 * 60 * 24);
  const percent = timeDifferenceUntilNow / timeDifferenceBetweenDates;

  return (
    <div className={`FoundingMembersPage__period__counter ${className ?? ''}`}>
      <p className="FoundingMembersPage__period__counter__subtitle">{percent <= 1 ? 'ENDS' : 'ENDED ON'}</p>
      <FoundingMembersCounter latterDate={latterDate} />
      {percent <= 1 ? (
        <div className="FoundingMembersPage__period__percentage">
          <div className="FoundingMembersPage__period__percentage__line FoundingMembersPage__period__percentage__line--secondary">
            <div
              style={{ width: `${percent * 100}%` }}
              className="FoundingMembersPage__period__percentage__filled"
            ></div>
          </div>
          <div className="FoundingMembersPage__period__percentage__dates">
            <p>
              {formerDate.getDate()} {formerDate.toLocaleString('default', { month: 'long' })}
            </p>
            <p>
              {latterDate.getDate()} {latterDate.toLocaleString('default', { month: 'long' })}
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ScoringPeriod;
