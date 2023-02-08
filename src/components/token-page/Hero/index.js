import React from 'react';
import { useTranslation, useI18next, Trans } from 'gatsby-plugin-react-i18next';

import Tokens from '../../../assets/svg/token/joy-token-hero.svg';
import TokensAlt from '../../../assets/svg/token/joy-token-hero-background.svg';

import parseBalance from '../../../utils/parseBalance';

import './style.scss';

const TokenStatsItem = ({ title, value }) => (
  <div className="TokenPage__tokenstats__item">
    <h3 className="TokenPage__tokenstats__item__title">{title}</h3>
    <p className="TokenPage__tokenstats__item__value">{value}</p>
  </div>
);

const TokenStatsItemPlaceholder = () => (
  <div className="TokenPage__tokenstats__item TokenPage__tokenstats__item--placeholder">
    <div className="TokenPage__tokenstats__item__title-placeholder"></div>
    <div className="TokenPage__tokenstats__item__value-placeholder"></div>
  </div>
);

const TokenHero = ({ statusServerData }) => {
  const { t } = useTranslation();

  return (
    <div className="TokenPage__hero-background">
      <div className="TokenPage__hero-wrapper">
        <div className="TokenPage__hero">
          <div className="TokenPage__hero__content">
            <h2 className="TokenPage__hero__title">The JOY token</h2>
            <p className="TokenPage__hero__text">
              $JOY, being Joystream’s native token, is used to govern and keep the network secured. It’s used as a
              currency in all dApps built on Joystream.
            </p>
          </div>
          <div className="TokenPage__hero__illustration">
            <img className="TokenPage__hero__illustration__image" alt="" src={Tokens} />
            {/* <img className="TokenPage__hero__image TokenPage__hero__image--alt" alt="" src={TokensAlt} /> */}
          </div>
        </div>
        {/* <div className="TokenPage__tokenstats-wrapper">
        <h2 className="TokenPage__tokenstats-title">{t('token.hero.tokenStats.title')}</h2>
        <div className="TokenPage__tokenstats">
          {statusServerData ? (
            <>
              <TokenStatsItem
                title={t('token.hero.tokenStats.exchangeRate')}
                value={`$${statusServerData.price.toFixed(7)}`}
              />
              <TokenStatsItem
                title={t('token.hero.tokenStats.backingValue')}
                value={`$${statusServerData.dollarPool.size.toFixed(2)}`}
              />
              <TokenStatsItem
                title={t('token.hero.tokenStats.supply')}
                value={`${parseBalance(statusServerData.totalIssuance)}`}
              />
            </>
          ) : (
            <>
              <TokenStatsItemPlaceholder />
              <TokenStatsItemPlaceholder />
              <TokenStatsItemPlaceholder />
            </>
          )}
        </div>
      </div> */}
      </div>
    </div>
  );
};

export default TokenHero;
