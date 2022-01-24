import React from 'react';
import { graphql } from 'gatsby';
import { useTranslation, useI18next } from 'gatsby-plugin-react-i18next';
import BaseLayout from '../../components/_layouts/Base';
import SiteMetadata from '../../components/SiteMetadata';

import GetStartedHero from '../../components/get-started/Hero';
import GetStartedHowTo from '../../components/get-started/HowTo';
import GetStartedBounties from '../../components/get-started/Bounties';

import './style.scss';

/**
| Page | Details | FAQ | Contribute |
|---|---|---|---|
| Joystream | | X | |
| DAO | Markdown, Pioneer | X | X |
| FM | Markdown, Become FM block, Reward, Conversations | X | X |
| Council | Markdown | X | X |
| WG | List Groups | X | X |
| Bounties | List Bounties | X | X |
| Creator | NFT, Tokens, YT Sync | X | X |
**/

const GetStarted = () => {
  const { t } = useTranslation();
  const { language } = useI18next();
    if (role) return <Role >
    return <Intro />
  return (
    <BaseLayout t={t}>
      <SiteMetadata
        lang={language}
        title={t("getStarted.siteMetadata.title")}
        description={t("getStarted.siteMetadata.description")}
      />
    </BaseLayout>
  );
};

export default GetStarted;

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
