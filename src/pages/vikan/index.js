import React from 'react';
import { graphql } from 'gatsby';
import { useTranslation, useI18next } from 'gatsby-plugin-react-i18next';
import SiteMetadata from '../../components/SiteMetadata';

import { verifiedMembers } from '../../data/pages/verification';

// components
import Verification from '../../components/verification-page';

const vikan = verifiedMembers[1];
const otherMembers = verifiedMembers.filter(member => member.memberHandle !== vikan.memberHandle);

const VikanPage = () => {
  const { t } = useTranslation();
  const { language } = useI18next();

  return (
    <main>
      <SiteMetadata
        lang={language}
        title={t('verification.siteMetadata.title', { name: 'vikan' })}
        description={t('verification.siteMetadata.description')}
      />
      <Verification user={vikan} otherMembers={otherMembers} t={t} />
    </main>
  );
};

export { VikanPage };
export default VikanPage;

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      ...LanguageQueryFields
    }
  }
`;
