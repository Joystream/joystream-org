import React from "react";
import cn from "classnames";
import { ReactComponent as Close } from "../../assets/svg/postponed.svg";

import "./style.scss";
function Banner({ icon, title, information, label, className, close }) {
  return (
    <div className={cn("Banner", className)}>
      <div className="Banner__head">
        <span className="Banner__icon">{icon}</span>
        <span className="Banner__title">{title}</span>
        <button className="Banner__close" onClick={close}>
          <Close className="Banner__icon" />
        </button>
      </div>
      <div className="Banner__content">{information}</div>
      {label}
    </div>
  );
}

export default Banner;
