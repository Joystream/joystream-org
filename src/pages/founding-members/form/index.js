import React, { useState, useEffect } from 'react';
import BaseLayout from '../../../components/_layouts/Base';
import { ReactComponent as Arrow } from '../../../assets/svg/arrow-down-small.svg';
import { ScoringPeriodCounter } from '../components/ScoringPeriod';
import useAxios from '../../../utils/useAxios';

import FoundingMembersForm from '../../../components/FoundingMembersForm';

import './style.scss';

const FoundingMembersFormPage = () => {
  const [response, loading, error] = useAxios(
    'https://raw.githubusercontent.com/bwhm/founding-members/test-schema/data/scoring-example.json'
  );
  const [formerDate, setFormerDate] = useState();
  const [latterDate, setLatterData] = useState();

  useEffect(() => {
    if (response?.scoringPeriodsFull?.currentScoringPeriod) {
      setFormerDate(new Date(response.scoringPeriodsFull.currentScoringPeriod.started));
      setLatterData(new Date(response.scoringPeriodsFull.currentScoringPeriod.ends));
    }
  }, [response]);

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
              Before: {latterDate?.getDate()} {latterDate?.toLocaleString('default', { month: 'long' })}
            </p>
          </div>
        </div>

        <div className="FoundingMembersFormPage__body">
          <FoundingMembersForm />

          <div className="FoundingMembersFormPage__counter">
            <div className="FoundingMembersFormPage__counter__header">
              <h2 className="FoundingMembersFormPage__counter__header__title">Current scoring period</h2>
              <h3 className="FoundingMembersFormPage__counter__header__subtitle">
                Current period number <span>#{response?.scoringPeriodsFull?.currentScoringPeriod?.scoringPeriodId}</span>
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
