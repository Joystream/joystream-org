import React, { useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import './style.scss';

const ReferallsInfo = ({ t }) => {
  // TODO fetch counts from api
  const referalReward = 50;
  const referalsPayout = 24500;

  const { referalls } = useStaticQuery(graphql`
    query ReferallsQuery {
      workingGroups: allAirtable(
        filter: { table: { eq: "BountyLabel" } }
        sort: { fields: data___BountyLabelId, order: DESC }
      ) {
        nodes {
          data {
            BountyLabelId
            Name
          }
          recordId
        }
      }
    }
  `);

  useEffect(() => {
    if (referalls && referalls.nodes) {
      console.log(referalls.nodes);
    }
  }, [referalls]);

  return (
    <div className="ReferallsInfo__wrapper">
      <div className="ReferallsInfo__content">
        <div className="ReferallsInfo__item">
          <div className="ReferallsInfo__item__title">{t('onboarding.page3.referallsInfo.reward')}</div>
          <div className="ReferallsInfo__item__count">
            <span className="ReferallsInfo__item__currency">$</span>
            {referalReward}
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
