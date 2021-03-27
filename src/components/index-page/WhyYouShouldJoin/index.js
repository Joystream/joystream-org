import React from 'react';
import { Link } from 'gatsby';

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

const WhyYouShouldJoin = () => (
  <div className="IndexPage__join-info-wrapper">
    <div className="IndexPage__join-info">
      <h2 className="IndexPage__join-info__title">Why join our testnets?</h2>
      <div className="IndexPage__join-info__reasons">
        <JoinInfoReason Icon={Tokens} title="Tokens" text="Earn tokens distributed on mainnet, launching 2021" />
        <JoinInfoReason Icon={Money} title="Cash" text="Get rewarded with real money for your participation" />
        <JoinInfoReason
          Icon={Reputation}
          title="Reputation & Skill"
          text="Gain the knowledge required to participate on mainnet"
        />
      </div>
      <Link to="/get-started" className="IndexPage__join-info__button-container">
        <div className="IndexPage__join-info__button">
          <p className="IndexPage__join-info__button-text">Start earning</p>
          <Arrow className="IndexPage__join-info__button-arrow" />
        </div>
      </Link>
    </div>
  </div>
);

export default WhyYouShouldJoin;
