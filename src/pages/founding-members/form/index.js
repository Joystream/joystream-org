import React from 'react';
import BaseLayout from '../../../components/_layouts/Base';
import { ReactComponent as Arrow } from '../../../assets/svg/arrow-down-small.svg';
import { ScoringPeriodCounter } from '../components/ScoringPeriod';

import FoundingMembersForm from '../../../components/FoundingMembersForm';

import './style.scss';

const FoundingMembersFormPage = () => {
  const formerDate = new Date(2020, 11, 1);
  const latterDate = new Date(2021, 2, 20);

  return (
    <BaseLayout>
      <div className="FoundingMembersFormPage">
        <div className="FoundingMembersFormPage__header">
          <div className="FoundingMembersFormPage__back">
            <a href="/founding-members" className="FoundingMembersFormPage__back__text">
              <Arrow className="FoundingMembersFormPage__back__arrow" />
              <span>Back to Program page</span>
            </a>
          </div>
          <div className="FoundingMembersFormPage__header__title-wrapper">
            <h1 className="FoundingMembersFormPage__header__title">Submit activity summary</h1>
            <p className="FoundingMembersFormPage__header__title-date">
              Before: {latterDate.getDate()} {latterDate.toLocaleString('default', { month: 'long' })}
            </p>
          </div>
        </div>

        <div className="FoundingMembersFormPage__body">
          
          <FoundingMembersForm />

          <div className="FoundingMembersFormPage__counter">
            <div className="FoundingMembersFormPage__counter__header">
              <h2 className="FoundingMembersFormPage__counter__header__title">Current scoring period</h2>
              <h3 className="FoundingMembersFormPage__counter__header__subtitle">
                Current period number <span>#1</span>
              </h3>
            </div>
            <ScoringPeriodCounter
              className="FoundingMembersFormPage__counter__body"
              formerDate={formerDate}
              latterDate={latterDate}
            />
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default FoundingMembersFormPage;
