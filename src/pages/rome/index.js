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

import romeImage from '../../assets/svg/rome.svg';
import { ReactComponent as SpecImg } from '../../assets/svg/specifications.svg';
import { ReactComponent as ReleaseImg } from '../../assets/svg/release-doc.svg';
import { ReactComponent as PersonIcon } from '../../assets/svg/person.svg';
import RomeBuildingImg from '../../assets/svg/rome-building.svg';

import { roles } from '../../data/pages';
import { goalsData } from '../../data/pages/rome';

import './style.scss';

const RomePage = ({ content }) => {
  const [isModalOpen, setModalClosed] = useState(false);
  const { t } = useTranslation();
  const { language } = useI18next();

  return (
    <BaseLayout t={t}>
      <SiteMetadata lang={language} title={t('siteMetadata.title')} description={t('rome.siteMetadata.description')} />

      <Hero
        image={romeImage}
        title={t('rome.hero.title')}
        indent
        chip={<Chip onClick={() => setModalClosed(true)}>{t('rome.hero.chipText')}</Chip>}
        animationStartValue={0}
      >
        <p className="RomePage__hero-paragraph">{t('rome.hero.text')}</p>
        <HeroCard info date="2020/05/20 15:00" counterTitle={<>{t('rome.heroCard.title')}</>} t={t} />

        <TestnetModal
          title={t('rome.modal.title')}
          image={RomeBuildingImg}
          closeModal={() => setModalClosed(false)}
          isOpen={isModalOpen}
        >
          <p>
            <Trans i18nKey="rome.modal.text" components={[<strong />]} />
          </p>
        </TestnetModal>
      </Hero>

      <LayoutWrapper>
        <TitleWrapper title={t('rome.criticalDocuments.title')}>
          <ColumnsLayout>
            <Pane image={SpecImg} disabled title={t('rome.criticalDocuments.fullSpecifications.title')}>
              {t('rome.criticalDocuments.fullSpecifications.text')}
            </Pane>
            <Pane
              image={ReleaseImg}
              href="https://github.com/Joystream/joystream-landing/tree/master/testnets/rome"
              title={t('rome.criticalDocuments.releasePlan.title')}
              target="_blank"
            >
              {t('rome.criticalDocuments.releasePlan.text')}
            </Pane>
          </ColumnsLayout>
        </TitleWrapper>

        <TitleWrapper
          title={t('rome.testnetGoals.title')}
          subtitle={
            <>
              <Trans
                i18nKey="rome.testnetGoals.subtitle"
                components={[
                  <Link href="https://github.com/Joystream/joystream-landing/tree/master/testnets/rome#release-okrs">
                    OKR
                  </Link>,
                ]}
              />
            </>
          }
        >
          <GoalList data={translateGoals(goalsData, t)} />
        </TitleWrapper>
      </LayoutWrapper>

      <LayoutWrapper dark>
        <TitleWrapper title={t('rome.roles.title')}>
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

      <MapInfo title={t('rome.map.title')} location="rome">
        <p>
          <Trans
            i18nKey="rome.map.text"
            components={[
              <strong />,
              <br />,
              <Link href="https://testnet.joystream.org/">
                <PersonIcon />
                Explore current testnet
              </Link>,
            ]}
          />
        </p>
      </MapInfo>
    </BaseLayout>
  );
};

RomePage.propTypes = pagePropTypes;

export { RomePage };
export default withApi(RomePage, getApiPath('STATUS'));

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      ...LanguageQueryFields
    }
  }
`;
