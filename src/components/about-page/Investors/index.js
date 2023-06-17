import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import companyIcons from '../../../data/investors';

import './style.scss';

const companyIconsToRender = companyIcons?.slice(0, 12) ?? [];

const Investors = () => {
  const { t } = useTranslation();

  return (
    <section className="AboutPage__investors-wrapper">
      <div className="AboutPage__investors">
        <header className="AboutPage__investors__header">
          <span className="AboutPage__investors__header__section-title">{t('about.investors.sectionTitle')}</span>
          <h2 className="AboutPage__investors__header__title">{t('about.investors.title')}</h2>
        </header>
        <div className="AboutPage__investors__list">
          {companyIconsToRender.map(({ Icon, key }) => (
            <div key={key} className="AboutPage__investors__list-item">
              <Icon key={key} className="AboutPage__investors__list-item__icon" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Investors;
