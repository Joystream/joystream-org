import React, { useEffect, useState } from 'react';
import { useTranslation, Trans } from 'gatsby-plugin-react-i18next';

import './style.scss';

const RoadHead = () => {
  const { t } = useTranslation();

  return (
    <section className="RoadmapPage__head-wrapper">
      <div className="RoadmapPage__head">
        <header className="RoadmapPage__head__header">
          <span className="RoadmapPage__head__header__section-title">
            {t('roadmap.ahead.subtitle')}
          </span>
          <h2 className="RoadmapPage__head__header__title">
            {t('roadmap.ahead.title')}
          </h2>
          <p className="RoadmapPage__head__header__subtitle">
            <Trans
              i18nKey="roadmap.ahead.description"
              components={{
                linkOne: (
                  <a
                    href="https://joystream.gitbook.io/testnet-workspace/"
                    target="_blank"
                  >
                    external link
                  </a>
                ),
              }}
            />
          </p>
        </header>
      </div>
    </section>
  );
};

export default RoadHead;
