import React from 'react';
import { useTranslation, useI18next, Trans } from 'gatsby-plugin-react-i18next';

import ArrowLink from '../../../components/ArrowLink';

import Tokens from '../../../assets/svg/coin-minter-hero.svg';
import TokensAlt from '../../../assets/svg/coin-minter-hero-alt.svg';

import parseBalance from '../../../utils/parseBalance';

import './style.scss';

const TokenStatsItem = ({ title, value }) => (
  <div className="TokensPage__tokenstats__item">
    <h3 className="TokensPage__tokenstats__item__title">{title}</h3>
    <p className="TokensPage__tokenstats__item__value">{value}</p>
  </div>
);

const TokenStatsItemPlaceholder = () => (
  <div className="TokensPage__tokenstats__item TokensPage__tokenstats__item--placeholder">
    <div className="TokensPage__tokenstats__item__title-placeholder"></div>
    <div className="TokensPage__tokenstats__item__value-placeholder"></div>
  </div>
);

const TokenHero = ({ statusServerData }) => {
  const { t } = useTranslation();

  return (
    <div className="TokensPage__header">
      <div className="TokensPage__hero">
        <div className="TokensPage__hero__content">
          <h2 className="TokensPage__hero__title">{t('token.hero.title')}</h2>
          <p className="TokensPage__hero__text">{t('token.hero.text')}</p>
          <ArrowLink
            className="TokensPage__hero__link"
            to="/start-here/what-is-joystream"
            text={t('button.gettingStarted')}
          />
        </div>
        <img className="TokensPage__hero__image" alt="" src={Tokens} />
        <img className="TokensPage__hero__image TokensPage__hero__image--alt" alt="" src={TokensAlt} />
      </div>
      <div className="TokensPage__tokenstats-wrapper">
        <h2 className="TokensPage__tokenstats-title">{t('token.hero.tokenStats.title')}</h2>
        <div className="TokensPage__tokenstats">
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
      </div>
    </div>
  );
};

export default TokenHero;
