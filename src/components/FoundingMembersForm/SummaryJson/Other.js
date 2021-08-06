import React, { useState } from 'react';
import cn from 'classnames';

import Socials from './Socials';
import TextArea from './TextArea';
import { ArrowButton } from '../../../pages/founding-members';

const Other = ({ jsonData, setJsonData, summaryType, t }) => {
  const [action, setAction] = useState('');
  const [socials, setSocials] = useState('');

  const handleSubmit = () => {
    if (action && socials) {
      setJsonData(prev => ({
        ...prev,
        other: [
          ...(prev?.other ? prev.other : []),
          {
            action,
            links: socials,
          },
        ],
      }));
    }
  };

  return (
    <>
      <h3 className="FoundingMembersFormPage__form__subtitle margin-bottom-XS">
        Explain in short what you did <span style={{ color: '#FF3861FF' }}>*</span>
      </h3>
      <TextArea className="FoundingMembersFormPage__form__text-area margin-bottom-M" setValue={setAction} />
      <Socials setSocials={setSocials} required />
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
