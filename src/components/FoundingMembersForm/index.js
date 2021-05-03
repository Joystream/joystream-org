import React, { useEffect, useState, useRef } from 'react';
import cn from 'classnames';
import { ArrowButton } from '../../pages/founding-members';
import { ReactComponent as Achieved } from '../../assets/svg/achieved.svg';
import useWindowDimensions from '../../utils/useWindowDimensions';
import { blake2AsHex } from '@polkadot/util-crypto';
import { Keyring } from '@polkadot/keyring';
import { u8aToHex, hexToU8a } from '@polkadot/util';
import * as openpgp from 'openpgp';
import { Trans } from 'gatsby-plugin-react-i18next';
import { publicKey } from '../../data/pages/founding-members';
import Membership from './Membership';
import Json from './Json';
import KeybaseAndText from './KeybaseAndText';

import './style.scss';

const TermsAndConditions = ({ termsRead, setCurrentProgress, setTermsRead, t }) => {
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
      <h3 className="FoundingMembersFormPage__form__subtitle margin-bottom-XS">
        {t('foundingMembers.form.termsAndConditions.title')}
      </h3>
      <div ref={termsAndConditions} className="FoundingMembersFormPage__form__text-wrapper">
        <Trans
          i18nKey="foundingMembers.form.termsAndConditions.text"
          components={[
            <h4 className="margin-bottom-S">title</h4>,
            <p className="margin-bottom-XS" />,
            <p className="margin-bottom-M">
              <em />
            </p>,
          ]}
        />
      </div>
      <ArrowButton
        className={cn('FoundingMembersFormPage__form__button', {
          'FoundingMembersFormPage__form__button--inactive': !termsRead,
        })}
        text={t('foundingMembers.general.next')}
        onClick={() => {
          if (termsRead) {
            setCurrentProgress(5);
          }
        }}
      />
    </>
  );
};

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

const sendData = async encrypted => {
  function encode(data) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  }

  try {
    await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'founding-members',
        data: encrypted,
      }),
    });
  } catch (e) {
    console.log(e);
  }
};

const FoundingMembersForm = ({ t }) => {
  //refs
  const jsonFileInput = useRef();
  const textFileInput = useRef();

  //temporary data
  const [currentProgress, setCurrentProgress] = useState(1);
  const [fileStatus, setFileStatus] = useState({
    loading: false,
    loaded: false,
    error: false,
    errorMessage: '',
  });
  const [fileLoadedAmount, setFileLoadedAmount] = useState(0);

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
  const [password, setPassword] = useState();
  const [encrypted, setEncrypted] = useState('');
  const [profile, setProfile] = useState();

  const { width } = useWindowDimensions();

  const renderFormBody = () => {
    if (currentProgress === 1) {
      return (
        <Membership
          profile={profile}
          setProfile={setProfile}
          membershipHandle={membershipHandle}
          setMembershipHandle={setMembershipHandle}
          setCurrentProgress={setCurrentProgress}
          width={width}
          t={t}
        />
      );
    } else if (currentProgress === 2) {
      return (
        <Json
          jsonFileInput={jsonFileInput}
          handleFileSelection={handleFileSelection}
          jsonFile={jsonFile}
          fileStatus={fileStatus}
          setJsonFile={setJsonFile}
          setFileStatus={setFileStatus}
          setCurrentProgress={setCurrentProgress}
          setFileLoadedAmount={setFileLoadedAmount}
          fileLoadedAmount={fileLoadedAmount}
          t={t}
        />
      );
    } else if (currentProgress === 3) {
      return (
        <KeybaseAndText
          width={width}
          textFileInput={textFileInput}
          handleFileSelection={handleFileSelection}
          textFile={textFile}
          fileStatus={fileStatus}
          fileLoadedAmount={fileLoadedAmount}
          setTextFile={setTextFile}
          setFileStatus={setFileStatus}
          setKeybaseHandle={setKeybaseHandle}
          setCurrentProgress={setCurrentProgress}
          password={password}
          setPassword={setPassword}
          jsonFile={jsonFile}
          t={t}
        />
      );
    } else if (currentProgress === 4) {
      return (
        <TermsAndConditions
          termsRead={termsRead}
          setCurrentProgress={setCurrentProgress}
          setTermsRead={setTermsRead}
          t={t}
        />
      );
    } else {
      return (
        <div className="FoundingMembersFormPage__form__submitted">
          <Achieved className="FoundingMembersFormPage__form__submitted__tick margin-bottom-L" />
          <h3 className="FoundingMembersFormPage__form__submitted__title margin-bottom-XS">
            {t('foundingMembers.form.success.title')}
          </h3>
          <p className="FoundingMembersFormPage__form__submitted__text">{t('foundingMembers.form.success.text')}</p>
        </div>
      );
    }
  };

  const handleFileSelection = (event, type) => {
    const file = event.dataTransfer ? event.dataTransfer.files[0] : event.target.files[0];

    const isJson = file?.type === 'application/json' && type === 'application/json';
    const isText = file?.type === 'text/plain' && type === 'text';

    if (!isJson && !isText) {
      setFileStatus({
        loading: false,
        loaded: false,
        error: true,
        errorMessage: t('foundingMembers.form.error.fileFormat'),
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
      errorMessage: '',
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
        errorMessage: '',
      });

      if (isJson) {
        let isFileValid, doesUserCorrespond;

        try {
          const { address, encoded, encoding, meta } = JSON.parse(e.target.result);
          isFileValid = address && encoded && encoding && meta;
          doesUserCorrespond = address === profile.controller_account.toString();
        } catch (e) {
          console.log(e);
        }

        if (isFileValid && doesUserCorrespond) {
          setJsonFile(prev => ({
            ...prev,
            data: e.target.result,
          }));
        } else {
          setFileStatus({
            loading: false,
            loaded: false,
            error: true,
            errorMessage:
              isFileValid && !doesUserCorrespond
                ? t('foundingMembers.form.error.jsonWrongAccount')
                : t('foundingMembers.form.error.faultyJson'),
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

  const encryptData = async () => {
    const parsedJson = JSON.parse(jsonFile.data);

    const keyring = new Keyring({ type: parsedJson.encoding.content[1] });
    keyring.addFromJson(parsedJson);

    const user = keyring.getPair(parsedJson.address);
    user.decodePkcs8(password);

    const hash = blake2AsHex(textFile.data.replace(/\n|\r/g, ''), 256);

    const signature = user.sign(hexToU8a(hash));

    const { data: encrypted } = await openpgp.encrypt({
      message: openpgp.message.fromText(
        JSON.stringify({
          membershipHandle,
          rootAccount: profile.controller_account.toString(),
          keybaseHandle,
          textFile,
          signature: u8aToHex(signature).toString(),
        })
      ),
      publicKeys: (await openpgp.key.readArmored(publicKey)).keys,
    });

    setEncrypted(encrypted);
  };

  useEffect(() => {
    if (currentProgress === 5) {
      encryptData();
    }
  }, [currentProgress]);

  useEffect(() => {
    if (encrypted) {
      sendData(encrypted);
    }
  }, [encrypted]);

  return (
    <div className="FoundingMembersFormPage__form">
      {currentProgress < 5 && (
        <div className="FoundingMembersFormPage__form__progress">
          {renderProgressItem(t('foundingMembers.form.progressItem.accountInfo'), 1, currentProgress)}
          {renderProgressItem(t('foundingMembers.form.progressItem.keyFile'), 2, currentProgress)}
          {renderProgressItem(t('foundingMembers.form.progressItem.summary'), 3, currentProgress)}
          {renderProgressItem(
            width > 1200
              ? t('foundingMembers.form.progressItem.acceptTerms')
              : t('foundingMembers.form.progressItem.acceptTermsShort'),
            4,
            currentProgress
          )}
        </div>
      )}
      <div className="FoundingMembersFormPage__form__body">
        <form name="founding-members" method="POST" style={{ display: 'none' }} data-netlify={true}>
          <input readOnly name="data" value={encrypted} />
        </form>
        {renderFormBody()}
      </div>
    </div>
  );
};

export default FoundingMembersForm;
