import React from 'react';
import Logo from '../../../assets/svg/logo-black.svg';
import './style.scss';

const Structure = ({ t }) => {
  return (
    <div className="Structure__wrapper">
      <div className="Structure__content">
        <div className="Structure__item Structure__item__header">
          <div className="Structure__item__title__header">{t('onboarding.page2.structure.traditionalCompany')}</div>
        </div>
        <div className="Structure__item Structure__item__logo">
          <img src={Logo} alt="Joystream DAO" />
        </div>
        <div className="Structure__item">
          <div className="Structure__item__title">{t('onboarding.page2.structure.boardOfDirectors')}</div>
        </div>
        <div className="Structure__item">
          <div className="Structure__item__title">{t('onboarding.page2.structure.council')}</div>
        </div>
        <div className="Structure__item">
          <div className="Structure__item__title">{t('onboarding.page2.structure.employees')}</div>
        </div>
        <div className="Structure__item">
          <div className="Structure__item__title">{t('onboarding.page2.structure.workers')}</div>
        </div>
        <div className="Structure__item">
          <div className="Structure__item__title">{t('onboarding.page2.structure.departments')}</div>
        </div>
        <div className="Structure__item">
          <div className="Structure__item__title">{t('onboarding.page2.structure.workingGroups')}</div>
        </div>
        <div className="Structure__item">
          <div className="Structure__item__title">{t('onboarding.page2.structure.managers')}</div>
        </div>
        <div className="Structure__item">
          <div className="Structure__item__title">{t('onboarding.page2.structure.workingGroupLeads')}</div>
        </div>
        <div className="Structure__item">
          <div className="Structure__item__title">{t('onboarding.page2.structure.contractors')}</div>
        </div>
        <div className="Structure__item">
          <div className="Structure__item__title">{t('onboarding.page2.structure.bounties')}</div>
        </div>
      </div>
    </div>
  );
};

export default Structure;
