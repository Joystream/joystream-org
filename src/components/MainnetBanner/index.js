import React from 'react';
import cn from 'classnames';

import { ReactComponent as Bell } from '../../assets/svg/bell.svg';
import { ReactComponent as Arrow } from '../../assets/svg/arrow-down-small.svg';

import './style.scss';

const MainnetBanner = ({ t, light }) => (
  <div className={cn('Banner-wrapper', {
    'Banner-wrapper--light': !light,
  })}>
    <div className={cn('Banner', {
      'Banner--light': !light,
    })}>
      <p className={cn('Banner__reminder', {
        'Banner__reminder--light': !light,
      })}>
        <Bell className={cn('Banner__reminder__bell', {
          'Banner__reminder__bell--light': !light,
        })}/>
        {t('mainnetBanner.text')}
      </p>
      <a
        className="Banner__read-more"
        href="https://blog.joystream.org/mainnet-is-live/"
      >
        {t('mainnetBanner.cta')}
        <Arrow className="Banner__read-more__arrow"/>
      </a>
    </div>
  </div>
);

export default MainnetBanner;
