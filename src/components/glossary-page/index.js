import React from 'react';

import GlossaryHead from './Glosaary_head';
import GlossaryBody from './Glossary_body';

import './style.scss';

const Glossary = ({ data, headClick }) => {
  if (!data) return <div className="Glossary">Loading...</div>;
  return (
    <div className="Glossary">
      <GlossaryHead head={data.title} onclick={headClick} />
      <GlossaryBody data={data} />
    </div>
  );
};

export default Glossary;
