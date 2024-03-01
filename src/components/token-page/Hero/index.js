import React from 'react';

import Tokenomics from '../../../components/index-page/Tokenomics';

import Tokens from '../../../assets/svg/token/joy-token-hero.svg';

import './style.scss';

const TokenHero = ({ t, tokenomicsData, priceData }) => {
  return (
    <div className="TokenPage__hero-background">
      <div className="TokenPage__hero-wrapper">
        <div className="TokenPage__hero">
          <div className="TokenPage__hero__content">
            <h2 className="TokenPage__hero__title">{t('token.hero.title')}</h2>
            <p className="TokenPage__hero__text">{t('token.hero.text')}</p>
          </div>
          <div className="TokenPage__hero__illustration">
            <img className="TokenPage__hero__illustration__image" alt="" src={Tokens} />
          </div>
        </div>
        <Tokenomics t={t} tokenomicsData={tokenomicsData} priceData={priceData} />
      </div>
    </div>
  );
};

export default TokenHero;
