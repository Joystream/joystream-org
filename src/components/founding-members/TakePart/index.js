import React from 'react';
import { Trans } from 'gatsby-plugin-react-i18next';
import { ArrowButton } from '../../../pages/founding-members/index';
import UnitedStatesCircle from '../../../assets/svg/united-states-flag-circle.svg';
import Tokens from '../../../assets/svg/tokens-no-bg.svg';

import './style.scss';

const NumberStep = ({ number, text, otherText }) => (
  <div className="FoundingMembersPage__number-step">
    <div className="FoundingMembersPage__number-step__number">{number}</div>
    <p className="FoundingMembersPage__number-step__text">{text}</p>
    <p className="FoundingMembersPage__number-step__other-text">{otherText ?? text}</p>
  </div>
);

const TakePart = ({ t }) => (
  <div className="FoundingMembersPage__take-part">
    <h2 className="FoundingMembersPage__take-part__title">{t('foundingMembers.landing.takePart.title')}</h2>
    <div className="FoundingMembersPage__take-part__number-steps">
      <div className="line"></div>
      <NumberStep
        number={t('numbers.one')}
        text={t('foundingMembers.landing.takePart.introduceYourself.text')}
        otherText={t('foundingMembers.landing.takePart.introduceYourself.altText')}
      />
      <NumberStep number={t('numbers.two')} text={t('foundingMembers.landing.takePart.contribute.text')} />
      <Trans
        i18nKey="foundingMembers.landing.takePart.contribute.contributions"
        components={[
          <ul>
            <li></li>
          </ul>,
        ]}
      />
      <NumberStep number={t('numbers.three')} text={t('foundingMembers.landing.takePart.report')} />
      <NumberStep number={t('numbers.four')} text={t('foundingMembers.landing.takePart.earnPoints')} />
      <NumberStep number={t('numbers.five')} text={t('foundingMembers.landing.takePart.becomeFM')} />
      <ArrowButton
        link="https://discord.gg/DE9UN3YpRP"
        text={t('foundingMembers.landing.takePart.buttonText')}
        className="FoundingMembersPage__take-part__join-button"
      />
      <p className="FoundingMembersPage__take-part__excluded-text">{t('foundingMembers.landing.takePart.excluded')}</p>
      <img
        src={UnitedStatesCircle}
        className="FoundingMembersPage__take-part__us-flag"
        alt={t('foundingMembers.landing.takePart.usFlagAlt')}
      />
    </div>
    <img
      src={Tokens}
      className="FoundingMembersPage__take-part__tokens"
      alt={t('foundingMembers.landing.takePart.tokensAlt')}
    />
  </div>
);

export default TakePart;
