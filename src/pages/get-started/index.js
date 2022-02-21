import React from 'react';
import { graphql } from 'gatsby';
import { useTranslation, useI18next } from 'gatsby-plugin-react-i18next';
import BaseLayout from '../../components/_layouts/Base';
import SiteMetadata from '../../components/SiteMetadata';

import GetStartedHero from '../../components/get-started/Hero';
import GetStartedHowTo from '../../components/get-started/HowTo';
import GetStartedBounties from '../../components/get-started/Bounties';

import './style.scss';

const GetStarted = () => {
  const { t } = useTranslation();
  const { language } = useI18next();

  return (
    <BaseLayout t={t}>
      <SiteMetadata
        lang={language}
        title={t("getStarted.siteMetadata.title")}
        description={t("getStarted.siteMetadata.description")}
      />

      <GetStartedHero t={t} />

      <GetStartedHowTo t={t} />

      <GetStartedBounties t={t} />

    </BaseLayout>
  );
};

export default GetStarted;

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      ...LanguageQueryFields
    }
  }
`;
