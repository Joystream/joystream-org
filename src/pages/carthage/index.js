import React from 'react';
import { graphql } from 'gatsby';
import { useTranslation, useI18next, Trans } from 'gatsby-plugin-react-i18next';

import mapStatusDataToRoles from '../../utils/mapStatusDataToRoles';
import translateGoals from '../../utils/translateGoals';
import convertToCamelCase from '../../utils/convertToCamelCase';

import BaseLayout from '../../components/_layouts/Base';
import HeroCard from '../../components/HeroCard';
import TitleWrapper from '../../components/TitleWrapper';
import RoleList from '../../components/RoleList';
import ColumnsLayout from '../../components/ColumnsLayout';
import LayoutWrapper from '../../components/LayoutWrapper';
import Hero from '../../components/Hero';
import Pane from '../../components/Pane';
import GoalList from '../../components/GoalList';
import Link from '../../components/Link';
import MapInfo from '../../components/MapInfo';
import SiteMetadata from '../../components/SiteMetadata';

import carthageImage from '../../assets/svg/carthage.svg';
import { ReactComponent as SpecImg } from '../../assets/svg/specifications.svg';
import { ReactComponent as BlogImg } from '../../assets/svg/release-doc.svg';
import { ReactComponent as PersonIcon } from '../../assets/svg/person.svg';

import { roles, goalsData, launchDate } from '../../data/pages/carthage';

const CarthagePage = ({ content }) => {
  const { t } = useTranslation();
  const { language } = useI18next();

  return (
    <BaseLayout t={t}>
      <SiteMetadata
        lang={language}
        title={t('siteMetadata.title')}
        description={t('carthage.siteMetadata.description')}
      />

      <Hero image={carthageImage} title={t('carthage.hero.title')} indent animationStartValue={0}>
        <p>{t('carthage.hero.text')}</p>
        <br />
        <br />
        <HeroCard date={launchDate} t={t} />
      </Hero>

      <LayoutWrapper>
        <TitleWrapper title={t('carthage.criticalDocuments.title')}>
          <ColumnsLayout>
            <Pane
              image={SpecImg}
              href="https://github.com/Joystream/joystream/issues/3666"
              title={t('carthage.criticalDocuments.releasePlan.title')}
              target="_blank"
            >
              {t('carthage.criticalDocuments.releasePlan.text')}
            </Pane>
            <Pane
              image={BlogImg}
              title={t('carthage.criticalDocuments.blogPost.title')}
              href="https://blog.joystream.org/announcing-carthage/"
              target="_blank"
            >
              {t('carthage.criticalDocuments.blogPost.text')}
            </Pane>
          </ColumnsLayout>
        </TitleWrapper>

        <TitleWrapper title={t('carthage.testnetGoals.title')} subtitle={<>{t('carthage.testnetGoals.subtitle')}</>}>
          <GoalList data={translateGoals(goalsData, t)} />
        </TitleWrapper>
      </LayoutWrapper>

      <LayoutWrapper dark>
        <TitleWrapper title={t('carthage.roles.title')}>
          <ColumnsLayout>
            <RoleList
              roles={roles.active.map(({ title, ...rest }) => ({
                title: t(`rolesData.${convertToCamelCase(title)}`),
                ...rest,
              }))}
              content={mapStatusDataToRoles(content)}
              t={t}
              oldTestnet
            />
          </ColumnsLayout>
        </TitleWrapper>
      </LayoutWrapper>

      <MapInfo title={t('carthage.map.title')} location="carthage">
        <p>
          <Trans
            i18nKey="carthage.map.text"
            components={[
              <strong />,
              <br />,
              <Link href="https://blog.joystream.org/announcing-carthage/">
                <PersonIcon />
                Read the blog post
              </Link>,
            ]}
          />
        </p>
      </MapInfo>
    </BaseLayout>
  );
};

export default CarthagePage;

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      ...LanguageQueryFields
    }
  }
`;
