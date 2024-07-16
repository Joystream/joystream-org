import React from 'react';

import OneKeyBackground from '../../assets/images/tangem.webp';
import { ReactComponent as CloseIcon } from '../../assets/svg/postponed.svg';

import './style.scss';

const TangemBanner = ({ setShouldShow }) => {
  return (
    <div className="TangemBanner">
      <div className="TangemBanner__content">
        <div className="TangemBanner__content__title">Joystream x Tangem Hardware Wallet Sale is Now Live!</div>
        <div className="TangemBanner__content__subtitle">Learn more about limited edition Tangem wallet</div>
      </div>
      <div className="TangemBanner__controls">
        <a href="https://blog.joystream.org/p/6aa0abe7-3739-4841-bda9-4599e5c35971/" target="_blank" rel="noreferrer">
          <div className="TangemBanner__controls__button">Learn More</div>
        </a>
        <CloseIcon className="TangemBanner__controls__close" onClick={() => setShouldShow()} />
      </div>
      <img src={OneKeyBackground} alt="OneKey" className="TangemBanner__background" />
    </div>
  );
};

export default TangemBanner;
