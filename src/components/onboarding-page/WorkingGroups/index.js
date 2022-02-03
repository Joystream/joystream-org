import React from 'react';
import './style.scss';
import Loader from 'react-loader-spinner';

const WorkingGroups = ({ t, title, data }) => {
  const workerAvatars = arr => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr
      .filter(w => w.avatar && w.avatar !== '')
      .slice(1, 4)
      .map((w, i) => (
        <img key={i} className="WorkingGroups__item__image" src={w.avatar} alt={`Worker #${w.workerId}`} />
      ));
  };

  return (
    <div className="WorkingGroups__wrapper">
      {title && <h2 className="WorkingGroups__title">{t(title)}</h2>}
      <div className="WorkingGroups__content">
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
