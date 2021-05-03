import React from 'react';
import { ReactComponent as Arrow } from '../../../assets/svg/arrow-down-small.svg';
import { Link } from 'gatsby';

import './style.scss';

const BecomeFoundingMember = ({ t }) => {
  return (
    <div className="IndexPage__fm-cta-wrapper">
      <div className="IndexPage__fm-cta">
        <div className="IndexPage__fm-cta__content">
          <h4 className="IndexPage__fm-cta__subtitle">{t("landing.becomeFM.subtitle")}</h4>
          <h2 className="IndexPage__fm-cta__title">
            {t("landing.becomeFM.title")}
          </h2>
          <h2 className="IndexPage__fm-cta__title IndexPage__fm-cta__title--alt">
            {t("landing.becomeFM.alternateTitle")}
          </h2>
          <Link
            className="IndexPage__fm-cta__link-wrapper"
            to='/founding-members'
          >
            <div className="IndexPage__fm-cta__link">
              {t("landing.becomeFM.link")}
              <Arrow className="IndexPage__fm-cta__link-arrow" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BecomeFoundingMember;
