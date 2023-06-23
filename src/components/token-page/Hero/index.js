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
  denomination = 'JOY',
  error,
  t,
}) => {
  let newValue = value === 'JOY' ? 'JOY' : '';

  if (Array.isArray(statusServerData) && statusServerData[0] && statusServerData[1] && !loading && !error) {
    const amount = Math.floor(statusServerData[0][value[0]] * statusServerData[1][value[1]]);
    const formattedAmount = new Intl.NumberFormat('en-US').format(amount);

    newValue = formattedAmount + ` ${denomination}`;
  }

  if (!Array.isArray(statusServerData) && statusServerData && !loading && !error) {
    let amount = statusServerData[value];

    if (denomination === 'USD') {
      amount = amount.toFixed(6);
    }

    if (denomination === 'JOY') {
      amount = new Intl.NumberFormat('en-US').format(amount);
    }

    newValue = amount + ` ${denomination}`;
  }

  if (loading) {
    newValue = t('token.hero.loading');
  }

  if (error) {
    newValue = t('token.hero.error');
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
        {newValue}
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
  const [priceData, priceLoading, priceError] = useAxios('https://status.joystream.org/price');

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
        <div className="TokenPage__tokenstats-wrapper">
          <div className="TokenPage__tokenstats">
            <TokenStatsItem title={t('token.hero.tokenStats.symbol.title')} value="JOY" joyIcon t={t} />
            <TokenStatsItem
              title={t('token.hero.tokenStats.supply.title')}
              value="totalIssuance"
              statusServerData={statusServerData}
              loading={loading}
              error={error}
              t={t}
            />
            <TokenStatsItem
              title={t('token.hero.tokenStats.price.title')}
              value="price"
              statusServerData={priceData}
              loading={priceLoading}
              denomination="USD"
              error={priceError}
              t={t}
            />
            <TokenStatsItem
              title={t('token.hero.tokenStats.fdv.title')}
              value={['totalIssuance', 'price']}
              statusServerData={[statusServerData, priceData]}
              loading={loading || priceLoading}
              denomination="USD"
              error={error || priceError}
              t={t}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenHero;
