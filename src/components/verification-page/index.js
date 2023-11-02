import React, { useState } from 'react';
import cn from 'classnames';
import { Link, Trans } from 'gatsby-plugin-react-i18next';

import useWindowDimensions from '../../utils/useWindowDimensions';

import TelegramIcon from '../../assets/images/telegram.webp';
import { ReactComponent as TwitterIcon } from '../../assets/svg/twitter.svg';
import { ReactComponent as EmailIcon } from '../../assets/svg/email.svg';
import { ReactComponent as DiscordIcon } from '../../assets/svg/discord-icon.svg';
import { ReactComponent as VerifiedIcon } from '../../assets/svg/verified.svg';
import { ReactComponent as VerifiedTickIcon } from '../../assets/svg/verified-tick.svg';
import { ReactComponent as FlagIcon } from '../../assets/svg/flag.svg';
import { ReactComponent as AllowedIcon } from '../../assets/svg/allowed.svg';
import { ReactComponent as ForbiddenIcon } from '../../assets/svg/forbidden.svg';
import { ReactComponent as DownIcon } from '../../assets/svg/down.svg';

import './style.scss';

const parseComponents = components => {
  return components.map((component, index) => {
    if (component?.link) {
      return <a href={component.link}>{component.text}</a>;
    }
  });
};

const MemberCard = ({ img, name, title, t }) => {
  return (
    <div className="VerificationPage__member-card">
      <div className="VerificationPage__member-card__avatar">
        <img src={img} alt="" />
      </div>
      <div className="VerificationPage__member-card__content">
        <p className="VerificationPage__member-card__content__name">{name}</p>
        <p className="VerificationPage__member-card__content__title">{t(title)}</p>
      </div>
      <div className="VerificationPage__member-card__verified">
        <VerifiedIcon className="VerificationPage__member-card__verified__circle" />
        <VerifiedTickIcon className="VerificationPage__member-card__verified__tick" />
      </div>
    </div>
  );
};

const SocialCard = ({ type, title, value }) => {
  if (!value) return null;

  const icon = {
    TELEGRAM: <img src={TelegramIcon} alt="" />,
    TWITTER: <TwitterIcon className="VerificationPage__social-card__icon--twitter" />,
    EMAIL: <EmailIcon className="VerificationPage__social-card__icon--email" />,
    DISCORD: <DiscordIcon className="VerificationPage__social-card__icon--discord" alt="" />,
  }[type];

  return (
    <div className="VerificationPage__social-card">
      <div className="VerificationPage__social-card__icon">{icon}</div>
      <div className="VerificationPage__social-card__content">
        <p className="VerificationPage__social-card__content__title">{title}</p>
        <p className="VerificationPage__social-card__content__value">{value}</p>
      </div>
    </div>
  );
};

const SafetyCardListContainer = ({ name, isAllowed, items }) => {
  const icon = isAllowed ? <AllowedIcon /> : <ForbiddenIcon />;
  const personalText = isAllowed ? 'can:' : 'will never:';

  return (
    <div className="VerificationPage__safety-card__list-container">
      <div className="VerificationPage__safety-card__list-container__content">
        <div className="VerificationPage__safety-card__list-container__content__top">
          <div
            className={cn('VerificationPage__safety-card__list-container__content__top__icon', {
              'VerificationPage__safety-card__list-container__content__top__icon--allowed': isAllowed,
              'VerificationPage__safety-card__list-container__content__top__icon--forbidden': !isAllowed,
            })}
          >
            {icon}
          </div>
          <div className="VerificationPage__safety-card__list-container__content__top__title">
            {name}{' '}
            <span
              className={`VerificationPage__safety-card__list-container__content__top__title__text--${
                isAllowed ? 'allowed' : 'forbidden'
              }`}
            >
              {personalText}
            </span>
          </div>
        </div>
        <ul>
          {items.map((text, index) => (
            <li key={index} className="VerificationPage__safety-card__list-container__content__list-item">
              {text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const SafetyCard = ({ name, safetyItems, t }) => {
  const allowedItems = safetyItems.allowed.map(item =>
    item?.components ? <Trans i18nKey={item.text} components={parseComponents(item.components)} /> : t(item.text));
  const notAllowedItems = safetyItems.notAllowed.map(item =>
    item?.components ? <Trans i18nKey={item.text} components={parseComponents(item.components)} /> : t(item.text));

  return (
    <div className="VerificationPage__safety-card">
      <div className="VerificationPage__safety-card__top">
        <div className="VerificationPage__safety-card__top__title">{t('verification.safety.title')}</div>
        <a href="mailto:report@jsgenesis.com" className="VerificationPage__safety-card__top__report-button">
          <FlagIcon />
          <p className="VerificationPage__safety-card__top__report-button__text">
            {t('verification.safety.reportButton', { name })}
          </p>
        </a>
      </div>
      <div className="VerificationPage__safety-card__subtitle">{t('verification.safety.subtitle')}</div>
      <a
        href="mailto:report@jsgenesis.com"
        className="VerificationPage__safety-card__top__report-button VerificationPage__safety-card__top__report-button--mobile"
      >
        <FlagIcon />
        <p className="VerificationPage__safety-card__top__report-button__text">
          {t('verification.safety.reportButton', { name })}
        </p>
      </a>
      <SafetyCardListContainer name={name} isAllowed={false} items={notAllowedItems} t={t} />
      <SafetyCardListContainer name={name} isAllowed={true} items={allowedItems} t={t} />
    </div>
  );
};

const OtherMembers = ({ otherMembers, t }) => {
  const [shouldShowInitialMembers, setShouldShowInitialMembers] = useState(true);
  const { width } = useWindowDimensions();

  const initialRenderedMembers = otherMembers.slice(0, width > 1024 ? 6 : width > 767 ? 5 : 4);
  const remainingMembersNumber = otherMembers.length - initialRenderedMembers.length;
  const membersToRender = shouldShowInitialMembers ? initialRenderedMembers : otherMembers;

  return (
    <div className="VerificationPage__other-members-card">
      <div className="VerificationPage__other-members-card__title">{t('verification.otherMembers.title')}</div>
      <div className="VerificationPage__other-members-card__subtitle">{t('verification.otherMembers.subtitle')}</div>
      <div className="VerificationPage__other-members-card__members">
        {membersToRender.map((member, index) => (
          <Link
            key={`${member.memberHandle}-${index}`}
            to={`/${member?.substituteUserRoute ? member.substituteUserRoute : member.memberHandle}`}
          >
            <div className="VerificationPage__other-members-card__member">
              <img className="VerificationPage__other-members-card__member__icon" src={member.avatarUrl} alt="" />
              <div className="VerificationPage__other-members-card__member__name">@{member.memberHandle}</div>
            </div>
          </Link>
        ))}
      </div>
      {otherMembers.length > 4 && (
        <button
          className="VerificationPage__other-members-card__button"
          onClick={() => setShouldShowInitialMembers(prev => !prev)}
        >
          <span className="VerificationPage__other-members-card__button__text">
            {shouldShowInitialMembers
              ? t('verification.otherMembers.showMoreMembers', { memberNum: remainingMembersNumber })
              : t('verification.otherMembers.hideMembers')}
          </span>
          <DownIcon
            className={cn('VerificationPage__other-members-card__button__icon', {
              'VerificationPage__other-members-card__button__icon--active': !shouldShowInitialMembers,
            })}
          />
        </button>
      )}
    </div>
  );
};

const Verification = ({ user, otherMembers, t }) => {
  const { socials, avatarUrl, memberHandle, title, safety } = user;

  return (
    <div className="VerificationPage">
      <div className="VerificationPage__cards">
        <MemberCard img={avatarUrl} name={memberHandle} title={title} t={t} />
        <SocialCard
          type="TELEGRAM"
          title={t('verification.socialCardSectionTitle.telegram')}
          value={socials.telegram}
        />
        <SocialCard type="TWITTER" title={t('verification.socialCardSectionTitle.twitter')} value={socials.twitter} />
        <SocialCard type="EMAIL" title={t('verification.socialCardSectionTitle.email')} value={socials.email} />
        <SocialCard type="DISCORD" title={t('verification.socialCardSectionTitle.discord')} value={socials.discord} />
        <SafetyCard name={memberHandle} safetyItems={safety} t={t} />
        <OtherMembers otherMembers={otherMembers} t={t} />
      </div>
    </div>
  );
};

export default Verification;
