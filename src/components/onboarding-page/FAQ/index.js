import React, { useState } from 'react';
import cn from 'classnames';

import { ReactComponent as Close } from '../../../assets/svg/close.svg';

import './style.scss';

const FAQSection = ({ title, text }) => {
  const [active, setActive] = useState(false);

  return (
    <div
      role="presentation"
      className={cn('FAQSection__tokeninfo__item', {
        'FAQSection__tokeninfo__item--active': active,
      })}
      onClick={() => {
        if (window && window.getSelection().toString() === '') {
          setActive(prev => !prev);
        }
      }}
    >
      <div className="FAQSection__tokeninfo__item__content">
        <h3 className="FAQSection__tokeninfo__item__title">{title}</h3>
        <p
          className={cn('FAQSection__tokeninfo__item__text', {
            'FAQSection__tokeninfo__item__text--active': active,
          })}
        >
          {text}
        </p>
      </div>
      <Close
        className={cn('FAQSection__tokeninfo__item__icon', {
          'FAQSection__tokeninfo__item__icon--active': active,
        })}
      />
    </div>
  );
};

const FAQ = ({ tokenQuestions, title }) => (
  <div className="FAQSection__tokeninfo-wrapper">
    <h2 className="FAQSection__tokeninfo-title">{title}</h2>
    <div className="FAQSection__tokeninfo">
      {tokenQuestions.map(({ title, text }) => (
        <FAQSection key={title} title={title} text={text} />
      ))}
    </div>
  </div>
);

export default FAQ;
