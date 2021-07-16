import React, { useState } from 'react';
import cn from 'classnames';

import Socials from './Socials';
import TextArea from './TextArea';
import { ArrowButton } from '../../../pages/founding-members';

const Other = ({ setJsonData, setupData, t }) => {
  const [action, setAction] = useState("");
  const [links, setLinks] = useState("");

  const handleSubmit = () => {
    if (action && links) {
      setJsonData(prev => [...prev, { ... setupData, other : {
        action,
        links
      } }]);
    }
  }

  return (
    <>
      <h3 className="FoundingMembersFormPage__form__subtitle margin-bottom-XS">Action information</h3>
      <TextArea
        className="FoundingMembersFormPage__form__text-area margin-bottom-M"
        setValue={setAction}
      />
      <h3 className="FoundingMembersFormPage__form__subtitle margin-bottom-XS">Relevant links</h3>
      <input
        className="FoundingMembersFormPage__form__input margin-bottom-M"
        placeholder="Links.."
        value={links}
        onChange={e => setLinks(e.target.value)}
      />
      <ArrowButton
        className={cn('FoundingMembersFormPage__form__button', {
          'FoundingMembersFormPage__form__button--inactive': !(action && links),
        })}
        text={t('foundingMembers.general.next')}
        onClick={handleSubmit}
      />
    </>
  )
};

export default Other;