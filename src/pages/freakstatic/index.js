import React from 'react';
import { graphql } from 'gatsby';
import { useTranslation, useI18next } from 'gatsby-plugin-react-i18next';
import BaseLayout from '../../components/_layouts/Base';
import SiteMetadata from '../../components/SiteMetadata';

import { verifiedMembers } from '../../data/pages/verification';

// components
import Verification from '../../components/verification-page';

const freakstatic = verifiedMembers[3];
const otherMembers = verifiedMembers.filter(member => member.memberHandle !== freakstatic.memberHandle);

const FreakstaticPage = () => {
  const { t } = useTranslation();
  const { language } = useI18next();

  return (
    <main>
      <SiteMetadata
        lang={language}
        title={t('verification.siteMetadata.title', { name: 'Freakstatic' })}
        description={t('verification.siteMetadata.description')}
      />
      <Verification user={freakstatic} otherMembers={otherMembers} t={t} />
    </main>
  );
};

export { FreakstaticPage };
export default FreakstaticPage;

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      ...LanguageQueryFields
    }
  }
`;
