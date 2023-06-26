import React from 'react';
import { Trans } from 'react-i18next';

import { TokenStatsSection } from '../../token-page/Hero/index.js';

import './style.scss';

const Tokenomics = ({ t }) => {
  return (
    <section className="IndexPage__tokenomics-wrapper">
      <div className="IndexPage__tokenomics">
        <header>
          <span className="IndexPage__tokenomics__section-title">{t('landing.tokenomics.sectionTitle')}</span>
          <h2 className="IndexPage__tokenomics__title">
            <Trans i18nKey="landing.tokenomics.title" components={{ br: <br /> }} />
          </h2>
        </header>
        <TokenStatsSection t={t} isSeparate={true} />
      </div>
    </section>
  );
};

export default Tokenomics;
