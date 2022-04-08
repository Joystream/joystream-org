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
      onClick={() => {
        if(window && window.getSelection().toString() === ''){
          setActive(prev => !prev);
        }
      }}
    >
      <div className="TokensPage__tokeninfo__item__content">
        <h3 className="TokensPage__tokeninfo__item__title">{title}</h3>
        <div
          className={cn('TokensPage__tokeninfo__item__text', {
            'TokensPage__tokeninfo__item__text--active': active,
          })}
        >
          {text}
        </div>
      </div>
      <Close
        className={cn('TokensPage__tokeninfo__item__icon', {
          'TokensPage__tokeninfo__item__icon--active': active,
        })}
      />
    </div>
  );
};

const TokenInformation = ({ tokenQuestions, title }) => (
  <div className="TokensPage__tokeninfo-wrapper">
    <h2 className="TokensPage__tokeninfo-title">{title}</h2>
    <div className="TokensPage__tokeninfo">
      {tokenQuestions.map(({ title, text }) => (
        <TokenInformationSection key={title} title={title} text={text} />
      ))}
    </div>
  </div>
);

export default TokenInformation;
