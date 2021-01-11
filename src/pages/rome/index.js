import React, { useState } from 'react';
import { pagePropTypes } from '../../propTypes';

import getApiPath from '../../utils/getApiPath';
import mapStatusDataToRoles from '../../utils/mapStatusDataToRoles';

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

import { roles, sharedData } from '../../data/pages';
import { goalsData, launchDate } from '../../data/pages/rome';

import './style.scss';

const RomePage = ({ content }) => {
  const [isModalOpen, setModalClosed] = useState(false);

  return (
    <BaseLayout>
      <SiteMetadata title="Joystream: The video platform DAO" description="Explore the Rome Testnet" />

      <Hero
        image={romeImage}
        title="Rome Network"
        indent
        chip={<Chip onClick={() => setModalClosed(true)}>What is this?</Chip>}
        animationStartValue={0}
      >
        <p className="RomePage__hero-paragraph">{sharedData.rolesDescription}</p>
        <HeroCard
          info
          date="2020/05/20 15:00"
          counterTitle={
            <>
              REPLACED BY CONSTANTINOPLE ON
            </>
          }
        />

        <TestnetModal
          title="Rome"
          image={RomeBuildingImg}
          closeModal={() => setModalClosed(false)}
          isOpen={isModalOpen}
        >
          <p>
            <strong>The Roman empire left many landmarks.</strong> Their architecture and engineering skills was
            unparalleled during their might. The concept of aqueducts was not devised by the Romans, but their beauty
            and extent is.
          </p>
        </TestnetModal>
      </Hero>

      <LayoutWrapper>
        <TitleWrapper title="Critical Documents">
          <ColumnsLayout>
            <Pane
              image={SpecImg}
              disabled title="Full Specifications"
            >
              No specifications were published for Rome.
            </Pane>
            <Pane
              image={ReleaseImg}
              href="https://github.com/Joystream/joystream-landing/tree/master/testnets/rome"
              title="Release Plan"
              target="_blank"
            >
              Read the release plan as it was made during the planning stage, and learn more about how the development
              evolved.
            </Pane>
          </ColumnsLayout>
        </TitleWrapper>

        <TitleWrapper
          title="Testnet Goals"
          subtitle={
            <>
              The goals below are a simplified representation of the Key Results listed in our Release{' '}
              <Link href="https://github.com/Joystream/joystream-landing/tree/master/testnets/rome#release-okrs">OKR</Link>
            </>
          }
        >
          <GoalList data={goalsData} />
        </TitleWrapper>
      </LayoutWrapper>

      <LayoutWrapper dark>
        <TitleWrapper title="Incentivized Roles for the Rome Network">
          <ColumnsLayout>
            <RoleList roles={roles.active} content={mapStatusDataToRoles(content)} oldTestnet />
          </ColumnsLayout>
        </TitleWrapper>
      </LayoutWrapper>

      <MapInfo title="Rome" location="rome">
        <p>
          <strong>Rome was the capital of the great Roman Empire during its peak.</strong> As with previous testnet
          names, the Roman Empire and Rome was another important step in the rise of democracy, the rule of law, and
          modern governance structures.
          <br />
          <br />
          <Link href="https://testnet.joystream.org/">
            <PersonIcon /> Explore current testnet
          </Link>
        </p>
      </MapInfo>
    </BaseLayout>
  );
};

RomePage.propTypes = pagePropTypes;

export { RomePage };
export default withApi(RomePage, getApiPath('STATUS'));
