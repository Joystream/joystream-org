import React, { useState, useEffect } from 'react';

const Socials = ({ setSocials, required }) => {
  const [contacts, setContacts] = useState('');

  useEffect(() => {
    setSocials(contacts ? contacts : null);
  }, [contacts]);

  return (
    <>
      <h3 className="FoundingMembersFormPage__form__subtitle margin-bottom-XS">
        Provide relevant links from the forum, github or discord{' '}
        {required && <span style={{ color: '#FF3861FF' }}>*</span>}
      </h3>
      <input
        className="FoundingMembersFormPage__form__input margin-bottom-M"
        value={contacts}
        onChange={e => {
          setContacts(e.target.value);
        }}
      />
    </>
  );
};

export default Socials;
