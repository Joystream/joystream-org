import React from 'react';
import { Link } from 'gatsby-plugin-react-i18next';

// Assets
import { ReactComponent as GovernanceApp } from '../../../assets/svg/available-activities-icons/distributor.svg';
import { ReactComponent as Community } from '../../../assets/svg/available-activities-icons/council-member.svg';
import { ReactComponent as JoyIcon } from '../../../assets/svg/primer/joy-icon.svg';
import { ReactComponent as PlayIcon } from '../../../assets/svg/primer/play-icon.svg';
import { ReactComponent as ArrowIcon } from '../../../assets/svg/arrow-down-small.svg';

import './style.scss';

const CTA = ({ Image, title, buttonText, href, to }) => {
  const children = (
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
        <div className="PrimerPage__choose-your-adventure__list-item__cta">
          <span className='PrimerPage__choose-your-adventure__list-item__cta__text'>{buttonText}</span>
          <div className="PrimerPage__choose-your-adventure__list-item__cta__arrow-wrapper">
            <ArrowIcon className="PrimerPage__choose-your-adventure__list-item__cta__arrow" />
          </div>
        </div>
      </div>
    </div>
  )

  if(to) {
    return <Link to={to}>{children}</Link>
  }

  return <a href={href}>{children}</a>
};

const ChooseYourOwnAdventure = ({ t }) => {
  return (
    <div className="PrimerPage__choose-your-adventure-wrapper" id="primer-next-steps">
      <div className="PrimerPage__choose-your-adventure">
        <h2 className="PrimerPage__choose-your-adventure__title">{t('primer.chooseYourOwnAdventure.title')}</h2>
        <h3 className="PrimerPage__choose-your-adventure__subtitle">{t('primer.chooseYourOwnAdventure.subtitle')}</h3>
        <div className="PrimerPage__choose-your-adventure__list">
          <CTA
            Image={JoyIcon}
            title={t('primer.chooseYourOwnAdventure.earnJoy.title')}
            buttonText={t('primer.chooseYourOwnAdventure.earnJoy.button')}
            to="/start-here/what-is-joystream"
          />
          <CTA
            Image={GovernanceApp}
            title={t('primer.chooseYourOwnAdventure.tryGovernanceApp.title')}
            buttonText={t('primer.chooseYourOwnAdventure.tryGovernanceApp.button')}
            href="https://dao.joystream.org/"
          />
          <CTA
            Image={PlayIcon}
            title={t('primer.chooseYourOwnAdventure.tryOurVideoPlatform.title')}
            buttonText={t('primer.chooseYourOwnAdventure.tryOurVideoPlatform.button')}
            href="https://play.joystream.org/"
          />
          <CTA
            Image={Community}
            title={t('primer.chooseYourOwnAdventure.joinOurCommunity.title')}
            buttonText={t('primer.chooseYourOwnAdventure.joinOurCommunity.button')}
            href="https://discord.gg/DE9UN3YpRP"
          />
        </div>
      </div>
    </div>
  );
};

export default ChooseYourOwnAdventure;
