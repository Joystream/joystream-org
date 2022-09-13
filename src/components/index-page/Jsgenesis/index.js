import React from 'react';
import { Link } from 'gatsby-plugin-react-i18next';
import { Trans } from 'gatsby-plugin-react-i18next';

import { ReactComponent as ArrowIcon } from '../../../assets/svg/arrow-down-small.svg';

import './style.scss';

const Jsgenesis = ({ t }) => {
  return (
    <section className="IndexPage__jsgenesis-wrapper">
      <div className="IndexPage__jsgenesis">
        <div className="IndexPage__jsgenesis__content">
          <header>
            <span className="IndexPage__jsgenesis__section-title">{t('landing.jsgenesis.sectionTitle')}</span>
            <h2 className="IndexPage__jsgenesis__title">
              <Trans i18nKey="landing.jsgenesis.title" components={{ br: <br /> }} />
            </h2>
          </header>
          <Link to="/about">
            <p className="IndexPage__jsgenesis__link">
              {t('landing.jsgenesis.link')}
              <ArrowIcon className="IndexPage__jsgenesis__link__arrow" />
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Jsgenesis;
