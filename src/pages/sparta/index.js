import React, { useState } from 'react';
import { pagePropTypes } from '../../propTypes';

import getApiPath from '../../utils/getApiPath';
import mapStatusDataToAnalytics from '../../utils/mapStatusDataToAnalytics';
import mapStatusDataToRoles from '../../utils/mapStatusDataToRoles';

import withApi from '../../components/_enhancers/withApi';

import BaseLayout from '../../components/_layouts/Base';
import HeroCard from '../../components/HeroCard';
import Analytics from '../../components/Analytics';
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

import { analytics, roles, goals } from '../../data/pages/sparta';
import { sharedData } from '../../data/pages';

import './style.scss';

const heroMarkdownContent = `
  ### FAILURE IDENTIFIED

  On Friday the 29th of March, the Sparta network went down due to a 
  [known bug in substrate](https://github.com/paritytech/substrate/pull/2130) 
  that we had not pulled down before release. 
  
  More details can be found in this [blog post](https://blog.joystream.org/sparta-sacked/).
`;

const SpartaPage = ({ content }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <BaseLayout>
      <SiteMetadata
        title="Joystream: A user governed video platform"
        description="Explore the deprecated Sparta testnet"
      />

      <Hero
        image={spartaImage}
        title="Sparta Network"
        indent
        chip={<Chip onClick={() => setModalOpen(true)}>What is this?</Chip>}
      >
        <p className="SpartaPage__hero-paragraph">{sharedData.rolesDescription}</p>
        <HeroCard error content={heroMarkdownContent} />

        <TestnetModal
          title="Helmet of Sparta"
          image={SpartaHelmetImg}
          closeModal={() => setModalOpen(false)}
          isOpen={isModalOpen}
        >
          <p>
            <strong>The Spartan army helmet</strong> represents what Sparta is most known for today, their military
            might. For it's time, it was also known for its advanced governance system.
          </p>
        </TestnetModal>
      </Hero>

      <LayoutWrapper>
        <TitleWrapper title="Network Statistics" subtitle="As they were at the end of the network.">
          <Analytics content={mapStatusDataToAnalytics(content)} items={analytics} />
        </TitleWrapper>

        <TitleWrapper
          title="Testnet Goals"
          subtitle={
            <>
              The goals below is a simplified and qualitative representation of the Key Results listed in our release
              OKR.
            </>
          }
        >
          <GoalList data={goals} />
        </TitleWrapper>
      </LayoutWrapper>

      <LayoutWrapper dark>
        <TitleWrapper title="Roles available on the Sparta testnet">
          <ColumnsLayout>
            <RoleList roles={roles.active} content={mapStatusDataToRoles(content)} />
          </ColumnsLayout>
        </TitleWrapper>
      </LayoutWrapper>

      <MapInfo title="The city of Sparta" location="sparta">
        <p>
          <strong>Sparta was a prominent city-state in Ancient Greece.</strong> In addition to its military might, it
          was also unique both for its time and compared to its greek rivals due its defined social system and
          constitution.
          <br />
          <br />
          We chose the name Sparta due to it's historical significance in the path towards democracy and rule of law,
          however draconian by modern standard.
        </p>
      </MapInfo>
    </BaseLayout>
  );
};

SpartaPage.propTypes = pagePropTypes;

export { SpartaPage };
export default withApi(SpartaPage, getApiPath('STATUS'));
