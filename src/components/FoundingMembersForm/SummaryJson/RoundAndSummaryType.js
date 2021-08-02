import React, { useState, useEffect } from 'react';
import cn from 'classnames';

import { ArrowButton } from '../../../pages/founding-members';

import formatDate from '.././../../utils/formatDate';

import { SUMMARY_TYPES } from '../../../data/pages/founding-members';

const validScoringRounds = [
  {
    scoringPeriodId: 12,
    started: '2021-07-19T09:00:00+02:00',
    ends: '2021-08-02T08:59:59+02:00',
    blocks: '1592349 - 1793949',
  },
  {
    scoringPeriodId: 11,
    started: '2021-07-05T09:00:00+02:00',
    ends: '2021-07-19T08:59:59+02:00',
    blocks: '1390749 - 1592349',
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

const RoundAndSummaryType = ({
  foundingMembersData,
  setSummaryType,
  scoringRound,
  setScoringRound,
  shouldSetup,
  jsonData,
  t,
}) => {
  const [possibleScoringRounds, setPossibleScoringRounds] = useState();
  const [tempScoringRound, setTempScoringRound] = useState(scoringRound ? scoringRound : "");
  const [tempSummaryType, setTempSummaryType] = useState('');

  // useEffect(() => {
  //   if (foundingMembersData) {
  //     // GET FOUNDING MEMBERS DATA HERE [VALID SCORING ROUNDS AND BLOCKS]
  //     setPossibleScoringRounds(validScoringRounds);
  //   }
  // }, [foundingMembersData]);

  useEffect(() => {
    if (tempScoringRound && tempSummaryType) {
      setScoringRound(tempScoringRound);
      setSummaryType(tempSummaryType);
      shouldSetup.current = false;
    }
  }, [tempScoringRound, tempSummaryType]);

  return (
    <>
      <h3 className="FoundingMembersFormPage__form__subtitle margin-bottom-XS">Scoring Round</h3>
      {/* eslint-disable-next-line */}
      <select
        value={scoringRound ? scoringRound : tempScoringRound}
        onChange={e => {
          setTempScoringRound(e.target.value);
        }}
        className="FoundingMembersFormPage__form__select margin-bottom-M"
      >
        <option hidden disabled value="">
          Select an option..
        </option>
        {validScoringRounds.map(round => (
          <option
            key={round.scoringPeriodId}
            value={round.scoringPeriodId}
            disabled={scoringRound && scoringRound !== round.scoringPeriodId.toString()}
          >
            {formatDate(round.started)} - {formatDate(round.ends)} ({round.blocks})
          </option>
        ))}
      </select>
      <h3 className="FoundingMembersFormPage__form__subtitle margin-bottom-XS">Summary Type</h3>
      {/* eslint-disable-next-line */}
      <select
        value={tempSummaryType}
        onChange={e => {
          setTempSummaryType(e.target.value);
        }}
        className="FoundingMembersFormPage__form__select margin-bottom-M"
      >
        <option hidden disabled value="">
          Select an option..
        </option>
        {SUMMARY_TYPES.map(type => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
      {jsonData && Object.keys(jsonData).length !== 0 ? (
        <code className="FoundingMembersFormPage__form__code-text">{JSON.stringify(jsonData, null, 2)}</code>
      ) : null}
      {/* <ArrowButton
        className={cn('FoundingMembersFormPage__form__button margin-bottom-S', {
          'FoundingMembersFormPage__form__button--inactive': !(tempScoringRound && tempSummaryType),
        })}
        text={t('foundingMembers.general.next')}
        onClick={e => {
          if (tempScoringRound && tempSummaryType) {
            setScoringRound(tempScoringRound);
            setSummaryType(tempSummaryType);
            shouldSetup.current = false;
          }
        }}
      /> */}
    </>
  );
};

export default RoundAndSummaryType;
