import React, { useContext, useState } from 'react';
import cn from 'classnames';
import { bool, array } from 'prop-types';

import { ScrollContext } from '../_enhancers/ScrollContext';
import Link from '../Link';

import { ReactComponent as Logo } from '../../assets/svg/logo-white.svg';

import { links as defaultLinks } from './data';

import './style.scss';

const propTypes = {
  light: bool,
  links: array,
};

const defaultProps = {
  light: false,
  links: defaultLinks,
};

const Navbar = ({ light, links }) => {
  const [isOpen, setIsOpen] = useState(false);

  const context = useContext(ScrollContext);
  const { isScrollUp } = context;

  return (
    <nav className={cn('Navbar', { 'Navbar--hidden': !isScrollUp, 'Navbar--light': light })}>
      <div className="Navbar__container">
        <Link to="/">
          <Logo className="Navbar__logo" />
        </Link>

        <div
          className={cn('Navbar__links', {
            'Navbar__links--open': isOpen,
          })}
        >
          {links.map(({ label, isButton, ...link }) => (
            <Link
              className={cn('Navbar__link', {
                'Navbar__link--button': isButton,
              })}
              activeClassName="Navbar__link--active"
              key={label}
              {...link}
            >
              {label}
            </Link>
          ))}
        </div>

        <div
          className={cn('Navbar__trigger', {
            'Navbar__trigger--active': isOpen,
          })}
          onClick={() => setIsOpen(!isOpen)}
          role="presentation"
        />
      </div>
    </nav>
  );
};

Navbar.propTypes = propTypes;
Navbar.defaultProps = defaultProps;

export default Navbar;