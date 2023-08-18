import React from 'react';
import cn from 'classnames';

import TelegramIcon from '../../assets/images/telegram.webp';
import { ReactComponent as TwitterIcon } from '../../assets/svg/twitter.svg';
import { ReactComponent as EmailIcon } from '../../assets/svg/email.svg';
import { ReactComponent as DiscordIcon } from '../../assets/svg/discord-icon.svg';
import { ReactComponent as VerifiedIcon } from '../../assets/svg/verified.svg';
import { ReactComponent as VerifiedTickIcon } from '../../assets/svg/verified-tick.svg';
import { ReactComponent as FlagIcon } from '../../assets/svg/flag.svg';
import { ReactComponent as AllowedIcon } from '../../assets/svg/allowed.svg';
import { ReactComponent as ForbiddenIcon } from '../../assets/svg/forbidden.svg';

import foundingMembers from '../about-page/founding-members.json';

import './style.scss';

const MemberCard = ({ img, name, title }) => {
  return (
    <div className="VerificationPage__member-card">
      <div className="VerificationPage__member-card__avatar">
        <img src={img} alt="" />
      </div>
      <div className="VerificationPage__member-card__content">
        <p className="VerificationPage__member-card__content__name">@{name}</p>
        <p className="VerificationPage__member-card__content__title">{title}</p>
      </div>
      <div className="VerificationPage__member-card__verified">
        <VerifiedIcon className="VerificationPage__member-card__verified__circle" />
        <VerifiedTickIcon className="VerificationPage__member-card__verified__tick" />
      </div>
    </div>
  );
};

const SocialCard = ({ title, value }) => {
  const icon = {
    TELEGRAM: <img src={TelegramIcon} alt="" />,
    TWITTER: <TwitterIcon className="VerificationPage__social-card__icon--twitter" />,
    EMAIL: <EmailIcon className="VerificationPage__social-card__icon--email" />,
    DISCORD: <DiscordIcon className="VerificationPage__social-card__icon--discord" alt="" />,
  }[title];

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

const SafetyCard = ({ name }) => {
  return (
    <div className="VerificationPage__safety-card">
      <div className="VerificationPage__safety-card__top">
        <div className="VerificationPage__safety-card__top__title">Safety</div>
        <button className="VerificationPage__safety-card__top__report-button">
          <FlagIcon />
          <span className="VerificationPage__safety-card__top__report-button__text">Report {name}</span>
        </button>
      </div>
      <div className="VerificationPage__safety-card__subtitle">
        We take the safety of everyone online seriously. If the person you have contact with acts suspicious please
        report it to us immidiatelly.
      </div>
      <SafetyCardListContainer
        name={name}
        isAllowed={false}
        items={[
          'Ask for money transfers, or your credit card information',
          'Ask for your personal information',
          'Send you any software, or attachments, or ask you to install any program on your device',
        ]}
      />
      <SafetyCardListContainer
        name={name}
        isAllowed={true}
        items={[
          'Invite you to join gleev.xyz/ypp',
          'Answer any questions you may have',
          'Get feedback from you about interest or terms.',
        ]}
      />
    </div>
  );
};

const freakstatic = foundingMembers[3];

const Verification = () => {
  return (
    <div className="VerificationPage">
      <MemberCard img={freakstatic.avatarId} name={freakstatic.memberHandle} title="User Acquirer" />
      <SocialCard title="TELEGRAM" value="@freakstat_ic" />
      <SocialCard title="TWITTER" value="@freak_static" />
      <SocialCard title="EMAIL" value="freak.staticaly@gmail.com" />
      <SocialCard title="DISCORD" value="@freakstatic" />
      <SafetyCard name={freakstatic.memberHandle} />
    </div>
  );
};

export default Verification;
