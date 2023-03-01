import React, { useState } from 'react';
import cn from 'classnames';

import { ReactComponent as Close } from '../../../assets/svg/close.svg';

import './style.scss';

const TokenInformationSection = ({ title, text }) => {
  const [active, setActive] = useState(false);

  return (
    <div
      role="presentation"
      className="TokenPage__tokeninfo__item"
      onClick={() => {
        if (window && window.getSelection().toString() === '') {
          setActive(prev => !prev);
        }
      }}
    >
      <div className="TokenPage__tokeninfo__item__title-section">
        <h3 className="TokenPage__tokeninfo__item__title-section__title">{title}</h3>
        <Close
          className={cn('TokenPage__tokeninfo__item__title-section__icon', {
            'TokenPage__tokeninfo__item__title-section__icon--active': active,
          })}
        />
      </div>
      <div
        className={cn('TokenPage__tokeninfo__item__text', {
          'TokenPage__tokeninfo__item__text--active': active,
        })}
      >
        {text}
      </div>
    </div>
  );
};

const TokenInformation = ({ tokenQuestions, title }) => (
  <section className="TokenPage__tokeninfo-wrapper">
    <div className="TokenPage__tokeninfo">
      <header className="TokenPage__tokeninfo__header">
        <span className="TokenPage__tokeninfo__header__section-title">FAQ</span>
        <h2 className="TokenPage__tokeninfo__header__title">Frequently Asked Questions</h2>
      </header>
      <div className="TokenPage__tokeninfo__items">
        {tokenQuestions.map(({ title, text }) => (
          <TokenInformationSection key={title} title={title} text={text} />
        ))}
      </div>
    </div>
  </section>
);

export default TokenInformation;
