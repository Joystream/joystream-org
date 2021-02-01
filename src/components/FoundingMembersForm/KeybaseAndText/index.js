import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { ReactComponent as CloseIcon } from '../../../assets/svg/postponed.svg';
import { ReactComponent as Upload } from '../../../assets/svg/upload.svg';
import { ReactComponent as Achieved } from '../../../assets/svg/achieved.svg';
import cn from 'classnames';
import { ArrowButton } from '../../../pages/founding-members';
import { Keyring } from '@polkadot/keyring';

const KeybaseAndText = ({
  width,
  textFileInput,
  handleFileSelection,
  textFile,
  fileStatus,
  fileLoadedAmount,
  setTextFile,
  setFileStatus,
  setKeybaseHandle,
  setCurrentProgress,
  password,
  setPassword,
  jsonFile,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [textInput, setTextInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [isFileHovering, setIsFileHovering] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState();
  const [isPasswordLoading, setIsPasswordLoading] = useState(false);

  const handlePassword = () => {
    const keyring = new Keyring({ type: 'sr25519' });
    const parsedJson = JSON.parse(jsonFile.data);
    keyring.addFromJson(parsedJson);

    const user = keyring.getPair(parsedJson.address);

    try {
      user.decodePkcs8(passwordInput);
    } catch (e) {
      setIsPasswordLoading(false);
      setIsPasswordValid(false);
      setPasswordError(!passwordInput ? 'Please enter your password!' : 'Password is incorrect, please try again!');
      return;
    }
    setIsPasswordLoading(false);
    setPasswordError('');
    setIsPasswordValid(true);
    setPassword(passwordInput);
    setCurrentProgress(4);
  };

  useEffect(() => {
    if (isPasswordLoading) {
      handlePassword();
    }
  }, [isPasswordLoading]);

  return (
    <>
      <h3 className="FoundingMembersFormPage__form__subtitle FoundingMembersFormPage__form__input-title-mobile  margin-bottom-XS">
        Keybase handle
      </h3>
      <input
        value={textInput}
        onChange={e => setTextInput(e.target.value)}
        placeholder="e.g. joedoe"
        className="FoundingMembersFormPage__form__input margin-bottom-M"
      />
      <div className="flex-row margin-bottom-XS">
        <h3 className="FoundingMembersFormPage__form__subtitle">Document with the summary</h3>
        {width > 450 ? (
          <button className="FoundingMembersFormPage__form__link" onClick={() => setIsModalOpen(true)}>
            How should I prepare it?
          </button>
        ) : null}
        <Modal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          className="FoundingMembersFormPage__form__modal"
          overlayClassName="FoundingMembersFormPage__form__modal__overlay"
        >
          <div className="FoundingMembersFormPage__form__modal__container">
            <p className="margin-bottom-M">How to prepare it:</p>
            <p>
              Your activity summary should describe in as much detail as possible your recent contributions to the
              success of the platform. Try to separate out each contribution into a separate paragraph or bullet point
              for ease of processing.
            </p>
          </div>
        </Modal>
      </div>
      <p className="FoundingMembersFormPage__form__subtitle-small margin-bottom-XS">Accepted file format: .txt</p>
      {width < 450 ? (
        <a className="FoundingMembersFormPage__form__link margin-bottom-S" href="#0">
          How should I do it?
        </a>
      ) : null}
      <input
        ref={textFileInput}
        onChange={e => handleFileSelection(e, 'text')}
        type="file"
        name="file"
        id="file"
        className="FoundingMembersFormPage__form__hidden-input"
      />
      {!textFile.name ? (
        <div
          onDragEnter={() => setIsFileHovering(true)}
          onDragLeave={() => setIsFileHovering(false)}
          className={cn('FoundingMembersFormPage__form__filedrop', {
            'FoundingMembersFormPage__form__filedrop--active': isFileHovering,
            'margin-bottom-M': isPasswordValid === false,
          })}
        >
          {!fileStatus.loading && !fileStatus.loaded && (
            <label htmlFor="file" className="FoundingMembersFormPage__form__filedrop__label">
              <p className="FoundingMembersFormPage__form__filedrop__text">
                Drop you file here or <span className="FoundingMembersFormPage__form__link">browse files</span>
              </p>{' '}
              <div className="FoundingMembersFormPage__form__filedrop--mobile">
                <p className="FoundingMembersFormPage__form__filedrop__text">Upload file</p>
                <Upload className="FoundingMembersFormPage__form__filedrop__upload-icon" />
              </div>
            </label>
          )}
          {fileStatus.loading && (
            <div className="FoundingMembersFormPage__form__loader">
              <div
                style={{ width: `${fileLoadedAmount * 100}%` }}
                className="FoundingMembersFormPage__form__loaded"
              ></div>
            </div>
          )}
        </div>
      ) : (
        <div
          className={cn('FoundingMembersFormPage__form__confirmation', {
            'margin-bottom-M': isPasswordValid === false,
          })}
        >
          <p className="FoundingMembersFormPage__form__filedrop__text">
            {textFile.name.substring(0, 20)}
            {textFile.name.length > 20 && '...'}
          </p>
          {fileStatus.error ? (
            <CloseIcon className="FoundingMembersFormPage__form__confirmation__error" />
          ) : (
            <Achieved className="FoundingMembersFormPage__form__confirmation__tick" />
          )}
          <CloseIcon
            onClick={() => {
              setTextFile({ name: '', data: '' });
              setFileStatus({ loading: false, loaded: false, error: false });
              if (textFileInput) {
                textFileInput.current.value = '';
              }
            }}
            className="FoundingMembersFormPage__form__confirmation__close"
          />
        </div>
      )}
      {fileStatus.error && (
        <p className="FoundingMembersFormPage__form__error-message">
          Wrong file format! Please try again or check our tips <a href="#0">how to export it</a>
        </p>
      )}
      {isPasswordValid === false && (
        <>
          <h3 className="FoundingMembersFormPage__form__subtitle margin-bottom-XS">Password</h3>
          <input
            type="password"
            className="FoundingMembersFormPage__form__input"
            onChange={e => setPasswordInput(e.target.value)}
            value={passwordInput}
          />
          {passwordError && <p className="FoundingMembersFormPage__form__error-message">{passwordError}</p>}
        </>
      )}
      <ArrowButton
        className={cn('FoundingMembersFormPage__form__button', {
          'FoundingMembersFormPage__form__button--inactive': !textInput || !textFile.data || isPasswordLoading,
        })}
        text="Next"
        onClick={e => {
          if (textFile.data && textInput && !isPasswordLoading) {
            setIsPasswordLoading(true);
            setKeybaseHandle(textInput);
          }
        }}
      />
    </>
  );
};

export default KeybaseAndText;
