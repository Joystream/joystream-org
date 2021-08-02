import React, { useState } from 'react';
import cn from 'classnames';

import Socials from './Socials';
import { ArrowButton } from '../../../pages/founding-members';

const Content = ({ setJsonData, summaryType, t }) => {
  const [bountyID, setBountyID] = useState("");
  const [proposalIDs, setProposalIDs] = useState("");
  const [socials, setSocials] = useState();
  const [videoLinks, setVideoLinks] = useState("");
  const [totalRewards, setTotalRewards] = useState("");

  const handleSubmit = () => {
    if (bountyID && proposalIDs && videoLinks && totalRewards) {
      let contentBounties = {
        bountyID,
        proposalIDs,
        videoIDs: videoLinks,
        totalRewards
      };

      if(socials) {
        contentBounties.links = socials;
      }

      setJsonData(prev => [...prev, { summaryType, contentBounties }]);
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
      <h3 className="FoundingMembersFormPage__form__subtitle margin-bottom-XS">Video links</h3>
      <input
        className="FoundingMembersFormPage__form__input margin-bottom-M"
        placeholder="Links to qualifying videos.."
        value={videoLinks}
        onChange={e => setVideoLinks(e.target.value)}
      />
      <h3 className="FoundingMembersFormPage__form__subtitle margin-bottom-XS">Total rewards</h3>
      <input
        className="FoundingMembersFormPage__form__input margin-bottom-M"
        placeholder="Total rewards earned during the term.."
        value={totalRewards}
        onChange={e => setTotalRewards(e.target.value)}
      />
      <ArrowButton
        className={cn('FoundingMembersFormPage__form__button', {
          'FoundingMembersFormPage__form__button--inactive': !(bountyID && proposalIDs && videoLinks && totalRewards),
        })}
        text={t('foundingMembers.general.next')}
        onClick={handleSubmit}
      />
    </>
  );
};

export default Content;
