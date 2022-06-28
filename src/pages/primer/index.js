import React from 'react';
import { graphql } from 'gatsby';
import { useTranslation, useI18next } from 'gatsby-plugin-react-i18next';
import BaseLayout from '../../components/_layouts/Base';
import SiteMetadata from '../../components/SiteMetadata';

// components
import ChooseYourOwnAdventure from '../../components/primer-page/ChooseYourOwnAdventure';
import Header from '../../components/primer-page/Header'
import Governance from '../../components/primer-page/Governance';
import WhyWeExist from '../../components/primer-page/WhyWeExist';
// import Hero from '../components/index-page/Hero';
// import WhatWeDo from '../components/index-page/WhatWeDo';
// import ExploreJoystream from '../components/index-page/ExploreJoystream';
// import BecomeFoundingMember from '../components/index-page/BecomeFoundingMember';
// import RoadToMainnet from '../components/index-page/RoadToMainnet';
// import EarnJOYCoins from '../components/index-page/EarnJOYCoins';
// import OurInvestors from '../components/index-page/OurInvestors';
// import AvailableActivities from '../components/index-page/AvailableActivities';

import './style.scss';

const PrimerPage = () => {
  const { t } = useTranslation();
  const { language } = useI18next();

  return (
    <BaseLayout t={t} onlyNewsletter={true}>
      <SiteMetadata
        lang={language}
        title={t('siteMetadata.title')}
        description={t('landing.siteMetadata.description')}
      />

      <Header t={t} />

      <WhyWeExist t={t} />

      <Governance t={t} />

      <ChooseYourOwnAdventure t={t} />

    </BaseLayout>
  );
};

export { PrimerPage };
export default PrimerPage;

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      ...LanguageQueryFields
    }
  }
`;
