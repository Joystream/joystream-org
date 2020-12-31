import React from 'react';
import { ArrowButton } from '../../index';
import Counter from '../../../../components/DateCounter';
import useWindowDimensions from '../../../../utils/useWindowDimensions';

import './style.scss';

// Setting the dates for which to make calculations.

const formerDate = new Date(2020, 11, 1);
const latterDate = new Date(2021, 0,  28);
const now = new Date();

// Calculate percentage of time passed between former date and now.

const timeDifferenceBetweenDates = Math.abs(latterDate - formerDate) / (1000 * 60 * 60 * 24);
const timeDifferenceUntilNow = Math.abs(now - formerDate) / (1000 * 60 * 60 * 24);
const percent = timeDifferenceUntilNow / timeDifferenceBetweenDates;

const ScoringPeriod = () => {

  const { width } = useWindowDimensions();

  return (
    <section className="FoundingMembersPage__period">
      <div className="FoundingMembersPage__period__header">
        <h2 className="FoundingMembersPage__period__title">Current scoring period</h2>
        <p className="FoundingMembersPage__period__subtitle">
          <span>Current period number</span> #1
        </p>
      </div>
      <div className="FoundingMembersPage__period__content">
        <div className="FoundingMembersPage__period__counter">
          <Counter date={latterDate} light title={percent <= 1 ? 'ENDS' : 'ENDED ON'} />
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
            link="https://www.google.com"
            text="Submit summary"
          />
          <ArrowButton
            className="FoundingMembersPage__period__announcement-button"
            link="https://www.google.com"
            text={width > 920 ? "Period announcement" : "Announcement"}
          />
        </div>
      </div>
    </section>
  );
};

export default ScoringPeriod;
