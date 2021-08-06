import React, { useState } from 'react';
import cn from 'classnames';

import Socials from './Socials';
import TextArea from './TextArea';
import { ArrowButton } from '../../../pages/founding-members';

const Bounties = ({ jsonData, setJsonData, summaryType, t }) => {
  const [bountyID, setBountyID] = useState('');
  const [proposalIDs, setProposalIDs] = useState('');
  const [socials, setSocials] = useState();
  const [totalRewards, setTotalRewards] = useState('');
  const [extraInformation, setExtraInformation] = useState('');

  const handleSubmit = () => {
    if (bountyID && proposalIDs && socials && totalRewards) {
      let bounty = {
        bountyID,
        proposalIDs,
        links: socials,
        reward: totalRewards,
      };

      if (extraInformation) {
        bounty.other = extraInformation;
      }

      let previousBounties = [];

      if (jsonData?.otherBounties) {
        previousBounties = jsonData.otherBounties.filter(previousBounty => previousBounty.bountyID !== bountyID);
      }

      setJsonData({ ...jsonData, otherBounties: [...previousBounties, bounty] });
    }
  };

  return (
    <>
      <h3 className="FoundingMembersFormPage__form__subtitle margin-bottom-XS">
        Bounty ID <span style={{ color: '#FF3861FF' }}>*</span>
      </h3>
      <input
        className="FoundingMembersFormPage__form__input margin-bottom-M"
        placeholder="Bounty ID.."
        value={bountyID}
        onChange={e => setBountyID(e.target.value)}
      />
      <h3 className="FoundingMembersFormPage__form__subtitle margin-bottom-XS">
        Comma-separated list of the relevant Proposal IDs <span style={{ color: '#FF3861FF' }}>*</span>
      </h3>
      <input
        className="FoundingMembersFormPage__form__input margin-bottom-M"
        placeholder="Proposal IDs.."
        value={proposalIDs}
        onChange={e => setProposalIDs(e.target.value)}
      />
      <Socials setSocials={setSocials} required={true} />
      <h3 className="FoundingMembersFormPage__form__subtitle margin-bottom-XS">
        Total ($) reward for the Bounty <span style={{ color: '#FF3861FF' }}>*</span>
      </h3>
      <input
        className="FoundingMembersFormPage__form__input margin-bottom-M"
        placeholder="Total rewards earned during the term.."
        value={totalRewards}
        onChange={e => setTotalRewards(e.target.value)}
      />
      <h3 className="FoundingMembersFormPage__form__subtitle margin-bottom-XS">Any additional information?</h3>
      <TextArea className="FoundingMembersFormPage__form__text-area margin-bottom-M" setValue={setExtraInformation} />
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
