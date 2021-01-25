import React, { useContext, useEffect, useState } from 'react';
import cn from 'classnames';
import { bool, array } from 'prop-types';

import { ScrollContext } from '../_enhancers/ScrollContext';
import Link from '../Link';

import { ReactComponent as Logo } from '../../assets/svg/logo-white.svg';
import { ReactComponent as Expand } from '../../assets/svg/expand.svg';
import { ReactComponent as LinkIcon } from '../../assets/svg/link.svg';
import { ReactComponent as Arrow } from '../../assets/svg/arrow-down-small.svg';

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

const Dropdown = ({ scrollPosition, isScrollUp, label, links }) => {
  const INITIAL_SCROLLUP_VALUE = false;

  const [isActive, setIsActive] = useState(false);
  const [firstRender, setFirstRender] = useState(true);
  const [yOffset, setYOffset] = useState();

  useEffect(() => {

    if (isScrollUp !== undefined && firstRender) {
      setFirstRender(isScrollUp === INITIAL_SCROLLUP_VALUE);
    }

    setIsActive(false);
  }, [isScrollUp, firstRender, yOffset]);

  useEffect(() => {
    const listener = e => setYOffset(document.body.getBoundingClientRect().y);

    window.addEventListener('scroll', listener);
    return () => {
      window.removeEventListener('scroll', listener);
    };
  });

  return (
    <div
      className={cn('Navbar__link-wrapper', {
        'Navbar__link-wrapper--active': isActive && (firstRender || isScrollUp),
      })}
    >
      <p
        style={{ display: 'flex' }}
        onClick={() => setIsActive(prev => !prev)}
        role="presentation"
        className="Navbar__link"
      >
        {label}
        <Expand
          className={cn('Navbar__link__expand-icon', {
            'Navbar__link__expand-icon--active': isActive && (firstRender || isScrollUp),
          })}
        />
      </p>
      <div
        className={cn('Navbar__dropdown', {
          'Navbar__dropdown--active': isActive && (firstRender || isScrollUp),
        })}
      >
        {links.map(({ label, ...link }) => (
          <div key={label + '--wrapper'} className="Navbar__dropdown-item">
            <Link
              key={label}
              className="Navbar__dropdown-link"
              style={{ display: link?.to ? 'block' : 'inline-flex' }}
              {...link}
            >
              {label}
            </Link>
            {link?.href && (
              <LinkIcon
                className={cn('Navbar__link__link-icon', {
                  'Navbar__link__link-icon--active': isActive && (firstRender || isScrollUp),
                })}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const Navbar = ({ light, links }) => {
  const [isOpen, setIsOpen] = useState(false);

  const context = useContext(ScrollContext);
  const { isScrollUp } = context;

  return (
    <nav className={cn('Navbar', { 'Navbar--hidden': !isScrollUp, 'Navbar--light': light })}>
      <div
        className={cn('Navbar__container', {
          'Navbar__container--active': isOpen,
        })}
      >
        <Link to="/">
          <Logo
            className={cn('Navbar__logo', {
              'Navbar__logo--active': isOpen,
            })}
          />
        </Link>

        <div
          className={cn('Navbar__links', {
            'Navbar__links--open': isOpen,
          })}
        >
          {links.map(({ label, isButton, links, ...link }) => {
            if (!links) {
              return (
                <Link
                  className={cn('Navbar__link', {
                    'Navbar__link--button': isButton,
                  })}
                  activeClassName="Navbar__link--active"
                  key={label}
                  {...link}
                >
                  {label}
                  {isButton && <Arrow className="Navbar__arrow-icon" />}
                </Link>
              );
            } else {
              return <Dropdown key={label} isScrollUp={isScrollUp} label={label} links={links} />;
            }
          })}
        </div>

        <div
          className={cn('Navbar__trigger', {
            'Navbar__trigger--active': isOpen,
          })}
          onClick={() => setIsOpen(!isOpen)}
          role="presentation"
        ></div>
      </div>
    </nav>
  );
};

Navbar.propTypes = propTypes;
Navbar.defaultProps = defaultProps;

export default Navbar;
