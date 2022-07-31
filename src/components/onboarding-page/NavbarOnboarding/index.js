import React, { useContext, useState, useEffect } from 'react';
import cn from 'classnames';
import { bool } from 'prop-types';

import { ScrollContext } from '../../_enhancers/ScrollContext';
import Link from '../../Link';

import { ReactComponent as Logo } from '../../../assets/svg/logo-white.svg';
import { ReactComponent as Arrow } from '../../../assets/svg/arrow-down-small.svg';
import { ReactComponent as Expand } from '../../../assets/svg/expand.svg';
import { ReactComponent as LinkIcon } from '../../../assets/svg/link.svg';
import { ReactComponent as NavClose } from '../../../assets/svg/navbar-close.svg';
import { ReactComponent as NavHamburger } from '../../../assets/svg/navbar-hamburger.svg';
import { ReactComponent as UKCircle } from '../../../assets/svg/uk-flag-circle.svg';
import { ReactComponent as RoleIcon } from '../../../assets/svg/role-button-icon.svg';
import useContributors from '../../../utils/pages/onboarding/useContributors';
import useWindowDimensions from '../../../utils/useWindowDimensions';
import useLessonList from '../../../utils/pages/onboarding/useLessonList';

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
    const listener = e => setYOffset(document.body.getBoundingClientRect().y);

    window.addEventListener('scroll', listener);
    return () => {
      window.removeEventListener('scroll', listener);
    };
  });

  return (
    <>
      <div
        className={cn('NavbarOnboarding__link-wrapper', {
          'NavbarOnboarding__link-wrapper--active': isActive && (firstRender || isScrollUp || width <= 1200),
        })}
        onClick={() => setIsActive(prev => !prev)}
        role="presentation"
      >
        <p className="NavbarOnboarding__link">{t(label)}</p>
        <Expand
          className={cn('NavbarOnboarding__expand-icon', {
            'NavbarOnboarding__expand-icon--active': isActive && (firstRender || isScrollUp || width <= 1200),
          })}
        />
        <div
          className={cn('NavbarOnboarding__dropdown', {
            'NavbarOnboarding__dropdown--active': isActive && (firstRender || isScrollUp || width <= 1200),
          })}
        >
          {links.map(({ label, href, to }) => (
            <Link key={label} href={href} to={to}>
              <div className="NavbarOnboarding__dropdown-item">
                <p className="NavbarOnboarding__dropdown-item__text">{t(label)}</p>
                {href ? <LinkIcon className="NavbarOnboarding__link-icon" /> : null}
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
};

const defaultProps = {
  light: false,
};

const Navbar = ({
  light,
  t,
  showGetStarted,
  onShowGetStarted,
  showLessonList,
  onShowLessonList,
  showChatIntegrator,
  onShowChatIntegrator,
  role,
  lessonIndex,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { getContributorPageUrl } = useContributors();
  const [contributorPageUrl, setContributorPageUrl] = useState();
  const [nextVideo, setNextVideo] = useState({
    url: '',
    title: '',
  });
  const { getNextVideoUrl, getNextVideoTitle } = useLessonList();

  useEffect(() => {
    const title = getNextVideoTitle(lessonIndex, role);
    const url = getNextVideoUrl(lessonIndex, role);
    if (nextVideo.title !== title || nextVideo.url !== url) {
      setNextVideo({
        title,
        url,
      });
    }
  }, [role, lessonIndex, nextVideo.title, nextVideo.url, getNextVideoTitle, getNextVideoUrl]);

  useEffect(() => {
    setContributorPageUrl(getContributorPageUrl(role));
  }, [getContributorPageUrl, role]);

  const context = useContext(ScrollContext);
  const { isScrollUp } = context;

  return (
    <nav className={cn('NavbarOnboarding', { 'NavbarOnboarding--hidden': !isScrollUp, 'NavbarOnboarding--light': light, 'NavbarOnboarding--open': isOpen })}>
      <div className="NavbarOnboarding__container">
        <Link to="/">
          <Logo className={cn('NavbarOnboarding__logo', { 'NavbarOnboarding__logo--open': isOpen })} />
        </Link>

        <div
          className={cn('NavbarOnboarding__links', {
            'NavbarOnboarding__links--open': isOpen,
            'NavbarOnboarding__links--light': light,
          })}
        >
          <div className="NavbarOnboarding__button-lang" style={{ display: 'none' }}>
            <UKCircle />
          </div>
          {showLessonList && (
            <div className="NavbarOnboarding__button NavbarOnboarding__button-role" role="presentation" onClick={onShowLessonList}>
              <p className="NavbarOnboarding__button-text">{t('onboarding.page1.videoSection.button.lessonList.text')}</p>
              <Arrow className="NavbarOnboarding__button-arrow" />
            </div>
          )}
          {(lessonIndex !== 1 || role) && (
            <div className="NavbarOnboarding__button NavbarOnboarding__button-role" role="presentation" onClick={onShowGetStarted}>
              <RoleIcon className="NavbarOnboarding__button-role-icon" />
              <p className="NavbarOnboarding__button-text">{role ? role : t('onboarding.button.chooseRole.text')}</p>
            </div>
          )}
          {showGetStarted &&
            ((role || (!role && lessonIndex !== 1)) && nextVideo && nextVideo.url ? (
              <Link to={nextVideo.url}>
                <div className="NavbarOnboarding__button">
                  <p className="NavbarOnboarding__button-text">{t('onboarding.button.nextVideo.text')}</p>
                  <Arrow className="NavbarOnboarding__button-arrow" />
                </div>
              </Link>
            ) : role && contributorPageUrl ? (
              <Link to={contributorPageUrl}>
                <div className="NavbarOnboarding__button">
                  <p className="NavbarOnboarding__button-text">{t('onboarding.button.getStarted.text')}</p>
                  <Arrow className="NavbarOnboarding__button-arrow" />
                </div>
              </Link>
            ) : (
              <div className="NavbarOnboarding__button" role="presentation" onClick={onShowGetStarted}>
                <p className="NavbarOnboarding__button-text">
                  {nextVideo && nextVideo.url
                    ? t('onboarding.button.nextVideo.text')
                    : t('onboarding.button.getStarted.text')}
                </p>
                <Arrow className="NavbarOnboarding__button-arrow" />
              </div>
            ))}
          {showChatIntegrator && (
            <div
              className="NavbarOnboarding__button"
              role="presentation"
              onClick={() => {
                setIsOpen(false);
                onShowChatIntegrator();
              }}
            >
              <p className="NavbarOnboarding__button-text">{t('onboarding.button.chatIntegrator.text')}</p>
              <Arrow className="NavbarOnboarding__button-arrow" />
            </div>
          )}
        </div>

        <div
          className={cn('NavbarOnboarding__trigger', {
            'NavbarOnboarding__trigger--active': isOpen,
          })}
          onClick={() => setIsOpen(!isOpen)}
          role="presentation"
        >
          {isOpen ? <NavClose className="NavbarOnboarding__trigger__icon" /> : <NavHamburger className="NavbarOnboarding__trigger__icon" />}
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = propTypes;
Navbar.defaultProps = defaultProps;

export default Navbar;
