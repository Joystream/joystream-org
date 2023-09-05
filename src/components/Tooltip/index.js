import React, { useState } from "react";

import "./style.scss";

function TooltipPanel({ children, text, state, activeText, activeState }) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className="tooltip-panel"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {activeState ? (
        <div className={`tooltip ${activeState ? "visible" : ""}`}>
          {activeText}
        </div>
      ) : state !== undefined ? (
        <div className={`tooltip ${state ? "visible" : ""}`}>{text}</div>
      ) : (
        <div className={`tooltip ${showTooltip ? "visible" : ""}`}>{text}</div>
      )}

      {children}
    </div>
  );
}

export default TooltipPanel;
