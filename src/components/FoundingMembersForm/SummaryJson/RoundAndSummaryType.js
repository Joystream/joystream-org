import React, { useState, useEffect } from 'react';
import cn from 'classnames';

import { ArrowButton } from '../../../pages/founding-members';

import formatDate from '.././../../utils/formatDate';

import { SUMMARY_TYPES } from '../../../data/pages/founding-members';

const validScoringRounds = [
  {
    scoringPeriodId: 11,
    started: '2021-07-05T09:00:00+02:00',
    ends: '2021-07-19T08:59:59+02:00',
    blocks: '1390749 - now',
  },
  {
    scoringPeriodId: 10,
    started: '2021-06-21T09:00:00+02:00',
    ends: '2021-07-05T08:59:59+02:00',
    blocks: '1189149 - 1390749',
  },
  {
    scoringPeriodId: 9,
    started: '2021-06-07T09:00:00+02:00',
    ends: '2021-06-21T08:59:59+02:00',
    blocks: '987549 - 1189149',
  },
];

const RoundAndSummaryType = ({ foundingMembersData, setSetupData, shouldSetup, t }) => {
  const [possibleScoringRounds, setPossibleScoringRounds] = useState();
  const [scoringRound, setScoringRound] = useState("");
  const [summaryType, setSummaryType] = useState("");

  // useEffect(() => {
  //   if (foundingMembersData) {
  //     // GET FOUNDING MEMBERS DATA HERE [VALID SCORING ROUNDS AND BLOCKS]
  //     setPossibleScoringRounds(validScoringRounds);
  //   }
  // }, [foundingMembersData]);

  return (
    <>
      <h3 className="FoundingMembersFormPage__form__subtitle margin-bottom-XS">
        Scoring Round
      </h3>
      {/* eslint-disable-next-line */}
      <select
        value={scoringRound}
        onChange={e => {
          setScoringRound(e.target.value);
        }}
        className="FoundingMembersFormPage__form__select margin-bottom-M"
      >
        <option hidden disabled value="">Select an option..</option>
        {validScoringRounds.map(round => (
          <option key={round.scoringPeriodId} value={round.scoringPeriodId}>
            {formatDate(round.started)} - {formatDate(round.ends)} ({round.blocks})
          </option>
        ))}
      </select>
      <h3 className="FoundingMembersFormPage__form__subtitle margin-bottom-XS">
        Summary Type
      </h3>
      {/* eslint-disable-next-line */}
      <select
        value={summaryType}
        onChange={e => {
          setSummaryType(e.target.value);
        }}
        className="FoundingMembersFormPage__form__select"
      >
        <option hidden disabled value="">Select an option..</option>
        {SUMMARY_TYPES.map(type => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
      <ArrowButton
        className={cn('FoundingMembersFormPage__form__button margin-bottom-S', {
          'FoundingMembersFormPage__form__button--inactive': !(scoringRound && summaryType),
        })}
        text={t('foundingMembers.general.next')}
        onClick={e => {
          if(scoringRound && summaryType){
            setSetupData({ scoringRound, summaryType });
            shouldSetup.current = false;
          }
        }}
      />
    </>
  );
};

export default RoundAndSummaryType;
