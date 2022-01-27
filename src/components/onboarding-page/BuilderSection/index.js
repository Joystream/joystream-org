import React from 'react';
import Pioneer from '../../../assets/svg/builder-illustration.svg';
import { ReactComponent as Arrow } from '../../../assets/svg/arrow-down-small.svg';
import Link from '../../Link';
import './style.scss';

const BuilderSection = ({ t }) => {
  return (
    <div className="BuilderSection__wrapper">
      <div className="BuilderSection__content">
        <img className="BuilderSection__image" src={Pioneer} alt={t('landing.exploreJoystream.pioneer.imageAlt')} />
        <div className="BuilderSection__text">
          <h2 className="BuilderSection__title">{t('onboarding.page2.builderSection.title')}</h2>
          <p className="BuilderSection__description">{t('onboarding.page2.builderSection.text')}</p>
          <Link key={t('onboarding.button.getStarted.text')} to={'/get-started'}>
            <div className="BuilderSection__button">
              <p className="BuilderSection__button-text">{t('onboarding.button.getStarted.text')}</p>
              <Arrow className="BuilderSection__button-arrow" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuilderSection;
