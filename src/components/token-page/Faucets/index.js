import React from 'react';
import cn from 'classnames';

import ArrowLink from '../../ArrowLink';

import GleevLogo from '../../../assets/images/landing/ecosystem-app-icons/gleev.webp';
import GleevIllustration from '../../../assets/images/landing/gleev-illustration.webp';
import PioneerLogo from '../../../assets/images/token/pioneer-icon.webp';
import PioneerIllustration from '../../../assets/images/token/pioneer-illustration.webp';

import './style.scss';

const FeaturedPlatform = ({ image, platformName, platformDescription, link, illustration, isPioneer , t }) => (
  <div className={cn('TokenPage__faucets__apps__main', {
    'TokenPage__faucets__apps__main--pioneer': isPioneer,
  })}>
    <div className="TokenPage__faucets__apps__main__about">
      <div className="TokenPage__faucets__apps__main__about__logo-wrapper">
        <img
          className="TokenPage__faucets__apps__main__about__logo"
          src={image}
          alt={`${platformName} platform logo`}
        />
      </div>
      <div className="TokenPage__faucets__apps__main__about__section-title">
        {t('token.faucets.featured')}
      </div>
      <h4 className="TokenPage__faucets__apps__main__about__platform-name">{platformName}</h4>
      <p className="TokenPage__faucets__apps__main__about__platform-description">{platformDescription}</p>

      <ArrowLink className="TokenPage__faucets__apps__main__about__link" text={t('token.faucets.visit')} href={link} />
    </div>
    <div className="TokenPage__faucets__apps__main__visual">
      <img
        className="TokenPage__faucets__apps__main__visual__image"
        src={illustration}
        alt={`illustration of the ${platformName} platform homepage`}
      />
    </div>
  </div>
);

const Faucets = ({ t }) => {
  return (
    <section className="TokenPage__faucets-wrapper">
      <div className="TokenPage__faucets">
        <header className="TokenPage__faucets__header">
          <span className="TokenPage__faucets__header__section-title">{t('token.faucets.sectionTitle')}</span>
          <h2 className="TokenPage__faucets__header__title">{t('token.faucets.title')}</h2>
          <p className="TokenPage__faucets__header__subtitle">
            {t('token.faucets.subtitle')}
          </p>
        </header>

        <div className="TokenPage__faucets__apps">
          <FeaturedPlatform
            image={GleevLogo}
            platformName={t('token.faucets.gleev.name')}
            platformDescription={t('token.faucets.gleev.description')}
            link="https://gleev.xyz"
            illustration={GleevIllustration}
            t={t}
          />
          <FeaturedPlatform
            image={PioneerLogo}
            platformName={t('token.faucets.pioneer.name')}
            platformDescription={t('token.faucets.pioneer.description')}
            link="https://pioneerapp.xyz/"
            illustration={PioneerIllustration}
            isPioneer
            t={t}
          />
        </div>
      </div>
    </section>
  );
};

export default Faucets;
