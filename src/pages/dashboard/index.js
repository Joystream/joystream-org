import React, { useState } from 'react';
import { graphql } from 'gatsby';
import { useI18next, useTranslation } from 'gatsby-plugin-react-i18next';
import scrollTo from 'gatsby-plugin-smoothscroll';

import { ScrollProvider } from '../../components/_enhancers/ScrollContext';
import SiteMetadata from '../../components/SiteMetadata';
import DashboardHeader from '../../components/DashboardHeader';
import DashboardHero from '../../components/DashboardHero';
import DashboardToken from '../../components/DashboardToken';
import DashboardBackers from '../../components/DashboardBackers';
import DashboardHistory from '../../components/DashboardHistory';
import DashboardTraction from '../../components/dashboard-page/Traction';
import DashboardEngineering from '../../components/dashboard-page/Engineering';

import { anchors } from '../../components/DashboardHeader/data';

import './style.scss';

const Dashboard = pageProps => {
  // TODO: Add dashboard.json to locales/[locale] so that t func with appropriate keys can be used
  const { language } = useI18next();
  const { t } = useTranslation();

  const [withScrollInitiallyUp] = useState(() => !pageProps.location.hash);
  const [shouldAddScrollOffset, setShouldAddScrollOffset] = useState(false);

  const [activeAnchor, setActiveAnchor] = useState(() => anchors[0]);
  const onAnchorClick = activeAnchor => {
    setActiveAnchor(activeAnchor);
    setShouldAddScrollOffset(true);

    scrollTo(`#${activeAnchor.toLowerCase()}`);
  };

  return (
    <>
      {/* TODO: Remove later (for demonstration purposes) */}
      <div className="black-overlay"></div>

      <SiteMetadata lang={language} title={'Dashboard'} />

      <ScrollProvider minScrollDeltaThreshold={150} withScrollInitiallyUp={withScrollInitiallyUp}>
        <DashboardHeader activeAnchor={activeAnchor} onAnchorClick={onAnchorClick} />

        <main>
          <DashboardHero shouldAddScrollOffset={shouldAddScrollOffset} />
          <DashboardToken shouldAddScrollOffset={shouldAddScrollOffset} />
          <DashboardBackers t={t} shouldAddScrollOffset={shouldAddScrollOffset} />
          <DashboardHistory shouldAddScrollOffset={shouldAddScrollOffset} />
          <DashboardTraction shouldAddScrollOffset={shouldAddScrollOffset} />
          <DashboardEngineering shouldAddScrollOffset={shouldAddScrollOffset} />
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
