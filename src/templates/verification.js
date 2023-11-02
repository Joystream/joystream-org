import React from 'react';
import { graphql } from 'gatsby';
import { useTranslation, useI18next } from 'gatsby-plugin-react-i18next';

import SiteMetadata from '../components/SiteMetadata';
import Verification from '../components/verification-page';

const VerificationTemplate = ({ pageContext }) => {
  const { t } = useTranslation();
  const { language } = useI18next();

  const { user, otherMembers } = pageContext;

  return (
    <main>
      <SiteMetadata
        lang={language}
        title={t('verification.siteMetadata.title', { name: user.memberHandle })}
        description={t('verification.siteMetadata.description')}
      />
      <Verification user={user} otherMembers={otherMembers} t={t} />
    </main>
  );
};

export default VerificationTemplate;

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      ...LanguageQueryFields
    }
  }
`;
