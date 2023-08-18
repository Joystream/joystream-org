import React, { useEffect, useRef, useState } from 'react';
import cn from 'classnames';

import { ReactComponent as PlayIcon } from '../../../assets/svg/icon-play.svg';
import { ReactComponent as LinkIcon } from '../../../assets/svg/connect_disable.svg';
import './style.scss';

const scrollOffset = 300;
let bottom = 0;
function QuarterPanel({ data, loading, error, language }) {
  const [windowHeight, setWindowHeight] = useState(0);
  const [offsetTop, setOffsetTop] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollElement = useRef(null);

  const result = data.language === language ? data : false;

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

  const getWindowHeight = () => {
    setWindowHeight(
      window.innerHeight || document.documentElement.clientHeight
    );
  };

  const getOffsetTop = () => {
    setOffsetTop(scrollElement.current.getBoundingClientRect().top);
  };

  const elementInView = (el, offset = 0) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
      elementTop <=
      (window.innerHeight || document.documentElement.clientHeight) - offset
    );
  };

  const handleScrollAnimation = () => {
    if (elementInView(scrollElement.current, scrollOffset)) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };
  // useEffect(() => {
  //   getWindowHeight();
  //   getOffsetTop();

  //   window.addEventListener('resize', getWindowHeight);
  //   window.addEventListener('scroll', () => {
  //     getOffsetTop();
  //     handleScrollAnimation();
  //   });

  //   // // Cleanup function to remove the event listeners when the component unmounts
  //   // return () => {
  //   //   window.removeEventListener('resize', getWindowHeight);
  //   //   window.removeEventListener('scroll', handleScrollAnimation);
  //   // };
  // }, [handleScrollAnimation]); // Empty array means this effect runs once on mount and cleanup on unmount

  return (
    <div>
      {result.quarters.map((res, index) => {
        return (
          <div className="QuarterPanel__main" key={index}>
            <div className="QuarterPanel__main__title" ref={scrollElement}>
              <div
                className={cn('QuarterPanel__main__subtitle', {
                  'QuarterPanel__main__subtitle--active': isScrolled,
                })}
              >
                {data.year}
              </div>
              <div
                className={cn('QuarterPanel__main__quarters', {
                  'QuarterPanel__main__quarters--active': isScrolled,
                })}
              >
                {res.id}
              </div>
            </div>
            <div>
              {res.deliveryMilestones.map((milestones, k) => {
                return (
                  <div className="QuarterPanel__main" key={k + 'line'}>
                    <div className="QuarterPanel__main__timeline">
                      <div
                        className={cn('QuarterPanel__main__line__dot', {
                          'QuarterPanel__main__line__dot--active': isScrolled,
                        })}
                      />
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
