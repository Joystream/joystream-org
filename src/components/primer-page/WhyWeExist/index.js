import React from 'react';

import { ReactComponent as YoutubeLogo } from '../../../assets/svg/primer/youtube-logo.svg';
import { ReactComponent as LockIcon } from '../../../assets/svg/primer/lock-icon.svg';

import './style.scss';

const WhyWeExist = ({ t }) => {
  return (
    <div className="PrimerPage__why-we-exist-wrapper" id="primer-future-of-video">
      <div className="PrimerPage__why-we-exist">
        <div className="PrimerPage__why-we-exist__section">
          <div className="PrimerPage__why-we-exist__section__image">
            <YoutubeLogo />
          </div>
          <div className="PrimerPage__why-we-exist__section__text">
            <p className="PrimerPage__why-we-exist__section-title">{t('primer.whyWeExist.sectionTitle')}</p>
            <h2 className="PrimerPage__why-we-exist__title">{t('primer.whyWeExist.title')}</h2>
          </div>
        </div>
        <div className="PrimerPage__why-we-exist__section PrimerPage__why-we-exist__section--lock PrimerPage__why-we-exist__section--reverse">
          <div className="PrimerPage__why-we-exist__section__image">
            <LockIcon />
          </div>
          <div className="PrimerPage__why-we-exist__section__text">
            <h3 className="PrimerPage__why-we-exist__section__text__title">{t('primer.whyWeExist.monopoly.title')}</h3>
            <p className="PrimerPage__why-we-exist__section__text__paragraph">{t('primer.whyWeExist.monopoly.text')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyWeExist;
