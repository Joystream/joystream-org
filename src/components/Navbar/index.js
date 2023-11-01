import React, { useContext, useState, useEffect } from 'react';
import cn from 'classnames';
import { bool, array } from 'prop-types';

import { ScrollContext } from '../_enhancers/ScrollContext';
import Link from '../Link';
import { CurrentPrimerSectionContext, sectionIDs } from '../../pages/primer';

import { ReactComponent as Logo } from '../../assets/svg/logo-white.svg';
import { ReactComponent as Arrow } from '../../assets/svg/arrow-down-small.svg';
import { ReactComponent as Expand } from '../../assets/svg/expand.svg';
import { ReactComponent as LinkIcon } from '../../assets/svg/link.svg';
import { ReactComponent as NavClose } from '../../assets/svg/navbar-close.svg';
import { ReactComponent as NavHamburger } from '../../assets/svg/navbar-hamburger.svg';

import useWindowDimensions from '../../utils/useWindowDimensions';

import { links as defaultLinks } from './data';

import './style.scss';

const Dropdown = ({ label, links, isScrollUp, t }) => {
  const [isActive, setIsActive] = useState(false);
  const [firstRender, setFirstRender] = useState(true);
  const [yOffset, setYOffset] = useState();

  const { width } = useWindowDimensions();

  useEffect(() => {
    if (yOffset !== undefined) {
      setFirstRender(false);
    }
  }, [yOffset]);

  useEffect(() => {
    const listener = (e) => setYOffset(document.body.getBoundingClientRect().y);

    window.addEventListener('scroll', listener);
    return () => {
      window.removeEventListener('scroll', listener);
    };
  });

  return (
    <>
      <div
        className={cn('Navbar__link-wrapper', {
          'Navbar__link-wrapper--active':
            isActive && (firstRender || isScrollUp || width <= 1200),
        })}
        onClick={() => setIsActive((prev) => !prev)}
        role="presentation"
      >
        <p className="Navbar__link">{t(label)}</p>
        <Expand
          className={cn('Navbar__expand-icon', {
            'Navbar__expand-icon--active':
              isActive && (firstRender || isScrollUp || width <= 1200),
          })}
        />
        <div
          className={cn('Navbar__dropdown', {
            'Navbar__dropdown--active':
              isActive && (firstRender || isScrollUp || width <= 1200),
          })}
        >
          {links.map(({ label, href, to }) => (
            <Link key={label} href={href} to={to}>
              <div className="Navbar__dropdown-item">
                <p className="Navbar__dropdown-item__text">{t(label)}</p>
                {href ? <LinkIcon className="Navbar__link-icon" /> : null}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

const propTypes = {
  light: bool,
  links: array,
};

const defaultProps = {
  light: false,
  links: defaultLinks,
};

const NavbarLinksSection = ({
  t,
  links,
  isScrollUp,
  isOpen,
  light,
  setIsOpen,
}) => {
  return (
    <>
      <div
        className={cn('Navbar__links', {
          'Navbar__links--open': isOpen,
          'Navbar__links--light': light,
        })}
      >
        {links.map(
          ({ label, isButton, isDropdown, links, href, to, language }) => {
            if (isDropdown) {
              return (
                <Dropdown
                  key={label}
                  t={t}
                  label={t(label)}
                  links={links}
                  isScrollUp={isScrollUp}
                />
              );
            }

            let children = (
              <div
                className={cn('Navbar__link-wrapper', {
                  'Navbar__link-wrapper--light': light,
                })}
              >
                <p className="Navbar__link">{t(label)}</p>
              </div>
            );

            if (isButton) {
              children = (
                <div
                  className={cn('Navbar__button', {
                    'Navbar__button--light': light,
                  })}
                >
                  <p className="Navbar__button-text">{t(label)}</p>
                  <Arrow className="Navbar__button-arrow" />
                </div>
              );
            }

            return (
              <Link key={label} to={to} href={href} language={language}>
                {children}
              </Link>
            );
          }
        )}
      </div>

      <div
        className={cn('Navbar__trigger', {
          'Navbar__trigger--active': isOpen,
        })}
        onClick={() => setIsOpen(!isOpen)}
        role="presentation"
      >
        {isOpen ? (
          <NavClose className="Navbar__trigger__icon" />
        ) : (
          <NavHamburger className="Navbar__trigger__icon" />
        )}
      </div>
    </>
  );
};

const NavbarPrimerSection = ({ t }) => {
  const currentSection = useContext(CurrentPrimerSectionContext);

  function goToSection(sectionIdName) {
    document.getElementById(sectionIdName).scrollIntoView({
      behavior: 'smooth',
    });
  }

  // PRIMER TODO: These seem to be wrong, clear it up with the team.

  return (
    <div className="Navbar__primer-section">
      <div className="Navbar__primer-section__section-items">
        <p
          className="Navbar__primer-section__section-item"
          role="presentation"
          onClick={() => goToSection(sectionIDs[1])}
        >
          {t('primer.navbar.futureOfVideo')}
        </p>
        <p
          className="Navbar__primer-section__section-item"
          role="presentation"
          onClick={() => goToSection(sectionIDs[2])}
        >
          {t('primer.navbar.whyWeExist')}
        </p>
        <p
          className="Navbar__primer-section__section-item"
          role="presentation"
          onClick={() => goToSection(sectionIDs[3])}
        >
          {t('primer.navbar.theSolution')}
        </p>
        <p
          className="Navbar__primer-section__section-item"
          role="presentation"
          onClick={() => goToSection(sectionIDs[4])}
        >
          {t('primer.navbar.governance')}
        </p>
        <p
          className="Navbar__primer-section__section-item"
          role="presentation"
          onClick={() => goToSection(sectionIDs[5])}
        >
          {t('primer.navbar.businessModel')}
        </p>
        <p
          className="Navbar__primer-section__section-item"
          role="presentation"
          onClick={() => goToSection(sectionIDs[6])}
        >
          {t('primer.navbar.nextSteps')}
        </p>
      </div>
      <div
        className={`Navbar__primer-section__progress-bar Navbar__primer-section__progress-bar--${currentSection}`}
      ></div>
    </div>
  );
};

const Navbar = ({ light, links, t, primer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const context = useContext(ScrollContext);
  const { isScrollUp } = context;

  const shouldRenderPrimerSection = primer != null;

  return (
    <nav
      className={cn('Navbar', {
        'Navbar--hidden': !isScrollUp,
        'Navbar--light': light,
        'Navbar--open': isOpen,
        'Navbar--primer': primer,
      })}
    >
      <div
        className={cn('Navbar__container', {
          'Navbar__container--primer': primer,
        })}
      >
        <Link to="/">
          <Logo
            className={cn('Navbar__logo', { 'Navbar__logo--open': isOpen })}
          />
        </Link>

        {shouldRenderPrimerSection ? (
          <NavbarPrimerSection t={t} />
        ) : (
          <NavbarLinksSection
            t={t}
            links={links}
            isScrollUp={isScrollUp}
            isOpen={isOpen}
            light={light}
            setIsOpen={setIsOpen}
          />
        )}
      </div>
    </nav>
  );
};

const SubDropdown = ({ label, links, isScrollup, t }) => {
  const [isActive, setIsActive] = useState(false);
  const [firstRender, setFirstRender] = useState(true);
  const [yOffset, setYOffset] = useState();
  const { width } = useWindowDimensions();

  useEffect(() => {
    if (yOffset !== undefined) {
      setFirstRender(false);
    }
  }, [yOffset]);

  useEffect(() => {
    const listener = (e) => setYOffset(document.body.getBoundingClientRect().y);

    window.addEventListener('scroll', listener);
    return () => {
      window.removeEventListener('scroll', listener);
    };
  });

  return (
    <>
      <div
        className={cn('Navbar__link-wrapper', {
          'Navbar__link-wrapper--active': isActive,
        })}
        onClick={() => setIsActive((prev) => !prev)}
        role="presentation"
      >
        <p className="Navbar__link">{t(label)}</p>
        <Expand
          className={cn('Navbar__expand-icon', {
            'Navbar__expand-icon--active': isActive,
          })}
        />
        <div
          className={cn('Navbar__dropdown', {
            'Navbar__dropdown--active': isActive,
          })}
        >
          {links.map(({ label, href, to }) => (
            <Link key={label} href={href} to={to}>
              <div className="Navbar__dropdown-item">
                <p className="Navbar__dropdown-item__text">{t(label)}</p>
                {href ? <LinkIcon className="Navbar__link-icon" /> : null}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

Navbar.propTypes = propTypes;
Navbar.defaultProps = defaultProps;

export default Navbar;
