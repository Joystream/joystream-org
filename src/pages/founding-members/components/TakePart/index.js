import React from 'react';
import { ArrowButton } from '../../index';
import UnitedStatesCircle from '../../../../assets/svg/united-states-flag-circle.svg';
import CanadaCircle from '../../../../assets/svg/canada-flag-circle.svg';
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
    <h2 className="FoundingMembersPage__take-part__title">How to become a part of it</h2>
    <div className="FoundingMembersPage__take-part__number-steps">
      <div className="line"></div>
      <NumberStep
        number="1"
        text="Introduce yourself on Telegram."
        otherText="Introduce yourself in our Telegram channel."
      />
      <NumberStep
        number="2"
        text="Help launch Joystream."
        otherText="Contribute to the development of the platform, by doing things such as:"
      />
      <ul>
        <li>training others</li>
        <li>writing impactful blog posts</li>
        <li>creating and publishing new content</li>
        <li>creating proposals that pass and have a positive impact</li>
        <li>serving effectively on the council, for example as measured by the KPI system</li>
        <li>finding bugs or errors</li>
      </ul>
      <NumberStep number="3" text="Tell us what you have done" otherText="Submit a summary of your activities" />
      <NumberStep number="4" text="Become a founding member!" otherText="Become a founding member!" />
      <ArrowButton link="#0" text="Join now" className="FoundingMembersPage__take-part__join-button" />
      <p className="FoundingMembersPage__take-part__excluded-text">Countries that are excluded from that program: </p>
      <img src={UnitedStatesCircle} className="FoundingMembersPage__take-part__us-flag" alt='us flag icon'/>
      <img src={CanadaCircle} className="FoundingMembersPage__take-part__canada-flag" alt='canadian flag icon'/>
    </div>
    <img src={Tokens} className="FoundingMembersPage__take-part__tokens" alt='two tokens'/>
  </div>
);

export default TakePart;
