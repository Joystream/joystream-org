import React from 'react';
import cn from 'classnames';

import './style.scss';

const Banner = ({ error }) => (
  <div
    className={cn('Banner', {
      'Banner--error': error,
    })}
  >
    <p className="Banner__text">
      Babylon Network is down:{' '}
      <a className="Banner__link" target="_blank" href="https://blog.joystream.org/announcing-antioch/">
        Antioch Network Announced
      </a>
    </p>
  </div>
);

export default Banner;
