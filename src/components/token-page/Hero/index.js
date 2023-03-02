import React from 'react';
import cn from 'classnames';

import useAxios from '../../../utils/useAxios';

import Tokens from '../../../assets/svg/token/joy-token-hero.svg';
import { ReactComponent as JoyTokenIcon } from '../../../assets/svg/token/joy-token.svg';
import { ReactComponent as InfoIcon } from '../../../assets/svg/info.svg';

import './style.scss';

const TokenStatsItem = ({
  title,
  value,
  joyIcon = false,
  disabled = false,
  tooltip = '',
  loading = false,
  statusServerData = null,
  t
}) => {
  if (loading) {
    value = t("token.hero.loading");
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

const TokenHero = ({ t }) => {
  const [statusServerData, loading, error] = useAxios('https://status.joystream.org/status');

  return (
    <div className="TokenPage__hero-background">
      <div className="TokenPage__hero-wrapper">
        <div className="TokenPage__hero">
          <div className="TokenPage__hero__content">
            <h2 className="TokenPage__hero__title">{t("token.hero.title")}</h2>
            <p className="TokenPage__hero__text">
              {t("token.hero.text")}
            </p>
          </div>
          <div className="TokenPage__hero__illustration">
            <img className="TokenPage__hero__illustration__image" alt="" src={Tokens} />
          </div>
        </div>
        <div className="TokenPage__tokenstats-wrapper">
          <div className="TokenPage__tokenstats">
            <TokenStatsItem title={t("token.hero.tokenStats.symbol.title")} value="JOY" joyIcon t={t} />
            <TokenStatsItem
              title={t('token.hero.tokenStats.supply.title')}
              value="totalIssuance"
              statusServerData={statusServerData}
              loading={loading}
              t={t}
            />
            <TokenStatsItem
              title={t("token.hero.tokenStats.price.title")}
              value={t("token.hero.tokenStats.price.value")}
              disabled
              tooltip={t("token.hero.tokenStats.price.tooltip")}
              t={t}
            />
            <TokenStatsItem
              title={t("token.hero.tokenStats.fdv.title")}
              value={t("token.hero.tokenStats.fdv.value")}
              disabled
              tooltip={t("token.hero.tokenStats.fdv.tooltip")}
              t={t}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenHero;
