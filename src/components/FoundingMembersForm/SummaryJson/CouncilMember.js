import React, { useState, useEffect, useRef } from 'react';
import cn from 'classnames';

import Socials from './Socials';
import TextArea from './TextArea';
import { ArrowButton } from '../../../pages/founding-members';

import formatDate from '../../../utils/formatDate';

// this data needs to be fetched from the fm data json
const COUNCIL_TERMS = [
  {
    blockRange: '1693149 − 1793949',
    from: '2021-07-26T09:00:00+02:00',
    to: '2021-08-02T09:00:00+02:00',
    id: 14,
  },
  {
    blockRange: '1592349 − 1693149',
    from: '2021-07-19T09:00:00+02:00',
    to: '2021-07-26T09:00:00+02:00',
    id: 13,
  },
];

const CouncilMember = ({ setJsonData, summaryType, t }) => {
  const [councilTerms, setCouncilTerms] = useState('');
  const [proposalIDs, setProposalIDs] = useState('');
  const [socials, setSocials] = useState();
  const [extraInformation, setExtraInformation] = useState('');

  const handleSubmit = () => {
    if (councilTerms) {
      let council = {
        term: councilTerms,
      };

      if (proposalIDs) {
        council.proposalIDs = proposalIDs;
      }

      if (socials) {
        council.links = socials;
      }

      if (extraInformation) {
        council.other = extraInformation;
      }

      setJsonData(prev => ({ ...prev, council }));
    }
  };

  return (
    <>
      <h3 className="FoundingMembersFormPage__form__subtitle margin-bottom-XS">
        Which council terms were you a part of?
      </h3>
      {/* eslint-disable-next-line */}
      <select
        className="FoundingMembersFormPage__form__select margin-bottom-M"
        value={councilTerms}
        onChange={e => setCouncilTerms(e.target.value)}
      >
        <option hidden disabled value="">
          Select an option..
        </option>
        {COUNCIL_TERMS.map(term => (
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
          'FoundingMembersFormPage__form__button--inactive': !councilTerms,
        })}
        text={t('foundingMembers.general.next')}
        onClick={handleSubmit}
      />
    </>
  );
};

export default CouncilMember;
