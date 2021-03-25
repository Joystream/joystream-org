import React from 'react';
import ArrowLink from '../../../components/ArrowLink';
import Tokens from '../../../assets/svg/coin-minter-hero.svg';
import TokensAlt from '../../../assets/svg/coin-minter-hero-alt.svg';
import parseBalance from '../../../utils/parseBalance';

import './style.scss';

const TokenStatsItem = ({ title, value }) => (
  <div className="TokensPage__tokenstats__item">
    <h3 className="TokensPage__tokenstats__item__title">{title}</h3>
    <p className="TokensPage__tokenstats__item__value">{value}</p>
  </div>
);

const TokenStatsItemPlaceholder = () => (
  <div className="TokensPage__tokenstats__item TokensPage__tokenstats__item--placeholder">
    <div className="TokensPage__tokenstats__item__title-placeholder"></div>
    <div className="TokensPage__tokenstats__item__value-placeholder"></div>
  </div>
);

const TokenHero = ({ statusServerData }) => {
  return (
    <div className="TokensPage__header">
      <div className="TokensPage__hero">
        <div className="TokensPage__hero__content">
          <h2 className="TokensPage__hero__title">Understanding the tJOY token</h2>
          <p className="TokensPage__hero__text">
            Participants on our testnets can now earn Joystream Testnet Tokens (tJOYs) backed by fiat currency.
          </p>
          <ArrowLink className="TokensPage__hero__link" to="/get-started" text="Learn more" />
        </div>
        <img className="TokensPage__hero__image" alt="tokens hero" src={Tokens} />
        <img className="TokensPage__hero__image TokensPage__hero__image--alt" alt="tokens hero" src={TokensAlt} />
      </div>
      <div className="TokensPage__tokenstats-wrapper">
        <h2 className="TokensPage__tokenstats-title">Token in numbers</h2>
        <div className="TokensPage__tokenstats">
          {/* {statusServerData ? (
            <>
              <TokenStatsItem title="Exchange Rate" value={`$${statusServerData.price.toFixed(7)}`} />
              <TokenStatsItem title="Backing Value" value={`$${statusServerData.dollarPool.size.toFixed(2)}`} />
              <TokenStatsItem title="Supply" value={`$${parseBalance(statusServerData.totalIssuance)}`} />
            </>
          ) : (
            <>
              <TokenStatsItemPlaceholder />
              <TokenStatsItemPlaceholder />
              <TokenStatsItemPlaceholder />
            </>
          )} */}
          <TokenStatsItem title="Exchange Rate" value="$0.0000422" />
          <TokenStatsItem title="Backing Value" value="$7815.95" />
          <TokenStatsItem title="Supply" value={parseBalance("458292156")} />
        </div>
      </div>
    </div>
  );
};

export default TokenHero;
