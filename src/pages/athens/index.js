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
import Pane from '../../components/Pane';
import GoalList from '../../components/GoalList';
import Link from '../../components/Link';
import MapInfo from '../../components/MapInfo';
import SiteMetadata from '../../components/SiteMetadata';

import athensImage from '../../assets/svg/athens.svg';
import { ReactComponent as SpecImg } from '../../assets/svg/forum-posts.svg';
import { ReactComponent as PersonIcon } from '../../assets/svg/person.svg';
import AthensOwlImg from '../../assets/svg/athens-owl.svg';

import { analytics, roles, goals } from '../../data/pages/athens';
import { sharedData } from '../../data/pages';

import './style.scss';

const AthensPage = ({ content }) => {
  const [isModalOpen, setModalClosed] = useState(false);

  return (
    <BaseLayout>
      <SiteMetadata title="Joystream: The video platform DAO" description="Explore the Athens Testnet" />

      <Hero
        image={athensImage}
        title="Athens Network"
        indent
        chip={<Chip onClick={() => setModalClosed(true)}>What is this?</Chip>}
        animationStartValue={0}
      >
        <p className="AthensPage__hero-paragraph">{sharedData.rolesDescription}</p>
        <HeroCard
          info
          date="2019/06/24 17:50"
          counterTitle={
            <>
              AFTER LAUNCHING 17 / 04 / 19
              <br />
              THE NETWORK WAS UPGRADED TO <Link to="/acropolis">ACROPOLIS</Link> ON
            </>
          }
        />

        <TestnetModal
          title="Owl of Athena"
          image={AthensOwlImg}
          closeModal={() => setModalClosed(false)}
          isOpen={isModalOpen}
        >
          <p>
            <strong>In Greek mythology, a little owl (Athene noctua)</strong> traditionally represents or accompanies
            Athena, the virgin goddess of wisdom. Because of such association, the bird — often referred to as the "owl
            of Athena" — has been used as a symbol of knowledge, wisdom, perspicacity and erudition throughout the
            Western world.
          </p>
        </TestnetModal>
      </Hero>

      <LayoutWrapper>
        <TitleWrapper title="Network Statistics" subtitle="As they were at the end of the network.">
          <Analytics content={mapStatusDataToAnalytics(content)} items={analytics} />
        </TitleWrapper>

        <TitleWrapper title="Critical Documents">
          <ColumnsLayout className="ColumnsLayout--documents">
            <Pane image={SpecImg} title="Full Specifications" disabled>
              No specifications was published for Athens.
            </Pane>
            <Pane
              image={SpecImg}
              href="https://github.com/Joystream/joystream-landing/tree/master/testnets/athens"
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
              <Link href="https://github.com/Joystream/joystream-landing/tree/master/testnets/athens#okrs">OKR</Link>
            </>
          }
        >
          <GoalList data={goals} />
        </TitleWrapper>
      </LayoutWrapper>

      <LayoutWrapper dark>
        <TitleWrapper title="Roles available on the current testnet">
          <ColumnsLayout>
            <RoleList roles={roles.active} content={mapStatusDataToRoles(content)} oldTestnet />
          </ColumnsLayout>
        </TitleWrapper>
      </LayoutWrapper>

      <MapInfo title="The city of Athens" location="acropolis">
        <p>
          <strong>Athens is the capital of Greece.</strong> IIt was also at the heart of Ancient Greece, a powerful
          civilisation and empire. The city is still dominated by 5th-century BC landmarks, including the Acropolis, a
          hilltop citadel topped with ancient buildings like the colonnaded Parthenon temple.
          <br />
          <br />
          We chose the name Athens as, like our previous testnets, Mesopotamia and Sparta, the ancient Athens'
          historical significance in the development towards modern democracy and the rule of law.
          <br />
          <br />
          <Link to="/sparta">
            <PersonIcon /> Explore previous testnet
          </Link>
        </p>
      </MapInfo>
    </BaseLayout>
  );
};

AthensPage.propTypes = pagePropTypes;

export { AthensPage };
export default withApi(AthensPage, getApiPath('STATUS'));
