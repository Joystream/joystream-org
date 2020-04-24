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

import constantinopleImage from '../../assets/svg/constantinople.svg';
import { ReactComponent as SpecImg } from '../../assets/svg/specifications.svg';
import { ReactComponent as ReleaseImg } from '../../assets/svg/release-doc.svg';
import { ReactComponent as PersonIcon } from '../../assets/svg/person.svg';
import constantinopleBuildingImg from '../../assets/svg/constantinople-building.svg';

import { roles, sharedData } from '../../data/pages';
import { goalsData, launchDate } from '../../data/pages/constantinople';

import './style.scss';

const ConstantinoplePage = ({ content }) => {
  const [isModalOpen, setModalClosed] = useState(false);

  return (
    <BaseLayout>
      <SiteMetadata title="Joystream: The video platform DAO" description="Explore the Constantinople Testnet" />

      <Hero
        image={constantinopleImage}
        title="Constantinople Network"
        indent
        chip={<Chip onClick={() => setModalClosed(true)}>What is this?</Chip>}
        animationStartValue={0}
      >
        <p className="ConstantinoplePage__hero-paragraph">{sharedData.rolesDescription}</p>
        <HeroCard date={launchDate} />

        <TestnetModal
          title="Constantinople"
          image={constantinopleBuildingImg}
          closeModal={() => setModalClosed(false)}
          isOpen={isModalOpen}
        >
          <p>
            The Column of Constantine, also known as the Burnt Stone or the Burnt Pillar,
            is a Roman monumental column constructed on the orders of the Roman emperor
            Constantine the Great in 330 AD. It commemorates the declaration of Byzantium
            as the new capital city of the Roman Empire.
          </p>
        </TestnetModal>
      </Hero>

      <LayoutWrapper>
        <TitleWrapper title="Critical Documents">
          <ColumnsLayout>
            <Pane image={SpecImg} disabled title="Full Specifications">
              Specs to be released
            </Pane>
            <Pane
              image={ReleaseImg}
              href="https://github.com/Joystream/joystream-landing/tree/master/testnets/constantinople"
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
              The goals listed below are a simplified representation of our main objectives for the Constantinople testnet.
            </>
          }
        >
          <GoalList data={goalsData} />
        </TitleWrapper>
      </LayoutWrapper>

      <LayoutWrapper dark>
        <TitleWrapper title="Incentivized Roles for the Constantinople Network">
          <ColumnsLayout>
            <RoleList roles={roles.active} content={mapStatusDataToRoles(content)} />
          </ColumnsLayout>
        </TitleWrapper>
      </LayoutWrapper>

      <MapInfo title="Constantinople" location="constantinople">
        <p>
          <strong>Constantinople was the capital city of the Roman Empire during the fourth century. </strong>
          It was famed for its massive and complex defences as well as its architectural masterpieces
          and opulent aristocratic palaces. As was the case with the city, we hope our Constantinople
          testnet will be a worthy successor to Rome.
          <br />
          <br />
          <Link href="https://blog.joystream.org/announcing-constantinople/">
            <PersonIcon /> Read the blog post
          </Link>
        </p>
      </MapInfo>
    </BaseLayout>
  );
};

ConstantinoplePage.propTypes = pagePropTypes;

export { ConstantinoplePage };
export default withApi(ConstantinoplePage, getApiPath('STATUS'));
