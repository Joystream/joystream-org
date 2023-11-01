import React, { useEffect } from 'react';

import GlossaryHead from './Glosaary_head';
import GlossaryBody from './Glossary_body';

import './style.scss';

const Glossary = ({ data, headClick, cardSelect }) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);
  if (!data) return <div className="Glossary">Loading...</div>;
  return (
    <div className="Glossary">
      <div className="Glossary__body">
        <GlossaryHead head={data.title} onclick={headClick} />
        <GlossaryBody data={data} selectCard={cardSelect} />
      </div>
    </div>
  );
};

export default Glossary;
