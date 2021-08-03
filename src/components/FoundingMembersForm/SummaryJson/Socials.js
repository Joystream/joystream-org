import React, { useState, useEffect } from 'react';

const Socials = ({ setSocials }) => {
  const [contacts, setContacts] = useState('');

  useEffect(() => {
    setSocials(contacts ? contacts : null);
  }, [contacts]);

  return (
    <>
      <h3 className="FoundingMembersFormPage__form__subtitle margin-bottom-XS">
        Optionally, provide relevant links from the forum, github or discord
      </h3>
      <input
        className="FoundingMembersFormPage__form__input margin-bottom-M"
        placeholder="Contact information.."
        value={contacts}
        onChange={e => {
          setContacts(e.target.value);
        }}
      />
    </>
  );
};

export default Socials;
