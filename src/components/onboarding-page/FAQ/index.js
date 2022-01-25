import React, { useState } from 'react';
import { ReactComponent as CloseIcon } from '../../../assets/svg/close.svg';
import './style.scss';

const FAQ = ({ t, title, questions }) => {
  return (
    <div className="FAQ__wrapper">
      <div className="FAQ__manifesto-cta">
        <div className="FAQ__manifesto-cta__content">
          <h2 className="FAQ__manifesto-cta__title">{title}</h2>
          <div className="FAQ__manifesto-cta__items">
            {questions.map((q, i) => {
              return <FAQItem key={i} t={t} item={q} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const FAQItem = ({ t, item }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="FAQ__manifesto-cta__item">
      {isOpen && <CloseIcon className="FAQ__manifesto-cta__item__close" onClick={() => setIsOpen(false)} />}
      {!isOpen && <CloseIcon className="FAQ__manifesto-cta__item__close" onClick={() => setIsOpen(true)} />}
      <div className="FAQ__manifesto-cta__item__question">{t(item.question)}</div>
      {isOpen && <div className="FAQ__manifesto-cta__item__answer">{t(item.answer)}</div>}
    </div>
  );
};

export default FAQ;
