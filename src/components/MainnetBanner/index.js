import React from 'react';

import { ReactComponent as Bell } from '../../assets/svg/bell.svg';
import { ReactComponent as Arrow } from '../../assets/svg/arrow-down-small.svg';

import './style.scss';

const MainnetBanner = () => (
  <div className="Banner-wrapper">
    <div className='Banner'>
      <p className="Banner__reminder">
        <Bell className="Banner__reminder__bell"/>
        We're now on mainnet!
      </p>
      <a 
        className='Banner__read-more'
        href="https://blog.joystream.org/announcing-carthage/"
        target="_blank"
      >
        Read more
        <Arrow className="Banner__read-more__arrow"/>
      </a>
    </div>
  </div>
);

export default MainnetBanner;
