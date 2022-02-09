import React from 'react';
import Loader from 'react-loader-spinner';

import './style.scss';

const ValidatorsInfo = ({ t, data }) => {
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
