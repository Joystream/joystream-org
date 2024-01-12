import React, { useContext } from 'react';
import { Link } from 'gatsby';
import cn from 'classnames';
import { string, func } from 'prop-types';

import { ScrollContext } from '../_enhancers/ScrollContext';

import { ReactComponent as ArrowBack } from '../../assets/svg/dashboard/arrow-back.svg';
import { ReactComponent as GleevLogo } from '../../assets/svg/dashboard/gleev-logo.svg';
import { ReactComponent as ChatButtonIcon } from '../../assets/svg/dashboard/chat-button-icon.svg';

import { anchors } from './data';
import './style.scss';

const propTypes = {
  activeAnchor: string.isRequired,
  onAnchorClick: func.isRequired,
};

const DashboardHeader = ({ activeAnchor, onAnchorClick }) => {
  const scrollContext = useContext(ScrollContext);
  const { isScrollUp } = scrollContext;

  const onButtonBackClick = () => {};
  const onButtonChatClick = () => {};

  return (
    <header className="dashboard-header">
      <div className="dashboard-header__wrapper">
        <div className="dashboard-header__container">
          <button className="dashboard-header__button dashboard-header__button-back" onClick={onButtonBackClick}>
            <ArrowBack />
            <span className="dashboard-header__button-back_short-text">Back</span>
            <span className="dashboard-header__button-back_text">Back to Joystream.org</span>
          </button>
          <Link to={'/'}>
            <GleevLogo />
          </Link>
          <button className="dashboard-header__button dashboard-header__button-chat" onClick={onButtonChatClick}>
            <span className="dashboard-header__button-chat_short-text">Chat</span>
            <span className="dashboard-header__button-chat_text">Chat with Joystream team</span>
            <ChatButtonIcon className="dashboard-header__button-chat_icon" />
          </button>
        </div>
      </div>
      {/* TODO: Nav to be hidden on scroll down and shown on scroll up */}

      <nav className={cn('dashboard-header__nav', { 'nav-hidden': !isScrollUp })}>
        <ul className="dashboard-header__nav-list">
          {anchors.map(anchor => (
            <li key={anchor} className="dashboard-header__nav-list-item">
              {/* TODO: AnchorLink to be added to wrap a button */}
              <button
                className={cn('dashboard-header__nav-button', { active: anchor === activeAnchor })}
                onClick={() => onAnchorClick(anchor)}
              >
                {anchor}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

DashboardHeader.propTypes = propTypes;

export default DashboardHeader;
