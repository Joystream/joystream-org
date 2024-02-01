import React from 'react';
import cn from 'classnames';
import { func, string, oneOf } from 'prop-types';

import WidgetHeading from '../../WidgetHeading';
import ArrowButton from '../../ArrowButton';

import { ReactComponent as TwitterLogo } from '../../../../assets/svg/dashboard/twitter-logo.svg';
import { ReactComponent as DiscordLogo } from '../../../../assets/svg/dashboard/discord-logo.svg';
import { ReactComponent as TelegramLogo } from '../../../../assets/svg/dashboard/telegram-logo.svg';
import tweetScoutLogo from '../../../../assets/images/dashboard/tweetscout-logo.png';

import './style.scss';

const primaryStatsPropTypes = {
  SocialMediaLogo: func.isRequired,
  socialMediaName: string.isRequired,
  mainStats: string.isRequired,
  supplementalStats: string.isRequired,
  statsBlockBgColor: oneOf(['blue-bg', 'purple-bg']),
};

const PrimaryStats = ({ SocialMediaLogo, socialMediaName, mainStats, supplementalStats, statsBlockBgColor }) => {
  return (
    <div
      className={cn('dashboard-community-social-media__primary-stats-block', {
        [statsBlockBgColor]: !!statsBlockBgColor,
      })}
    >
      <div className="dashboard-community-social-media__stats-container">
        <SocialMediaLogo />
        <h4 className="dashboard-community-social-media__name">{socialMediaName}</h4>
        <p className="dashboard-community-social-media__main-stats font-size-increased">{mainStats}</p>
        <p className="dashboard-community-social-media__supplemental-stats">{supplementalStats}</p>
      </div>
    </div>
  );
};

PrimaryStats.propTypes = primaryStatsPropTypes;

const tweetScoutLink = 'https://tweetscout.io/';

const SocialMedia = () => {
  return (
    <div className="dashboard-community-social-media">
      <PrimaryStats
        SocialMediaLogo={TwitterLogo}
        socialMediaName="Twitter / X"
        mainStats="57.2K"
        supplementalStats="+2% Last month"
        statsBlockBgColor="blue-bg"
      />

      <PrimaryStats
        SocialMediaLogo={DiscordLogo}
        socialMediaName="Discord"
        mainStats="57.2K"
        supplementalStats="+2% Last month"
        statsBlockBgColor="purple-bg"
      />

      <div className="dashboard-community-social-media__secondary-stats-block">
        <div className="dashboard-community-social-media__secondary-stats-container">
          <TelegramLogo />
          <h4 className="dashboard-community-social-media__name">Telegram</h4>
          <p className="dashboard-community-social-media__main-stats">26.2K</p>
          <p className="dashboard-community-social-media__supplemental-stats">+2% Last month</p>
        </div>
      </div>

      <a href={tweetScoutLink} target="_blank" rel="noreferrer">
        <div className="dashboard-community-social-media__extra-stats-block">
          <div className="dashboard-community-social-media__extra-stats-container">
            <div className="dashboard-community-social-media__extra-stats-block-header-wrapper">
              <img
                src={tweetScoutLogo}
                alt="tweetscout-logo"
                className="dashboard-community-social-media__extra-stats-social-media-logo"
              />
              <WidgetHeading heading="Tweetscout score" headingWrapperCn="" />
            </div>
            <div className="dashboard-community-social-media__stats">
              <p className="dashboard-community-social-media__main-stats">411</p>
              <p className="dashboard-community-social-media__supplemental-stats">Level 2</p>
            </div>
            <ArrowButton text="Open tweetscout" />
          </div>
        </div>
      </a>
    </div>
  );
};

export default SocialMedia;
