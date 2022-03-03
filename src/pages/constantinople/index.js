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
import Pane from '../../components/Pane';
import GoalList from '../../components/GoalList';
import Link from '../../components/Link';
import MapInfo from '../../components/MapInfo';
import SiteMetadata from '../../components/SiteMetadata';

import constantinopleImage from '../../assets/svg/constantinople.svg';
import { ReactComponent as SpecImg } from '../../assets/svg/specifications.svg';
import { ReactComponent as BlogImg } from '../../assets/svg/release-doc.svg';
import { ReactComponent as PersonIcon } from '../../assets/svg/person.svg';
import constantinopleBuildingImg from '../../assets/svg/constantinople-building.svg';

import { roles } from '../../data/pages';
import { goalsData } from '../../data/pages/constantinople';

import './style.scss';

const ConstantinoplePage = ({ content }) => {
  const [isModalOpen, setModalClosed] = useState(false);
  const { t } = useTranslation();
  const { language } = useI18next();

  return (
    <BaseLayout t={t}>
      <SiteMetadata
        lang={language}
        title={t('siteMetadata.title')}
        description={t('constantinople.siteMetadata.description')}
      />

      <Hero
        image={constantinopleImage}
        title={t('constantinople.hero.title')}
        indent
        chip={<Chip onClick={() => setModalClosed(true)}>{t('constantinople.hero.chipText')}</Chip>}
        animationStartValue={0}
      >
        <p className="ConstantinoplePage__hero-paragraph">{t('constantinople.hero.text')}</p>
        <HeroCard info date="2020/09/21 09:00" counterTitle={<>{t('constantinople.heroCard.title')}</>} t={t} />

        <TestnetModal
          title={t('constantinople.modal.title')}
          image={constantinopleBuildingImg}
          closeModal={() => setModalClosed(false)}
          isOpen={isModalOpen}
        >
          <p>{t('constantinople.modal.text')}</p>
        </TestnetModal>
      </Hero>

      <LayoutWrapper>
        <TitleWrapper title={t('constantinople.criticalDocuments.title')}>
          <ColumnsLayout>
            <Pane
              image={SpecImg}
              href="https://github.com/Joystream/joystream-landing/tree/master/testnets/constantinople"
              title={t('constantinople.criticalDocuments.releasePlan.title')}
              target="_blank"
            >
              {t('constantinople.criticalDocuments.releasePlan.text')}
            </Pane>
            <Pane
              image={BlogImg}
              title={t('constantinople.criticalDocuments.blogPost.title')}
              href="https://blog.joystream.org/announcing-constantinople/"
              target="_blank"
            >
              {t('constantinople.criticalDocuments.blogPost.text')}
            </Pane>
          </ColumnsLayout>
        </TitleWrapper>

        <TitleWrapper
          title={t('constantinople.testnetGoals.title')}
          subtitle={<>{t('constantinople.testnetGoals.subtitle')}</>}
        >
          <GoalList data={translateGoals(goalsData, t)} />
        </TitleWrapper>
      </LayoutWrapper>

      <LayoutWrapper dark>
        <TitleWrapper title={t('constantinople.roles.title')}>
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

      <MapInfo title={t('constantinople.map.title')} location="constantinople">
        <p>
          <Trans
            i18nKey="constantinople.map.text"
            components={[
              <strong />,
              <br />,
              <Link href="https://blog.joystream.org/announcing-constantinople/">
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

ConstantinoplePage.propTypes = pagePropTypes;

export { ConstantinoplePage };
export default withApi(ConstantinoplePage, getApiPath('STATUS'));

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      ...LanguageQueryFields
    }
  }
`;
