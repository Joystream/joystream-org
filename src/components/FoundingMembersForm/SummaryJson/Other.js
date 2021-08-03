import React, { useState } from 'react';
import cn from 'classnames';

import Socials from './Socials';
import TextArea from './TextArea';
import { ArrowButton } from '../../../pages/founding-members';

const Other = ({ setJsonData, summaryType, t }) => {
  const [action, setAction] = useState('');
  const [socials, setSocials] = useState('');

  const handleSubmit = () => {
    if (action && socials) {
      setJsonData(prev => ({
        ...prev,
        other: {
          action,
          socials,
        },
      }));
    }
  };

  return (
    <>
      <h3 className="FoundingMembersFormPage__form__subtitle margin-bottom-XS">Explain in short what you did</h3>
      <TextArea className="FoundingMembersFormPage__form__text-area margin-bottom-M" setValue={setAction} />
      <Socials setSocials={setSocials} />
      <ArrowButton
        className={cn('FoundingMembersFormPage__form__button', {
          'FoundingMembersFormPage__form__button--inactive': !(action && socials),
        })}
        text={t('foundingMembers.general.next')}
        onClick={handleSubmit}
      />
    </>
  );
};

export default Other;
