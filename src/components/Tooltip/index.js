import React, { useEffect, useState } from 'react';

import './style.scss';

function TooltipPanel({ children, text, state, activeText, activeState, style }) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="tooltip-panel" onMouseEnter={() => setShowTooltip(true)} onMouseLeave={() => setShowTooltip(false)}>
      {activeState ? (
        <div className={`tooltip ${activeState ? 'visible' : ''}`} style={style}>
          {activeText}
        </div>
      ) : state !== undefined ? (
        <div className={`tooltip ${state ? 'visible' : ''}`} style={style}>
          {text}
        </div>
      ) : (
        <div className={`tooltip ${showTooltip ? 'visible' : ''}`} style={style}>
          {text}
        </div>
      )}

      {children}
    </div>
  );
}

export default TooltipPanel;
