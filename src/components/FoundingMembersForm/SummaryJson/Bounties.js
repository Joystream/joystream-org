import React, { useState } from 'react';
import cn from 'classnames';

import Socials from './Socials';
import TextArea from './TextArea';
import { ArrowButton } from '../../../pages/founding-members';

const Bounties = ({ setJsonData, setupData, t }) => {
  const [bountyID, setBountyID] = useState("");
  const [proposalIDs, setProposalIDs] = useState("");
  const [socials, setSocials] = useState();
  const [totalRewards, setTotalRewards] = useState("");
  const [extraInformation, setExtraInformation] = useState("");

  const handleSubmit = () => {
    if(bountyID && proposalIDs && socials && totalRewards) {
      let bounties = {
        bountyID,
        proposalIDs,
        links: socials,
        totalRewards
      };

      if(extraInformation) {
        bounties.other = extraInformation;
      }

      setJsonData(prev => [...prev, { ... setupData, bounties }]);
    }
  };

  return (
    <>
      <h3 className="FoundingMembersFormPage__form__subtitle margin-bottom-XS">Bounty ID</h3>
      <input
        className="FoundingMembersFormPage__form__input margin-bottom-M"
        placeholder="Bounty ID.."
        value={bountyID}
        onChange={e => setBountyID(e.target.value)}
      />
      <h3 className="FoundingMembersFormPage__form__subtitle margin-bottom-XS">Proposal IDs</h3>
      <input
        className="FoundingMembersFormPage__form__input margin-bottom-M"
        placeholder="Proposal IDs.."
        value={proposalIDs}
        onChange={e => setProposalIDs(e.target.value)}
      />
      <Socials setSocials={setSocials} />
      <h3 className="FoundingMembersFormPage__form__subtitle margin-bottom-XS">Total rewards</h3>
      <input
        className="FoundingMembersFormPage__form__input margin-bottom-M"
        placeholder="Total rewards earned during the term.."
        value={totalRewards}
        onChange={e => setTotalRewards(e.target.value)}
      />
      <h3 className="FoundingMembersFormPage__form__subtitle margin-bottom-XS">Extra information</h3>
      <TextArea
        className="FoundingMembersFormPage__form__text-area margin-bottom-M"
        setValue={setExtraInformation}
      />
      <ArrowButton
        className={cn('FoundingMembersFormPage__form__button', {
          'FoundingMembersFormPage__form__button--inactive': !(bountyID && proposalIDs && socials && totalRewards),
        })}
        text={t('foundingMembers.general.next')}
        onClick={handleSubmit}
      />
    </>
  );
};

export default Bounties;
