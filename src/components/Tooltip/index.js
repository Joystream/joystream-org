import React, { useState } from "react";

import "./style.scss";

function TooltipPanel({ children, text, state }) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className="tooltip-panel"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {state !== undefined ? (
        <div className={`tooltip ${state ? "visible" : ""}`}>{text}</div>
      ) : (
        <div className={`tooltip ${showTooltip ? "visible" : ""}`}>{text}</div>
      )}
      <div
        className={`tooltip ${
          state !== null ? state : showTooltip ? "visible" : ""
        }`}
      >
        {text}
      </div>
      {children}
    </div>
  );
}

export default TooltipPanel;
