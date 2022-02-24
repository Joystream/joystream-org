import React from 'react';
import useAxios from '../utils/useAxios';
import { graphql } from 'gatsby';
import { useTranslation, useI18next } from 'gatsby-plugin-react-i18next';
import BaseLayout from '../components/_layouts/Base';
import SiteMetadata from '../components/SiteMetadata';

// components
import Hero from '../components/index-page/Hero';
import WhatWeDo from '../components/index-page/WhatWeDo';
import WhyYouShouldJoin from '../components/index-page/WhyYouShouldJoin';
import ExploreJoystream from '../components/index-page/ExploreJoystream';
import EarnTokens from '../components/index-page/EarnTokens';
import BecomeFoundingMember from '../components/index-page/BecomeFoundingMember';
import RoadToMainnet from '../components/index-page/RoadToMainnet';

import './style.scss';

const IndexPage = () => {
  const [statusData, loading, error] = useAxios();
  const { t } = useTranslation();
  const { language } = useI18next();

  return (
    <BaseLayout t={t}>
      <SiteMetadata
        lang={language}
        title={t("siteMetadata.title")}
        description={t("landing.siteMetadata.description")}
      />

      <Hero t={t} statusData={statusData} />

      <BecomeFoundingMember t={t}/>

      <WhatWeDo t={t}/>

      <WhyYouShouldJoin t={t}/>

      <ExploreJoystream t={t}/>

      <RoadToMainnet t={t}/>

      <EarnTokens t={t}/>
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
