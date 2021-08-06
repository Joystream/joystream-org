import React, { useState, useRef, useEffect } from 'react';

import RoundAndSummaryType from './RoundAndSummaryType';
import NodeOperator from './NodeOperator';
import AddNewOrSubmit from './AddNewOrSubmit';
import Validator from './Validator';
import CouncilMember from './CouncilMember';
import Roles from './Roles';
import Content from './Content';
import Bounties from './Bounties';
import Other from './Other';

// this data needs to be fetched from the fm data json
const COUNCIL_TERMS = [
  {
    blockRange: '1693148 − 1793948',
    from: '2021-07-26T09:00:00+02:00',
    to: '2021-08-02T09:00:00+02:00',
    id: 14,
  },
  {
    blockRange: '1592348 − 1693148',
    from: '2021-07-19T09:00:00+02:00',
    to: '2021-07-26T09:00:00+02:00',
    id: 13,
  },
];

const VALID_SCORING_ROUNDS = [
  {
    scoringPeriodId: 12,
    started: '2021-07-19T09:00:00+02:00',
    ends: '2021-08-02T08:59:59+02:00',
    blocks: {
      from: 1592349,
      to: 1793949,
    },
    councilTerms: COUNCIL_TERMS,
  },
  {
    scoringPeriodId: 11,
    started: '2021-07-05T09:00:00+02:00',
    ends: '2021-07-19T08:59:59+02:00',
    blocks: '1390749 - 1592349',
    blocks: {
      from: 1390749,
      to: 1592349,
    },
    councilTerms: COUNCIL_TERMS,
  },
  {
    scoringPeriodId: 10,
    started: '2021-06-21T09:00:00+02:00',
    ends: '2021-07-05T08:59:59+02:00',
    blocks: '1189149 - 1390749',
    blocks: {
      from: 1189149,
      to: 1390749,
    },
    councilTerms: COUNCIL_TERMS,
  },
  {
    scoringPeriodId: 9,
    started: '2021-06-07T09:00:00+02:00',
    ends: '2021-06-21T08:59:59+02:00',
    blocks: '987549 - 1189149',
    blocks: {
      from: 987549,
      to: 1189149,
    },
    councilTerms: COUNCIL_TERMS,
  },
];

const SummaryJson = ({ Api, foundingMembersData, jsonSummary, setJsonSummary, startNextStep, profile, t }) => {
  const shouldSetup = useRef(true);

  // const [setupData, setSetupData] = useState();
  const [summaryType, setSummaryType] = useState();
  const [scoringRound, setScoringRound] = useState();
  const [jsonData, setJsonData] = useState({});
  const [shouldMoveToNextStep, setShouldMoveToNextStep] = useState(false);

  useEffect(() => {
    if (Object.keys(jsonData).length !== 0 && shouldMoveToNextStep) {
      const chosenScoringRound = VALID_SCORING_ROUNDS.filter(
        round => round.scoringPeriodId.toString() === scoringRound
      )[0];

      setJsonSummary([
        ...jsonSummary.filter(summary => summary.scoringPeriodId !== chosenScoringRound.scoringPeriodId),
        {
          scoringPeriodId: chosenScoringRound.scoringPeriodId,
          startBlocks: chosenScoringRound.blocks.from,
          endBlock: chosenScoringRound.blocks.to,
          data: jsonData,
        },
      ]);
      startNextStep();
    }
  }, [jsonData, shouldMoveToNextStep]);

  if (summaryType && scoringRound && !shouldSetup.current) {
    shouldSetup.current = true;
    const chosenScoringRound = VALID_SCORING_ROUNDS.filter(
      round => round.scoringPeriodId.toString() === scoringRound
    )[0];

    if (summaryType === 'Validator') {
      return (
        <Validator
          setJsonData={setJsonData}
          summaryType={summaryType}
          profileAddress={profile.root_account.toString()}
          t={t}
        />
      );
    }

    if (summaryType === 'Node Operator') {
      return <NodeOperator setJsonData={setJsonData} summaryType={summaryType} t={t} />;
    }

    if (summaryType === 'Council Member') {
      return (
        <CouncilMember
          jsonData={jsonData}
          setJsonData={setJsonData}
          summaryType={summaryType}
          councilTermsInPeriod={chosenScoringRound.councilTerms}
          t={t}
        />
      );
    }

    if (summaryType === 'Roles') {
      return (
        <Roles
          jsonData={jsonData}
          setJsonData={setJsonData}
          summaryType={summaryType}
          scoringRoundStarted={chosenScoringRound.blocks.from}
          scoringRoundEnds={chosenScoringRound.blocks.to}
          t={t}
        />
      );
    }

    if (summaryType === 'Content Bounties') {
      return <Content jsonData={jsonData} setJsonData={setJsonData} summaryType={summaryType} t={t} />;
    }

    if (summaryType === 'Bounties') {
      return <Bounties jsonData={jsonData} setJsonData={setJsonData} summaryType={summaryType} t={t} />;
    }

    if (summaryType === 'Other') {
      return <Other jsonData={jsonData} setJsonData={setJsonData} summaryType={summaryType} t={t} />;
    }
  }

  if (summaryType && scoringRound && shouldSetup.current && jsonData?.length !== 0) {
    return (
      <AddNewOrSubmit
        jsonData={jsonData}
        setShouldMoveToNextStep={setShouldMoveToNextStep}
        shouldSetup={shouldSetup}
        setSummaryType={setSummaryType}
        t={t}
      />
    );
  }

  console.log(jsonData);

  return (
    <RoundAndSummaryType
      foundingMembersData={VALID_SCORING_ROUNDS}
      setSummaryType={setSummaryType}
      scoringRound={scoringRound}
      setScoringRound={setScoringRound}
      shouldSetup={shouldSetup}
      jsonData={jsonData}
      t={t}
    />
  );
};

export default SummaryJson;
