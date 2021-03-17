import React from 'react';
import { ReactComponent as Fist } from '../../../assets/svg/fist-bg2.svg';
import { ReactComponent as FistAlt } from '../../../assets/svg/fist-bg2-alt.svg';
import { ReactComponent as Arrow } from '../../../assets/svg/arrow-down-small.svg';

import './style.scss';

const WhatWeDo = () => {
  return (
    <div className="IndexPage__manifesto-cta-wrapper">
      <div className="IndexPage__manifesto-cta">
        <Fist className="IndexPage__manifesto-cta__icon" />
        <FistAlt className="IndexPage__manifesto-cta__icon-alt" />
        <div className="IndexPage__manifesto-cta__content">
          <h4 className="IndexPage__manifesto-cta__subtitle">What we do</h4>
          <h2 className="IndexPage__manifesto-cta__title">
            We call for an arrangement where media platforms are accountable to the people they impact
          </h2>
          <a
            className="IndexPage__manifesto-cta__link-wrapper"
            href="https://github.com/Joystream/whitepaper/blob/master/paper.pdf"
          >
            <div className="IndexPage__manifesto-cta__link">
              Read our manifesto
              <Arrow className="IndexPage__manifesto-cta__link-arrow" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
