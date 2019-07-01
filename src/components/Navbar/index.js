import React from 'react';
import cn from 'classnames';

import { ReactComponent as Logo } from '../../assets/svg/logo-white.svg';

import Link from '../Link';

import './style.scss';

const links = [
  {
    href: 'https://www.jsgenesis.com/#openings',
    label: 'We are hiring!',
    highlighted: true,
  },
  { href: 'https://blog.joystream.org/', label: 'Blog' },
  { href: 'https://blog.joystream.org/manifesto/', label: 'Manifesto' },
  {
    href: 'https://github.com/Joystream/whitepaper/blob/master/paper.pdf',
    label: 'Whitepaper',
  },
  { to: '/roles', label: 'Roles' },
  { href: 'https://github.com/Joystream/joystream', label: 'Repository' },
];

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

          <div
            className={cn('Navbar__links', { 'Navbar__links--open': isOpen })}
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
    );
  }
}

export default Navbar;
