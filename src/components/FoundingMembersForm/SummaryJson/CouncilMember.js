import React, { useState, useEffect, useRef } from 'react';
import cn from 'classnames';

import Socials from './Socials';
import TextArea from './TextArea';
import { ArrowButton } from '../../../pages/founding-members';

const CouncilMember = ({ setJsonData, summaryType, t }) => {
  const [councilTerms, setCouncilTerms] = useState('');
  const [earnedAmount, setEarnedAmount] = useState(0);
  const [proposalIDs, setProposalIDs] = useState('');
  const [socials, setSocials] = useState();
  const [extraInformation, setExtraInformation] = useState('');

  const handleSubmit = () => {
    if (councilTerms && (earnedAmount || earnedAmount === 0) && proposalIDs) {
      let council = {
        term: councilTerms,
        reward: earnedAmount,
        proposalIDs: proposalIDs,
      };

      if (socials) {
        council.links = socials;
      }

      if (extraInformation) {
        council.other = extraInformation;
      }

      setJsonData(prev => [...prev, { summaryType, council }]);
    }
  };

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
      <h3 className="FoundingMembersFormPage__form__subtitle margin-bottom-XS">Proposal IDs</h3>
      <input
        className="FoundingMembersFormPage__form__input margin-bottom-M"
        placeholder="Proposal IDs.."
        value={proposalIDs}
        onChange={e => setProposalIDs(e.target.value)}
      />
      <Socials setSocials={setSocials} />
      <h3 className="FoundingMembersFormPage__form__subtitle margin-bottom-XS">Extra information</h3>
      <TextArea
        className="FoundingMembersFormPage__form__text-area margin-bottom-M"
        setValue={setExtraInformation}
      />
      <ArrowButton
        className={cn('FoundingMembersFormPage__form__button', {
          'FoundingMembersFormPage__form__button--inactive': !(
            councilTerms &&
            (earnedAmount || earnedAmount === 0) &&
            proposalIDs
          ),
        })}
        text={t('foundingMembers.general.next')}
        onClick={handleSubmit}
      />
    </>
  );
};

export default CouncilMember;
