import React, { useState } from 'react';
import cn from 'classnames';

import { ReactComponent as Close } from '../../../assets/svg/close.svg';

import './style.scss';

const TokenInformationSection = ({ title, text }) => {
    const [active, setActive] = useState(false);
  
    return (
      <div
        role="presentation"
        className={cn('TokensPage__tokeninfo__item', {
          'TokensPage__tokeninfo__item--active': active,
        })}
        onClick={() => setActive(prev => !prev)}
      >
        <div className="TokensPage__tokeninfo__item__content">
          <h3 className="TokensPage__tokeninfo__item__title">{title}</h3>
          <p
            className={cn('TokensPage__tokeninfo__item__text', {
              'TokensPage__tokeninfo__item__text--active': active,
            })}
          >
            {text}
          </p>
        </div>
        <Close
          className={cn('TokensPage__tokeninfo__item__icon', {
            'TokensPage__tokeninfo__item__icon--active': active,
          })}
        />
      </div>
    );
  };

const TokenInformation = () => (
  <div className="TokensPage__tokeninfo-wrapper">
    <h2 className="TokensPage__tokeninfo-title">The testnet token information</h2>
    <div className="TokensPage__tokeninfo">
      <TokenInformationSection title="What is tJOY?" text="tJOY is the currency unit used on Joystream testnets." />
      <TokenInformationSection
        title="Where does the value of tJOY come from?"
        text="Each unit is redeemable for a roughly stable amount of USD from Jsgenesis, hence tJOY is meant to be more or less stable over time."
      />
      <TokenInformationSection
        title="What is the purpose of tJOY?"
        text="Each unit is redeemable for a roughly stable amount of USD from Jsgenesis, hence tJOY is meant to be more or less stable over time."
      />
      <TokenInformationSection
        title="Where can I get tJOY?"
        text="Each unit is redeemable for a roughly stable amount of USD from Jsgenesis, hence tJOY is meant to be more or less stable over time."
      />
      <TokenInformationSection
        title="Is there any link between tJOY and the future mainnet token?"
        text="Each unit is redeemable for a roughly stable amount of USD from Jsgenesis, hence tJOY is meant to be more or less stable over time."
      />
      <TokenInformationSection
        title="How do I cashout tJOY to USD?"
        text="Each unit is redeemable for a roughly stable amount of USD from Jsgenesis, hence tJOY is meant to be more or less stable over time."
      />
    </div>
  </div>
);

export default TokenInformation;
