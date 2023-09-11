import React, { useContext, useEffect, useState } from "react";
import ClipboardJS from "clipboard";

import "./style.scss";
import TooltipPanel from "../../Tooltip";
import scrollToIdElement from "../../../utils/scrollToIdElement";
import MyContext from "../../../utils/useContext";
import scrollToActiveElement from "../../../utils/scrollToActiveElement";

export const offset = 300;
function QuarterPanel({ data, loading, language, glossaryPanel }) {
  const [activeItem, setActiveItem] = useState(0);
  const [activeText, setActiveText] = useState(0);
  const [activeLinkIcon, setActiveLinkIcon] = useState(-1);
  const [dotActiveState, setDotActiveState] = useState(false);

  const glossary = useContext(MyContext);

  const contentReplace = (search) => {
    let newStr = search;

    glossary.forEach((char, i) => {
      newStr = newStr.replace(
        new RegExp(char.title.toLowerCase(), "g"),
        `<span class= "QuarterPanel__main__underline">
          <div class = "QuarterPanel__main__underline__modal">
            <div class = "QuarterPanel__main__underline__modal__title">${char.title}</div>
            <div class = "QuarterPanel__main__underline__modal__body">${char.tooltip}</div>
            <button class="QuarterPanel__main__underline__modal__button" id="${i}">Click to learn more</button>
          </div>
          <span >${char.title}</span>
        </span>`
      );
    });
    return newStr;
  };

  const result = data.language === language ? data : false;

  const timeLineItems = document.querySelectorAll(
    ".QuarterPanel__main__line__dot"
  );

  const timeLinePanel = document.querySelectorAll(".QuarterPanel__main__panel");

  const lastItem = document.querySelector(
    ".QuarterPanel__main__line__dotbottom"
  );

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

  console.log(activeItem);
  useEffect(() => {
    const handleScroll = () => {
      const timelineItems = document.querySelectorAll(".QuarterPanel__submain");
      const scrollPosition = window.scrollY;

      timelineItems.forEach((item, index) => {
        const itemTop = item.offsetTop;
        const itemHight = item.offsetHeight;
        if (index === 0 && scrollPosition < itemTop - offset) {
          setDotActiveState(false);
        } else if (
          index === timelineItems.length - 1 &&
          scrollPosition > itemTop - offset + itemHight
        ) {
          setDotActiveState(false);
        } else if (scrollPosition > itemTop - offset) {
          setActiveItem(index);
          setDotActiveState(true);
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

      if (
        scrollPosition >
          timelineText[activeText].offsetTop +
            timelineText[activeText].offsetHeight -
            offset -
            100 &&
        activeText < timelineText.length - 2
      ) {
        const opacity =
          scrollPosition -
          timelineText[activeText].offsetTop -
          timelineText[activeText].offsetHeight -
          100 -
          offset;

        timelineText[activeText].style.opacity = -opacity / 100 - 7;
      } else {
        timelineText[activeText].style.opacity = 1;
      }

      if (activeText === timelineText.length - 1)
        timelineText[activeText].style.opacity = 0;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  useEffect(() => {
    const url = new URL(window.location.href);
    const hash = url.hash.split("#")[2];

    if (hash) {
      const target = document.getElementById(hash);
      if (!target) return;
      scrollToActiveElement(hash);
    }

    const handleClick = (i) => {
      const id = i.target.id;
      glossaryPanel(id);
    };
    const elements = document.querySelectorAll(
      ".QuarterPanel__main__underline__modal__button"
    );
    elements.forEach((element) => {
      element.addEventListener("click", handleClick);
    });
    return () => {
      elements.forEach((element) => {
        element.removeEventListener("click", handleClick);
      });
    };
  }, [glossaryPanel]);

  const getLink = (k) => {
    const url = new URL(window.location.href);
    const period = url.hash.split("#")[2];
    if (typeof window !== "undefined") {
      if (period) {
        url.hash = `panel$${k}`;
        window.location.href = window.location.href.replace(
          period,
          `panel${k}`
        );
      } else {
        window.location.href = window.location.href + `#panel${k}`;
      }
    }

    const clipboard = new ClipboardJS(".linkBtn");

    clipboard.on("success", () => {
      setActiveLinkIcon(k);
      setTimeout(() => {
        setActiveLinkIcon(-1);
      }, 2000);
      clipboard.destroy();
    });
    clipboard.on("error", () => {
      clipboard.destroy();
    });
  };

  if (dotActiveState) {
    timeLineItems[activeItem].classList.add(
      "QuarterPanel__main__line__dot--active"
    );
    timeLinePanel[activeItem].classList.add(
      "QuarterPanel__main__panel--active"
    );

    timeLineItems[activeItem].classList.remove(
      "QuarterPanel__main__line__dot--hide"
    );

    if (activeItem > 0) {
      for (let i = 1; i < activeItem - 1; i++) {
        timeLineItems[i - 1].classList.add(
          "QuarterPanel__main__line__dot--hide"
        );
        timeLinePanel[i - 1].classList.remove(
          "QuarterPanel__main__panel--active"
        );
      }
    }
    if (activeItem < timeLineItems.length - 1) {
      timeLineItems[activeItem + 1].classList.remove(
        "QuarterPanel__main__line__dot--active"
      );
      timeLinePanel[activeItem + 1].classList.remove(
        "QuarterPanel__main__panel--active"
      );
    }
    timeLineItems[activeItem].classList.remove(
      "QuarterPanel__main__line__dot--stick"
    );
    lastItem.classList.remove("QuarterPanel__main__line__dot--stick");
  } else {
    if (timeLineItems.length !== 0 || timeLinePanel.length !== 0) {
      for (let i = 0; i < timeLineItems.length; i++) {
        timeLinePanel[i].classList.remove("QuarterPanel__main__panel--active");

        timeLineItems[i].classList.remove(
          "QuarterPanel__main__line__dot--active"
        );
      }

      if (activeItem === 0) {
        timeLineItems[activeItem].classList.add(
          "QuarterPanel__main__line__dot--stick"
        );
      } else if (activeItem + 1 === timeLineItems.length - 1) {
        lastItem.classList.add("QuarterPanel__main__line__dot--stick");
      }
    }
  }
  if (timeLineItems.length !== 0) {
    timeLinePanel[timeLinePanel.length - 1].classList.add(
      "QuarterPanel__main__panel--laster"
    );

    timeLineItems[timeLineItems.length - 1].classList.add(
      "QuarterPanel__main__line__dot--last"
    );
  }
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
                <div className="QuarterPanel__main__subtitle">{res.year}</div>
                <div className="QuarterPanel__main__quarters">{res.id}</div>
              </div>
            </div>
            <div>
              {res.deliveryMilestones.map((milestones, k) => {
                return (
                  <div
                    className="QuarterPanel__submain"
                    key={k}
                    id={`panel${k + index * res.deliveryMilestones.length}`}
                  >
                    <div className="QuarterPanel__main__timeline">
                      <div className="QuarterPanel__main__line__dot" />
                      <div className="QuarterPanel__main__line__line" />
                    </div>

                    <div className="QuarterPanel__main__panel">
                      <div className="QuarterPanel__main__link">
                        <div className="QuarterPanel__main__playIcon">
                          {milestones.icon ? (
                            <img src={milestones.icon} alt="Mileston icon" />
                          ) : (
                            <></>
                          )}
                        </div>
                        <div className="QuarterPanel__main__linkIcon">
                          <TooltipPanel
                            text={"Copy link to share"}
                            activeState={
                              k + index * res.deliveryMilestones.length ===
                              activeLinkIcon
                            }
                            activeText={"Link copied to the clipboard!"}
                          >
                            <button
                              className="QuarterPanel__main__linkIcon__icon linkBtn"
                              data-clipboard-text={window.location.href}
                              onClick={() =>
                                getLink(
                                  k + index * res.deliveryMilestones.length
                                )
                              }
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
      <div className="QuarterPanel__main">
        <div className="QuarterPanel__main__rigth">
          <div className="QuarterPanel__main__title">
            <div className="QuarterPanel__main__subtitle"></div>
            <div className="QuarterPanel__main__quarters"></div>
          </div>
        </div>
        <div className="QuarterPanel__submain">
          <div className="QuarterPanel__main__timeline">
            <div className="QuarterPanel__main__line__dot" />
            <div className="QuarterPanel__main__line__line" />
            <div className="QuarterPanel__main__line__dotbottom" />
          </div>
          <div className="QuarterPanel__main__panel">
            <div className="QuarterPanel__main__panel__content">
              More plans will be announced over time.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuarterPanel;
