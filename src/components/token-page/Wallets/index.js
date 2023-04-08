import React from 'react';

import ArrowLink from '../../ArrowLink';

import PolkadotIcon from '../../../assets/images/token/polkadot-wallet.webp';
import SubWalletIcon from '../../../assets/images/token/sub-wallet.webp';
import TalismanIcon from '../../../assets/images/token/talisman.webp';
import { ReactComponent as InfoIcon } from '../../../assets/svg/info.svg';

import './style.scss';

const WalletSection = ({ walletIcon, walletName, walletLink, t }) => {
  return (
    <div className="TokenPage__wallets__item">
      <div className="TokenPage__wallets__item__image-wrapper">
        <img src={walletIcon} className="TokenPage__wallets__item__image" alt="" />
      </div>
      <p className="TokenPage__wallets__item__name">{walletName}</p>
      <ArrowLink href={walletLink} className="TokenPage__wallets__item__link" text={t('token.wallets.learnMore')} />
    </div>
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
            walletIcon={PolkadotIcon}
            walletName={t('token.wallets.polkadot')}
            walletLink="https://polkadot.js.org/extension/"
            t={t}
          />
          <WalletSection
            walletIcon={TalismanIcon}
            walletName={t('token.wallets.talisman')}
            walletLink="https://www.talisman.xyz/"
            t={t}
          />
          <WalletSection
            walletIcon={SubWalletIcon}
            walletName={t('token.wallets.subwallet')}
            walletLink="https://subwallet.app/"
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
