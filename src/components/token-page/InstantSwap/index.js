import React from 'react';

import { ReactComponent as LockIcon } from '../../../assets/svg/token/lock.svg';
import { ReactComponent as InvisibilityIcon } from '../../../assets/svg/token/invisibility.svg';
import { ReactComponent as ClockIcon } from '../../../assets/svg/token/clock.svg';
import { ReactComponent as TokenIcon } from '../../../assets/svg/token/token.svg';

import './style.scss';

const Benefit = ({ icon, text }) => {
  return (
    <div className="TokenPage__instant-swap__main__benefits__item">
      <div className="TokenPage__instant-swap__main__benefits__item__icon-wrapper">{icon}</div>
      <p className="TokenPage__instant-swap__main__benefits__item__text">{text}</p>
    </div>
  );
};

const InstantSwap = ({ t }) => {
  return (
    <section className="TokenPage__instant-swap-wrapper" id="instantSwap">
      <div className="TokenPage__instant-swap">
        <header className="TokenPage__instant-swap__header">
          <span className="TokenPage__instant-swap__header__section-title">{t('token.instantSwap.sectionTitle')}</span>
          <h2 className="TokenPage__instant-swap__header__title">{t('token.instantSwap.title')}</h2>
          <p className="TokenPage__instant-swap__header__subtitle">{t('token.instantSwap.subtitle')}</p>
        </header>

        <div className="TokenPage__instant-swap__main">
          <div className="TokenPage__instant-swap__main__benefits">
            <Benefit icon={<LockIcon />} text="No sign up" />
            <Benefit icon={<InvisibilityIcon />} text="No KYC" />
            <Benefit icon={<ClockIcon />} text="Only 2-3 minutes" />
            <Benefit icon={<TokenIcon />} text="900+ cryptos supported" />
          </div>
          <iframe
            title="changenow-widget"
            id="iframe-widget"
            src="https://changenow.io/embeds/exchange-widget/v2/widget.html?FAQ=true&amount=1&amountFiat&backgroundColor=272D33&darkMode=true&from=eth&horizontal=false&isFiat=false&lang=en-US&link_id=836b188968aaa8&locales=false&logo=true&primaryColor=4038FF&to=joy&toTheMoon=false"
            style={{ minHeight: '528px', minWidth: '100%', border: 'none' }}
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default InstantSwap;
