import React from 'react';
import { ReactComponent as Fist } from '../../../assets/svg/fist-bg2.svg';
import { ReactComponent as FistAlt } from '../../../assets/svg/fist-bg2-alt.svg';
import { ReactComponent as Arrow } from '../../../assets/svg/arrow-down-small.svg';
import { Link } from 'gatsby';

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
          <Link
            className="IndexPage__manifesto-cta__link-wrapper"
            to="/manifesto"
          >
            <div className="IndexPage__manifesto-cta__link">
              Read our manifesto
              <Arrow className="IndexPage__manifesto-cta__link-arrow" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
