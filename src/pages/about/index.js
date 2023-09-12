import React from 'react';
import { graphql } from 'gatsby';
import { useTranslation, useI18next, Trans } from 'gatsby-plugin-react-i18next';

import BaseLayout from '../../components/_layouts/Base';
import SiteMetadata from '../../components/SiteMetadata';
import Hero from '../../components/about-page/Hero';
import FoundingMembers from '../../components/about-page/FoundingMembers';
import Investors from '../../components/about-page/Investors';
import Auditors from '../../components/about-page/Auditors';
import Press from '../../components/about-page/Press';

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

      <FoundingMembers />

      <Investors />

      <Press />

      <Auditors />
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
