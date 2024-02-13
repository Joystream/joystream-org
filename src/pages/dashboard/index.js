import React, { useState } from 'react';
import { graphql } from 'gatsby';
import { useI18next, useTranslation } from 'gatsby-plugin-react-i18next';
import scrollTo from 'gatsby-plugin-smoothscroll';

import useAxios from '../../utils/useAxios';
import { ScrollProvider } from '../../components/_enhancers/ScrollContext';
import SiteMetadata from '../../components/SiteMetadata';

import Header from '../../components/dashboard-page/Header';
import Hero from '../../components/dashboard-page/Hero';
import Token from '../../components/dashboard-page/Token';
import Backers from '../../components/dashboard-page/Backers';
import History from '../../components/dashboard-page/History';
import Traction from '../../components/dashboard-page/Traction';
import Engineering from '../../components/dashboard-page/Engineering';
import Community from '../../components/dashboard-page/Community';
import Team from '../../components/dashboard-page/Team';
import Comparison from '../../components/dashboard-page/Comparison';
import Roadmap from '../../components/dashboard-page/Roadmap';

import { anchors } from '../../components/dashboard-page/Header/data';

import './style.scss';

const Dashboard = pageProps => {
  // TODO: Add dashboard.json to locales/[locale] so that t func with appropriate keys can be used
  const { language } = useI18next();
  const { t } = useTranslation();

  const [data] = useAxios('https://dao-services.joyutils.org/status/dashboard-data');

  const [withScrollInitiallyUp] = useState(() => !pageProps.location.hash);

  const [activeAnchor, setActiveAnchor] = useState(() => anchors[0]);
  const onAnchorClick = activeAnchor => {
    setActiveAnchor(activeAnchor);
    scrollTo(`#${activeAnchor.toLowerCase()}`);
  };

  console.log(data);

  return (
    <>
      {/* TODO: Remove later (for demonstration purposes) */}
      <div className="black-overlay"></div>

      <SiteMetadata lang={language} title={'Dashboard'} />

      <ScrollProvider minScrollDeltaThreshold={130} withScrollInitiallyUp={withScrollInitiallyUp}>
        <Header activeAnchor={activeAnchor} onAnchorClick={onAnchorClick} />

        <main>
          <Hero />

          <Token data={data?.token} />

          <Backers t={t} />

          <History />

          <Traction data={data} />

          <Engineering data={data?.engineering} />

          <Community data={data?.community} />

          <Team data={data?.team} />

          <Comparison />

          <Roadmap />
        </main>
        <footer></footer>
      </ScrollProvider>
    </>
  );
};

export default Dashboard;

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      ...LanguageQueryFields
    }
  }
`;
