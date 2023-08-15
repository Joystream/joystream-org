import React from 'react';

import TelegramIcon from '../../assets/images/telegram.webp';
import { ReactComponent as TwitterIcon } from '../../assets/svg/twitter.svg';
import { ReactComponent as EmailIcon } from '../../assets/svg/email.svg';
import { ReactComponent as DiscordIcon } from '../../assets/svg/discord-icon.svg';

import './style.scss';

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

const Verification = () => {
  return (
    <div className="VerificationPage">
      <SocialCard title="TELEGRAM" value="@freakstat_ic" />
      <SocialCard title="TWITTER" value="@freak_static" />
      <SocialCard title="EMAIL" value="freak.staticaly@gmail.com" />
      <SocialCard title="DISCORD" value="@freakstatic" />
    </div>
  );
};

export default Verification;
