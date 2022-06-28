import React from 'react';

import './style.scss';

const WhyWeExist = ({ t }) => {
  return (
    <div className='PrimerPage__why-we-exist-wrapper'>
      <div className='PrimerPage__why-we-exist'>
        <div className='PrimerPage__why-we-exist__section'>
          <p className='PrimerPage__why-we-exist__section-title'>{t('primer.whyWeExist.sectionTitle')}</p>
          <h2 className='PrimerPage__why-we-exist__title'>{t('primer.whyWeExist.title')}</h2>
        </div>
        <div className='PrimerPage__why-we-exist__section'>
          <h3 className='PrimerPage__why-we-exist__section__title'>{t('primer.whyWeExist.monopoly.title')}</h3>
          <p className='PrimerPage__why-we-exist__section__text'>{t('primer.whyWeExist.monopoly.text')}</p>
        </div>
      </div>
    </div>
  );
};

export default WhyWeExist;