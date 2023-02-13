import React from 'react';
import cn from 'classnames';

import ArrowLink from '../../ArrowLink';

import GleevLogo from '../../../assets/images/landing/ecosystem-app-icons/gleev.webp';
import GleevIllustration from '../../../assets/images/landing/gleev-illustration.webp';
import PioneerLogo from '../../../assets/images/token/pioneer-icon.webp';
import PioneerIllustration from '../../../assets/images/token/pioneer-illustration.webp';

import { ReactComponent as ArrowIcon } from '../../../assets/svg/arrow-down-small.svg';

import './style.scss';

const FeaturedPlatform = ({ image, platformName, platformDescription, link, illustration, isPioneer , t }) => (
  <div className={cn("TokenPage__faucets__apps__main", {
    "TokenPage__faucets__apps__main--pioneer": isPioneer
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
        {/* {t('landing.ecosystem.appsBuiltOnJoystream.sectionTitle')} */}
        FEATURED
      </div>
      <h4 className="TokenPage__faucets__apps__main__about__platform-name">{platformName}</h4>
      <p className="TokenPage__faucets__apps__main__about__platform-description">{platformDescription}</p>

      <ArrowLink className="TokenPage__faucets__apps__main__about__link" text="Visit" href={link} />
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

const Faucets = () => {

  return (
    <section className='TokenPage__faucets-wrapper'>
      <div className='TokenPage__faucets'>
        <header className="TokenPage__faucets__header">
          <span className="TokenPage__faucets__header__section-title">FAUCETS</span>
          <h2 className="TokenPage__faucets__header__title">How can you get started with JOY?</h2>
          <p className="TokenPage__faucets__header__subtitle">
            Create a free membership using one of the apps already built on the Joystream ecosystem is the easiest way to get a small number of JOY tokens to get you started.
          </p>
        </header>

        <div className='TokenPage__faucets__apps'>
          <FeaturedPlatform
            image={GleevLogo}
            platformName="Gleev"
            platformDescription="Gleev has its sole focus on the Web3 and Crypto content vertical, bringing together the like-minded creators and viewers around the shared passion of the present and the future of Crypto affairs."
            link="https://gleev.xyz"
            illustration={GleevIllustration}
            // t={t}
          />
          <FeaturedPlatform
            image={PioneerLogo}
            platformName="Pioneer"
            platformDescription="Pioneer is the place to participate in community governance and operation. Vote on elections, submit proposals or enter a paid role to support the platform growth."
            link="https://pioneerapp.xyz/"
            illustration={PioneerIllustration}
            isPioneer
            // t={t}
          />
        </div>
      </div>
    </section>
  )
};

export default Faucets;