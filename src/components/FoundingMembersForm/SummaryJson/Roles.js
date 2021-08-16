import React, { useState } from 'react';
import cn from 'classnames';

import Socials from './Socials';
import TextArea from './TextArea';
import { ArrowButton } from '../../../pages/founding-members';

const ROLES = ['Storage', 'Curator', 'Operations'];

const Roles = ({ jsonData, setJsonData, summaryType, scoringRoundStarted, scoringRoundEnds, t }) => {
  const [pickedRole, setPickedRole] = useState('');
  const [workerID, setWorkerID] = useState('');
  const [startBlock, setStartBlock] = useState(scoringRoundStarted ?? '');
  const [endBlock, setEndBlock] = useState(scoringRoundEnds ?? '');
  const [isLead, setIsLead] = useState(false);
  const [proposalIDs, setProposalIDs] = useState('');
  const [socials, setSocials] = useState();
  const [extraInformation, setExtraInformation] = useState('');

  const handleSubmit = () => {
    if (pickedRole && workerID && startBlock && endBlock) {
      let role = {
        role: pickedRole,
        workerID,
        startBlock,
        endBlock,
        lead: isLead,
      };

      if (proposalIDs) {
        role.proposalIDs = proposalIDs;
      }

      if (socials) {
        role.links = socials;
      }

      if (extraInformation) {
        role.other = extraInformation;
      }

      let previousRoleData = [];

      if (jsonData?.roles) {
        previousRoleData = jsonData.roles.filter(previousRole => previousRole.role !== pickedRole);
      }

      setJsonData({ ...jsonData, roles: [...previousRoleData, role] });
    }
  };

  return (
    <>
      <h3 className="FoundingMembersFormPage__form__subtitle margin-bottom-XS">
        Working Group <span style={{ color: '#FF3861FF' }}>*</span>
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
      <h3 className="FoundingMembersFormPage__form__subtitle margin-bottom-XS">
        Worker ID <span style={{ color: '#FF3861FF' }}>*</span>
      </h3>
      <input
        className="FoundingMembersFormPage__form__input margin-bottom-M"
        placeholder="Worker ID.."
        value={workerID}
        onChange={e => setWorkerID(e.target.value)}
      />
      <h3 className="FoundingMembersFormPage__form__subtitle margin-bottom-XS">
        Start block <span style={{ color: '#FF3861FF' }}>*</span>
      </h3>
      <input
        className="FoundingMembersFormPage__form__input margin-bottom-M"
        placeholder="Start block.."
        value={startBlock}
        onChange={e => setStartBlock(e.target.value)}
      />
      <h3 className="FoundingMembersFormPage__form__subtitle margin-bottom-XS">
        End block <span style={{ color: '#FF3861FF' }}>*</span>
      </h3>
      <input
        className="FoundingMembersFormPage__form__input margin-bottom-M"
        placeholder="End block.."
        value={endBlock}
        onChange={e => setEndBlock(e.target.value)}
      />
      <h3 className="FoundingMembersFormPage__form__subtitle margin-bottom-XS">Lead?</h3>
      <input className="margin-bottom-M" type="checkbox" defaultChecked={isLead} onChange={e => setIsLead(!isLead)} />
      <h3 className="FoundingMembersFormPage__form__subtitle margin-bottom-XS">
        Comma-separated list of any relevant Proposal IDs
      </h3>
      <input
        className="FoundingMembersFormPage__form__input margin-bottom-M"
        placeholder="Proposal IDs.."
        value={proposalIDs}
        onChange={e => setProposalIDs(e.target.value)}
      />
      <Socials setSocials={setSocials} />
      <h3 className="FoundingMembersFormPage__form__subtitle margin-bottom-XS">Any additional information?</h3>
      <TextArea className="FoundingMembersFormPage__form__text-area margin-bottom-M" setValue={setExtraInformation} />
      <ArrowButton
        className={cn('FoundingMembersFormPage__form__button margin-bottom-S', {
          'FoundingMembersFormPage__form__button--inactive': !(pickedRole && workerID && startBlock && endBlock),
        })}
        text={t('foundingMembers.general.next')}
        onClick={handleSubmit}
      />
      <h3 className="FoundingMembersFormPage__form__subtitle-small" style={{ color: '#7b8a95' }}>
        * Only change the values for start block and end block in case you were hired or fired during the scoring period.
      </h3>
    </>
  );
};

export default Roles;
