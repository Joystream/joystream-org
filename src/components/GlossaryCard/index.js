import React from 'react';
import './style.scss';
function GlossaryCard({ title, content }) {
  return (
    <div className="GlossaryCard">
      <div className="GlossaryCard__title">{title}</div>
      <div className="GlossaryCard__content">{content}</div>
    </div>
  );
}

export default GlossaryCard;
