import React, { useState, useEffect } from 'react';
import cn from 'classnames';

import Button from '../../Button';
import { ArrowButton } from '../../../pages/founding-members';

import verifySignature from '../utils/verifySignature';

const KeyQuery = ({ setIsStashAndControllerSame }) => {
  return (
    <>
      <h3 className="FoundingMembersFormPage__form__subtitle margin-bottom-M">
        Are your stash and controller key the same?
      </h3>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <Button style={{ marginRight: '5px', width: '100%' }} onClick={() => setIsStashAndControllerSame(true)}>
          Yes
        </Button>
        <Button style={{ marginLeft: '5px', width: '100%' }} onClick={() => setIsStashAndControllerSame(false)}>
          No
        </Button>
      </div>
    </>
  );
};

const StashKeyQuery = ({ profileAddress, setStashAddress, t }) => {
  const [newStashAddress, setNewStashAddress] = useState('');
  const [signedMessage, setSignedMessage] = useState('');

  return (
    <>
      <h3 className="FoundingMembersFormPage__form__subtitle margin-bottom-XS">Stash address:</h3>
      <input
        maxLength={75}
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
          <h3 className="FoundingMembersFormPage__form__subtitle margin-bottom-XS">Signed message </h3>
          <input
            className="FoundingMembersFormPage__form__input margin-bottom-XS"
            placeholder="The signed message.."
            value={signedMessage}
            onChange={e => setSignedMessage(e.target.value)}
          />
          <ArrowButton
            className={cn('FoundingMembersFormPage__form__button', {
              'FoundingMembersFormPage__form__button--inactive': !signedMessage,
            })}
            text={t('foundingMembers.general.next')}
            onClick={e => {
              if (signedMessage) {
                let isSignatureValid;

                try {
                  isSignatureValid = verifySignature(profileAddress, newStashAddress, signedMessage);
                } catch (err) {
                  console.log(err);
                }

                if (isSignatureValid) {
                  setStashAddress(newStashAddress);
                }
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
