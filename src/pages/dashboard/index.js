import React, { useState } from 'react';
import { useI18next } from 'gatsby-plugin-react-i18next';

import SiteMetadata from '../../components/SiteMetadata';
import DashboardHeader from '../../components/DashboardHeader';
import DashboardHero from '../../components/DashboardHero';
import DashboardToken from '../../components/DashboardToken';

import { anchors } from '../../components/DashboardHeader/data';

import './style.scss';

const Dashboard = () => {
  // TODO: Add dashboard.json to locales/[locale] so that t func with appropriate keys can be used
  const { language } = useI18next();

  const [activeAnchor, setActiveAnchor] = useState(() => anchors[0]);

  return (
    <>
      {/* TODO: Remove later (for demonstration purposes) */}
      <div className="black-overlay"></div>

      {/* TODO: Scroll Provider to be added */}

      <SiteMetadata lang={language} title={'Dashboard'} />

      <DashboardHeader activeAnchor={activeAnchor} onAnchorClick={setActiveAnchor} />

      <main>
        <DashboardHero />
        <DashboardToken />
      </main>
      <footer></footer>
    </>
  );
};

export default Dashboard;
