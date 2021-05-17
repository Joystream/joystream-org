import React, { useRef, useState, useEffect } from 'react';
import cn from 'classnames';

const ICON_HEIGHT = 76;
const ICON_WIDTH = 76;
const ICON_WRAPPER_HEIGHT = 92;
const ICON_WRAPPER_WIDTH = 309;
const WRAPPER_TO_ICON_PADDING = 8;

const EmployeeIcon = ({ Icon, name, wrapperRef, jobTitle, color, windowWidth }) => {
  const iconRef = useRef();
  const [hoveredIcon, setHoveredIcon] = useState(false);
  const [hoveredWrapper, setHoveredWrapper] = useState(false);
  const [iconWrapperPosition, setIconWrapperPosition] = useState({});

  useEffect(() => {
    if (hoveredWrapper || hoveredIcon && wrapperRef && iconRef) {
      const iconOffsetLeft = iconRef?.current?.offsetLeft;
      const iconOffsetTop = iconRef?.current?.offsetTop;
      const wrapperWidth = wrapperRef?.current?.clientWidth;

      console.log(iconOffsetLeft > wrapperWidth / 2);

      if (iconOffsetLeft > wrapperWidth / 2) {
        setIconWrapperPosition({
          left: `${iconOffsetLeft - ICON_WRAPPER_WIDTH + WRAPPER_TO_ICON_PADDING + ICON_WIDTH}px`,
          top: `${iconOffsetTop - (ICON_WRAPPER_HEIGHT - ICON_HEIGHT) / 2}px`,
          paddingLeft: '20px',
        });
      } else {
        setIconWrapperPosition({
          left: `${iconOffsetLeft - WRAPPER_TO_ICON_PADDING}px`,
          top: `${iconOffsetTop - (ICON_WRAPPER_HEIGHT - ICON_HEIGHT) / 2}px`,
          paddingLeft: '100px',
        });
      }
    }
  }, [hoveredIcon, hoveredWrapper, windowWidth]);

  return (
    <>
      <div
        className={cn('AboutPage__list__icon-wrapper', {
          'AboutPage__list__icon-wrapper--active': hoveredIcon || hoveredWrapper,
        })}
        style={{ ...iconWrapperPosition }}
        onMouseEnter={() => setHoveredWrapper(true)}
        onMouseLeave={() => setHoveredWrapper(false)}
      >
        <p className="AboutPage__list__icon-wrapper__name">{name}</p>
        <p className="AboutPage__list__icon-wrapper__job-title">{jobTitle}</p>
      </div>
      <div ref={iconRef} style={{ zIndex: hoveredIcon || hoveredWrapper ? 1 : 0 }}>
        <Icon
          onMouseEnter={() => setHoveredIcon(true)}
          onMouseLeave={() => setHoveredIcon(false)}
          className="AboutPage__list__icon"
          style={hoveredIcon ||  hoveredWrapper ? color : {}}
        />
      </div>
    </>
  );
};

export default EmployeeIcon;