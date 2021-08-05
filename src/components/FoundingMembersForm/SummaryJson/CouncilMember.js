import React, { useState, useEffect, useRef } from 'react';
import cn from 'classnames';

import Socials from './Socials';
import TextArea from './TextArea';
import { ArrowButton } from '../../../pages/founding-members';

import formatDate from '../../../utils/formatDate';

const CouncilMember = ({ jsonData, setJsonData, summaryType, councilTermsInPeriod, t }) => {
  const [councilTerm, setCouncilTerm] = useState('');
  const [proposalIDs, setProposalIDs] = useState('');
  const [socials, setSocials] = useState();
  const [extraInformation, setExtraInformation] = useState('');

  const handleSubmit = () => {
    if (councilTerm) {
      let council = {};

      if (proposalIDs) {
        council.proposalIDs = proposalIDs;
      }

      if (socials) {
        council.links = socials;
      }

      if (extraInformation) {
        council.other = extraInformation;
      }

      setJsonData(prev => {
        if (prev?.council) {
          return {
            ...prev,
            council: {
              ...prev.council,
              [councilTerm]: council,
            },
          };
        }

        return {
          ...prev,
          council: {
            [councilTerm]: council,
          },
        };
      });
    }
  };

  return (
    <>
      <h3 className="FoundingMembersFormPage__form__subtitle margin-bottom-XS">
        Which council terms were you a part of? <span style={{ color: "#FF3861FF" }}>*</span>
      </h3>
      {/* eslint-disable-next-line */}
      <select
        className="FoundingMembersFormPage__form__select margin-bottom-M"
        value={councilTerm}
        onChange={e => setCouncilTerm(e.target.value)}
      >
        <option hidden disabled value="">
          Select an option..
        </option>
        {councilTermsInPeriod?.map(term => (
          <option key={term.id} value={term.id}>
            {formatDate(term.from)} - {formatDate(term.to)} ({term.blockRange})
          </option>
        ))}
      </select>
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
        className={cn('FoundingMembersFormPage__form__button', {
          'FoundingMembersFormPage__form__button--inactive': !councilTerm,
        })}
        text={t('foundingMembers.general.next')}
        onClick={handleSubmit}
      />
    </>
  );
};

export default CouncilMember;
