import React, { useState, useEffect } from 'react';
import parseBalance from '../../../utils/parseBalance/index';
import cn from 'classnames';
import { ArrowButton } from '../../../pages/founding-members';
import { ApiPromise, WsProvider } from '@polkadot/api';
import { types } from '@joystream/types';
import { JoystreamWSProvider } from '../../../data/pages/founding-members';

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

const Membership = ({ profile, setProfile, membershipHandle, setMembershipHandle, width, setCurrentProgress }) => {
  const [textInput, setTextInput] = useState('');
  const [Api, setApi] = useState();

  useEffect(() => {
    async function setUpApi() {
      const provider = new WsProvider(JoystreamWSProvider);
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

  return (
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
              <img
                className="FoundingMembersFormPage__form__profile__picture"
                src={profile.avatar_uri.toString()}
                alt="founding member avatar"
              />
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
};

export default Membership;
