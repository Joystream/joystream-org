import React, { useState, useEffect } from 'react';

import Button from '../../Button';
import { ArrowButton } from '../../../pages/founding-members';

import verifySignature from '../utils/verifySignature';

const KeyQuery = ({ setIsStashAndControllerSame }) => {
  return (
    <>
      <h3 className="FoundingMembersFormPage__form__subtitle margin-bottom-XS">
        Are your stash and controller key the same?
      </h3>
      <Button className="margin-bottom-S" onClick={() => setIsStashAndControllerSame(true)}>
        Yes
      </Button>
      <Button onClick={() => setIsStashAndControllerSame(false)}>No</Button>
    </>
  );
};

const StashKeyQuery = ({ profileAddress, setStashAddress, t }) => {
  const [newStashAddress, setNewStashAddress] = useState('');
  const [signedMessage, setSignedMessage] = useState('');

  return (
    <>
      <h3 className="FoundingMembersFormPage__form__subtitle FoundingMembersFormPage__form__input-title-mobile margin-bottom-XS">
        Stash address:
      </h3>
      <input
        className="FoundingMembersFormPage__form__input margin-bottom-M"
        placeholder="Your stash address.."
        value={newStashAddress}
        onChange={e => setNewStashAddress(e.target.value)}
      />
      {newStashAddress && (
        <>
          <h3 className="FoundingMembersFormPage__form__subtitle margin-bottom-XS">Copy this message and sign it: </h3>
          <code className="FoundingMembersFormPage__form__code-text margin-bottom-M">
            Member {profileAddress} owns {newStashAddress}
          </code>
          <h3 className="FoundingMembersFormPage__form__subtitle margin-bottom-XS">Paste the signed message here: </h3>
          <input
            className="FoundingMembersFormPage__form__input margin-bottom-XS"
            placeholder="The signed message.."
            value={signedMessage}
            onChange={e => setSignedMessage(e.target.value)}
          />
          <ArrowButton
            className="FoundingMembersFormPage__form__button"
            text={t('foundingMembers.general.next')}
            onClick={e => {
              if (signedMessage && verifySignature(profileAddress, newStashAddress, signedMessage)) {
                console.log('happened');
                setStashAddress(newStashAddress);
              }
            }}
          />
        </>
      )}
    </>
  );
};

const Validator = ({ setJsonData, setupData, profileAddress, t }) => {
  const [isStashAndControllerSame, setIsStashAndControllerSame] = useState();
  const [stashAddress, setStashAddress] = useState();

  // This can be moved inside of the components and buttons
  useEffect(() => {
    if (stashAddress) {
      setJsonData(prev => [...prev, { ...setupData, validator: { stashAddress } }]);
    }

    if (isStashAndControllerSame) {
      setJsonData(prev => [...prev, { ...setupData, validator: { stashAddress: profileAddress } }]);
    }
  }, [isStashAndControllerSame, profileAddress, setJsonData, setupData, stashAddress]);

  if (isStashAndControllerSame === false) {
    return <StashKeyQuery profileAddress={profileAddress} setStashAddress={setStashAddress} t={t} />;
  }

  return <KeyQuery setIsStashAndControllerSame={setIsStashAndControllerSame} />;
};

export default Validator;
