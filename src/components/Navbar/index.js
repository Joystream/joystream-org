import React from 'react';
import cn from 'classnames';

import { ScrollConsumer } from '../_enhancers/ScrollContext';
import Link from '../Link';

import { ReactComponent as Logo } from '../../assets/svg/logo-white.svg';

import { links } from './data';

import './style.scss';

class Navbar extends React.Component {
  state = {
    isOpen: false,
  };

  toggleMenu = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  };

  render() {
    const { isOpen } = this.state;

    return (
      <ScrollConsumer>
        {({ isScrollUp }) => (
          <nav className={cn('Navbar', { 'Navbar--hidden': !isScrollUp })}>
            <div className="Navbar__container">
              <Link to="/">
                <Logo className="Navbar__logo" />
              </Link>

              <div
                className={cn('Navbar__links', {
                  'Navbar__links--open': isOpen,
                })}
              >
                {links.map(link => (
                  <Link
                    className={cn('Navbar__link', {
                      'Navbar__link--highlighted': link.highlighted,
                    })}
                    activeClassName="Navbar__link--active"
                    key={link.label}
                    {...link}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div
                className={cn('Navbar__trigger', {
                  'Navbar__trigger--active': isOpen,
                })}
                onClick={this.toggleMenu}
                role="presentation"
              />
            </div>
          </nav>
        )}
      </ScrollConsumer>
    );
  }
}

export default Navbar;
