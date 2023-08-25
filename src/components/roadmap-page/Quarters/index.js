import React, { useState } from "react";
import Button from "../../Button";
import { useTranslation } from "react-i18next";
import cn from "classnames";

import "./style.scss";

import { ReactComponent as CopyLink } from "../../../assets/svg/copylink.svg";
import { useGetFileName } from "../../../utils/useAxios";

import { ReactComponent as Expand } from "../../../assets/svg/expand.svg";
import { ReactComponent as Check } from "../../../assets/svg/optioncheck.svg";
import QuartersListData from "../QuartersListData";
import TooltipPanel from "../../Tooltip";

const SelectOptions = ({ options, sendData }) => {
  const [isActive, setIsActive] = useState(false);
  const [isSelect, setIsSelect] = useState(0);

  const onSelectQuarters = (index) => {
    setIsSelect(index);
    // tooltip = options[index].name;
    sendData(options[index].period);
  };

  return (
    <>
      <div
        className={cn("Quarters__options-wrapper", {
          "Quarters__options-wrapper--active": isActive,
        })}
        onClick={() => setIsActive((prev) => !prev)}
        role="presentation"
      >
        <div className={"Quarters__options-item__label"}>
          <div className="Quarters__options-item__name">
            {options[isSelect].name}
          </div>
          <div className="Quarters__options-item__period">
            {options[isSelect].period.replace(/\.json/g, "")}
            {isSelect === 0 ? " (Current)" : " (Old)"}
          </div>
        </div>
        <div className="Quarters__expand__icon">
          <Expand
            className={cn("Quarters__expand-icon", {
              "Quarters__expand-icon--active": isActive,
            })}
          />
        </div>
        <div
          className={cn("Quarters__options__dropdown", {
            "Quarters__options__dropdown--active": isActive,
          })}
        >
          {options.map((label, index) => {
            return (
              <div
                role="button"
                key={index}
                className={cn("Quarters__options-item", {
                  "Quarters__options-item--light": index % 2 === 1,
                  "Quarters__options-item--active": isSelect === index,
                })}
                onClick={() => onSelectQuarters(index)}
                onKeyPress={() => onSelectQuarters(index)}
                tabIndex="0"
              >
                <div className="Quarters__options-item__label">
                  <div className="Quarters__options-item__name">
                    {label.name}
                  </div>
                  <div className="Quarters__options-item__period">
                    {label.period.replace(/\.json/g, "")}
                    {index === 0 ? " (Current)" : " (Old)"}
                  </div>
                </div>
                {isSelect === index ? (
                  <div className="Quarters__expand__icon">
                    <Check className="Quarters__options__check-icon" />
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

const Quarters = ({ names, gitLoading, gitError, data, file }) => {
  // const [filename, setFileName] = useState("Select Terms");

  let quartersSelects = [];

  if (names && !gitLoading && !gitError) {
    quartersSelects = names.fileNames.reverse().map((name, index) => ({
      name: "Version " + (index + 1).toString(),
      period: name,
    }));
  }

  const { t } = useTranslation();

  const getFileName = (res) => {
    file(res);
  };

  return (
    <div className="Quarters">
      <div className="Quarters__form-wrapper">
        <div className="Quarters__form">
          {names && !gitLoading && !gitError ? (
            <SelectOptions
              className="Quarters__form__select"
              options={quartersSelects}
              sendData={getFileName}
              t={t}
            />
          ) : (
            <div className="Quarters__options-wrapper">Loading ...</div>
          )}

          <TooltipPanel>
            <Button className="Quarters__form__button" name="subscribe">
              {t("roadmap.copysharinglink")}
              <CopyLink className="Quarters__form__linkicon" />
            </Button>
          </TooltipPanel>
        </div>
      </div>
      <QuartersListData data={data} />
    </div>
  );
};

export default Quarters;
