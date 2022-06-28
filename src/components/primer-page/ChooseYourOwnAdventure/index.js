import React from 'react';

// Assets
import { ReactComponent as GovernanceApp } from '../../../assets/svg/available-activities-icons/distributor.svg';
import { ReactComponent as Community } from '../../../assets/svg/available-activities-icons/council-member.svg';
import { ReactComponent as ArrowIcon } from '../../../assets/svg/arrow-down-small.svg';

import './style.scss';

const CTA = ({ Image, title, buttonText, href }) => {
  return (
    <div className="PrimerPage__choose-your-adventure__list-item">
      <div className="PrimerPage__choose-your-adventure__list-item__top">
        {Image && (
          <div className="PrimerPage__choose-your-adventure__list-item__image">
            <Image />
          </div>
        )}
        <h4 className="PrimerPage__choose-your-adventure__list-item__title">{title}</h4>
      </div>
      <div className="PrimerPage__choose-your-adventure__list-item__bottom">
        <a className="PrimerPage__choose-your-adventure__list-item__cta" href={href}>
          {buttonText}
          <ArrowIcon className="PrimerPage__choose-your-adventure__list-item__cta__arrow" />
        </a>
      </div>
    </div>
  );
};

const ChooseYourOwnAdventure = ({ t }) => {
  return (
    <div className="PrimerPage__choose-your-adventure-wrapper">
      <div className="PrimerPage__choose-your-adventure">
        <h2 className="PrimerPage__choose-your-adventure__title">{t('primer.chooseYourOwnAdventure.title')}</h2>
        <h3 className="PrimerPage__choose-your-adventure__subtitle">{t('primer.chooseYourOwnAdventure.subtitle')}</h3>
        <div className="PrimerPage__choose-your-adventure__list">
          {/* PRIMER TODO: Update the missing images here: JOY, video platform + update the href links */}
          <CTA
            Image={GovernanceApp}
            title={t('primer.chooseYourOwnAdventure.earnJoy.title')}
            buttonText={t('primer.chooseYourOwnAdventure.earnJoy.button')}
            href="#"
          />
          <CTA
            Image={GovernanceApp}
            title={t('primer.chooseYourOwnAdventure.tryGovernanceApp.title')}
            buttonText={t('primer.chooseYourOwnAdventure.tryGovernanceApp.button')}
            href="#"
          />
          <CTA
            Image={Community}
            title={t('primer.chooseYourOwnAdventure.tryOurVideoPlatform.title')}
            buttonText={t('primer.chooseYourOwnAdventure.tryOurVideoPlatform.button')}
            href="#"
          />
          <CTA
            Image={Community}
            title={t('primer.chooseYourOwnAdventure.joinOurCommunity.title')}
            buttonText={t('primer.chooseYourOwnAdventure.joinOurCommunity.button')}
            href="#"
          />
        </div>
      </div>
    </div>
  );
};

export default ChooseYourOwnAdventure;
