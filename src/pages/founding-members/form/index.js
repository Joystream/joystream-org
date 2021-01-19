import React, { useEffect, useState, useRef } from 'react';
import BaseLayout from '../../../components/_layouts/Base';
import { ReactComponent as Arrow } from '../../../assets/svg/arrow-down-small.svg';
import cn from 'classnames';
import { ArrowButton } from '../index';
import { ReactComponent as Achieved } from '../../../assets/svg/achieved.svg';
import { ReactComponent as CloseIcon } from '../../../assets/svg/postponed.svg';
import { ReactComponent as Upload } from '../../../assets/svg/upload.svg';
import { ScoringPeriodCounter } from '../components/ScoringPeriod';
import useWindowDimensions from '../../../utils/useWindowDimensions';

import './style.scss';

const FoundingMembersForm = () => {
  const termsAndConditions = useRef();
  const jsonFileInput = useRef();
  const textFileInput = useRef();

  const [currentProgress, setCurrentProgress] = useState(1);
  const [textInput, setTextInput] = useState('');
  const [fileStatus, setFileStatus] = useState({
    loading: false,
    loaded: false,
    error: false,
  });
  const [fileLoadedAmount, setFileLoadedAmount] = useState(0);
  const [isFileHovering, setIsFileHovering] = useState(false);
  // form related data
  const [membershipHandle, setMembershipHandle] = useState('');
  const [jsonFile, setJsonFile] = useState({
    name: '',
    data: '',
  });
  const [textFile, setTextFile] = useState({
    name: '',
    data: '',
  });

  const renderProgressItem = (text, progressId) => {
    return (
      <div className="FoundingMembersFormPage__form__progress-item">
        <div
          className={cn('FoundingMembersFormPage__form__progress-id', {
            'FoundingMembersFormPage__form__progress-id--active': progressId === currentProgress,
            'FoundingMembersFormPage__form__progress-id--complete': progressId < currentProgress,
          })}
        >
          {progressId}
          {progressId < currentProgress ? (
            <div className="FoundingMembersFormPage__form__progress-tick-wrapper">
              <Achieved className="FoundingMembersFormPage__form__progress-tick" />{' '}
            </div>
          ) : null}
        </div>
        <p className="FoundingMembersFormPage__form__progress-item__text">{text}</p>
      </div>
    );
  };

  const handleFileSelection = (event, type) => {
    const file = event.target.files[0];

    const isJson = file?.type === 'application/json' && type === 'application/json';
    const isText = file?.type === 'text/plain' && type === 'text';

    if (!isJson && !isText) {
      setFileStatus({
        loading: false,
        loaded: false,
        error: true,
      });
      if (type === 'application/json') {
        setJsonFile({
          name: file.name,
          data: '',
        });
      } else {
        setTextFile({
          name: file.name,
          data: '',
        });
      }
      return;
    }

    setFileStatus({
      loading: true,
      loaded: false,
      error: false,
    });

    const fileReader = new FileReader();
    fileReader.readAsText(file, 'UTF-8');

    if (isJson) {
      setJsonFile(prev => ({
        ...prev,
        name: file.name,
      }));
    }

    if (isText) {
      setTextFile(prev => ({
        ...prev,
        name: file.name,
      }));
    }

    fileReader.onprogress = e => {
      if (e.lengthComputable) {
        setFileLoadedAmount(e.loaded / e.total);
      }
    };

    fileReader.onload = e => {
      setFileStatus({
        loading: false,
        loaded: true,
        error: false,
      });

      if (isJson) {
        setJsonFile(prev => ({
          ...prev,
          data: e.target.result,
        }));
      }

      if (isText) {
        setTextFile(prev => ({
          ...prev,
          data: e.target.result,
        }));
      }

      setFileLoadedAmount(1);
    };
  };

  const renderFormBody = () => {
    if (currentProgress === 1) {
      return (
        <>
          <h3 className="FoundingMembersFormPage__form__subtitle FoundingMembersFormPage__form__input-title-mobile  margin-bottom-XS">
            Membership handle
          </h3>
          <input
            className="FoundingMembersFormPage__form__input"
            placeholder="e.g. joedoe"
            value={textInput}
            onChange={e => setTextInput(e.target.value)}
          />
          <ArrowButton
            className={cn('FoundingMembersFormPage__form__button', {
              'FoundingMembersFormPage__form__button--inactive': !textInput,
            })}
            text="Next"
            onClick={e => {
              if (textInput) {
                setTextInput('');
                setMembershipHandle(textInput);
                setCurrentProgress(2);
              }
            }}
          />
        </>
      );
    } else if (currentProgress === 2) {
      return (
        <>
          <div className="flex-row margin-bottom-XS">
            <h3 className="FoundingMembersFormPage__form__subtitle">Exported account with key</h3>
            <a className="FoundingMembersFormPage__form__link" href="#0">
              How should i do it?
            </a>
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
    } else if (currentProgress === 3) {
      return (
        <>
          <h3 className="FoundingMembersFormPage__form__subtitle FoundingMembersFormPage__form__input-title-mobile  margin-bottom-XS">
            Keybase handle
          </h3>
          <input
            value={textInput}
            onChange={e => setTextInput(e.target.value)}
            className="FoundingMembersFormPage__form__input margin-bottom-M"
          />
          <div className="flex-row margin-bottom-XS">
            <h3 className="FoundingMembersFormPage__form__subtitle">Document with the summary</h3>
            {width > 450 ? (
              <a className="FoundingMembersFormPage__form__link" href="#0">
                How should I prepare it?
              </a>
            ) : null}
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
          <ArrowButton
            className={cn('FoundingMembersFormPage__form__button', {
              'FoundingMembersFormPage__form__button--inactive': !textInput || !textFile.data,
            })}
            text="Next"
            onClick={e => {
              if (textFile.data) {
                setCurrentProgress(4);
              }
            }}
          />
        </>
      );
    } else if (currentProgress === 4) {
      return (
        <>
          <h3 className="FoundingMembersFormPage__form__subtitle margin-bottom-XS">
            Read and accept terms and conditions
          </h3>
          <div ref={termsAndConditions} className="FoundingMembersFormPage__form__text-wrapper">
            <p className="margin-bottom-M">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis
              enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco
              est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam
              consequat sunt nostrud amet.
            </p>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis
              enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
          <ArrowButton
            className="FoundingMembersFormPage__form__button"
            text="Next"
            onClick={() => {
              if (termsAndConditions) {
                if (
                  termsAndConditions.current.scrollTop >=
                  termsAndConditions.current.scrollHeight - termsAndConditions.current.offsetHeight
                ) {
                  setCurrentProgress(5);
                }
              }
            }}
          />
        </>
      );
    } else {
      return (
        <div className="FoundingMembersFormPage__form__submitted">
          <Achieved className="FoundingMembersFormPage__form__submitted__tick margin-bottom-L" />
          <h3 className="FoundingMembersFormPage__form__submitted__title margin-bottom-XS">
            Thanks for submitting your summary
          </h3>
          <p className="FoundingMembersFormPage__form__submitted__text">
            Here we should place some short information about next steps in the process.
          </p>
        </div>
      );
    }
  };

  const formerDate = new Date(2020, 11, 1);
  const latterDate = new Date(2021, 2, 20);

  const { width } = useWindowDimensions();

  return (
    <BaseLayout>
      <div className="FoundingMembersFormPage">
        <div className="FoundingMembersFormPage__header">
          <div className="FoundingMembersFormPage__back">
            <a href="/founding-members" className="FoundingMembersFormPage__back__text">
              <Arrow className="FoundingMembersFormPage__back__arrow" />
              <span>Back to Program page</span>
            </a>
          </div>
          <div className="FoundingMembersFormPage__header__title-wrapper">
            <h1 className="FoundingMembersFormPage__header__title">Submit your summary </h1>
            <p className="FoundingMembersFormPage__header__title-date">
              Before: {latterDate.getDate()} {latterDate.toLocaleString('default', { month: 'long' })}
            </p>
          </div>
        </div>

        <div className="FoundingMembersFormPage__body">
          <div className="FoundingMembersFormPage__form">
            {currentProgress < 5 && (
              <div className="FoundingMembersFormPage__form__progress">
                {renderProgressItem('Account info', 1)}
                {renderProgressItem('Key file', 2)}
                {renderProgressItem('Summary', 3)}
                {width > 1200
                  ? renderProgressItem('Accept terms & conditions', 4)
                  : renderProgressItem('Terms & cond.', 4)}
              </div>
            )}
            <div className="FoundingMembersFormPage__form__body">{renderFormBody()}</div>
          </div>

          <div className="FoundingMembersFormPage__counter">
            <div className="FoundingMembersFormPage__counter__header">
              <h2 className="FoundingMembersFormPage__counter__header__title">Current scoring period</h2>
              <h3 className="FoundingMembersFormPage__counter__header__subtitle">
                Current period number <span>#1</span>
              </h3>
            </div>
            <ScoringPeriodCounter
              className="FoundingMembersFormPage__counter__body"
              formerDate={formerDate}
              latterDate={latterDate}
            />
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default FoundingMembersForm;
