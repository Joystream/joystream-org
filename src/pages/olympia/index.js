import React from 'react';
import { pagePropTypes } from '../../propTypes';
import { graphql } from 'gatsby';
import { useTranslation, useI18next, Trans } from 'gatsby-plugin-react-i18next';

import getApiPath from '../../utils/getApiPath';
import mapStatusDataToRoles from '../../utils/mapStatusDataToRoles';
import translateGoals from '../../utils/translateGoals';
import convertToCamelCase from '../../utils/convertToCamelCase';

import withApi from '../../components/_enhancers/withApi';

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

import olympiaImage from '../../assets/svg/olympia.svg';
import { ReactComponent as SpecImg } from '../../assets/svg/specifications.svg';
import { ReactComponent as BlogImg } from '../../assets/svg/release-doc.svg';
import { ReactComponent as PersonIcon } from '../../assets/svg/person.svg';

import { roles } from '../../data/pages/olympia';
import { goalsData } from '../../data/pages/olympia';
import { launchDate } from '../../data/pages/rhodes';

const OlympiaPage = ({ content }) => {
  const { t } = useTranslation();
  const { language } = useI18next();

  return (
    <BaseLayout t={t}>
      <SiteMetadata
        lang={language}
        title={t('siteMetadata.title')}
        description={t('olympia.siteMetadata.description')}
      />

      <Hero image={olympiaImage} title={t('olympia.hero.title')} indent animationStartValue={0}>
        <p>{t('olympia.hero.text')}</p>
        <br />
        <br />
        <HeroCard info date={launchDate} counterTitle={<>{t('olympia.heroCard.title')}</>} t={t} />
      </Hero>

      <LayoutWrapper>
        <TitleWrapper title={t('olympia.criticalDocuments.title')}>
          <ColumnsLayout>
            <Pane
              image={SpecImg}
              href="https://github.com/Joystream/joystream/issues/2855"
              title={t('olympia.criticalDocuments.releasePlan.title')}
              target="_blank"
            >
              {t('olympia.criticalDocuments.releasePlan.text')}
            </Pane>
            <Pane
              image={BlogImg}
              title={t('olympia.criticalDocuments.blogPost.title')}
              href="https://blog.joystream.org/announcing-olympia/"
              target="_blank"
            >
              {t('olympia.criticalDocuments.blogPost.text')}
            </Pane>
          </ColumnsLayout>
        </TitleWrapper>

        <TitleWrapper title={t('olympia.testnetGoals.title')} subtitle={<>{t('olympia.testnetGoals.subtitle')}</>}>
          <GoalList data={translateGoals(goalsData, t)} />
        </TitleWrapper>
      </LayoutWrapper>

      <LayoutWrapper dark>
        <TitleWrapper title={t('olympia.roles.title')}>
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

      <MapInfo title={t('olympia.map.title')} location="olympia">
        <p>
          <Trans
            i18nKey="olympia.map.text"
            components={[
              <strong />,
              <br />,
              <Link href="https://blog.joystream.org/announcing-olympia/">
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

OlympiaPage.propTypes = pagePropTypes;

export { OlympiaPage };
export default withApi(OlympiaPage, getApiPath('STATUS'));

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      ...LanguageQueryFields
    }
  }
`;
