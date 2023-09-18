import React from "react";
import { ReactComponent as LeftArrow } from "../../../assets/svg/left_arrow.svg";

import "./style.scss";

function GlossaryHead({ head, onclick }) {
  return (
    <div className="GlossaryHead">
      <button className="GlossaryHead__roadmap" onClick={onclick}>
        Roadmap{" "}
      </button>
      <LeftArrow />
      <span className="GlossaryHead__content">{head}</span>
    </div>
  );
}

export default GlossaryHead;
