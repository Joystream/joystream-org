import React, { useEffect, useRef, useState } from "react";
import cn from "classnames";

import { ReactComponent as PlayIcon } from "../../../assets/svg/icon-play.svg";
import { ReactComponent as LinkIcon } from "../../../assets/svg/connect_disable.svg";
import "./style.scss";

const offset = 200;
function QuarterPanel({ data, loading, error, language }) {
  const [activeItem, setActiveItem] = useState(0);
  const [activeText, setActiveText] = useState(0);
  const [activeTimeLine, setActiveTimeLine] = useState(false);

  const result = data.language === language ? data : false;

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
          setActiveTimeLine(true);
        } else {
          setActiveTimeLine(false);
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
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
                  <div className="QuarterPanel__submain" key={k}>
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
                          <LinkIcon />
                        </div>
                      </div>
                      <div className="QuarterPanel__main__panel__title">
                        {milestones.title}
                      </div>
                      <div className="QuarterPanel__main__panel__content">
                        {milestones.Content}
                      </div>
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
