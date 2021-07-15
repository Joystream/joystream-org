import React, { useState, useRef } from 'react';

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

  const [setupData, setSetupData] = useState();
  const [jsonData, setJsonData] = useState([]);

  if (setupData && !shouldSetup.current) {
    shouldSetup.current = true;

    const { scoringRound, summaryType } = setupData;

    if (summaryType === 'Validator') {
      return (
        <Validator
          setJsonData={setJsonData}
          setupData={setupData}
          profileAddress={profile.root_account.toString()}
          t={t}
        />
      );
    }

    if (summaryType === 'Node Operator') {
      return <NodeOperator setJsonData={setJsonData} setupData={setupData} t={t} />;
    }

    if(summaryType === 'Council Member') {
      return <CouncilMember setJsonData={setJsonData} setupData={setupData} t={t} />;
    }

    if(summaryType === 'Roles') {
      return <Roles setJsonData={setJsonData} setupData={setupData} t={t} />;
    }

    if(summaryType === 'Content Bounties') {
      return <Content setJsonData={setJsonData} setupData={setupData} t={t} />;
    }

    if(summaryType === 'Bounties') {
      return <Bounties setJsonData={setJsonData} setupData={setupData} t={t} />;
    }

    if(summaryType === 'Other') {
      return <Other setJsonData={setJsonData} setupData={setupData} t={t} />;
    }
  }

  if (setupData && shouldSetup.current) {
    return <AddNewOrSubmit startNextStep={startNextStep} shouldSetup={shouldSetup} setSetupData={setSetupData} t={t} />;
  }

  console.log(jsonData);

  return (
    <RoundAndSummaryType
      foundingMembersData={foundingMembersData}
      setSetupData={setSetupData}
      shouldSetup={shouldSetup}
      t={t}
    />
  );
};

export default SummaryJson;
