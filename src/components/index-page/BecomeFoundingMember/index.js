import React from 'react';
import { ReactComponent as Arrow } from '../../../assets/svg/arrow-down-small.svg';
import { Link } from 'gatsby';

import './style.scss';

const BecomeFoundingMember = () => {
  return (
    <div className="IndexPage__fm-cta-wrapper">
      <div className="IndexPage__fm-cta">
        <div className="IndexPage__fm-cta__content">
          <h4 className="IndexPage__fm-cta__subtitle">New program has just launched</h4>
          <h2 className="IndexPage__fm-cta__title">
            Become a Founding Member to earn mainnet tokens and impact the development of the platform.
          </h2>
          <h2 className="IndexPage__fm-cta__title IndexPage__fm-cta__title--alt">
            Become a Founding member and have a real impact on the development of our platform.
          </h2>
          <Link
            className="IndexPage__fm-cta__link-wrapper"
            to='/founding-members'
          >
            <div className="IndexPage__fm-cta__link">
              Become a founding member
              <Arrow className="IndexPage__fm-cta__link-arrow" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BecomeFoundingMember;
