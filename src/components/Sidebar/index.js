import React from 'react';
import cn from 'classnames';
import { object, func, string } from 'prop-types';

import { ReactComponent as MoreRolesIcon } from '../../assets/svg/arrow-down.svg';
import { ReactComponent as TickImage } from '../../assets/svg/tick.svg';
import { ReactComponent as UpcomingImage } from '../../assets/svg/upcoming.svg';

import './style.scss';

const propTypes = {
  onElementChange: func.isRequired,
  currentElement: string.isRequired,
  data: object.isRequired,
};

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      activeLink: this.props.currentElement,
    };
  }

  toggleMenu = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  };

  render() {
    const { isOpen, activeLink } = this.state;
    const { data, onElementChange } = this.props;

    return (
      <aside className="Sidebar ">
        <div
          className={cn('Sidebar__trigger', {
            'Sidebar__trigger--active': isOpen,
          })}
          onClick={this.toggleMenu}
          role="presentation"
        >
          <MoreRolesIcon className="Sidebar__trigger-icon" />
          View all Roles
        </div>
        <div className="Sidebar__wrapper">
          <div
            className={cn('Sidebar__container', {
              'Sidebar__container--open': isOpen,
            })}
          >
            {Object.keys(data).map(key => {
              const Icon = key === 'active' ? TickImage : UpcomingImage;
              const title =
                key === 'active' ? 'Active roles' : 'Upcoming roles';

              return (
                <div className="Sidebar__group" key={title}>
                  <div className="Sidebar__heading">
                    <Icon className="Sidebar__state-icon" />
                    <p className="Sidebar__title">{title}</p>
                  </div>

                  {data[key].map(({ title }) => (
                    <button
                      className={cn('Sidebar__link', {
                        'Sidebar__link--active': activeLink === title,
                      })}
                      key={title}
                      onClick={() => {
                        onElementChange(title);
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
  }
}

Sidebar.propTypes = propTypes;

export default Sidebar;
