import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { ReactComponent as CloseIcon } from '../../../assets/svg/postponed.svg';
import { ReactComponent as Upload } from '../../../assets/svg/upload.svg';
import { ReactComponent as Achieved } from '../../../assets/svg/achieved.svg';
import cn from 'classnames';
import { Trans } from 'gatsby-plugin-react-i18next';
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
  t,
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
      setPasswordError(
        !passwordInput
          ? t('foundingMembers.form.keybaseAndText.pleaseEnterPassword')
          : t('foundingMembers.form.error.incorrectPassword')
      );
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
        {t('foundingMembers.form.keybaseAndText.keybaseHandle')}
      </h3>
      <input
        value={textInput}
        onChange={e => setTextInput(e.target.value)}
        placeholder={t('foundingMembers.general.inputPlaceholder')}
        className="FoundingMembersFormPage__form__input margin-bottom-M"
      />
      <div className="flex-row margin-bottom-XS">
        <h3 className="FoundingMembersFormPage__form__subtitle">
          {t('foundingMembers.form.keybaseAndText.documentWithSummary')}
        </h3>
        {width > 450 ? (
          <button className="FoundingMembersFormPage__form__link" onClick={() => setIsModalOpen(true)}>
            {t('foundingMembers.form.keybaseAndText.howToPrepare.link')}
          </button>
        ) : null}
        <Modal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          className="FoundingMembersFormPage__form__modal"
          overlayClassName="FoundingMembersFormPage__form__modal__overlay"
        >
          <div className="FoundingMembersFormPage__form__modal__container">
            <p className="margin-bottom-M">{t('foundingMembers.form.keybaseAndText.howToPrepare.title')}</p>
            <p>{t('foundingMembers.form.keybaseAndText.howToPrepare.text')}</p>
          </div>
        </Modal>
      </div>
      <p className="FoundingMembersFormPage__form__subtitle-small margin-bottom-XS">
        {t('foundingMembers.form.keybaseAndText.fileFormat')}
      </p>
      {width < 450 ? (
        <a className="FoundingMembersFormPage__form__link margin-bottom-S" href="#0">
          {t('foundingMembers.form.keybaseAndText.howToPrepare.alternateLink')}
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
          onDragOver={e => {
            e.preventDefault();
          }}
          onDrop={e => {
            e.preventDefault();
            handleFileSelection(e, 'text');
            setIsFileHovering(false);
          }}
          className={cn('FoundingMembersFormPage__form__filedrop', {
            'FoundingMembersFormPage__form__filedrop--active': isFileHovering,
            'margin-bottom-M': isPasswordValid === false,
          })}
        >
          {!fileStatus.loading && !fileStatus.loaded && (
            <label
              onDragEnter={() => setIsFileHovering(true)}
              onDragLeave={() => setIsFileHovering(false)}
              htmlFor="file"
              className="FoundingMembersFormPage__form__filedrop__label"
            >
              <p className="FoundingMembersFormPage__form__filedrop__text">
                <Trans
                  i18nKey="foundingMembers.form.dropFile"
                  components={[<span className="FoundingMembersFormPage__form__link" />]}
                />
              </p>
              <div className="FoundingMembersFormPage__form__filedrop--mobile">
                <p className="FoundingMembersFormPage__form__filedrop__text">{t('foundingMembers.form.uploadFile')}</p>
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
      {fileStatus.error && <p className="FoundingMembersFormPage__form__error-message">{fileStatus.errorMessage}</p>}
      {isPasswordValid === false && (
        <>
          <h3 className="FoundingMembersFormPage__form__subtitle margin-bottom-XS">
            {t('foundingMembers.form.keybaseAndText.password')}
          </h3>
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
        text={t('foundingMembers.general.next')}
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
