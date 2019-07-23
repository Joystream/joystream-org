import React from 'react';
import cn from 'classnames';
import { object, func, string } from 'prop-types';

import { ReactComponent as MoreRolesIcon } from '../../assets/svg/arrow-down.svg';

import './style.scss';

const propTypes = {
  onElementChange: func.isRequired,
  currentElement: string.isRequired,
  data: object.isRequired,
};

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.linksRefs = [];
  }

  state = {
    isOpen: false,
  };

  componentDidMount() {
    const { currentElement } = this.props;

    this.setState({
      activeLink: this.linksRefs[currentElement],
    });
  }

  toggleMenu = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  };

  render() {
    const { isOpen } = this.state;
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
              const Icon = data[key].icon;

              return (
                <div className="Sidebar__group" key={data[key].title}>
                  <div className="Sidebar__heading">
                    <Icon className="Sidebar__state-icon" />
                    <p className="Sidebar__title">{data[key].title}</p>
                  </div>

                  {data[key].links.map(({ ref, label }) => (
                    <button
                      className={cn('Sidebar__link', {
                        'Sidebar__link--active':
                          this.state.activeLink === this.linksRefs[ref],
                      })}
                      key={ref}
                      ref={linksRefs => (this.linksRefs[ref] = linksRefs)}
                      onClick={() => {
                        onElementChange(this.linksRefs[ref]);
                      }}
                    >
                      {label}
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
