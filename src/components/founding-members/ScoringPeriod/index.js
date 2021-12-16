import React, { useState, useEffect } from 'react';
import { ArrowButton } from '../../../pages/founding-members/index';
import useWindowDimensions from '../../../utils/useWindowDimensions';
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

const FoundingMembersCounter = ({ latterDate, t }) => {
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

        if (weeks) {
          return (
            <>
              {renderSegment(t('foundingMembers.scoringPeriod.weeks'), weeks)}
              {renderSegment(t('foundingMembers.scoringPeriod.days'), days)}
            </>
          );
        }

        return (
          <>
            {renderSegment(t('foundingMembers.scoringPeriod.days'), days)}
            {renderSegment(t('foundingMembers.scoringPeriod.hours'), hours)}
            {renderSegment(t('foundingMembers.scoringPeriod.minutes'), minutes)}
          </>
        );
      }}
    />
  );
};

const ScoringPeriod = ({ formerDate, latterDate, scoringPeriodId, t }) => {
  const [percent, setPercent] = useState(0);
  const { width } = useWindowDimensions();

  useEffect(() => {
    // Calculate percentage of time passed between former date and now.
    if (formerDate && latterDate) {
      const now = new Date();
      const timeDifferenceBetweenDates = Math.abs(latterDate - formerDate) / (1000 * 60 * 60 * 24);
      const timeDifferenceUntilNow = Math.abs(now - formerDate) / (1000 * 60 * 60 * 24);
      const percent = timeDifferenceUntilNow / timeDifferenceBetweenDates;

      setPercent(percent);
    }
  }, [formerDate, latterDate]);

  return (
    <section className="FoundingMembersPage__period" style={{ display: percent <= 1 ? 'block' : 'none' }}>
      <div className="FoundingMembersPage__period__header">
        <h2 className="FoundingMembersPage__period__title">{t('foundingMembers.scoringPeriod.title')}</h2>
        <p className="FoundingMembersPage__period__subtitle">
          <span>{t('foundingMembers.scoringPeriod.currentNumber')}</span> {scoringPeriodId && `#${scoringPeriodId}`}
        </p>
      </div>
      <div className="FoundingMembersPage__period__content">
        <div className="FoundingMembersPage__period__counter">
          <p className="FoundingMembersPage__period__counter__subtitle">
            {percent <= 1 ? t('foundingMembers.scoringPeriod.ends') : t('foundingMembers.scoringPeriod.endedOn')}
          </p>
          <div className="FoundingMembersPage__counter">
            {latterDate && <FoundingMembersCounter t={t} latterDate={latterDate} />}
          </div>
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
                  {formerDate?.getDate()} {formerDate?.toLocaleString('default', { month: 'long' })}
                </p>
                <p>
                  {latterDate?.getDate()} {latterDate?.toLocaleString('default', { month: 'long' })}
                </p>
              </div>
            </div>
          ) : null}
        </div>
        <div className="FoundingMembersPage__period__buttons">
          <ArrowButton
            className="FoundingMembersPage__period__summary-button"
            to="/founding-members/form"
            text={t('foundingMembers.scoringPeriod.submitSummary')}
          />
          <ArrowButton
            className="FoundingMembersPage__period__announcement-button"
            link={
              scoringPeriodId
                ? `https://github.com/Joystream/founding-members/blob/main/scoring-periods/${scoringPeriodId}.md`
                : '#0'
            }
            text={
              width > 920
                ? t('foundingMembers.scoringPeriod.periodAnnouncement')
                : t('foundingMembers.scoringPeriod.announcement')
            }
          />
        </div>
      </div>
    </section>
  );
};

export const ScoringPeriodCounter = ({ className, formerDate, latterDate, t }) => {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    // Calculate percentage of time passed between former date and now.
    if (formerDate && latterDate) {
      const now = new Date();
      const timeDifferenceBetweenDates = Math.abs(latterDate - formerDate) / (1000 * 60 * 60 * 24);
      const timeDifferenceUntilNow = Math.abs(now - formerDate) / (1000 * 60 * 60 * 24);
      const percent = timeDifferenceUntilNow / timeDifferenceBetweenDates;

      setPercent(percent);
    }
  }, [formerDate, latterDate]);

  return (
    <div className={`FoundingMembersPage__period__counter ${className ?? ''}`}>
      <p className="FoundingMembersPage__period__counter__subtitle">
        {percent <= 1 ? t('foundingMembers.scoringPeriod.ends') : t('foundingMembers.scoringPeriod.endedOn')}
      </p>
      <div className="FoundingMembersPage__counter">
        {latterDate && <FoundingMembersCounter t={t} latterDate={latterDate} />}
      </div>
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
              {formerDate?.getDate()} {formerDate?.toLocaleString('default', { month: 'long' })}
            </p>
            <p>
              {latterDate?.getDate()} {latterDate?.toLocaleString('default', { month: 'long' })}
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ScoringPeriod;
