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

import antiochImage from '../../assets/svg/antioch.svg';
import { ReactComponent as SpecImg } from '../../assets/svg/specifications.svg';
import { ReactComponent as BlogImg } from '../../assets/svg/release-doc.svg';
import { ReactComponent as PersonIcon } from '../../assets/svg/person.svg';

import { roles } from '../../data/pages';
import { goalsData, launchDate } from '../../data/pages/antioch';

import './style.scss';

const AntiochPage = ({ content }) => {
  const { t } = useTranslation();
  const { language } = useI18next();

  return (
    <BaseLayout t={t}>
      <SiteMetadata
        lang={language}
        title={t('siteMetadata.title')}
        description={t('antioch.siteMetadata.description')}
      />

      <Hero image={antiochImage} title={t('antioch.hero.title')} indent animationStartValue={0}>
        <p className="AntiochPage__hero-paragraph">{t('antioch.hero.text')}</p>
        <HeroCard info date='2021/05/26 07:00' counterTitle={<>{t('antioch.heroCard.title')}</>} t={t} />
      </Hero>

      <LayoutWrapper>
        <TitleWrapper title={t('antioch.criticalDocuments.title')}>
          <ColumnsLayout>
            <Pane
              image={SpecImg}
              href="https://github.com/Joystream/joystream/issues/2285"
              title={t('antioch.criticalDocuments.releasePlan.title')}
              target="_blank"
            >
              {t('antioch.criticalDocuments.releasePlan.text')}
            </Pane>
            <Pane
              image={BlogImg}
              title={t('antioch.criticalDocuments.blogPost.title')}
              href="https://blog.joystream.org/announcing-antioch/"
              target="_blank"
            >
              {t('antioch.criticalDocuments.blogPost.text')}
            </Pane>
          </ColumnsLayout>
        </TitleWrapper>

        <TitleWrapper title={t('antioch.testnetGoals.title')} subtitle={<>{t('antioch.testnetGoals.subtitle')}</>}>
          <GoalList data={translateGoals(goalsData, t)} />
        </TitleWrapper>
      </LayoutWrapper>

      <LayoutWrapper dark>
        <TitleWrapper title={t('antioch.roles.title')}>
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

      <MapInfo title={t('antioch.map.title')} location="antioch">
        <p>
          <Trans
            i18nKey="antioch.map.text"
            components={[
              <strong />,
              <br />,
              <Link href="https://blog.joystream.org/announcing-antioch/">
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

AntiochPage.propTypes = pagePropTypes;

export { AntiochPage };
export default withApi(AntiochPage, getApiPath('STATUS'));

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      ...LanguageQueryFields
    }
  }
`;
