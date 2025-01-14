import React from 'react';
import cn from 'classnames';

import { ReactComponent as ClockIcon } from '../../../assets/svg/token/clock.svg';
import { ReactComponent as TokenIcon } from '../../../assets/svg/token/token.svg';
import DEXScreener from '../../../assets/images/token/dex-screener.png';

import './style.scss';

const Benefit = ({ icon, text, small, link }) => {
  return (
    <div className="TokenPage__uniswap__main__benefits__item">
      <div className="TokenPage__uniswap__main__benefits__item__icon-wrapper">{icon}</div>
      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            'TokenPage__uniswap__main__benefits__item__text TokenPage__uniswap__main__benefits__item__text--link',
            {
              'TokenPage__uniswap__main__benefits__item__text--small': small,
            }
          )}
        >
          {text}
        </a>
      ) : (
        <p
          className={cn('TokenPage__uniswap__main__benefits__item__text', {
            'TokenPage__uniswap__main__benefits__item__text--small': small,
          })}
        >
          {text}
        </p>
      )}
    </div>
  );
};

const Uniswap = ({ t }) => {
  return (
    <section className="TokenPage__uniswap-wrapper" id="instantSwap">
      <div className="TokenPage__uniswap">
        <header className="TokenPage__uniswap__header">
          <span className="TokenPage__uniswap__header__section-title">{t('token.uniswap.sectionTitle')}</span>
          <h2 className="TokenPage__uniswap__header__title">{t('token.uniswap.title')}</h2>
          <p className="TokenPage__uniswap__header__subtitle">{t('token.uniswap.subtitle')}</p>
        </header>

        <div className="TokenPage__uniswap__main">
          <div className="TokenPage__uniswap__main__benefits">
            <Benefit
              icon={
                <img
                  className="TokenPage__uniswap__main__benefits__item__logo"
                  src={DEXScreener}
                  alt="dexscreener logo"
                />
              }
              text={t('token.uniswap.benefits.dexScreener')}
              link="https://dexscreener.com/base/0xddbc56322277d3b116643470fb9c7c3b1b47b739"
            />
            <Benefit icon={<ClockIcon />} text={t('token.uniswap.benefits.onlyFewMinutes')} />
            <Benefit icon={<TokenIcon />} text={t('token.uniswap.benefits.nineHundredPlusCryptoSupported')} small />
          </div>
          <div className="TokenPage__uniswap__main__widget">
            <iframe
              title="uniswap-widget"
              id="uniswap-widget"
              src="https://app.uniswap.org/#/swap?chain=base&inputCurrency=0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913&outputCurrency=0x8761155c814c807cD3CcD15B256D69D3C10f198C"
              style={{ height: '615px', width: '100%', border: 'none' }}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Uniswap;
