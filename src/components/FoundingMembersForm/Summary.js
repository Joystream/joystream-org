import React from 'react';

import Button from '../Button';

const Summary = ({ addMoreData, startNextStep, jsonSummary, t }) => {
  return (
    <>
      {jsonSummary && Object.keys(jsonSummary).length !== 0 ? (
        <>
          <h3 className="FoundingMembersFormPage__form__subtitle margin-bottom-S">Current state of the data</h3>
          <pre className="FoundingMembersFormPage__form__code-text margin-bottom-L">
            {JSON.stringify(jsonSummary, null, 2)}
          </pre>{' '}
        </>
      ) : null}
      <h3 className="FoundingMembersFormPage__form__subtitle margin-bottom-S">
        Do you wish to add/edit data or continue to submission?
      </h3>
      <Button className='margin-bottom-XS' onClick={() => addMoreData()}>Add more data</Button>
      <Button onClick={() => startNextStep()}>Continue to submission</Button>
    </>
  );
};

export default Summary;
