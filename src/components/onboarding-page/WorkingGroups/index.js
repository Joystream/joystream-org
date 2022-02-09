import React from 'react';
import './style.scss';
import Loader from 'react-loader-spinner';

const WorkingGroups = ({ t, title, subtitle, data }) => {
  const workerAvatars = arr => {
    return arr
      .filter(w => w.avatar && w.avatar !== '')
      .slice(1, 4)
      .map((w, i) => (
        <img key={i} className="WorkingGroups__item__image" src={w.avatar} alt={`Worker #${w.workerId}`} />
      ));
  };

  return (
    <div className="WorkingGroups__wrapper">
      <div className="WorkingGroups__content">
        {title && <h2 className="WorkingGroups__title">{t(title)}</h2>}
        {subtitle && <h2 className="WorkingGroups__subtitle">{t(subtitle)}</h2>}
        {data &&
          data.map((item, index) => {
            return (
              <div key={index} className="WorkingGroups__item">
                <div className="WorkingGroups__item__payout">
                  <span className="WorkingGroups__item__payout--amount">${item.payout}</span>
                  {t('onboarding.page5.workingGroups.weeklyPayout')}
                </div>
                <div className="WorkingGroups__item__title">{t(item.title)}</div>
                <div className="WorkingGroups__item__subtitle">{t(item.text)}</div>
                <div className="WorkingGroups__item__images">
                  {item.data && item.data.isLoading && (
                    <Loader
                      className="WorkingGroups__item__linechart__loader"
                      type="Oval"
                      color="#6C6CFF"
                      height="100%"
                      width="100%"
                      timeout={0}
                    />
                  )}
                  {item.data && !item.data.isLoading && item.data.workers && (
                    <>
                      {workerAvatars(item.data.workers)}
                      <div className="WorkingGroups__item__count">+{item.data.workers.length}</div>
                    </>
                  )}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default WorkingGroups;
