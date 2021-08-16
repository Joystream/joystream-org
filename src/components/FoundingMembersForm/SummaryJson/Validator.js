import React, { useState, useEffect } from 'react';
import cn from 'classnames';
import Modal from 'react-modal';

import Button from '../../Button';
import { ArrowButton } from '../../../pages/founding-members';

import verifySignature from '../utils/verifySignature';

const KeyQuery = ({ setIsStashAndControllerSame }) => {
  return (
    <>
      <h3 className="FoundingMembersFormPage__form__subtitle margin-bottom-M">
        Is your Validator stash key the same as your membership controller?
      </h3>
      <div style={{ display: 'flex', flexDirection: 'row' }} className="margin-bottom-S">
        <Button style={{ marginRight: '5px', width: '100%' }} onClick={() => setIsStashAndControllerSame(true)}>
          Yes
        </Button>
        <Button style={{ marginLeft: '5px', width: '100%' }} onClick={() => setIsStashAndControllerSame(false)}>
          No
        </Button>
      </div>
      <h3 className="FoundingMembersFormPage__form__subtitle-small" style={{ color: '#7b8a95' }}>
        * Adding more data will cause current data to be overridden.
      </h3>
    </>
  );
};

const StashKeyQuery = ({ profileAddress, setStashData, t }) => {
  const [newStashAddress, setNewStashAddress] = useState('');
  const [signedMessage, setSignedMessage] = useState('');
  const [signatureError, setSignatureError] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <h3 className="FoundingMembersFormPage__form__subtitle margin-bottom-XS">
        Stash address <span style={{ color: '#FF3861FF' }}>*</span>
      </h3>
      <input
        maxLength={48}
        className="FoundingMembersFormPage__form__input margin-bottom-M"
        placeholder="Your stash address.."
        value={newStashAddress}
        onChange={e => setNewStashAddress(e.target.value)}
      />
      {newStashAddress && (
        <>
          <h3 className="FoundingMembersFormPage__form__subtitle margin-bottom-XS">Copy this message and sign it</h3>
          <code className="FoundingMembersFormPage__form__code-text margin-bottom-M">
            Member {profileAddress} owns {newStashAddress}
          </code>
          <h3 className="FoundingMembersFormPage__form__subtitle margin-bottom-XS">
            Signed message <span style={{ color: '#FF3861FF' }}>*</span>
          </h3>
          <input
            className={cn('FoundingMembersFormPage__form__input', {
              'margin-bottom-M': !signatureError,
            })}
            placeholder="The signed message.."
            value={signedMessage}
            onChange={e => setSignedMessage(e.target.value)}
          />
          {signatureError && (
            <p
              className={cn('FoundingMembersFormPage__form__error-message', {
                'margin-bottom-M': true,
              })}
            >
              {signatureError}
            </p>
          )}
          <button
            style={{ textAlign: 'left' }}
            className="FoundingMembersFormPage__form__link"
            onClick={() => setIsModalOpen(true)}
          >
            How to sign the message?
          </button>
          <Modal
            isOpen={isModalOpen}
            onRequestClose={() => setIsModalOpen(false)}
            className="FoundingMembersFormPage__form__modal"
            overlayClassName="FoundingMembersFormPage__form__modal__overlay"
          >
            <div className="FoundingMembersFormPage__form__modal__container">
              <p className="margin-bottom-M">
                Follow <a href="https://testnet.joystream.org/#/toolbox/sign">this link</a> to go to the signature
                functionality found in the official testnet toolbox.{' '}
              </p>
              <p>
                Upon arrival swap to the validator stash account <strong>(very important!)</strong> and copy the message
                from above into the empty input field. Click 'Sign Message' and copy the signature into the 'Signed
                Message' field.
              </p>
            </div>
          </Modal>
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
                  setStashData({
                    stash: newStashAddress,
                    signed: `Member ${profileAddress} owns ${newStashAddress}`,
                    signature: signedMessage,
                  });
                } else {
                  setSignatureError("Incorrect signature. Make sure you've followed the steps correctly!");
                }
              }
            }}
          />
        </>
      )}
    </>
  );
};

const Validator = ({ setJsonData, summaryType, profileAddress, t }) => {
  const [isStashAndControllerSame, setIsStashAndControllerSame] = useState();
  const [stashData, setStashData] = useState();

  // This can be moved inside of the components and buttons
  useEffect(() => {
    if (stashData) {
      setJsonData(prev => ({ ...prev, validator: stashData }));
    }

    if (isStashAndControllerSame) {
      setJsonData(prev => ({ ...prev, validator: { stash: profileAddress } }));
    }
  }, [isStashAndControllerSame, profileAddress, setJsonData, summaryType, stashData]);

  if (isStashAndControllerSame === false) {
    return <StashKeyQuery profileAddress={profileAddress} setStashData={setStashData} t={t} />;
  }

  return <KeyQuery setIsStashAndControllerSame={setIsStashAndControllerSame} />;
};

export default Validator;
