import React from 'react';
import cn from 'classnames';

import { ReactComponent as Logo } from '../../assets/svg/logo-white.svg';

import Link from '../Link';

import { links } from './data';

import './style.scss';

class Navbar extends React.Component {
  state = {
    isOpen: false,
    scrollPosition: 0,
    isVisible: true,
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const { scrollPosition } = this.state;

    const currentScrollPos = window.pageYOffset;
    const isVisible = scrollPosition > currentScrollPos;

    this.setState({
      scrollPosition: currentScrollPos,
      isVisible,
    });
  };

  toggleMenu = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  };

  render() {
    const { isOpen, isVisible } = this.state;

    return (
      <nav className={cn('Navbar', { 'Navbar--hidden': !isVisible })}>
        <div className="Navbar__container">
          <Link to="/">
            <Logo className="Navbar__logo" />
          </Link>

          <div className={cn('Navbar__links', { 'Navbar__links--open': isOpen })}>
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
    );
  }
}

export default Navbar;
