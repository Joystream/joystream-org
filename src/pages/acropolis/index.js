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

import acropolisImage from '../../assets/svg/acropolis.svg';
import { ReactComponent as SpecImg } from '../../assets/svg/specifications.svg';
import { ReactComponent as ReleaseImg } from '../../assets/svg/release-doc.svg';
import { ReactComponent as PersonIcon } from '../../assets/svg/person.svg';
import AcropolisImg from '../../assets/svg/acropolis-building.svg';

import { roles, goals } from '../../data/pages/acropolis';

import './style.scss';

const AcropolisPage = ({ content }) => {
  const [isModalOpen, setModalClosed] = useState(false);
  const { t } = useTranslation();
  const { language } = useI18next();

  return (
    <BaseLayout t={t}>
      <SiteMetadata
        lang={language}
        title={t('siteMetadata.title')}
        description={t('acropolis.siteMetadata.description')}
      />

      <Hero
        image={acropolisImage}
        title={t('acropolis.hero.title')}
        indent
        chip={<Chip onClick={() => setModalClosed(true)}>{t('acropolis.hero.chipText')}</Chip>}
        animationStartValue={0}
      >
        <p className="AcropolisPage__hero-paragraph">{t('acropolis.hero.text')}</p>
        <HeroCard info date="2020/03/17 15:42" counterTitle={<>{t('acropolis.heroCard.title')}</>} t={t} />

        <TestnetModal
          title={t('acropolis.modal.title')}
          image={AcropolisImg}
          closeModal={() => setModalClosed(false)}
          isOpen={isModalOpen}
        >
          <p>
            <Trans i18nKey="acropolis.modal.text" components={[<strong />]} />
          </p>
        </TestnetModal>
      </Hero>

      <LayoutWrapper>
        <TitleWrapper title={t('acropolis.criticalDocuments.title')}>
          <ColumnsLayout>
            <Pane
              image={SpecImg}
              href="https://github.com/Joystream/joystream/tree/master/testnets/acropolis/specification"
              title={t('acropolis.criticalDocuments.fullSpecifications.title')}
              target="_blank"
            >
              {t('acropolis.criticalDocuments.fullSpecifications.text')}
            </Pane>
            <Pane
              image={ReleaseImg}
              href="https://github.com/Joystream/joystream/tree/master/testnets/acropolis"
              title={t('acropolis.criticalDocuments.releasePlan.title')}
              target="_blank"
            >
              {t('acropolis.criticalDocuments.releasePlan.text')}
            </Pane>
          </ColumnsLayout>
        </TitleWrapper>

        <TitleWrapper
          title={t('acropolis.testnetGoals.title')}
          subtitle={
            <Trans
              i18nKey="acropolis.testnetGoals.subtitle"
              components={[
                <Link href="https://github.com/Joystream/joystream/tree/master/testnets/acropolis#release-okrs">
                  OKR
                </Link>,
              ]}
            />
          }
        >
          <GoalList data={translateGoals(goals, t)} />
        </TitleWrapper>
      </LayoutWrapper>

      <LayoutWrapper dark>
        <TitleWrapper title={t('acropolis.roles.title')}>
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

      <MapInfo title={t('acropolis.map.title')} location="acropolis">
        <p>
          <Trans
            i18nKey="acropolis.map.text"
            components={[<strong />, <br />, <Link to="/athens"><PersonIcon />Explore previous testnet</Link>]}
          />
        </p>
      </MapInfo>
    </BaseLayout>
  );
};

AcropolisPage.propTypes = pagePropTypes;

export { AcropolisPage };
export default withApi(AcropolisPage, getApiPath('STATUS'));

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      ...LanguageQueryFields
    }
  }
`;
