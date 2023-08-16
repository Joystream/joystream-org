import React from 'react';

import TelegramIcon from '../../assets/images/telegram.webp';
import { ReactComponent as TwitterIcon } from '../../assets/svg/twitter.svg';
import { ReactComponent as EmailIcon } from '../../assets/svg/email.svg';
import { ReactComponent as DiscordIcon } from '../../assets/svg/discord-icon.svg';

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
      <div className="VerificationPage__member-card__verified"></div>
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

const freakstatic = foundingMembers[3];

const Verification = () => {
  return (
    <div className="VerificationPage">
      <MemberCard img={freakstatic.avatarId} name={freakstatic.memberHandle} title="User Acquirer" />
      <SocialCard title="TELEGRAM" value="@freakstat_ic" />
      <SocialCard title="TWITTER" value="@freak_static" />
      <SocialCard title="EMAIL" value="freak.staticaly@gmail.com" />
      <SocialCard title="DISCORD" value="@freakstatic" />
    </div>
  );
};

export default Verification;
