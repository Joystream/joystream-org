import React, { useEffect } from 'react';

import GlossaryHead from './Glosaary_head';
import GlossaryBody from './Glossary_body';

import './style.scss';

const Glossary = ({ data, headClick, cardSelect, t }) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);
  return (
    <div className="Glossary">
      <div className="Glossary__body">
        <GlossaryHead head={data.title} onclick={headClick} t={t} />
        <GlossaryBody data={data} selectCard={cardSelect} t={t} />
      </div>
    </div>
  );
};

export default Glossary;
