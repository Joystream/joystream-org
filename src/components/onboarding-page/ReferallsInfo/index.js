import React, { useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import './style.scss';

const ReferallsInfo = ({ t, paidOutToReferrers, referrerReward }) => {
  // TODO fetch counts from api
  const refereeReward = 200;
  const referalsPayout = 24500 + paidOutToReferrers;

  return (
    <div className="ReferallsInfo__wrapper">
      <div className="ReferallsInfo__content">
        <div className="ReferallsInfo__item">
          <div className="ReferallsInfo__item__title">{t('onboarding.page3.referallsInfo.reward')}</div>
          <div className="ReferallsInfo__item__count">
            <span className="ReferallsInfo__item__currency">$</span>
            {referrerReward}
          </div>
        </div>

        <div className="ReferallsInfo__item">
          <div className="ReferallsInfo__item__title">{t('onboarding.page3.referallsInfo.refereeReward')}</div>
          <div className="ReferallsInfo__item__count">
            <span className="ReferallsInfo__item__currency">$</span>
            {refereeReward}
          </div>
        </div>

        <div className="ReferallsInfo__item">
          <div className="ReferallsInfo__item__title">{t('onboarding.page3.referallsInfo.payout')}</div>
          <div className="ReferallsInfo__item__count">
            <span className="ReferallsInfo__item__currency">$</span>
            {referalsPayout}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferallsInfo;
