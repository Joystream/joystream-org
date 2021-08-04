import React, { useState, useEffect } from 'react';
import cn from 'classnames';

import { ArrowButton } from '../../../pages/founding-members';

import formatDate from '.././../../utils/formatDate';

import { SUMMARY_TYPES } from '../../../data/pages/founding-members';

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
  const [tempScoringRound, setTempScoringRound] = useState(scoringRound ? scoringRound : '');
  const [tempSummaryType, setTempSummaryType] = useState('');

  useEffect(() => {
    if (foundingMembersData) {
      setPossibleScoringRounds(foundingMembersData);
    }
  }, [foundingMembersData]);

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
        {possibleScoringRounds?.map(round => (
          <option
            key={round.scoringPeriodId}
            value={round.scoringPeriodId}
            disabled={scoringRound && scoringRound !== round.scoringPeriodId.toString()}
          >
            {formatDate(round.started)} - {formatDate(round.ends)} ({round.blocks.from} - {round.blocks.to})
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
    </>
  );
};

export default RoundAndSummaryType;
