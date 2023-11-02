import React, { useContext, useEffect, useRef, useState } from 'react';
import cn from 'classnames';

import './style.scss';
import TooltipPanel from '../../Tooltip';
import MyContext from '../../../utils/useContext';
import scrollToActiveElement from '../../../utils/scrollToActiveElement';

import { iconMap } from '../../../data/quarters';

export let offset = 300;

function QuarterPanel({ data, glossaryPanel, t }) {
  const [activeItem, setActiveItem] = useState(0);
  const [activeText, setActiveText] = useState(0);
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
            <button class="QuarterPanel__main__underline__modal__button" id="${i}">${t(
          'roadmap.clickToLearnMore'
        )}</button>
          </span>
        </span>`
      );
    });
    return newStr;
  };

  useEffect(() => {
    // Scroll to element upon load if url contains hash
    const url = new URL(window.location.href);
    if (url.hash.includes('panel')) {
      const panel = url.hash.substring(1);
      scrollToActiveElement(panel);
    }
  }, []);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 550); // Adjust the breakpoint as per your requirements
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

  const activeItemsData = useRef([false, 0]);
  const activeTextIndex = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const timelineItems = document.querySelectorAll('.QuarterPanel__submain');
      const scroll = window.scrollY;
      const MOVING_CIRCLE_HEIGHT = 24;
      timelineItems.forEach((item, index) => {
        const itemTop = item.offsetTop;
        const itemHight = item.offsetHeight;
        if (index === 0 && scroll < itemTop - offset) {
          activeItemsData.current = [false, activeItemsData.current[1]];
        } else if (index === timelineItems.length - 1 && scroll > itemTop - offset + itemHight - MOVING_CIRCLE_HEIGHT) {
          activeItemsData.current = [false, activeItemsData.current[1]];
        } else if (scroll > itemTop - offset) {
          activeItemsData.current = [true, index];
        }
      });

      const timelineText = document.querySelectorAll('.QuarterPanel__main__rigth');
      timelineText.forEach((item, index) => {
        const itemTop = item.offsetTop;
        if (scroll > itemTop - offset) {
          // setActiveText(index);
          activeTextIndex.current = index;
        }
      });

      setDotActiveState(activeItemsData.current[0]);
      setActiveItem(activeItemsData.current[1]);
      setActiveText(activeTextIndex.current);

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
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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

  const getLink = milestoneIndex => {
    const url = new URL(window.location.href);
    const period = url.hash.substring(1);
    if (period) {
      navigator.clipboard.writeText(window.location.href.replace(period, `panel${milestoneIndex}`));
    } else {
      navigator.clipboard.writeText(window.location.href + `#panel${milestoneIndex}`);
    }
  };

  const numberOfItems = data.quarters.reduce((acc, curr) => {
    return acc + curr.deliveryMilestones.length;
  }, 0);

  const isPanelAndRelatedActive = milestone =>
    (milestone.generalIndex === activeItem && dotActiveState) ||
    (activeItem === 0 && !dotActiveState && milestone.generalIndex === 0);

  console.log('RENDER');
  console.log('====================================');

  return (
    <div>
      {data.quarters.map((res, index) => {
        return (
          <div className="QuarterPanel__main" key={index}>
            <div className="QuarterPanel__main__rigth">
              <div
                className={cn('QuarterPanel__main__title', {
                  'QuarterPanel__main__title--active': index === activeText || activeText === data.quarters.length,
                })}
              >
                <div className="QuarterPanel__main__subtitle">{res.year}</div>
                <div className="QuarterPanel__main__quarters">{res.id}</div>
              </div>
            </div>
            <div>
              {res.deliveryMilestones.map((milestone, deliveryMilestoneIndex) => {
                return (
                  <div
                    className="QuarterPanel__submain"
                    key={deliveryMilestoneIndex}
                    id={`panel${milestone.generalIndex}`}
                  >
                    <div className="QuarterPanel__main__timeline">
                      <div className="QuarterPanel__main__line__line" />
                      <div
                        className={cn('QuarterPanel__main__line__dot', {
                          'QuarterPanel__main__line__dot--active':
                            milestone.generalIndex === activeItem && dotActiveState,
                          'QuarterPanel__main__line__dot--hide': milestone.generalIndex < activeItem,
                          'QuarterPanel__main__line__dot--stick':
                            !dotActiveState && milestone.generalIndex === 0 && activeItem === 0,
                        })}
                      />
                    </div>

                    <div
                      className={cn('QuarterPanel__main__panel', {
                        'QuarterPanel__main__panel--active': isPanelAndRelatedActive(milestone),
                      })}
                    >
                      <div className="QuarterPanel__main__link">
                        <div
                          className={cn('QuarterPanel__main__playIcon', {
                            'QuarterPanel__main__playIcon--active': isPanelAndRelatedActive(milestone),
                          })}
                        >
                          <img
                            className={cn('mileston__icon', {
                              'mileston__icon--active': isPanelAndRelatedActive(milestone),
                            })}
                            src={iconMap[milestone.icon]}
                            alt="Mileston icon"
                          />
                        </div>
                        <div className="QuarterPanel__main__linkIcon">
                          <TooltipPanel text={'Copy link to share'} activeText={'Link copied to the clipboard!'}>
                            <button
                              className="QuarterPanel__main__linkIcon__icon linkBtn"
                              onClick={() => getLink(milestone.generalIndex)}
                            />
                          </TooltipPanel>
                        </div>
                      </div>
                      <div className="QuarterPanel__main__panel__title">{milestone.title}</div>
                      <div
                        className="QuarterPanel__main__panel__content"
                        dangerouslySetInnerHTML={{
                          __html: contentReplace(milestone.Content),
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
            <div
              className={cn('QuarterPanel__main__line__dot', {
                'QuarterPanel__main__line__dot--hide': numberOfItems !== activeItem,
                'QuarterPanel__main__line__dot--active': numberOfItems === activeItem && dotActiveState,
              })}
            />
            <div className="QuarterPanel__main__line__line" />
            <div
              className={cn('QuarterPanel__main__line__dotbottom', {
                'QuarterPanel__main__line__dotbottom--active': 0 !== activeItem && !dotActiveState,
              })}
            />
          </div>
          <div
            className={cn('QuarterPanel__main__panel', {
              'QuarterPanel__main__panel--active': numberOfItems === activeItem || (activeItem >= 0 && !dotActiveState),
            })}
          >
            <div className="QuarterPanel__main__panel__content">{t('roadmap.morePlans')}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuarterPanel;
