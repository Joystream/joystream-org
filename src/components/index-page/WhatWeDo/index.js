import React from 'react';
import { ReactComponent as Fist } from '../../../assets/svg/fist-bg2.svg';
import { ReactComponent as FistAlt } from '../../../assets/svg/fist-bg2-alt.svg';
import { ReactComponent as Arrow } from '../../../assets/svg/arrow-down-small.svg';
import { Link } from 'gatsby-plugin-react-i18next';

import './style.scss';

const WhatWeDo = ({ t }) => {
  return (
    <div className="IndexPage__manifesto-cta-wrapper">
      <div className="IndexPage__manifesto-cta">
        <Fist className="IndexPage__manifesto-cta__icon" />
        <FistAlt className="IndexPage__manifesto-cta__icon-alt" />
        <div className="IndexPage__manifesto-cta__content">
          <div className="IndexPage__manifesto-cta__subtitle">{t('landing.whatWeDo.sectionTitle')}</div>
          <h2 className="IndexPage__manifesto-cta__title">{t('landing.whatWeDo.title')}</h2>
          <Link className="IndexPage__manifesto-cta__link-wrapper" to="/manifesto">
            <div className="IndexPage__manifesto-cta__link">
              {t('landing.whatWeDo.link')}
              <Arrow className="IndexPage__manifesto-cta__link-arrow" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
