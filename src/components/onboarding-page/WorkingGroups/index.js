import React from 'react';
import './style.scss';
import { ReactComponent as WorkingGroup } from '../../../assets/svg/working-groups.svg';

const WorkingGroups = ({ t, title, data }) => {
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
                <WorkingGroup className="WorkingGroups__item__image" />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default WorkingGroups;
