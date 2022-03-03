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

import gizaImage from '../../assets/svg/giza.svg';
import { ReactComponent as SpecImg } from '../../assets/svg/specifications.svg';
import { ReactComponent as BlogImg } from '../../assets/svg/release-doc.svg';
import { ReactComponent as PersonIcon } from '../../assets/svg/person.svg';

import { roles } from '../../data/pages/giza';
import { goalsData, launchDate } from '../../data/pages/giza';

const GizaPage = ({ content }) => {
  const { t } = useTranslation();
  const { language } = useI18next();

  return (
    <BaseLayout t={t}>
      <SiteMetadata
        lang={language}
        title={t('siteMetadata.title')}
        description={t('giza.siteMetadata.description')}
      />

      <Hero image={gizaImage} title={t('giza.hero.title')} indent animationStartValue={0}>
        <p>{t('giza.hero.text')}</p>
        <br />
        <br />
        <HeroCard date={launchDate} t={t} />
      </Hero>

      <LayoutWrapper>
        <TitleWrapper title={t('giza.criticalDocuments.title')}>
          <ColumnsLayout>
            <Pane
              image={SpecImg}
              href="https://github.com/Joystream/joystream/issues/2580"
              title={t('giza.criticalDocuments.releasePlan.title')}
              target="_blank"
            >
              {t('giza.criticalDocuments.releasePlan.text')}
            </Pane>
            <Pane
              image={BlogImg}
              title={t('giza.criticalDocuments.blogPost.title')}
              href="https://blog.joystream.org/announcing-giza/"
              target="_blank"
            >
              {t('giza.criticalDocuments.blogPost.text')}
            </Pane>
          </ColumnsLayout>
        </TitleWrapper>

        <TitleWrapper title={t('giza.testnetGoals.title')} subtitle={<>{t('giza.testnetGoals.subtitle')}</>}>
          <GoalList data={translateGoals(goalsData, t)} />
        </TitleWrapper>
      </LayoutWrapper>

      <LayoutWrapper dark>
        <TitleWrapper title={t('giza.roles.title')}>
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

      <MapInfo title={t('giza.map.title')} location="giza">
        <p>
          <Trans
            i18nKey="giza.map.text"
            components={[
              <strong />,
              <br />,
              <Link href="https://blog.joystream.org/giza-announced/">
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

GizaPage.propTypes = pagePropTypes;

export { GizaPage };
export default withApi(GizaPage, getApiPath('STATUS'));

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      ...LanguageQueryFields
    }
  }
`;
