import React from 'react';
import Pioneer from '../../../assets/svg/pioneer.svg';
import './style.scss';

const PioneerInfo = ({ t }) => {
  return (
    <div className="PioneerInfo__wrapper">
      <div className="PioneerInfo__content">
        <div className="PioneerInfo__text">
          <h2 className="PioneerInfo__title">{t('onboarding.page2.pioneerInfo.title')}</h2>
          <p className="PioneerInfo__description">{t('onboarding.page2.pioneerInfo.text')}</p>
        </div>
        <img className="PioneerInfo__image" src={Pioneer} alt={t('landing.exploreJoystream.pioneer.imageAlt')} />
      </div>
    </div>
  );
};

export default PioneerInfo;
