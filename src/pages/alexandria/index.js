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

import alexandriaImage from '../../assets/svg/alexandria.svg';
import { ReactComponent as SpecImg } from '../../assets/svg/specifications.svg';
import { ReactComponent as BlogImg } from '../../assets/svg/release-doc.svg';
import { ReactComponent as PersonIcon } from '../../assets/svg/person.svg';
import alexandriaLogo from '../../assets/svg/alexandria-logo.svg';

import { roles } from '../../data/pages';
import { goalsData } from '../../data/pages/alexandria';

import './style.scss';

const AlexandriaPage = ({ content }) => {
  const [isModalOpen, setModalClosed] = useState(false);
  const { t } = useTranslation();
  const { language } = useI18next();

  return (
    <BaseLayout t={t}>
      <SiteMetadata
        lang={language}
        title={t('siteMetadata.title')}
        description={t('alexandria.siteMetadata.description')}
      />

      <Hero
        image={alexandriaImage}
        title={t('alexandria.hero.title')}
        indent
        chip={<Chip onClick={() => setModalClosed(true)}>{t('alexandria.hero.chipText')}</Chip>}
        animationStartValue={0}
      >
        <p className="AlexandriaPage__hero-paragraph">{t('alexandria.hero.text')}</p>
        <HeroCard info date="2020/12/21 15:00" counterTitle={<>{t('alexandria.heroCard.title')}</>} t={t} />

        <TestnetModal
          title={t('alexandria.modal.title')}
          image={alexandriaLogo}
          closeModal={() => setModalClosed(false)}
          isOpen={isModalOpen}
        >
          <p>
            <Trans i18nKey="alexandria.modal.text" components={[<br />]} />
          </p>
        </TestnetModal>
      </Hero>

      <LayoutWrapper>
        <TitleWrapper title={t('alexandria.criticalDocuments.title')}>
          <ColumnsLayout>
            <Pane
              image={SpecImg}
              href="https://github.com/Joystream/joystream/issues/986"
              title={t('alexandria.criticalDocuments.releasePlan.title')}
              target="_blank"
            >
              {t('alexandria.criticalDocuments.releasePlan.text')}
            </Pane>
            <Pane
              image={BlogImg}
              title={t('alexandria.criticalDocuments.blogPost.title')}
              href="https://blog.joystream.org/announcing-alexandria/"
              target="_blank"
            >
              {t('alexandria.criticalDocuments.blogPost.text')}
            </Pane>
          </ColumnsLayout>
        </TitleWrapper>

        <TitleWrapper
          title={t('alexandria.testnetGoals.title')}
          subtitle={<>{t('alexandria.testnetGoals.subtitle')}</>}
        >
          <GoalList data={translateGoals(goalsData, t)} />
        </TitleWrapper>
      </LayoutWrapper>

      <LayoutWrapper dark>
        <TitleWrapper title={t('alexandria.roles.title')}>
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

      <MapInfo title={t('alexandria.map.title')} location="alexandria">
        <p>
          <Trans
            i18nKey="alexandria.map.text"
            components={[
              <strong />,
              <br />,
              <Link href="https://blog.joystream.org/announcing-alexandria/"><PersonIcon />Read the blog post</Link>,
            ]}
          />
        </p>
      </MapInfo>
    </BaseLayout>
  );
};

AlexandriaPage.propTypes = pagePropTypes;

export { AlexandriaPage };
export default withApi(AlexandriaPage, getApiPath('STATUS'));

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      ...LanguageQueryFields
    }
  }
`;
