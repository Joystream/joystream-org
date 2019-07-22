import React from 'react';
import cn from 'classnames';

import { ReactComponent as MoreRolesIcon } from '../../assets/svg/arrow-down.svg';

import Link from '../Link';

import './style.scss';

class Sidebar extends React.Component {
  state = {
    isOpen: false,
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  toggleMenu = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  };

  render() {
    const { isOpen } = this.state;
    const { data } = this.props;

    return (
      <aside
        className={cn('Sidebar ', {
          'Sidebar--sticky': true,
        })}
      >
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

        <div
          className={cn('Sidebar__container', {
            'Sidebar__container--open': isOpen,
          })}
        >
          {Object.keys(data).map(key => {
            const Icon = data[key].icon;

            return (
              <div className="Sidebar__group">
                <div className="Sidebar__heading">
                  <Icon className="Sidebar__state-icon" />
                  <p className="Sidebar__title">{data[key].title}</p>
                </div>

                {data[key].links.map(item => (
                  <Link
                    className="Sidebar__link"
                    activeClassName="Sidebar__link--active"
                    key={item.label}
                    {...item}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            );
          })}
        </div>
      </aside>
    );
  }
}

export default Sidebar;
