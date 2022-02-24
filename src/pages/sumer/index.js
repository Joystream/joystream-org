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

import sumerImage from '../../assets/svg/sumer.svg';
import { ReactComponent as SpecImg } from '../../assets/svg/specifications.svg';
import { ReactComponent as BlogImg } from '../../assets/svg/release-doc.svg';
import { ReactComponent as PersonIcon } from '../../assets/svg/person.svg';

import { roles } from '../../data/pages/sumer';
import { goalsData, launchDate } from '../../data/pages/sumer';

const SumerPage = ({ content }) => {
  const { t } = useTranslation();
  const { language } = useI18next();

  return (
    <BaseLayout t={t}>
      <SiteMetadata
        lang={language}
        title={t('siteMetadata.title')}
        description={t('sumer.siteMetadata.description')}
      />

      <Hero image={sumerImage} title={t('sumer.hero.title')} indent animationStartValue={0}>
        <p>{t('sumer.hero.text')}</p>
        <br />
        <br />
        <HeroCard date={launchDate} t={t} />
      </Hero>

      <LayoutWrapper>
        <TitleWrapper title={t('sumer.criticalDocuments.title')}>
          <ColumnsLayout>
            <Pane
              image={SpecImg}
              href="https://github.com/Joystream/joystream/issues/2045"
              title={t('sumer.criticalDocuments.releasePlan.title')}
              target="_blank"
            >
              {t('sumer.criticalDocuments.releasePlan.text')}
            </Pane>
            <Pane
              image={BlogImg}
              title={t('sumer.criticalDocuments.blogPost.title')}
              href="https://blog.joystream.org/sumer-announced/"
              target="_blank"
            >
              {t('sumer.criticalDocuments.blogPost.text')}
            </Pane>
          </ColumnsLayout>
        </TitleWrapper>

        <TitleWrapper title={t('sumer.testnetGoals.title')} subtitle={<>{t('sumer.testnetGoals.subtitle')}</>}>
          <GoalList data={translateGoals(goalsData, t)} />
        </TitleWrapper>
      </LayoutWrapper>

      <LayoutWrapper dark>
        <TitleWrapper title={t('sumer.roles.title')}>
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

      <MapInfo title={t('sumer.map.title')} location="sumer">
        <p>
          <Trans
            i18nKey="sumer.map.text"
            components={[
              <strong />,
              <br />,
              <Link href="https://blog.joystream.org/sumer-announced/">
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

SumerPage.propTypes = pagePropTypes;

export { SumerPage };
export default withApi(SumerPage, getApiPath('STATUS'));

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      ...LanguageQueryFields
    }
  }
`;
