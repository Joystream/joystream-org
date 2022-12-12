import React from 'react';

import { ReactComponent as Bell } from '../../assets/svg/bell.svg';
import { ReactComponent as Arrow } from '../../assets/svg/arrow-down-small.svg';

import './style.scss';

const MainnetBanner = ({ t }) => (
  <div className="Banner-wrapper">
    <div className='Banner'>
      <p className="Banner__reminder">
        <Bell className="Banner__reminder__bell"/>
        {t("mainnetBanner.text")}
      </p>
      <a
        className='Banner__read-more'
        href="https://blog.joystream.org/mainnet-is-live/"
        target="_blank"
      >
        {t("mainnetBanner.cta")}
        <Arrow className="Banner__read-more__arrow"/>
      </a>
    </div>
    <div className='Banner-overlay'></div>
  </div>
);

export default MainnetBanner;
