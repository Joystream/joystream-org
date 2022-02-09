import React from 'react';
import { ReactComponent as Arrow } from '../../../assets/svg/arrow-down-small.svg';

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
          <a
            className="IndexPage__fm-cta__link-wrapper"
            href='https://joystream.gitbook.io/testnet-workspace/testnet/founding-member-program'
            target="_blank"
          >
            <div className="IndexPage__fm-cta__link">
              {t("landing.becomeFM.link")}
              <Arrow className="IndexPage__fm-cta__link-arrow" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BecomeFoundingMember;
