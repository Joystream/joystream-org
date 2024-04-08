import React from 'react';

import OneKeyBackground from '../../assets/images/onekey.webp';
import { ReactComponent as CloseIcon } from '../../assets/svg/postponed.svg';

import './style.scss';

const OneKeyBanner = ({ shouldShow, setShouldShow }) => {
  const oneKeyBannerStyles = shouldShow ? {} : { display: 'none' };

  return (
    <div className="OneKeyBanner" style={oneKeyBannerStyles}>
      <div className="OneKeyBanner__content">
        <div className="OneKeyBanner__content__title">Joystream Hardware Wallet Sale is Now Live!</div>
        <div className="OneKeyBanner__content__subtitle">Learn more about limited edition OneKey Classic wallet</div>
      </div>
      <div className="OneKeyBanner__controls">
        <a href="https://blog.joystream.org/limited-edition-onekey-x-joystream/" target="_blank" rel="noreferrer">
          <div className="OneKeyBanner__controls__button">Learn More</div>
        </a>
        <CloseIcon className="OneKeyBanner__controls__close" onClick={() => setShouldShow()} />
      </div>
      <img src={OneKeyBackground} alt="OneKey" className="OneKeyBanner__background" />
    </div>
  );
};

export default OneKeyBanner;
