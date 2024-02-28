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
import Feature from '../../components/Feature';

import { anchors } from '../../components/dashboard-page/Header/data';

import './style.scss';

const Dashboard = pageProps => {
  // TODO: Add dashboard.json to locales/[locale] so that t func with appropriate keys can be used
  const { language } = useI18next();
  const { t } = useTranslation();

  const [data, loading] = useAxios('https://status.joystream.org/dashboard-data');

  const [withScrollInitiallyUp] = useState(() => !pageProps.location.hash);

  const [activeAnchor, setActiveAnchor] = useState(() => anchors[0]);
  const onAnchorClick = activeAnchor => {
    setActiveAnchor(activeAnchor);
    scrollTo(`#${activeAnchor.toLowerCase()}`);
  };

  const embedded = !pageProps.location.pathname.includes('/dashboard');
  const historyHidden = true;

  return (
    <>
      {/* TODO: Remove later (for demonstration purposes) */}
      <div className="black-overlay"></div>

      {!embedded && <SiteMetadata lang={language} title={'Dashboard'} />}

      <ScrollProvider minScrollDeltaThreshold={130} withScrollInitiallyUp={withScrollInitiallyUp}>
        {!embedded && (
          <Header activeAnchor={activeAnchor} onAnchorClick={onAnchorClick} historyHidden={historyHidden} />
        )}

        <main>
          <Hero embedded={embedded} />

          <Token data={data?.token} loading={loading} />

          <Backers t={t} />

          <Feature disabled={historyHidden}>
            <History />
          </Feature>

          <Traction data={data} loading={loading} />

          <Engineering data={data?.engineering} loading={loading} />

          <Community data={data?.community} loading={loading} />

          <Team data={data?.team} loading={loading} />

          <Comparison data={data} loading={loading} />

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
