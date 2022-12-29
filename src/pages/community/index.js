import React from 'react';
import { graphql } from 'gatsby';
import { useTranslation, useI18next } from 'gatsby-plugin-react-i18next';

import BaseLayout from '../../components/_layouts/Base';
import SiteMetadata from '../../components/SiteMetadata';

import { ReactComponent as CommunityHero } from '../../assets/svg/community-hero.svg';
import { ReactComponent as CommunityBackground } from '../../assets/svg/community-background.svg';
import { ReactComponent as Twitter } from '../../assets/svg/twitter.svg';
import { ReactComponent as Discord } from '../../assets/svg/discord-icon.svg';
import { ReactComponent as Gleev } from '../../assets/svg/gleev-icon.svg';
import { ReactComponent as Reddit } from '../../assets/svg/reddit-icon.svg';
import { ReactComponent as GitHub } from '../../assets/svg/github.svg';
import { ReactComponent as Handbook } from '../../assets/svg/handbook-icon.svg';
import { ReactComponent as Element } from '../../assets/svg/element-icon.svg';
import { ReactComponent as Youtube } from '../../assets/svg/youtube-icon.svg';
import { ReactComponent as ExternalLinkIcon } from '../../assets/svg/link.svg';


import './style.scss';

const LinkCard = ({ icon, title, subtitle }) => {
  return (
    <div className="CommunityPage__link">
      <div className={`CommunityPage__link__icon CommunityPage__link__icon--${title.toLowerCase()}`}>{icon}</div>
      <p className="CommunityPage__link__title">{title}</p>
      <p className="CommunityPage__link__subtitle">{subtitle}</p>
      <ExternalLinkIcon className="CommunityPage__link__external-link"/>
    </div>
  );
};

const CommunityPage = () => {
  const { t } = useTranslation();
  const { language } = useI18next();

  return (
    <BaseLayout t={t} mainnetReminder={true}>
      <SiteMetadata
        lang={language}
        title={t('siteMetadata.title')}
        description={t('landing.siteMetadata.description')}
      />

      <section className="CommunityPage__hero-wrapper">
        <div className="CommunityPage__hero">
          <div className="CommunityPage__hero__content">
            <h1 className="CommunityPage__hero__content__title">Join our community</h1>
            <p className="CommunityPage__hero__content__subtitle">
              There are many ways you can engage with our community and follow up on the platform development news.
              Everyone is welcome.
            </p>
          </div>
          <div className="CommunityPage__hero__image">
            <CommunityBackground className="CommunityPage__hero__image__bacgkround" />
            <CommunityHero className="CommunityPage__hero__image__foreground" />
          </div>
        </div>
      </section>

      <section className="CommunityPage__links-wrapper">
        <div className="CommunityPage__links">
          <LinkCard icon={<Twitter />} title="Twitter" subtitle="Follow us @JoystreamDAO" />
          <LinkCard icon={<Discord />} title="Discord" subtitle="Engage with community" />
          <LinkCard icon={<Gleev />} title="Gleev" subtitle="Watch community calls" />
          <LinkCard icon={<Reddit />} title="Reddit" subtitle="Join the discussion" />
          <LinkCard icon={<GitHub />} title="GitHub" subtitle="Contribute to our codebase" />
          <LinkCard icon={<Handbook />} title="Handbook" subtitle="Read our documentation" />
          <LinkCard icon={<Element />} title="Element" subtitle="Get support" />
          <LinkCard icon={<Youtube />} title="YouTube" subtitle="Watch community calls" />
        </div>
      </section>
    </BaseLayout>
  );
};

export default CommunityPage;

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      ...LanguageQueryFields
    }
  }
`;
