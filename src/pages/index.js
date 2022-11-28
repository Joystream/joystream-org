import React from 'react';
import { graphql } from 'gatsby';
import { useTranslation, useI18next } from 'gatsby-plugin-react-i18next';
import BaseLayout from '../components/_layouts/Base';
import SiteMetadata from '../components/SiteMetadata';

// components
import Hero from '../components/index-page/Hero';
import Payouts from '../components/index-page/Payouts';
import VideoNFTs from '../components/index-page/VideoNFTs';
import CreatorTokens from '../components/index-page/CreatorTokens';
import YoutubeSync from '../components/index-page/YoutubeSync';
import Manifesto from '../components/index-page/Manifesto';
import JoystreamDAO from '../components/index-page/JoystreamDAO';
import Jsgenesis from '../components/index-page/Jsgenesis';
import AvailableActivities from '../components/index-page/AvailableActivities';
import Ecosystem from '../components/index-page/Ecosystem';

import './style.scss';

const IndexPage = () => {
  const { t } = useTranslation();
  const { language } = useI18next();

  return (
    <BaseLayout t={t} mainnetReminder={false}>
      <SiteMetadata
        lang={language}
        title={t('siteMetadata.title')}
        description={t('landing.siteMetadata.description')}
      />

      <Hero t={t}/>

      <Ecosystem />

      <Payouts t={t}/>

      <VideoNFTs t={t}/>

      <CreatorTokens t={t}/>

      {/* <YoutubeSync t={t}/> */}

      <Manifesto t={t}/>

      <AvailableActivities t={t}/>

      <JoystreamDAO t={t}/>

      {/* <Jsgenesis t={t} /> */}
    </BaseLayout>
  );
};

export { IndexPage };
export default IndexPage;

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      ...LanguageQueryFields
    }
  }
`;
