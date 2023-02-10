import React from 'react';

import ArrowLink from '../../ArrowLink';

import PolkadotIcon from '../../../assets/images/token/polkadot-wallet.webp';
import SubWalletIcon from '../../../assets/images/token/sub-wallet.webp';
import TalismanIcon from '../../../assets/images/token/talisman.webp';

import './style.scss';

const WalletSection = ({ walletIcon, walletName, walletLink }) => {
  return (
    <div className="TokenPage__wallets__item">
      <div className="TokenPage__wallets__item__image-wrapper">
        <img src={walletIcon} className="TokenPage__wallets__item__image" alt="" />
      </div>
      <p className="TokenPage__wallets__item__name">{walletName}</p>
      <ArrowLink href={walletLink} className="TokenPage__wallets__item__link" text="Learn more" />
    </div>
  );
};

const Wallets = () => {
  return (
    <section className="TokenPage__wallets-wrapper">
      <div className="TokenPage__wallets">
        <header className="TokenPage__wallets__header">
          <span className="TokenPage__wallets__header__section-title">WALLETS</span>
          <h2 className="TokenPage__wallets__header__title">Where can you store JOY?</h2>
          <p className="TokenPage__wallets__header__subtitle">
            You can keep your JOY tokens on a number of wallets that you can install as a browser extension.
          </p>
        </header>

        <div className="TokenPage__wallets__items">
          <WalletSection
            walletIcon={PolkadotIcon}
            walletName="Polkadot"
            walletLink="https://polkadot.js.org/extension/"
          />
          <WalletSection walletIcon={SubWalletIcon} walletName="Talisman" walletLink="https://www.talisman.xyz/" />
          <WalletSection walletIcon={TalismanIcon} walletName="SubWallet" walletLink="https://subwallet.app/" />
        </div>
      </div>
    </section>
  );
};

export default Wallets;
