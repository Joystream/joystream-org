import React, { useState } from 'react';
import Modal from 'react-modal';
import cn from 'classnames';
import { ReactComponent as CloseIcon } from '../../../assets/svg/postponed.svg';
import { ReactComponent as Upload } from '../../../assets/svg/upload.svg';
import { ReactComponent as Achieved } from '../../../assets/svg/achieved.svg';
import { ArrowButton } from '../../../pages/founding-members';

Modal.setAppElement('body');

const Json = ({
  jsonFileInput,
  handleFileSelection,
  jsonFile,
  fileStatus,
  setJsonFile,
  setFileStatus,
  setCurrentProgress,
  setFileLoadedAmount,
  fileLoadedAmount,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFileHovering, setIsFileHovering] = useState(false);

  return (
    <>
      <div className="flex-row margin-bottom-XS">
        <h3 className="FoundingMembersFormPage__form__subtitle">Exported account with key</h3>
        <button className="FoundingMembersFormPage__form__link" onClick={() => setIsModalOpen(true)}>
          How to export your key?
        </button>
        <Modal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          className="FoundingMembersFormPage__form__modal"
          overlayClassName="FoundingMembersFormPage__form__modal__overlay"
        >
          <div className="FoundingMembersFormPage__form__modal__container">
            <p className="margin-bottom-M">How to export your account with key:</p>
            <p>
              In the <a href="https://testnet.joystream.org/" target='_blank'>Pioneer application</a> click the <em>My Keys</em> tab and
              then click the ellipsis (three dots) button on the Key which you would like to use. Then click{' '}
              <em>Create a backup file for this account</em>. Enter your password (if applicable) and the JSON will be
              downloaded.
            </p>
          </div>
        </Modal>
      </div>
      <p className="FoundingMembersFormPage__form__subtitle-small margin-bottom-S">Accepted file format: .json</p>
      <input
        ref={jsonFileInput}
        onChange={e => handleFileSelection(e, 'application/json')}
        type="file"
        name="file"
        id="file"
        className="FoundingMembersFormPage__form__hidden-input"
      />
      {!jsonFile.name ? (
        <div
          onDragEnter={() => setIsFileHovering(true)}
          onDragLeave={() => setIsFileHovering(false)}
          className={cn('FoundingMembersFormPage__form__filedrop', {
            'FoundingMembersFormPage__form__filedrop--active': isFileHovering,
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
        <div className="FoundingMembersFormPage__form__confirmation">
          <p className="FoundingMembersFormPage__form__filedrop__text">
            {jsonFile.name.substring(0, 20)}
            {jsonFile.name.length > 20 && '...'}
          </p>
          {fileStatus.error ? (
            <CloseIcon className="FoundingMembersFormPage__form__confirmation__error" />
          ) : (
            <Achieved className="FoundingMembersFormPage__form__confirmation__tick" />
          )}
          <CloseIcon
            onClick={() => {
              setJsonFile({ name: '', data: '' });
              setFileStatus({ loading: false, loaded: false, error: false });
              if (jsonFileInput) {
                jsonFileInput.current.value = '';
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
      <ArrowButton
        className={cn('FoundingMembersFormPage__form__button', {
          'FoundingMembersFormPage__form__button--inactive': !jsonFile.data,
        })}
        text="Next"
        onClick={e => {
          if (jsonFile.data) {
            setCurrentProgress(3);
            setFileStatus({ loading: false, loaded: false, error: false });
            setFileLoadedAmount(0);
          }
        }}
      />
    </>
  );
};

export default Json;
