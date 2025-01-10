import React from 'react';

import { ReactComponent as Arrow } from '../../../assets/svg/arrow-down-small.svg';

import MEXC from '../../../assets/images/token/mexc-logo.webp';
import Bitget from '../../../assets/images/token/bitget-logo.webp';
import Bitmart from '../../../assets/images/token/bitmart-logo.webp';
import GateIO from '../../../assets/images/token/gateio.webp';
import XT from '../../../assets/images/token/xt-logo.webp';
import Biconomy from '../../../assets/images/token/biconomy-logo.webp';
import ChangeNow from '../../../assets/images/token/changenow.webp';
import StealthEX from '../../../assets/images/token/stealthex.webp';
import SimpleSwap from '../../../assets/images/token/simpleswap.webp';
import CoinEx from '../../../assets/images/token/coinex.webp';
import CoinStore from '../../../assets/images/token/coinstore.webp';

import './style.scss';

const ExchangeSection = ({ exchangeIcon, exchangeName, exchangeDescription, exchangeLink, t }) => {
  return (
    <a href={exchangeLink} target="_blank" rel="noopener noreferrer">
      <div className="TokenPage__exchanges__item">
        <div className="TokenPage__exchanges__item__image-wrapper">
          <img src={exchangeIcon} className="TokenPage__exchanges__item__image" alt="" />
        </div>
        <p className="TokenPage__exchanges__item__name">{exchangeName}</p>
        <p className="TokenPage__exchanges__item__description">{exchangeDescription}</p>
        <div className="ArrowLink TokenPage__exchanges__item__link">
          {t('token.exchanges.visit')}
          <Arrow className="ArrowLink__arrow" />
        </div>
      </div>
    </a>
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
            exchangeIcon={GateIO}
            exchangeName={t('token.exchanges.gateio.name')}
            exchangeDescription={t('token.exchanges.gateio.description')}
            exchangeLink="https://www.gate.io/trade/JOYSTREAM_USDT"
            t={t}
          />
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
          <ExchangeSection
            exchangeIcon={XT}
            exchangeName={t('token.exchanges.xt.name')}
            exchangeDescription={t('token.exchanges.xt.description')}
            exchangeLink="https://www.xt.com/en/trade/joy_usdt"
            t={t}
          />
          <ExchangeSection
            exchangeIcon={Biconomy}
            exchangeName={t('token.exchanges.biconomy.name')}
            exchangeDescription={t('token.exchanges.biconomy.description')}
            exchangeLink="https://www.biconomy.com/exchange/JOY_USDT"
            t={t}
          />
          <ExchangeSection
            exchangeIcon={CoinEx}
            exchangeName={t('token.exchanges.coinex.name')}
            exchangeDescription={t('token.exchanges.coinex.description')}
            exchangeLink="https://www.coinex.com/en/exchange/joy-usdt"
            t={t}
          />
          <ExchangeSection
            exchangeIcon={ChangeNow}
            exchangeName={t('token.exchanges.changenow.name')}
            exchangeDescription={t('token.exchanges.changenow.description')}
            exchangeLink="https://changenow.io/exchange?from=usdterc20&to=joy&fiatMode=true&amount=50"
            t={t}
          />
          <ExchangeSection
            exchangeIcon={StealthEX}
            exchangeName={t('token.exchanges.stealthex.name')}
            exchangeDescription={t('token.exchanges.stealthex.description')}
            exchangeLink="https://stealthex.io/?amount=50&from=usdterc20&to=joy"
            t={t}
          />
          <ExchangeSection
            exchangeIcon={SimpleSwap}
            exchangeName={t('token.exchanges.simpleswap.name')}
            exchangeDescription={t('token.exchanges.simpleswap.description')}
            exchangeLink="https://simpleswap.io/exchange?from=usdterc20&to=joystream&amount=50&rate=floating"
            t={t}
          />
          <ExchangeSection
            exchangeIcon={CoinStore}
            exchangeName={t('token.exchanges.coinstore.name')}
            exchangeDescription={t('token.exchanges.coinstore.description')}
            exchangeLink="https://www.coinstore.com/spot/JOYUSDT"
            t={t}
          />
        </div>
      </div>
    </section>
  );
};

export default Exchanges;
