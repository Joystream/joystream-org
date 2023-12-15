import React from 'react';

import ArrowLink from '../../ArrowLink';

import MEXC from '../../../assets/images/token/mexc-logo.webp';
import Bitget from '../../../assets/images/token/bitget-logo.webp';
import Bitmart from '../../../assets/images/token/bitmart-logo.webp';

import './style.scss';

const ExchangeSection = ({ exchangeIcon, exchangeName, exchangeDescription, exchangeLink, t }) => {
  return (
    <div className="TokenPage__exchanges__item">
      <div className="TokenPage__exchanges__item__image-wrapper">
        <img src={exchangeIcon} className="TokenPage__exchanges__item__image" alt="" />
      </div>
      <p className="TokenPage__exchanges__item__name">{exchangeName}</p>
      <p className="TokenPage__exchanges__item__description">{exchangeDescription}</p>
      <ArrowLink href={exchangeLink} className="TokenPage__exchanges__item__link" text={t('token.exchanges.visit')} />
    </div>
  );
};

const Exchanges = ({ t }) => {
  return (
    <section className="TokenPage__exchanges-wrapper" id="exchanges">
      <div className="TokenPage__exchanges">
        <header className="TokenPage__exchanges__header">
          <span className="TokenPage__exchanges__header__section-title">{t('token.exchanges.sectionTitle')}</span>
          <h2 className="TokenPage__exchanges__header__title">{t('token.exchanges.title')}</h2>
          <p className="TokenPage__exchanges__header__subtitle">{t('token.exchanges.subtitle')}</p>
        </header>

        <div className="TokenPage__exchanges__items">
          <ExchangeSection
            exchangeIcon={MEXC}
            exchangeName={t('token.exchanges.mexc.name')}
            exchangeDescription={t('token.exchanges.mexc.description')}
            exchangeLink="https://www.mexc.com/exchange/JOYSTREAM_USDT?_from=market"
            t={t}
          />
          <ExchangeSection
            exchangeIcon={Bitget}
            exchangeName={t('token.exchanges.bitget.name')}
            exchangeDescription={t('token.exchanges.bitget.description')}
            exchangeLink="https://www.bitget.com/spot/JOYUSDT"
            t={t}
          />
          <ExchangeSection
            exchangeIcon={Bitmart}
            exchangeName={t('token.exchanges.bitmart.name')}
            exchangeDescription={t('token.exchanges.bitmart.description')}
            exchangeLink="https://www.bitmart.com/trade/en-US?symbol=JOY_USDT&layout=pro"
            t={t}
          />
        </div>
      </div>
    </section>
  );
};

export default Exchanges;
