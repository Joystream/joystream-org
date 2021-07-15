import React, { useState, useEffect } from 'react';

const Socials = ({ setSocials }) => {
  const [forumContact, setForumContact] = useState('');
  const [githubContact, setGithubContact] = useState('');
  const [discordContact, setDiscordContact] = useState('');

  useEffect(() => {
    const socials = [];

    if(forumContact) {
      socials.push({ forumContact });
    }

    if(githubContact) {
      socials.push({ githubContact });
    }

    if(discordContact) {
      socials.push({ discordContact });
    }

    setSocials(socials.length === 0 ? null : socials);
  },[forumContact, githubContact, discordContact]);

  return (
    <>
      <h3 className="FoundingMembersFormPage__form__subtitle margin-bottom-XS">Forum contact information</h3>
      <input
        className="FoundingMembersFormPage__form__input margin-bottom-M"
        placeholder="Forum contact.."
        value={forumContact}
        onChange={e => {
          if(e.target.value === ''){
            setGithubContact('');
            setDiscordContact('');
          }
          setForumContact(e.target.value)
        }}
      />
      {forumContact && (
        <>
          <h3 className="FoundingMembersFormPage__form__subtitle margin-bottom-XS">GitHub contact information</h3>
          <input
            className="FoundingMembersFormPage__form__input margin-bottom-M"
            placeholder="GitHub contact.."
            value={githubContact}
            onChange={e => {
              if(e.target.value === ''){
                setDiscordContact('');
              }
              setGithubContact(e.target.value)
            }}
          />
        </>
      )}
      {githubContact && (
        <>
          <h3 className="FoundingMembersFormPage__form__subtitle margin-bottom-XS">Discord contact information</h3>
          <input
            className="FoundingMembersFormPage__form__input margin-bottom-M"
            placeholder="Discord contact.."
            value={discordContact}
            onChange={e => setDiscordContact(e.target.value)}
          />
        </>
      )}
    </>
  );
};

export default Socials;
