import React from 'react';
import { graphql } from 'gatsby';
import { useTranslation, useI18next } from 'gatsby-plugin-react-i18next';
import SiteMetadata from '../../components/SiteMetadata';

import { verifiedMembers } from '../../data/pages/verification';

// components
import Verification from '../../components/verification-page';

const leet_joy = verifiedMembers[0];
const otherMembers = verifiedMembers.filter(member => member.memberHandle !== leet_joy.memberHandle);

const LeetJoyPage = () => {
  const { t } = useTranslation();
  const { language } = useI18next();

  return (
    <main>
      <SiteMetadata
        lang={language}
        title={t('verification.siteMetadata.title', { name: 'leet_joy' })}
        description={t('verification.siteMetadata.description')}
      />
      <Verification user={leet_joy} otherMembers={otherMembers} t={t} />
    </main>
  );
};

export { LeetJoyPage };
export default LeetJoyPage;

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      ...LanguageQueryFields
    }
  }
`;
