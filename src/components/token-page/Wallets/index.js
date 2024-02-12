import React from 'react';

import { ReactComponent as Arrow } from '../../../assets/svg/arrow-down-small.svg';

import OneKeyIcon from '../../../assets/images/token/onekey.png';
import NovaIcon from '../../../assets/images/token/nova-wallet.webp';
import SubWalletIcon from '../../../assets/images/token/sub-wallet.webp';
import TalismanIcon from '../../../assets/images/token/talisman.webp';
import { ReactComponent as InfoIcon } from '../../../assets/svg/info.svg';

import './style.scss';

const WalletSection = ({ walletIcon, walletName, walletLink, platforms, t }) => {
  return (
    <a href={walletLink} target="_blank" rel="noopener noreferrer">
      <div className="TokenPage__wallets__item">
        <div className="TokenPage__wallets__item__image-wrapper">
          <img src={walletIcon} className="TokenPage__wallets__item__image" alt="" />
        </div>
        <p className="TokenPage__wallets__item__name">{walletName}</p>
        <p className="TokenPage__wallets__item__platforms-title">{t('token.wallets.platforms')}</p>
        <p className="TokenPage__wallets__item__platforms">{platforms}</p>
        <div className="ArrowLink TokenPage__wallets__item__link">
          {t('token.wallets.learnMore')}
          <Arrow className="ArrowLink__arrow" />
        </div>
      </div>
    </a>
  );
};

const Wallets = ({ t }) => {
  return (
    <section className="TokenPage__wallets-wrapper">
      <div className="TokenPage__wallets">
        <header className="TokenPage__wallets__header">
          <span className="TokenPage__wallets__header__section-title">{t('token.wallets.sectionTitle')}</span>
          <h2 className="TokenPage__wallets__header__title">{t('token.wallets.title')}</h2>
          <p className="TokenPage__wallets__header__subtitle">{t('token.wallets.subtitle')}</p>
        </header>

        <div className="TokenPage__wallets__items">
          <WalletSection
            walletIcon={OneKeyIcon}
            walletName={t('token.wallets.onekey')}
            walletLink="https://onekey.so/"
            platforms={t('token.wallets.onekeyPlatforms')}
            t={t}
          />
          <WalletSection
            walletIcon={NovaIcon}
            walletName={t('token.wallets.nova')}
            walletLink="https://novawallet.io/"
            platforms={t('token.wallets.novaPlatforms')}
            t={t}
          />
          <WalletSection
            walletIcon={TalismanIcon}
            walletName={t('token.wallets.talisman')}
            walletLink="https://www.talisman.xyz/"
            platforms={t('token.wallets.talismanPlatforms')}
            t={t}
          />
          <WalletSection
            walletIcon={SubWalletIcon}
            walletName={t('token.wallets.subwallet')}
            walletLink="https://subwallet.app/"
            platforms={t('token.wallets.subwalletPlatforms')}
            t={t}
          />
        </div>
        <div className="TokenPage__wallets__info">
          <InfoIcon className="TokenPage__wallets__info__icon" />
          {t('token.wallets.info')}
        </div>
      </div>
    </section>
  );
};

export default Wallets;
