import React, { useState } from 'react';

const CouncilMember = () => {
  const [councilTerms, setCouncilTerms] = useState('');
  const [earnedAmount, setEarnedAmount] = useState(0);

  return (
    <>
      <h3 className="FoundingMembersFormPage__form__subtitle margin-bottom-XS">
        Which council terms were you a part of?
      </h3>
      <input
        className="FoundingMembersFormPage__form__input margin-bottom-M"
        placeholder="Your council terms.."
        value={councilTerms}
        onChange={e => setCouncilTerms(e.target.value)}
      />
      <h3 className="FoundingMembersFormPage__form__subtitle margin-bottom-XS">
        How much have you earned during your tenure?
      </h3>
      <input
        className="FoundingMembersFormPage__form__input margin-bottom-M"
        type="number"
        min={0}
        value={earnedAmount}
        onChange={e => setEarnedAmount(e.target.value)}
      />
    </>
  );
};

export default CouncilMember;
