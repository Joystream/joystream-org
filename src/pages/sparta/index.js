import React, { useState } from 'react';
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
import TestnetModal from '../../components/TestnetModal';
import Chip from '../../components/Chip';
import GoalList from '../../components/GoalList';
import MapInfo from '../../components/MapInfo';
import SiteMetadata from '../../components/SiteMetadata';

import spartaImage from '../../assets/svg/sparta.svg';
import SpartaHelmetImg from '../../assets/svg/sparta-helmet.svg';

import { roles, goals } from '../../data/pages/sparta';

import './style.scss';

const SpartaPage = ({ content }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const { t } = useTranslation();
  const { language } = useI18next();

  return (
    <BaseLayout t={t}>
      <SiteMetadata
        lang={language}
        title={t('siteMetadata.title')}
        description={t('sparta.siteMetadata.description')}
      />

      <Hero
        image={spartaImage}
        title={t('sparta.hero.title')}
        indent
        chip={<Chip onClick={() => setModalOpen(true)}>{t('sparta.hero.chipText')}</Chip>}
      >
        <p className="SpartaPage__hero-paragraph">{t('sparta.hero.text')}</p>
        <HeroCard error content={t('sparta.heroCard.markdown')} t={t}/>

        <TestnetModal
          title={t("sparta.modal.title")}
          image={SpartaHelmetImg}
          closeModal={() => setModalOpen(false)}
          isOpen={isModalOpen}
        >
          <p>
            <Trans i18nKey="sparta.modal.text" components={[<strong/>]} />
          </p>
        </TestnetModal>
      </Hero>

      <LayoutWrapper>
        <TitleWrapper title={t('sparta.testnetGoals.title')} subtitle={<>{t('sparta.testnetGoals.subtitle')}</>}>
          <GoalList data={translateGoals(goals, t)} />
        </TitleWrapper>
      </LayoutWrapper>

      <LayoutWrapper dark>
        <TitleWrapper title={t('sparta.roles.title')}>
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

      <MapInfo title={t("sparta.map.title")} location="sparta">
        <p>
          <Trans
            i18nKey="sparta.map.text"
            components={[<strong/>, <br />]}
          />
        </p>
      </MapInfo>
    </BaseLayout>
  );
};

SpartaPage.propTypes = pagePropTypes;

export { SpartaPage };
export default withApi(SpartaPage, getApiPath('STATUS'));

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      ...LanguageQueryFields
    }
  }
`;
