import React from 'react';

import PioneerVisual from '../../../assets/images/pioneer-overview.png';

import './style.scss';

const Governance = ({ t }) => {
  return (
    <div className='PrimerPage__governance-wrapper' id="primer-the-solution">
      <div className='PrimerPage__governance'>
        <p className='PrimerPage__governance__section-title'>{t('primer.governance.sectionTitle')}</p>
        <h2 className='PrimerPage__governance__title'>{t('primer.governance.title')}</h2>
        <div className='PrimerPage__governance__pioneer'>
          <h3 className='PrimerPage__governance__pioneer__title'>{t('primer.governance.whatIsPioneer.title')}</h3>
          <p className='PrimerPage__governance__pioneer__text'>{t('primer.governance.whatIsPioneer.text')}</p>
          <img className='PrimerPage__governance__pioneer__image' src={PioneerVisual} alt="Overview of the Governance product, Pioneer"/>
        </div>
        <p className='PrimerPage__governance__quote'>{t('primer.governance.decentralizedFutureQuote')}</p>
      </div>
    </div>
  );
};

export default Governance;