import React from 'react';
import './style.scss';
function GlossaryCard({ title, content, onclick }) {
  return (
    <div
      className="GlossaryCard"
      onKeyPress={onclick}
      role="button"
      tabIndex="0"
    >
      <div className="GlossaryCard__title">{title}</div>
      <div className="GlossaryCard__content">{content}</div>
    </div>
  );
}

export default GlossaryCard;
