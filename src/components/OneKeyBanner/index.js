import React, { useState, useEffect } from 'react';

import OneKeyBackground from '../../assets/images/onekey.webp';
import { ReactComponent as CloseIcon } from '../../assets/svg/postponed.svg';

import './style.scss';

const ONE_KEY_LOCAL_STORAGE_KEY = 'JOYSTREAM::showOneKeyBanner';

const OneKeyBanner = () => {
  const [shouldShow, setShouldShow] = React.useState(true);

  useEffect(() => {
    if (shouldShow === false && typeof window !== 'undefined') {
      window.localStorage.setItem(ONE_KEY_LOCAL_STORAGE_KEY, false);
    }
  }, [shouldShow]);

  const localStorageShouldNotShow =
    typeof window !== 'undefined' && window.localStorage.getItem(ONE_KEY_LOCAL_STORAGE_KEY) === 'false';

  if (localStorageShouldNotShow || !shouldShow) return null;

  return (
    <div className="OneKeyBanner">
      <div className="OneKeyBanner__content">
        <div className="OneKeyBanner__content__title">Joystream Hardware Wallet Sale is Now Live!</div>
        <div className="OneKeyBanner__content__subtitle">Learn more about limited edition OneKey Classic wallet</div>
      </div>
      <div className="OneKeyBanner__controls">
        <a href="https://blog.joystream.org/limited-edition-onekey-x-joystream/" target="_blank" rel="noreferrer">
          <div className="OneKeyBanner__controls__button">Learn More</div>
        </a>
        <CloseIcon
          className="OneKeyBanner__controls__close"
          onClick={() => {
            setShouldShow(false);
          }}
        />
      </div>
      <img src={OneKeyBackground} alt="OneKey" className="OneKeyBanner__background" />
    </div>
  );
};

export default OneKeyBanner;
