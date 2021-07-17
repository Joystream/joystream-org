import React, { useState } from 'react';
import cn from 'classnames';

import Socials from './Socials';
import TextArea from './TextArea';
import { ArrowButton } from '../../../pages/founding-members';

const ROLES = ['Storage', 'Curator', 'Operations'];

const Roles = ({ setJsonData, setupData, t }) => {
  const [pickedRole, setPickedRole] = useState("");
  const [workerID, setWorkerID] = useState("");
  const [startBlock, setStartBlock] = useState("");
  const [endBlock, setEndBlock] = useState("");
  const [isLead, setIsLead] = useState(false);
  const [proposalIDs, setProposalIDs] = useState("");
  const [socials, setSocials] = useState();
  const [extraInformation, setExtraInformation] = useState("");

  const handleSubmit = () => {
    let roles = {
      role: pickedRole,
      workerID,
      startBlock,
      endBlock,
      lead: isLead
    };

    if(socials) {
      roles.links = socials;
    }

    if(extraInformation) {
      roles.other = extraInformation;
    }

    if (pickedRole && workerID && startBlock && endBlock) {
      setJsonData(prev => [...prev, { ...setupData, roles }])
    }
  };

  return (
    <>
      <h3 className="FoundingMembersFormPage__form__subtitle margin-bottom-XS">
        Working Group
      </h3>
      {/* eslint-disable-next-line */}
      <select
        value={pickedRole}
        onChange={e => {
          setPickedRole(e.target.value);
        }}
        className="FoundingMembersFormPage__form__select margin-bottom-M"
      >
        <option hidden disabled value="">
          Select an option..
        </option>
        {ROLES.map(role => (
          <option key={role} value={role}>
            {role}
          </option>
        ))}
      </select>
      <h3 className="FoundingMembersFormPage__form__subtitle margin-bottom-XS">Worker ID</h3>
      <input
        className="FoundingMembersFormPage__form__input margin-bottom-M"
        placeholder="Worker ID.."
        value={workerID}
        onChange={e => setWorkerID(e.target.value)}
      />
      <h3 className="FoundingMembersFormPage__form__subtitle margin-bottom-XS">Start block</h3>
      <input
        className="FoundingMembersFormPage__form__input margin-bottom-M"
        placeholder="Start block.."
        value={startBlock}
        onChange={e => setStartBlock(e.target.value)}
      />
      <h3 className="FoundingMembersFormPage__form__subtitle margin-bottom-XS">End block</h3>
      <input
        className="FoundingMembersFormPage__form__input margin-bottom-M"
        placeholder="End block.."
        value={endBlock}
        onChange={e => setEndBlock(e.target.value)}
      />
      <h3 className="FoundingMembersFormPage__form__subtitle margin-bottom-XS">Lead?</h3>
      <input className="margin-bottom-M" type="checkbox" defaultChecked={isLead} onChange={e => setIsLead(!isLead)} />
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
          'FoundingMembersFormPage__form__button--inactive': !(pickedRole && workerID && startBlock && endBlock),
        })}
        text={t('foundingMembers.general.next')}
        onClick={handleSubmit}
      />
    </>
  );
};

export default Roles;
