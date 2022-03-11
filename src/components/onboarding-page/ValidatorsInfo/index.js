import React, { useEffect, useState } from 'react';
import Loader from 'react-loader-spinner';
import useValidatorsData from '../../../utils/pages/onboarding/useValidatorsData';
import { useStaticQuery, graphql } from 'gatsby';

import './style.scss';

const ValidatorsInfo = ({ t }) => {
  const { maxValidatorsSize, validatorsSize } = useValidatorsData();
  const [maxValidatorsData, setMaxValidatorsData] = useState({ isLoading: true, count: 0 });
  const [activeValidatorsData, setActiveValidatorsData] = useState({ isLoading: true, count: 0 });

  const { workingGroups } = useStaticQuery(graphql`
    query ValidatorsQuery {
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
    if (workingGroups && workingGroups.nodes) {
      console.log(workingGroups.nodes);
    }
  }, [workingGroups]);

  useEffect(() => {
    if (maxValidatorsSize) {
      setMaxValidatorsData({
        isLoading: maxValidatorsSize.isLoading,
        count: maxValidatorsSize.count,
      });
    }
  }, [maxValidatorsSize]);

  useEffect(() => {
    if (validatorsSize) {
      setActiveValidatorsData({
        isLoading: validatorsSize.isLoading,
        count: validatorsSize.count,
      });
    }
  }, [validatorsSize]);

  // TODO Get Validator Payout in $USD
  const data = [
    {
      title: t('onboarding.contributorRoles.validatorInfo.items.validatorsCount'),
      activeValidatorsData,
      maxValidatorsData,
    },
    {
      payout: 280,
      title: t('onboarding.contributorRoles.validatorInfo.items.validatorsPayout'),
    },
  ];

  return (
    <div className="ValidatorsInfo__wrapper">
      <div className="ValidatorsInfo__title__wrapper">
        <h2 className="ValidatorsInfo__title">{t('onboarding.contributorRoles.validatorInfo.title')}</h2>
        <h2 className="ValidatorsInfo__text">{t('onboarding.contributorRoles.validatorInfo.text')}</h2>
      </div>
      <div className="ValidatorsInfo__content">
        {data &&
          data.map((item, index) => {
            return (
              <div key={index} className="ValidatorsInfo__item">
                <div className="ValidatorsInfo__item__title">{t(item.title)}</div>
                {item.payout && <div className="ValidatorsInfo__item__count">${item.payout}</div>}
                {item.activeValidatorsData && (
                  <div className="ValidatorsInfo__item__count">
                    {(item.activeValidatorsData && item.activeValidatorsData.isLoading) ||
                    (item.maxValidatorsData && item.maxValidatorsData.isLoading) ? (
                      <Loader
                        className="ValidatorsInfo__item__linechart__loader"
                        type="Oval"
                        color="#6C6CFF"
                        height="100%"
                        width="100%"
                        timeout={0}
                      />
                    ) : (
                      <>
                        <span>{item.activeValidatorsData.count}</span>
                        <span className="ValidatorsInfo__item__count__total">/{item.maxValidatorsData.count}</span>
                      </>
                    )}
                  </div>
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ValidatorsInfo;
