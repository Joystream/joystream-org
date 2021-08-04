import React, { useState, useEffect } from 'react';
import cn from 'classnames';

import { ArrowButton } from '../../pages/founding-members';

import parseBalance from '../../utils/parseBalance/index';

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

const Membership = ({
  Api,
  profile,
  setProfile,
  membershipHandle,
  setMembershipHandle,
  width,
  startNextStep,
  t,
}) => {
  const [textInput, setTextInput] = useState('');

  useEffect(() => {
    if (membershipHandle && Api) {
      getMember(Api, membershipHandle, setProfile);
    }
  }, [Api, membershipHandle, setProfile]);

  return (
    <>
      <h3 className="FoundingMembersFormPage__form__subtitle FoundingMembersFormPage__form__input-title-mobile  margin-bottom-XS">
        {t('foundingMembers.form.membership.membershipHandle')}
      </h3>
      <input
        className={cn('FoundingMembersFormPage__form__input', {
          'margin-bottom-M': profile,
        })}
        placeholder={t('foundingMembers.general.inputPlaceholder')}
        value={textInput}
        onChange={e => setTextInput(e.target.value)}
      />
      {profile === null && (
        <p className="FoundingMembersFormPage__form__error-message">{t('foundingMembers.form.error.noSuchAccount')}</p>
      )}
      {profile && (
        <>
          <p className="FoundingMembersFormPage__form__subtitle-small margin-bottom-XS">
            {t('foundingMembers.general.account')}
          </p>
          <div className="FoundingMembersFormPage__form__profile">
            {profile.avatar_uri.isEmpty ? (
              <div className="FoundingMembersFormPage__form__profile__picture"></div>
            ) : (
              <img
                className="FoundingMembersFormPage__form__profile__picture"
                src={profile.avatar_uri.toString()}
                alt={t('foundingMembers.form.membership.avatarAlt')}
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
        className={cn('FoundingMembersFormPage__form__button margin-bottom-S', {
          'FoundingMembersFormPage__form__button--inactive': !textInput,
        })}
        text={t('foundingMembers.general.next')}
        onClick={e => {
          if (profile?.handle.toString() !== textInput) {
            setMembershipHandle(textInput);
          } else {
            if (profile) {
              startNextStep();
              setTextInput('');
            }

            if (textInput) {
              setMembershipHandle(textInput);
            }
          }
        }}
      />
      <a target="_blank" href="https://github.com/Joystream/founding-members#submission-guidance">
        {t('foundingMembers.general.howItWorks')}
      </a>
    </>
  );
};

export default Membership;
