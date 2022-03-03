import React from 'react';
import { Link } from 'gatsby-plugin-react-i18next';

import { ReactComponent as Tokens } from '../../../assets/svg/joy-token.svg';
import { ReactComponent as Money } from '../../../assets/svg/money-circle.svg';
import { ReactComponent as Reputation } from '../../../assets/svg/reputation-circle.svg';
import { ReactComponent as Arrow } from '../../../assets/svg/arrow-down-small.svg';

import './style.scss';

const JoinInfoReason = ({ Icon, title, text }) => (
  <div className="IndexPage__join-info__reason">
    <Icon className="IndexPage__join-info__reason__icon" />
    <div className="IndexPage__join-info__reason__content">
      <h4 className="IndexPage__join-info__reason__title">{title}</h4>
      <p className="IndexPage__join-info__reason__text">{text}</p>
    </div>
  </div>
);

const WhyYouShouldJoin = ({ t }) => (
  <div className="IndexPage__join-info-wrapper">
    <div className="IndexPage__join-info">
      <h2 className="IndexPage__join-info__title">{t('landing.whyYouShouldJoin.title')}</h2>
      <div className="IndexPage__join-info__reasons">
        <JoinInfoReason
          Icon={Tokens}
          title={t('landing.whyYouShouldJoin.reasons.tokens.title')}
          text={t('landing.whyYouShouldJoin.reasons.tokens.text')}
        />
        <JoinInfoReason
          Icon={Money}
          title={t('landing.whyYouShouldJoin.reasons.cash.title')}
          text={t('landing.whyYouShouldJoin.reasons.cash.text')}
        />
        <JoinInfoReason
          Icon={Reputation}
          title={t('landing.whyYouShouldJoin.reasons.reputationAndSkill.title')}
          text={t('landing.whyYouShouldJoin.reasons.reputationAndSkill.text')}
        />
      </div>
      <Link to="/start-here/what-is-joystream" className="IndexPage__join-info__button-container">
        <div className="IndexPage__join-info__button">
          <p className="IndexPage__join-info__button-text">{t('button.getStarted.text')}</p>
          <Arrow className="IndexPage__join-info__button-arrow" />
        </div>
      </Link>
    </div>
  </div>
);

export default WhyYouShouldJoin;
