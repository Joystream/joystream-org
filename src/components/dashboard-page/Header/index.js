import React, { useContext } from 'react';
import { Link } from 'gatsby';
import { useTransition, animated } from 'react-spring';
import cn from 'classnames';
import { string, func, bool } from 'prop-types';

import { ScrollContext } from '../../_enhancers/ScrollContext';
import Feature from '../../Feature';

import { ReactComponent as ArrowBack } from '../../../assets/svg/dashboard/arrow-back.svg';
import { ReactComponent as GleevLogo } from '../../../assets/svg/dashboard/gleev-logo.svg';
import { ReactComponent as ChatButtonIcon } from '../../../assets/svg/dashboard/chat-button-icon.svg';

import { anchors } from './data';
import './style.scss';

const propTypes = {
  activeAnchor: string.isRequired,
  onAnchorClick: func.isRequired,
  historyHidden: bool,
};

const DashboardHeader = ({ activeAnchor, onAnchorClick, historyHidden }) => {
  const scrollContext = useContext(ScrollContext);
  const { isScrollUp } = scrollContext;

  const transitions = useTransition(isScrollUp, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const visibleAnchors = anchors.filter(anchor => (historyHidden ? anchor !== 'History' : true));

  const onButtonChatClick = () => {};

  return (
    <header className="dashboard-header">
      <div className="dashboard-header__wrapper">
        <div className="dashboard-header__container">
          <Link to="/">
            <button className="dashboard-header__button dashboard-header__button-back">
              <ArrowBack />
              <span className="dashboard-header__button-back_short-text">Back</span>
              <span className="dashboard-header__button-back_text">Back to Joystream.org</span>
            </button>
          </Link>
          <Feature disabled>
            <Link to={'/'}>
              <GleevLogo />
            </Link>
            <button className="dashboard-header__button dashboard-header__button-chat" onClick={onButtonChatClick}>
              <span className="dashboard-header__button-chat_short-text">Chat</span>
              <span className="dashboard-header__button-chat_text">Chat with Joystream team</span>
              <ChatButtonIcon className="dashboard-header__button-chat_icon" />
            </button>
          </Feature>
        </div>
      </div>

      {transitions.map(
        ({ item, key, props }) =>
          item && (
            <animated.div key={key} style={props} className="dashboard-header__nav-wrapper">
              <nav className="dashboard-header__nav">
                <ul className="dashboard-header__nav-list">
                  {visibleAnchors.map(anchor => (
                    <li key={anchor} className="dashboard-header__nav-list-item">
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
            </animated.div>
          )
      )}
    </header>
  );
};

DashboardHeader.propTypes = propTypes;

export default DashboardHeader;
