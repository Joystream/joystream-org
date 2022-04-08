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

import athensImage from '../../assets/svg/athens.svg';
import { ReactComponent as SpecImg } from '../../assets/svg/forum-posts.svg';
import { ReactComponent as PersonIcon } from '../../assets/svg/person.svg';
import AthensOwlImg from '../../assets/svg/athens-owl.svg';

import { roles, goals } from '../../data/pages/athens';

import './style.scss';

const AthensPage = ({ content }) => {
  const [isModalOpen, setModalClosed] = useState(false);
  const { t } = useTranslation();
  const { language } = useI18next();

  return (
    <BaseLayout t={t}>
      <SiteMetadata
        lang={language}
        title={t('siteMetadata.title')}
        description={t('athens.siteMetadata.description')}
      />

      <Hero
        image={athensImage}
        title={t('athens.hero.title')}
        indent
        chip={<Chip onClick={() => setModalClosed(true)}>{t('athens.hero.chipText')}</Chip>}
        animationStartValue={0}
      >
        <p className="AthensPage__hero-paragraph">{t('athens.hero.text')}</p>
        <HeroCard
          info
          date="2019/06/24 17:50"
          counterTitle={
            <Trans i18nKey="athens.heroCard.text" components={[<br />, <Link to="/acropolis">ACROPOLIS</Link>]} />
          }
          t={t}
        />

        <TestnetModal
          title={t('athens.modal.title')}
          image={AthensOwlImg}
          closeModal={() => setModalClosed(false)}
          isOpen={isModalOpen}
        >
          <p>
            <Trans i18nKey="athens.modal.text" components={[<strong />]} />
          </p>
        </TestnetModal>
      </Hero>

      <LayoutWrapper>
        <TitleWrapper title={t('athens.criticalDocuments.title')}>
          <ColumnsLayout className="ColumnsLayout--documents">
            <Pane image={SpecImg} title={t('athens.criticalDocuments.fullSpecifications.title')} disabled>
              {t('athens.criticalDocuments.fullSpecifications.text')}
            </Pane>
            <Pane
              image={SpecImg}
              href="https://github.com/Joystream/joystream-landing/tree/master/testnets/athens"
              title={t('athens.criticalDocuments.releasePlan.title')}
              target="_blank"
            >
              {t('athens.criticalDocuments.releasePlan.text')}
            </Pane>
          </ColumnsLayout>
        </TitleWrapper>

        <TitleWrapper
          title={t('athens.testnetGoals.title')}
          subtitle={
            <>
              <Trans
                i18nKey="athens.testnetGoals.subtitle"
                components={[
                  <Link href="https://github.com/Joystream/joystream-landing/tree/master/testnets/athens#okrs">
                    OKR
                  </Link>,
                ]}
              />
            </>
          }
        >
          <GoalList data={translateGoals(goals, t)} />
        </TitleWrapper>
      </LayoutWrapper>

      <LayoutWrapper dark>
        <TitleWrapper title={t('athens.roles.title')}>
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

      <MapInfo title={t('athens.map.title')} location="acropolis">
        <p>
          <Trans
            i18nKey="athens.map.text"
            components={[
              <strong />,
              <br />,
              <Link to="/sparta">
                <PersonIcon />
                Explore previous testnet
              </Link>,
            ]}
          />
        </p>
      </MapInfo>
    </BaseLayout>
  );
};

AthensPage.propTypes = pagePropTypes;

export { AthensPage };
export default withApi(AthensPage, getApiPath('STATUS'));

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      ...LanguageQueryFields
    }
  }
`;
