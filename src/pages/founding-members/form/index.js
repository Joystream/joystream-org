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
import { ApiPromise, WsProvider } from '@polkadot/api';
import { types } from '@joystream/types';
import parseBalance from '../../../utils/parseBalance/index';
import { blake2AsHex } from '@polkadot/util-crypto';
import { Keyring } from '@polkadot/keyring';
import { u8aToHex, hexToU8a } from '@polkadot/util';
import * as openpgp from 'openpgp';

import './style.scss';

const renderProgressItem = (text, progressId, currentProgress) => {
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

const TermsAndConditions = ({ termsRead, setCurrentProgress, setTermsRead }) => {
  const termsAndConditions = useRef();

  useEffect(() => {
    function handleScroll() {
      setTermsRead(
        termsAndConditions.current.scrollTop >=
          termsAndConditions.current.scrollHeight - termsAndConditions.current.offsetHeight
      );
    }

    if (termsAndConditions?.current) {
      handleScroll();
      termsAndConditions.current.addEventListener('scroll', handleScroll);
      return () => termsAndConditions.current.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <>
      <h3 className="FoundingMembersFormPage__form__subtitle margin-bottom-XS">Read and accept terms and conditions</h3>
      <div ref={termsAndConditions} className="FoundingMembersFormPage__form__text-wrapper">
        <p className="margin-bottom-M">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim
          velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit
          aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt
          nostrud amet.
        </p>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim
          velit mollit. Exercitation veniam consequat sunt nostrud amet.
        </p>
      </div>
      <ArrowButton
        className={cn('FoundingMembersFormPage__form__button', {
          'FoundingMembersFormPage__form__button--inactive': !termsRead,
        })}
        text="Next"
        onClick={() => {
          if (termsRead) {
            setCurrentProgress(5);
          }
        }}
      />
    </>
  );
};

async function getMember(api, membershipHandle, setProfile) {
  const id = await api.query.members.memberIdByHandle(membershipHandle);

  if (id.isEmpty) {
    setProfile(null);
    return;
  }

  const membership = await api.query.members.membershipById(id);
  const tokenAmount = await api.query.system.account(membership.root_account);
  setProfile({
    ...membership,
    free: tokenAmount.data.free.toString(),
  });
}

const Membership = ({ profile, textInput, setTextInput, width, setMembershipHandle, setCurrentProgress }) => (
  <>
    <h3 className="FoundingMembersFormPage__form__subtitle FoundingMembersFormPage__form__input-title-mobile  margin-bottom-XS">
      Membership handle
    </h3>
    <input
      className={cn('FoundingMembersFormPage__form__input', {
        'margin-bottom-M': profile,
      })}
      placeholder="e.g. joedoe"
      value={textInput}
      onChange={e => setTextInput(e.target.value)}
    />
    {profile === null && (
      <p className="FoundingMembersFormPage__form__error-message">No such account exists. Try again!</p>
    )}
    {profile && (
      <>
        <p className="FoundingMembersFormPage__form__subtitle-small margin-bottom-XS">Account</p>
        <div className="FoundingMembersFormPage__form__profile">
          {profile.avatar_uri.isEmpty ? (
            <div className="FoundingMembersFormPage__form__profile__picture"></div>
          ) : (
            <img className="FoundingMembersFormPage__form__profile__picture" src={profile.avatar_uri.toString()} alt='founding member avatar'/>
          )}
          <div className="FoundingMembersFormPage__form__profile__data">
            <p className="FoundingMembersFormPage__form__profile__membership">
              {width > 1270 || width < 992
                ? profile.root_account.toString()
                : profile.root_account.toString().substring(0, 25) + '...'}
            </p>
            <p className="FoundingMembersFormPage__form__profile__joy-amount">{parseBalance(profile.free)} JOY</p>
          </div>
        </div>
      </>
    )}
    <ArrowButton
      className={cn('FoundingMembersFormPage__form__button', {
        'FoundingMembersFormPage__form__button--inactive': !textInput,
      })}
      text="Next"
      onClick={e => {
        if (profile?.handle.toString() !== textInput) {
          setMembershipHandle(textInput);
        } else {
          if (profile) {
            setCurrentProgress(2);
            setTextInput('');
          }

          if (textInput) {
            setMembershipHandle(textInput);
          }
        }
      }}
    />
  </>
);

const Json = ({
  jsonFileInput,
  handleFileSelection,
  jsonFile,
  isFileHovering,
  fileStatus,
  setJsonFile,
  setFileStatus,
  setCurrentProgress,
  setFileLoadedAmount,
  setIsFileHovering,
  fileLoadedAmount
}) => (
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

const KeybaseAndText = ({
  textInput,
  setTextInput,
  width,
  textFileInput,
  handleFileSelection,
  textFile,
  isFileHovering,
  setIsFileHovering,
  fileStatus,
  fileLoadedAmount,
  setTextFile,
  setFileStatus,
  setKeybaseHandle,
  setCurrentProgress,
}) => (
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
        if (textFile.data && textInput) {
          setKeybaseHandle(textInput);
          setCurrentProgress(4);
        }
      }}
    />
  </>
);

const encryptDataAndSend = async (jsonFile, textFile, profile, membershipHandle, keybaseHandle) => {
  const parsedJson = JSON.parse(jsonFile.data);

const publicKeyArmored = `
-----BEGIN PGP PUBLIC KEY BLOCK-----

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
=sbij
-----END PGP PUBLIC KEY BLOCK-----`;

  const keyring = new Keyring({ type: 'sr25519' });

  keyring.addFromJson(parsedJson);

  const user = keyring.getPair(parsedJson.address);

  user.decodePkcs8();

  const hash = blake2AsHex(textFile.data.replace(/\n|\r/g, ''), 256);

  const signature = user.sign(hexToU8a(hash));

  let finalDataJson = JSON.stringify({
    membershipHandle,
    rootAccount: profile.root_account.toString(),
    keybaseHandle,
    textFile,
    signature: u8aToHex(signature).toString(),
  });

  const { data: encrypted } = await openpgp.encrypt({
    message: openpgp.message.fromText(finalDataJson),
    publicKeys: (await openpgp.key.readArmored(publicKeyArmored)).keys,
  });

  function encode(data) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  }

  console.log({ encrypted });

  const response = await fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: encode({
      'form-name': `FoundingMembers/${membershipHandle}`,
      data: encrypted,
    }),
  });

  if (!response.ok) {
    throw Error(response.statusText);
  }
};

const FoundingMembersForm = () => {
  //refs
  const jsonFileInput = useRef();
  const textFileInput = useRef();

  //temporary data
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
  const [keybaseHandle, setKeybaseHandle] = useState('');
  const [jsonFile, setJsonFile] = useState({
    name: '',
    data: '',
  });
  const [textFile, setTextFile] = useState({
    name: '',
    data: '',
  });
  const [termsRead, setTermsRead] = useState();

  //api
  const [Api, setApi] = useState();
  const [profile, setProfile] = useState();

  useEffect(() => {
    async function setUpApi() {
      const provider = new WsProvider('wss://rome-rpc-endpoint.joystream.org:9944/');
      const api = await ApiPromise.create({ provider, types });
      await api.isReady;
      setApi(api);
    }
    setUpApi();
  }, []);

  useEffect(() => {
    if (membershipHandle) {
      getMember(Api, membershipHandle, setProfile);
    }
  }, [membershipHandle]);

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
        const { address, encoded, encoding, meta } = JSON.parse(e.target.result);

        if (address && encoded && encoding && meta && address === profile.root_account.toString()) {
          setJsonFile(prev => ({
            ...prev,
            data: e.target.result,
          }));
        } else {
          setFileStatus({
            loading: false,
            loaded: false,
            error: true,
          });
          setJsonFile({
            name: file.name,
            data: '',
          });
        }
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
        <Membership
          profile={profile}
          textInput={textInput}
          setTextInput={setTextInput}
          width={width}
          setMembershipHandle={setMembershipHandle}
          setCurrentProgress={setCurrentProgress}
        />
      );
    } else if (currentProgress === 2) {
      return (
        <Json
          jsonFileInput={jsonFileInput}
          handleFileSelection={handleFileSelection}
          jsonFile={jsonFile}
          isFileHovering={isFileHovering}
          fileStatus={fileStatus}
          setJsonFile={setJsonFile}
          setFileStatus={setFileStatus}
          setCurrentProgress={setCurrentProgress}
          setFileLoadedAmount={setFileLoadedAmount}
          setIsFileHovering={setIsFileHovering}
          fileLoadedAmount={fileLoadedAmount}
        />
      );
    } else if (currentProgress === 3) {
      return (
        <KeybaseAndText
          textInput={textInput}
          setTextInput={setTextInput}
          width={width}
          textFileInput={textFileInput}
          handleFileSelection={handleFileSelection}
          textFile={textFile}
          isFileHovering={isFileHovering}
          setIsFileHovering={setIsFileHovering}
          fileStatus={fileStatus}
          fileLoadedAmount={fileLoadedAmount}
          setTextFile={setTextFile}
          setFileStatus={setFileStatus}
          setKeybaseHandle={setKeybaseHandle}
          setCurrentProgress={setCurrentProgress}
        />
      );
    } else if (currentProgress === 4) {
      return (
        <TermsAndConditions termsRead={termsRead} setCurrentProgress={setCurrentProgress} setTermsRead={setTermsRead} />
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

  useEffect(() => {
    if (currentProgress === 5) {
      encryptDataAndSend(jsonFile, textFile, profile, membershipHandle, keybaseHandle);
    }
  }, [currentProgress]);

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
                {renderProgressItem('Account info', 1, currentProgress)}
                {renderProgressItem('Key file', 2, currentProgress)}
                {renderProgressItem('Summary', 3, currentProgress)}
                {width > 1200
                  ? renderProgressItem('Accept terms & conditions', 4, currentProgress)
                  : renderProgressItem('Terms & cond.', 4, currentProgress)}
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
