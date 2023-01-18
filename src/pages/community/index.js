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

const LinkCard = ({ icon, title, subtitle, link }) => {
  return (
    <a href={link} target="_blank">
      <div className="CommunityPage__link">
        <div className={`CommunityPage__link__icon CommunityPage__link__icon--${title.toLowerCase()}`}>{icon}</div>
        <p className="CommunityPage__link__title">{title}</p>
        <p className="CommunityPage__link__subtitle">{subtitle}</p>
        <ExternalLinkIcon className="CommunityPage__link__external-link"/>
      </div>
    </a>
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
            <h1 className="CommunityPage__hero__content__title">{t("community.hero.title")}</h1>
            <p className="CommunityPage__hero__content__subtitle">
              {t("community.hero.subtitle")}
            </p>
          </div>
          <div className="CommunityPage__hero__image">
            <CommunityBackground className="CommunityPage__hero__image__background" />
            <CommunityHero className="CommunityPage__hero__image__foreground" />
          </div>
        </div>
      </section>

      <section className="CommunityPage__links-wrapper">
        <div className="CommunityPage__links-section">
          <div className="CommunityPage__links">
            <LinkCard icon={<Twitter />} title={t("community.links.twitter.title")} subtitle={t("community.links.twitter.subtitle")} link="https://twitter.com/JoystreamDAO/" />
            <LinkCard icon={<Discord />} title={t("community.links.discord.title")} subtitle={t("community.links.discord.subtitle")} link="https://discord.gg/DE9UN3YpRP" />
            <LinkCard icon={<Gleev />} title={t("community.links.gleev.title")} subtitle={t("community.links.gleev.subtitle")} link="https://gleev.xyz/"/>
            <LinkCard icon={<Reddit />} title={t("community.links.reddit.title")} subtitle={t("community.links.reddit.subtitle")} link="https://www.reddit.com/r/joystream_dao/"/>
            <LinkCard icon={<GitHub />} title={t("community.links.github.title")} subtitle={t("community.links.github.subtitle")} link="https://github.com/Joystream"/>
            <LinkCard icon={<Handbook />} title={t("community.links.handbook.title")} subtitle={t("community.links.handbook.subtitle")} link="https://joystream.gitbook.io/testnet-workspace/"/>
            <LinkCard icon={<Element />} title={t("community.links.element.title")} subtitle={t("community.links.element.subtitle")} link="#0"/>
            <LinkCard icon={<Youtube />} title={t("community.links.youtube.title")} subtitle={t("community.links.youtube.subtitle")} link="https://www.youtube.com/@joystream8627"/>
          </div>
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
