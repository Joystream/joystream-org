import React, { useState, useContext, useRef, useEffect } from 'react';
import cn from 'classnames';
import { array, func, string, bool } from 'prop-types';
import stickybits from 'stickybits';

import { ScrollContext } from '../_enhancers/ScrollContext';

import './style.scss';

const propTypes = {
  onElementChange: func.isRequired,
  currentElement: string.isRequired,
  data: array.isRequired,
  light: bool,
};

const BrandSidebar = ({ data, onElementChange, currentElement }) => {
  const [isOpen, setIsOpen] = useState(false);
  const context = useContext(ScrollContext);
  const { isScrollUp } = context;
  const sidebarRef = useRef();

  useEffect(() => {
    stickybits(sidebarRef.current, { noStyles: true });
  }, []);

  return (
    <aside
      ref={sidebarRef}
      className={cn('BrandSidebar', {
        'BrandSidebar--onTop': !isScrollUp,
        'BrandSidebar--open': isOpen,
      })}
    >
      <div className="BrandSidebar__trigger" onClick={() => setIsOpen(!isOpen)} role="presentation">
        <div className="BrandSidebar__trigger-icon">{'<-'}</div>
      </div>

      <div className="BrandSidebar__wrapper">
        <div className="BrandSidebar__container">
          {data.map(({ name, subSections }) => {
            return (
              <div className="BrandSidebar__group" key={name}>
                <div className="BrandSidebar__heading">
                  <p className="BrandSidebar__title">{name}</p>
                </div>

                {subSections.map(({ name, id }) => (
                  <button
                    className={cn('BrandSidebar__link', {
                      'BrandSidebar__link--active': currentElement === id,
                    })}
                    key={id}
                    onClick={() => {
                      onElementChange(id);
                      setIsOpen(!isOpen);
                    }}
                  >
                    {name}
                  </button>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

BrandSidebar.propTypes = propTypes;

export default BrandSidebar;
