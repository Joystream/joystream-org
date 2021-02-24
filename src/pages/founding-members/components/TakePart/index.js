import React from 'react';
import { ArrowButton } from '../../index';
import UnitedStatesCircle from '../../../../assets/svg/united-states-flag-circle.svg';
import Tokens from '../../../../assets/svg/tokens-no-bg.svg';

import './style.scss';

const NumberStep = ({ number, text, otherText }) => (
  <div className="FoundingMembersPage__number-step">
    <div className="FoundingMembersPage__number-step__number">{number}</div>
    <p className="FoundingMembersPage__number-step__text">{text}</p>
    <p className="FoundingMembersPage__number-step__other-text">{otherText}</p>
  </div>
);

const TakePart = () => (
  <div className="FoundingMembersPage__take-part">
    <h2 className="FoundingMembersPage__take-part__title">How to participate in the program</h2>
    <div className="FoundingMembersPage__take-part__number-steps">
      <div className="line"></div>
      <NumberStep
        number="1"
        text="Introduce yourself on Discord."
        otherText="Introduce yourself in our Discord."
      />
      <NumberStep
        number="2"
        text="Make contributions to the project."
        otherText="Make contributions to the project."
      />
      <ul>
        <li>training other participants</li>
        <li>writing blog posts and documentation</li>
        <li>creating and publishing new video content</li>
        <li>participating in platform roles on the testnet</li>
        <li>finding and reporting bugs and errors</li>
        <li>completing official bounties</li>
        <li>creative and design work</li>
      </ul>
      <NumberStep number="3" text="Regularly report your activity." otherText="Regularly report your activity." />
      <NumberStep number="4" text="Earn leaderboard points." otherText="Earn leaderboard points." />
      <NumberStep number="5" text="Become a founding member!" otherText="Become a founding member!" />
      <ArrowButton link="https://discord.gg/DE9UN3YpRP" text="Join Discord" className="FoundingMembersPage__take-part__join-button" />
      <p className="FoundingMembersPage__take-part__excluded-text">Countries that are excluded from that program: </p>
      <img src={UnitedStatesCircle} className="FoundingMembersPage__take-part__us-flag" alt='us flag icon'/>
    </div>
    <img src={Tokens} className="FoundingMembersPage__take-part__tokens" alt='two tokens'/>
  </div>
);

export default TakePart;
