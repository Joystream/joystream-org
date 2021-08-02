import React from 'react';
import Button from '../../Button';

const AddNewOrSubmit = ({ setShouldMoveToNextStep, shouldSetup, setSummaryType, t }) => {
  return (
    <>
      <h3 className="FoundingMembersFormPage__form__subtitle margin-bottom-M">
        Do you wish to add more data or submit?
      </h3>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Button
          className="margin-bottom-S"
          onClick={() => {
            shouldSetup.current = true;
            setSummaryType(null);
          }}
        >
          Add more data
        </Button>
        <Button onClick={() => setShouldMoveToNextStep(true)}>Submit data</Button>
      </div>
    </>
  );
};

export default AddNewOrSubmit;
