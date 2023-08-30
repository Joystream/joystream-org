import React from 'react';
import './style.scss';
function GlossaryCard({ title, content, onclick }) {
  return (
    <button className="GlossaryCard" onClick={onclick}>
      <div className="GlossaryCard__title">{title}</div>
      <div className="GlossaryCard__content">{content}</div>
    </button>
  );
}

export default GlossaryCard;
