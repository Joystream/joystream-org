import React from 'react';
import { Link } from 'gatsby-plugin-react-i18next';

import { ArrowButton } from '../../ArrowButton';

import EarnJOYCoinsVideoThumbnail from '../../../assets/images/index-page-earn-joy-coins-video-thumbnail.png';
import EarnJOYCoinsVideoPlayButton from '../../../assets/svg/index-page-joycoins-video-play-button.svg';

import './style.scss';

const EarnJOYCoins = ({ t }) => {
  return (
    <div className="IndexPage__earn-joy-coins-wrapper">
      <div className="IndexPage__earn-joy-coins">
        <div className="IndexPage__earn-joy-coins__video">
          <Link to="/start-here/what-is-joystream">
            <div className="IndexPage__earn-joy-coins__video__thumbnail-wrapper">
              <img alt=""  className="IndexPage__earn-joy-coins__video__thumbnail"src={EarnJOYCoinsVideoThumbnail} />
              <img alt=""  src={EarnJOYCoinsVideoPlayButton} className="IndexPage__earn-joy-coins__video__playbutton" />
            </div>
          </Link>
        </div>
        <div className="IndexPage__earn-joy-coins__info">
          <p className="IndexPage__earn-joy-coins__info__title">{t('landing.earnJoyCoins.title')}</p>  
          <p className="IndexPage__earn-joy-coins__info__subtitle">{t('landing.earnJoyCoins.subtitle')}</p>  
          <ArrowButton className="IndexPage__earn-joy-coins__info__button" text={t('landing.earnJoyCoins.button.text')} to="/start-here/what-is-joystream"/>
        </div>
      </div>
    </div>
  );
};

export default EarnJOYCoins;
