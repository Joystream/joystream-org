import React from 'react';
import { graphql } from 'gatsby';
import SiteMetadata from '../../components/SiteMetadata';
import { useI18next, useTranslation } from 'gatsby-plugin-react-i18next';

import OGImage from '../../assets/images/Joystream_Thumbnail_1.jpeg';

export default function RedirectToOnboarding() {
  const { t } = useTranslation();
  const { language } = useI18next();

  if (typeof window !== 'undefined') {
    window.location = '/start-here/what-is-joystream';
  }

  return (
    <SiteMetadata
      lang={language}
      title={t('onboarding.page1.siteTitle')}
      description={t('onboarding.page1.subtitle')}
      image={OGImage}
    />
  )
};


export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      ...LanguageQueryFields
    }
  }
`;