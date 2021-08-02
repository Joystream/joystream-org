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

const SummaryJson = ({ Api, foundingMembersData, setJsonSummary, startNextStep, profile, t }) => {
  const shouldSetup = useRef(true);

  // const [setupData, setSetupData] = useState();
  const [summaryType, setSummaryType] = useState();
  const [scoringRound, setScoringRound] = useState();
  const [jsonData, setJsonData] = useState({});
  const [shouldMoveToNextStep, setShouldMoveToNextStep] = useState(false);

  // useEffect(() => {
  //   if(jsonData.length !== 0 && shouldMoveToNextStep) {
  //     setJsonSummary(jsonData);
  //     startNextStep();
  //   }
  // },[jsonData, shouldMoveToNextStep]);

  if (summaryType && scoringRound && !shouldSetup.current) {
    shouldSetup.current = true;

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

    if(summaryType === 'Council Member') {
      return <CouncilMember setJsonData={setJsonData} summaryType={summaryType} t={t} />;
    }

    if(summaryType === 'Roles') {
      return <Roles setJsonData={setJsonData} summaryType={summaryType} t={t} />;
    }

    if(summaryType === 'Content Bounties') {
      return <Content setJsonData={setJsonData} summaryType={summaryType} t={t} />;
    }

    if(summaryType === 'Bounties') {
      return <Bounties setJsonData={setJsonData} summaryType={summaryType} t={t} />;
    }

    if(summaryType === 'Other') {
      return <Other setJsonData={setJsonData} summaryType={summaryType} t={t} />;
    }
  }

  if (summaryType && scoringRound && shouldSetup.current && jsonData?.length !== 0) {
    return <AddNewOrSubmit setShouldMoveToNextStep={setShouldMoveToNextStep} shouldSetup={shouldSetup} setSummaryType={setSummaryType} t={t} />;
  }

  console.log(jsonData);
  console.log(typeof scoringRound)

  return (
    <RoundAndSummaryType
      foundingMembersData={foundingMembersData}
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
