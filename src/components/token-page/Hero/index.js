import React from 'react';
import { useTranslation, useI18next, Trans } from 'gatsby-plugin-react-i18next';
import cn from 'classnames';

import useAxios from '../../../utils/useAxios';

import Tokens from '../../../assets/svg/token/joy-token-hero.svg';
import TokensAlt from '../../../assets/svg/token/joy-token-hero-background.svg';
import { ReactComponent as JoyTokenIcon } from '../../../assets/svg/token/joy-token.svg';
import { ReactComponent as InfoIcon } from '../../../assets/svg/info.svg';

import parseBalance from '../../../utils/parseBalance';

import './style.scss';

const TokenStatsItem = ({
  title,
  value,
  joyIcon = false,
  disabled = false,
  tooltip = '',
  loading = false,
  statusServerData = null,
}) => {
  if (loading) {
    value = 'Loading...';
  }

  if (statusServerData && !loading) {
    value = statusServerData[value] + ' JOY';
  }

  return (
    <div
      className={cn('TokenPage__tokenstats__item', {
        'TokenPage__tokenstats__item--disabled': disabled,
      })}
    >
      {loading && <div className="TokenPage__tokenstats__item__loading-bar"></div>}
      <h3 className="TokenPage__tokenstats__item__title">{title}</h3>
      <div
        className={cn('TokenPage__tokenstats__item__value', {
          'TokenPage__tokenstats__item__value--disabled': disabled,
          'TokenPage__tokenstats__item__value--loading': loading,
        })}
      >
        {joyIcon && <JoyTokenIcon className="TokenPage__tokenstats__item__value__joy-icon" />}
        {value}
      </div>
      {tooltip && (
        <div className="TokenPage__tokenstats__item__tooltip-wrapper">
          <div className="TokenPage__tokenstats__item__tooltip">
            <InfoIcon className="TokenPage__tokenstats__item__tooltip__icon" />
            <div className="TokenPage__tokenstats__item__tooltip__modal">{tooltip}</div>
          </div>
        </div>
      )}
    </div>
  );
};

const TokenHero = () => {
  const [statusServerData, loading, error] = useAxios('https://status.joystream.org/status');
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
        <div className="TokenPage__tokenstats-wrapper">
          {/* <h2 className="TokenPage__tokenstats-title">{t('token.hero.tokenStats.title')}</h2> */}
          <div className="TokenPage__tokenstats">
            <TokenStatsItem title="Symbol" value="JOY" joyIcon />
            <TokenStatsItem
              title={t('token.hero.tokenStats.supply')}
              value="totalIssuance"
              statusServerData={statusServerData}
              loading={loading}
            />
            <TokenStatsItem
              title="Price"
              value="Unavailable"
              disabled
              tooltip="Price data will be available once the JOY token is listed on exchanges."
            />
            <TokenStatsItem
              title="FDV"
              value="Unavailable"
              disabled
              tooltip="FDV data will be available once the JOY token is listed on exchanges."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenHero;
