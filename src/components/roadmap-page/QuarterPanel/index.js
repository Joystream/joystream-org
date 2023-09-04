import React, { useContext, useEffect, useState } from "react";
import cn from "classnames";
import ClipboardJS from "clipboard";

import { ReactComponent as PlayIcon } from "../../../assets/svg/icon-play.svg";

import "./style.scss";
import TooltipPanel from "../../Tooltip";
import scrollToIdElement from "../../../utils/scrollToIdElement";
import MyContext from "../../../utils/useContext";

const offset = 200;
function QuarterPanel({ data, loading, language, glossaryPanel }) {
  const [activeItem, setActiveItem] = useState(0);
  const [activeText, setActiveText] = useState(0);

  const glossary = useContext(MyContext);

  const contentReplace = (search) => {
    let newStr = search;

    glossary.forEach((char, i) => {
      newStr = newStr.replace(
        new RegExp(char.title.toLowerCase(), "g"),
        `<span class= "QuarterPanel__main__underline">
          <div class = "QuarterPanel__main__underline__modal">
            ${char.tooltip}
            <button class="QuarterPanel__main__underline__modal__button" id="${i}">Click to learn more</button>
          </div>
          <span >${char.title}</span>
        </span>`
      );
    });
    return newStr;
  };

  const result = data.language === language ? data : false;

  const url = new URL(window.location.href);
  const hash = url.hash.split("#")[2];

  useEffect(() => {
    const timeLineItems = document.querySelectorAll(
      ".QuarterPanel__main__line__dot"
    );

    const timeLinePanel = document.querySelectorAll(
      ".QuarterPanel__main__panel"
    );

    if (activeItem < timeLineItems.length) {
      timeLineItems[activeItem].classList.add(
        "QuarterPanel__main__line__dot--active"
      );
      timeLineItems[activeItem].classList.remove(
        "QuarterPanel__main__line__dot--hide"
      );
      timeLinePanel[activeItem].classList.add(
        "QuarterPanel__main__panel--active"
      );
    }

    if (activeItem > 0) {
      timeLineItems[activeItem - 1].classList.add(
        "QuarterPanel__main__line__dot--hide"
      );
      timeLinePanel[activeItem - 1].classList.remove(
        "QuarterPanel__main__panel--active"
      );
    }

    if (activeItem < timeLineItems.length - 1) {
      timeLineItems[activeItem + 1].classList.remove(
        "QuarterPanel__main__line__dot--active"
      );
      timeLinePanel[activeItem + 1].classList.remove(
        "QuarterPanel__main__panel--active"
      );
    }

    if (activeItem === 0 || activeItem === timeLineItems.length - 1) {
      timeLineItems[activeItem].classList.add(
        "QuarterPanel__main__line__dot--sticky"
      );
    } else {
      timeLineItems[0].classList.remove(
        "QuarterPanel__main__line__dot--sticky"
      );
    }
  }, [activeItem]);

  useEffect(() => {
    const timeLineText = document.querySelectorAll(
      ".QuarterPanel__main__title"
    );
    timeLineText[activeText].classList.add("QuarterPanel__main__title--active");
    if (activeText > 0) {
      timeLineText[activeText - 1].classList.remove(
        "QuarterPanel__main__title--active"
      );
    }
    if (activeText < timeLineText.length - 1) {
      timeLineText[activeText + 1].classList.remove(
        "QuarterPanel__main__title--active"
      );
    }
  }, [activeText]);

  useEffect(() => {
    const handleScroll = () => {
      const timelineItems = document.querySelectorAll(".QuarterPanel__submain");
      const scrollPosition = window.scrollY;

      timelineItems.forEach((item, index) => {
        const itemTop = item.offsetTop;
        if (scrollPosition > itemTop - offset) {
          setActiveItem(index);
        }
      });

      const timelineText = document.querySelectorAll(
        ".QuarterPanel__main__rigth"
      );
      timelineText.forEach((item, index) => {
        const itemTop = item.offsetTop;
        if (scrollPosition > itemTop - offset) {
          setActiveText(index);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    if (hash) {
      scrollToIdElement(hash);
    }
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hash]);

  useEffect(() => {
    const elements = document.querySelectorAll(
      ".QuarterPanel__main__underline__modal__button"
    );

    const handleClick = (i) => {
      const id = i.target.id;
      glossaryPanel(id);
    };
    elements.forEach((element) => {
      element.addEventListener("click", handleClick);
    });
    return () => {
      elements.forEach((element) => {
        element.removeEventListener("click", handleClick);
      });
    };
  }, []);

  const getLink = (index, k) => {
    const url = new URL(window.location.href);
    const period = url.hash.split("#")[2];

    if (period) {
      url.hash = `panel${index}_${k}`;
      window.location.href = window.location.href.replace(
        period,
        `panel${index}_${k}`
      );
    } else {
      window.location.href = window.location.href + `#panel${index}_${k}`;
    }

    const clipboard = new ClipboardJS(".linkBtn");
    clipboard.on("success", () => {
      alert("Successfully!");
      clipboard.destroy();
    });
    clipboard.on("error", () => {
      alert("Failed to copy!");
      clipboard.destroy();
    });
  };

  if (!result) return <></>;

  if (loading) {
    return (
      <div className="QuarterPanel__main">
        <div className="QuarterPanel__main__title">
          <div className="QuarterPanel__main__subtitle__loading" />
          <div className="QuarterPanel__main__discription__loading" />
        </div>
        <div className="QuarterPanel__main__timeline">
          <div className="QuarterPanel__main__line"></div>
        </div>
        <div>
          <div className="QuarterPanel__main__panel__loading"></div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {result.quarters.map((res, index) => {
        return (
          <div className="QuarterPanel__main" key={index}>
            <div className="QuarterPanel__main__rigth">
              <div className="QuarterPanel__main__title">
                <div className="QuarterPanel__main__subtitle">{data.year}</div>
                <div className="QuarterPanel__main__quarters">{res.id}</div>
              </div>
            </div>
            <div>
              {res.deliveryMilestones.map((milestones, k) => {
                return (
                  <div
                    className="QuarterPanel__submain"
                    key={k}
                    id={`panel${index}_${k}`}
                  >
                    <div className="QuarterPanel__main__timeline">
                      <div className="QuarterPanel__main__line__dot" />
                      <div className="QuarterPanel__main__line" />
                    </div>

                    <div className="QuarterPanel__main__panel">
                      <div className="QuarterPanel__main__link">
                        <div className="QuarterPanel__main__playIcon">
                          <PlayIcon />
                        </div>
                        <div className="QuarterPanel__main__linkIcon">
                          <TooltipPanel text={"Copy link to share"}>
                            <button
                              className="QuarterPanel__main__linkIcon__icon linkBtn"
                              data-clipboard-text={window.location.href}
                              onClick={() => getLink(index, k)}
                            />
                          </TooltipPanel>
                        </div>
                      </div>
                      <div className="QuarterPanel__main__panel__title">
                        {milestones.title}
                      </div>
                      <div
                        className="QuarterPanel__main__panel__content"
                        dangerouslySetInnerHTML={{
                          __html: contentReplace(milestones.Content),
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default QuarterPanel;
