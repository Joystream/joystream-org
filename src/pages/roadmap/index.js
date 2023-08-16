import React from 'react';
import { graphql } from 'gatsby';
import { useTranslation, useI18next, Trans } from 'gatsby-plugin-react-i18next';

import BaseLayout from '../../components/_layouts/Base';
import SiteMetadata from '../../components/SiteMetadata';

import { ReactComponent as AcropolisBuilding } from '../../assets/svg/acropolis-building.svg';
import { ReactComponent as CommunityBackground } from '../../assets/svg/community-background.svg';

import RoadHead from '../../components/roadmap-page/RoadHead';

import './style.scss';
import Quarters from '../../components/roadmap-page/Quarters';
const RoadmapPage = () => {
  const { t } = useTranslation();
  const { language } = useI18next();

  return (
    <BaseLayout t={t}>
      <SiteMetadata
        lang={language}
        title={t('roadmap.siteMetadata.title')}
        description={t('roadmap.siteMetadata.description')}
      />

      <section className="RoadmapPage__hero-wrapper">
        <div className="RoadmapPage__hero">
          <div className="RoadmapPage__hero__content">
            <h1 className="RoadmapPage__hero__content__title">
              {t('roadmap.main.title')}
            </h1>
            <p className="RoadmapPage__hero__content__subtitle">
              {t('roadmap.main.subtitle')}
            </p>
          </div>
          <div className="RoadmapPage__hero__image">
            <CommunityBackground className="RoadmapPage__hero__image__background" />
            <AcropolisBuilding className="RoadmapPage__hero__image__foreground" />
          </div>
        </div>
      </section>
      <RoadHead />
      <Quarters />
    </BaseLayout>
  );
};

export default RoadmapPage;

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      ...LanguageQueryFields
    }
  }
`;
