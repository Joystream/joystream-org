import React, { useState } from 'react';

import './style.scss';

function TooltipPanel({ children, text }) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className="tooltip-panel"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <div className={`tooltip ${showTooltip ? 'visible' : ''}`}>{text}</div>
      {children}
    </div>
  );
}

export default TooltipPanel;
