import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import companyIcons from './company-icons';

import "./style.scss";

const Investors = () => {
  const { t } = useTranslation();

  const FMFW = companyIcons[companyIcons.length - 1];

  return (
    <div className="AboutPage__investors-wrapper">
      <div className="AboutPage__investors">
        <h2 className="AboutPage__investors__title">{t('about.investors.title')}</h2>
        <div className="AboutPage__investors__list">
          {companyIcons.map(Icon => <Icon className="AboutPage__investors__list-item" />)}
        </div>
      </div>
    </div>
  );
};

export default Investors;