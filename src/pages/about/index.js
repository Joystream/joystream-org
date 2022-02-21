import React from 'react';
import { graphql } from 'gatsby';
import { useTranslation, useI18next, Trans } from 'gatsby-plugin-react-i18next';

import BaseLayout from '../../components/_layouts/Base';
import SiteMetadata from '../../components/SiteMetadata';
import Hero from '../../components/about-page/Hero';
import List from '../../components/about-page/List';
import Positions from '../../components/about-page/Positions';

import BITMAIN from '../../assets/images/bitmain.png';
import DigitalCurrencyGroup from '../../assets/images/digital-currency-group.png';
import BoostVC from '../../assets/images/boostVC.png';
import StartupLab from '../../assets/images/startup-lab.png';

import './style.scss';

const AboutPage = () => {
  const { t } = useTranslation();
  const { language } = useI18next();

  return (
    <BaseLayout t={t}>
      <SiteMetadata
        lang={language}
        title={t('about.siteMetadata.title')}
        description={t('about.siteMetadata.description')}
      />

      <Hero title={<Trans i18nKey="about.hero.title" components={[<br />]} />} subtitle={t('about.hero.subtitle')} />
      <List title={t('about.ourTeam.title')} subtitle={t('about.ourTeam.subtitle')} />

      <div className="AboutPage__investors">
        <h2 className="AboutPage__investors__title">{t('about.investors.title')}</h2>
        <div className="AboutPage__investors__list">
          <div className="AboutPage__investors__icon-wrapper">
            <img
              className="AboutPage__investors__icon AboutPage__investors__icon--bitmain"
              src={BITMAIN}
              alt="Bitmain"
            />
          </div>
          <div className="AboutPage__investors__icon-wrapper">
            <img
              className="AboutPage__investors__icon AboutPage__investors__icon--digital-currency"
              src={DigitalCurrencyGroup}
              alt="Digital Currency Group"
            />
          </div>
          <div className="AboutPage__investors__icon-wrapper">
            <img
              className="AboutPage__investors__icon AboutPage__investors__icon--boostVC"
              src={BoostVC}
              alt="Boost VC"
            />
          </div>
          <div className="AboutPage__investors__icon-wrapper">
            <img
              className="AboutPage__investors__icon AboutPage__investors__icon--startup-lab"
              src={StartupLab}
              alt="Startup Lab"
            />
          </div>
        </div>
      </div>

      <Positions />
    </BaseLayout>
  );
};

export default AboutPage;

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      ...LanguageQueryFields
    }
  }
`;
