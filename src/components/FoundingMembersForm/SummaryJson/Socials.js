import React, { useState, useEffect } from 'react';

const Socials = ({ setSocials, required }) => {
  const [contacts, setContacts] = useState('');

  useEffect(() => {
    setSocials(contacts ? contacts : null);
  }, [contacts]);

  const renderMessage = () => {
    if (required) {
      return <> Provide relevant links from the forum, github or discord <span style={{ color: "#FF3861FF" }}>*</span> </>
    }

    return <>Optionally, provide relevant links from the forum, github or discord</>;
  }

  return (
    <>
      <h3 className="FoundingMembersFormPage__form__subtitle margin-bottom-XS">
        {renderMessage()}
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
