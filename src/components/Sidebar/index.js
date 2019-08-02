import React, { useState, useContext, useRef, useEffect } from 'react';
import cn from 'classnames';
import { object, func, string } from 'prop-types';
import stickybits from 'stickybits';

import { ScrollContext } from '../_enhancers/ScrollContext';

import { ReactComponent as MoreRolesIcon } from '../../assets/svg/arrow-down.svg';
import { ReactComponent as TickImage } from '../../assets/svg/tick.svg';
import { ReactComponent as UpcomingImage } from '../../assets/svg/upcoming.svg';

import './style.scss';

const propTypes = {
  onElementChange: func.isRequired,
  currentElement: string.isRequired,
  data: object.isRequired,
};

const Sidebar = ({ data, onElementChange, currentElement }) => {
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
      className={cn('Sidebar', {
        'Sidebar--onTop': !isScrollUp,
      })}
    >
      <div
        className={cn('Sidebar__trigger', {
          'Sidebar__trigger--active': isOpen,
        })}
        onClick={() => setIsOpen(!isOpen)}
        role="presentation"
      >
        <MoreRolesIcon className="Sidebar__trigger-icon" />
        View all Roles
      </div>
      <div
        className={cn('Sidebar__wrapper', {
          'Sidebar__wrapper--open': isOpen,
        })}
      >
        <div
          className={cn('Sidebar__container', {
            'Sidebar__container--open': isOpen,
          })}
        >
          {Object.keys(data).map(key => {
            const Icon = key === 'active' ? TickImage : UpcomingImage;
            const title = key === 'active' ? 'Active roles' : 'Upcoming roles';

            return (
              <div className="Sidebar__group" key={title}>
                <div className="Sidebar__heading">
                  <Icon className="Sidebar__state-icon" />
                  <p className="Sidebar__title">{title}</p>
                </div>

                {data[key].map(({ title, id }) => (
                  <button
                    className={cn('Sidebar__link', {
                      'Sidebar__link--active': currentElement === id,
                    })}
                    key={id}
                    onClick={() => {
                      onElementChange(id);
                      setIsOpen(!isOpen);
                    }}
                  >
                    {title}
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

Sidebar.propTypes = propTypes;

export default Sidebar;
