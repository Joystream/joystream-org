import React from 'react';
import { Trans } from 'react-i18next';

import { TokenStatsSection } from '../../token-page/Hero/index.js';

import './style.scss';

const Tokenomics = ({ t }) => {
  return (
    <section className="IndexPage__tokenomics-wrapper">
      <div className="IndexPage__tokenomics">
        <header className="IndexPage__tokenomics__header">
          <span className="IndexPage__tokenomics__header__section-title">{t('landing.tokenomics.sectionTitle')}</span>
          <h2 className="IndexPage__tokenomics__header__title">Token Metrics</h2>
        </header>
        <div className="IndexPage__tokenomics__metrics">
          <div className="IndexPage__tokenomics__metrics__container IndexPage__tokenomics__metrics__container--price">
            Price
          </div>
          <div className="IndexPage__tokenomics__metrics__container IndexPage__tokenomics__metrics__container--market-cap">
            Market cap
          </div>
          <div className="IndexPage__tokenomics__metrics__container IndexPage__tokenomics__metrics__container--total-supply">
            Total supply
          </div>
          <div className="IndexPage__tokenomics__metrics__container IndexPage__tokenomics__metrics__container--circulating-supply">
            Circulating supply
          </div>
          <div className="IndexPage__tokenomics__metrics__container IndexPage__tokenomics__metrics__container--fdv">
            FDV
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
