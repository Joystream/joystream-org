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

import alexandriaImage from '../../assets/svg/alexandria.svg';
import { ReactComponent as SpecImg } from '../../assets/svg/specifications.svg';
import { ReactComponent as BlogImg } from '../../assets/svg/release-doc.svg';
import { ReactComponent as PersonIcon } from '../../assets/svg/person.svg';
import alexandriaLogo from '../../assets/svg/alexandria-logo.svg';

import { roles, sharedData } from '../../data/pages';
import { goalsData, launchDate } from '../../data/pages/alexandria';

import './style.scss';

const AlexandriaPage = ({ content }) => {
  const [isModalOpen, setModalClosed] = useState(false);

  return (
    <BaseLayout>
      <SiteMetadata title="Joystream: The video platform DAO" description="Explore the Alexandria Testnet" />

      <Hero
        image={alexandriaImage}
        title="Alexandria Network"
        indent
        chip={<Chip onClick={() => setModalClosed(true)}>What is this?</Chip>}
        animationStartValue={0}
      >
        <p className="AlexandriaPage__hero-paragraph">
          The Alexandria release focuses on important technical updates
          which will facilitate more efficient future development.</p>
        <HeroCard
          info
          date="2020/12/21 15:00"
          counterTitle={
            <>
              REPLACED BY BABYLON ON
            </>
          }
          />

        <TestnetModal
          title="Alexandria"
          image={alexandriaLogo}
          closeModal={() => setModalClosed(false)}
          isOpen={isModalOpen}
        >
          <p>
            There are two sphinxes at the Pompey's Pillar site in Alexandria, Egypt. The sphinxes
            and associated column are one of Alexandria's most important ancient monuments.
            <br />
            <br />
            The Alexandria sphinxes should not be confused with the more well-known Great Sphinx located
            at Giza, just under 200 kilometers south-east of Alexandria.
          </p>
        </TestnetModal>
      </Hero>

      <LayoutWrapper>
        <TitleWrapper title="Critical Documents">
          <ColumnsLayout>
            <Pane
              image={SpecImg}
              href="https://github.com/Joystream/joystream/issues/986"
              title="Release Plan"
              target="_blank"
          >
              Read the release plan as it was made during the planning stage, and learn more about how the development
              evolved.
            </Pane>
            <Pane image={BlogImg}
              title="Announcement Blog Post"
              href="https://blog.joystream.org/announcing-alexandria/"
              target="_blank"
            >
              Read a brief primer on the Alexandria testnet and its objectives.
            </Pane>
          </ColumnsLayout>
        </TitleWrapper>

        <TitleWrapper
          title="Testnet Goals"
          subtitle={
            <>
              The goals listed below are a simplified representation of our main objectives for the Alexandria testnet.
            </>
          }
        >
          <GoalList data={goalsData} />
        </TitleWrapper>
      </LayoutWrapper>

      <LayoutWrapper dark>
        <TitleWrapper title="Incentivized Roles for the Alexandria Network">
          <ColumnsLayout>
            <RoleList roles={roles.active} content={mapStatusDataToRoles(content)} oldTestnet />
          </ColumnsLayout>
        </TitleWrapper>
      </LayoutWrapper>

      <MapInfo title="Alexandria" location="alexandria">
        <p>
          <strong>Alexandria was founded in approximately 331 BC by Alexander the Great.</strong> The city was best known
          for the Lighthouse of Alexandria, one of the Seven Wonders of the Ancient World, as well as its colossal Great Library.
          <br />
          <br />
          Alexandria was the intellectual and cultural center of the ancient Mediterranean world for much of the
          Hellenistic age and late antiquity. It was at one time the largest city in the ancient world before being
          eventually overtaken by Rome.
          <br />
          <br />
          <Link href="https://blog.joystream.org/announcing-alexandria/">
            <PersonIcon /> Read the blog post
          </Link>
        </p>
      </MapInfo>
    </BaseLayout>
  );
};

AlexandriaPage.propTypes = pagePropTypes;

export { AlexandriaPage };
export default withApi(AlexandriaPage, getApiPath('STATUS'));
