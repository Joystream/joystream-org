import React, { useContext, useEffect, useState } from 'react';
import cn from 'classnames';

import './style.scss';
import TooltipPanel from '../../Tooltip';
import MyContext from '../../../utils/useContext';
import scrollToActiveElement from '../../../utils/scrollToActiveElement';

import { iconMap } from '../../../data/quarters';

export let offset = 300;

function QuarterPanel({ data, loading, glossaryPanel, t }) {
  const [activeItem, setActiveItem] = useState(0);
  const [activeText, setActiveText] = useState(0);
  const [activeLinkIcon, setActiveLinkIcon] = useState(-1);
  const [dotActiveState, setDotActiveState] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const glossary = useContext(MyContext);

  const contentReplace = search => {
    let newStr = search;

    glossary.forEach((char, i) => {
      newStr = newStr.replace(
        new RegExp(char.title, 'g'),
        `<span class= "QuarterPanel__main__underline">
          <span  class="QuarterPanel__main__underline__modal__context" id="${i}">${char.title}</span>
          <span class = "QuarterPanel__main__underline__modal">
            <div class = "QuarterPanel__main__underline__modal__title">${char.title}</div>
            <div class = "QuarterPanel__main__underline__modal__body">${char.tooltip}</div>
            <button class="QuarterPanel__main__underline__modal__button" id="${i}">${t("roadmap.clickToLearnMore")}</button>
          </span>
        </span>`
      );
    });
    return newStr;
  };

  const timeLineItems = document.querySelectorAll('.QuarterPanel__main__line__dot');

  const timeLinePanel = document.querySelectorAll('.QuarterPanel__main__panel');

  const lastItem = document.querySelector('.QuarterPanel__main__line__dotbottom');
  const handleResize = () => {
    setIsMobile(window.innerWidth < 568); // Adjust the breakpoint as per your requirements
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (isMobile) {
    offset = 200;
  } else {
    offset = 300;
  }

  useEffect(() => {
    if (!loading && typeof document !== 'undefined') {
      const timeLineText = document.querySelectorAll('.QuarterPanel__main__title');
      timeLineText[activeText].classList.add('QuarterPanel__main__title--active');
      if (activeText > 0) {
        timeLineText[activeText - 1].classList.remove('QuarterPanel__main__title--active');
      }
      if (activeText < timeLineText.length - 1) {
        timeLineText[activeText + 1].classList.remove('QuarterPanel__main__title--active');
      }
      if (activeText === timeLineText.length - 1) {
        timeLineText[activeText - 1].classList.add('QuarterPanel__main__title--active');
      }
    }
  }, [activeText]);

  useEffect(() => {
    if (!loading) {
      const handleScroll = () => {
        const timelineItems = document.querySelectorAll('.QuarterPanel__submain');
        const scroll = window.scrollY;
        const MOVING_CIRCLE_HEIGHT = 24;
        timelineItems.forEach((item, index) => {
          const itemTop = item.offsetTop;
          const itemHight = item.offsetHeight;
          if (index === 0 && scroll < itemTop - offset) {
            setDotActiveState(false);
          } else if (
            index === timelineItems.length - 1 &&
            scroll > itemTop - offset + itemHight - MOVING_CIRCLE_HEIGHT
          ) {
            setDotActiveState(false);
          } else if (scroll > itemTop - offset) {
            setActiveItem(index);
            setDotActiveState(true);
          }
        });

        const timelineText = document.querySelectorAll('.QuarterPanel__main__rigth');
        timelineText.forEach((item, index) => {
          const itemTop = item.offsetTop;
          if (scroll > itemTop - offset) {
            setActiveText(index);
          }
        });

        if (
          scroll > timelineText[activeText].offsetTop + timelineText[activeText].offsetHeight - offset - 200 &&
          activeText < timelineText.length - 2
        ) {
          const opacity =
            scroll - timelineText[activeText].offsetTop - timelineText[activeText].offsetHeight - 200 - offset;

          timelineText[activeText].style.opacity = -opacity / 100 - 9;
        } else {
          timelineText[activeText].style.opacity = 1;
        }

        if (activeText === timelineText.length - 1) timelineText[activeText].style.opacity = 0;
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  });

  useEffect(() => {
    const url = new URL(window.location.href);
    if (url.hash.includes('panel')) {
      const panel = url.hash.substring(1);
      scrollToActiveElement(panel);
    }
  }, []);

  const handleClick = i => {
    const scrollY = window.scrollY;
    localStorage.setItem('scrollPosition', scrollY);
    localStorage.setItem('href', window.location.href);
    const id = i.target.id;
    glossaryPanel(id);
  };

  useEffect(() => {
    const elements = document.querySelectorAll('.QuarterPanel__main__underline__modal__button');
    const element2 = document.querySelectorAll('.QuarterPanel__main__underline__modal__context');

    elements.forEach(element => {
      element.addEventListener('click', handleClick);
    });

    element2.forEach(element => {
      element.addEventListener('click', handleClick);
    });

    return () => {
      elements.forEach(element => {
        element.removeEventListener('click', handleClick);
      });

      element2.forEach(element => {
        element.removeEventListener('click', handleClick);
      });
    };
  }, [handleClick]);

  const getLink = k => {
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      const period = url.hash.substring(1);
      if (period) {
        url.hash = `panel$${k}`;
        navigator.clipboard.writeText(window.location.href.replace(period, `panel${k}`));
      } else {
        navigator.clipboard.writeText(window.location.href + `#panel${k}`);
      }
    }

    setActiveLinkIcon(k);
    setTimeout(() => {
      setActiveLinkIcon(-1);
    }, 2000);
  };

  if (dotActiveState) {
    timeLineItems[activeItem].classList.add('QuarterPanel__main__line__dot--active');
    timeLinePanel[activeItem].classList.add('QuarterPanel__main__panel--active');

    timeLineItems[activeItem].classList.remove('QuarterPanel__main__line__dot--hide');

    if (activeItem > 0) {
      for (let i = 1; i < activeItem - 1; i++) {
        timeLineItems[i - 1].classList.add('QuarterPanel__main__line__dot--hide');
        timeLinePanel[i - 1].classList.remove('QuarterPanel__main__panel--active');
      }
      timeLinePanel[activeItem - 1].classList.remove('QuarterPanel__main__panel--active');
    }

    if (activeItem < timeLineItems.length - 1) {
      timeLineItems[activeItem + 1].classList.remove('QuarterPanel__main__line__dot--active');
      timeLinePanel[activeItem + 1].classList.remove('QuarterPanel__main__panel--active');
    }
    timeLineItems[activeItem].classList.remove('QuarterPanel__main__line__dot--stick');

    lastItem.classList.remove('QuarterPanel__main__line__dot--stick');
  } else {
    if (timeLineItems.length !== 0 || timeLinePanel.length !== 0) {
      for (let i = 0; i < timeLineItems.length; i++) {
        if (i !== 0) timeLinePanel[i].classList.remove('QuarterPanel__main__panel--active');

        timeLineItems[i].classList.remove('QuarterPanel__main__line__dot--active');
      }

      if (activeItem === 0) {
        timeLinePanel[activeItem].classList.add('QuarterPanel__main__panel--active');
        timeLineItems[activeItem].classList.add('QuarterPanel__main__line__dot--stick');
      } else if (activeItem + 1 === timeLineItems.length - 1) {
        lastItem.classList.add('QuarterPanel__main__line__dot--stick');
      }

      if (activeItem === timeLineItems.length - 2) {
        timeLinePanel[activeItem + 1].classList.add('QuarterPanel__main__panel--active');
      }
    }
  }

  if (timeLineItems.length !== 0) {
    timeLinePanel[timeLinePanel.length - 1].classList.add('QuarterPanel__main__panel--laster');

    timeLineItems[timeLineItems.length - 1].classList.add('QuarterPanel__main__line__dot--last');
  }

  return (
    <div>
      {data.quarters.map((res, index) => {
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
                        <div
                          className={cn('QuarterPanel__main__playIcon', {
                            'QuarterPanel__main__playIcon--active':
                              k + index * data.quarters[index > 0 ? index - 1 : 0].deliveryMilestones.length ===
                              activeItem,
                          })}
                        >
                          <img
                            className={cn('mileston__icon', {
                              'mileston__icon--active':
                                k + index * data.quarters[index > 0 ? index - 1 : 0].deliveryMilestones.length ===
                                activeItem,
                            })}
                            src={iconMap[milestones.icon]}
                            alt="Mileston icon"
                          />
                        </div>
                        <div className="QuarterPanel__main__linkIcon">
                          <TooltipPanel
                            text={'Copy link to share'}
                            activeState={k + index * res.deliveryMilestones.length === activeLinkIcon}
                            activeText={'Link copied to the clipboard!'}
                          >
                            <button
                              className="QuarterPanel__main__linkIcon__icon linkBtn"
                              onClick={() => getLink(k + index * res.deliveryMilestones.length)}
                            />
                          </TooltipPanel>
                        </div>
                      </div>
                      <div className="QuarterPanel__main__panel__title">{milestones.title}</div>
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
        <div className="QuarterPanel__main__rigth" style={{ opacity: 0 }}>
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
            <div className="QuarterPanel__main__panel__content">{t("roadmap.morePlans")}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuarterPanel;
