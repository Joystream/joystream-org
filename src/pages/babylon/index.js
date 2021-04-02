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

import babylonImage from '../../assets/svg/babylon.svg';
import { ReactComponent as SpecImg } from '../../assets/svg/specifications.svg';
import { ReactComponent as BlogImg } from '../../assets/svg/release-doc.svg';
import { ReactComponent as PersonIcon } from '../../assets/svg/person.svg';
import babylonLogo from '../../assets/svg/babylon-logo.svg';

import { roles, sharedData } from '../../data/pages';
import { goalsData } from '../../data/pages/babylon';

import './style.scss';

const heroMarkdownContent = `
  On Friday the 29th of March, the Sparta network went down due to a 
  [known bug in substrate](https://github.com/paritytech/substrate/pull/2130) 
  that we had not pulled down before release. 
  
  More details can be found in this [blog post](https://blog.joystream.org/sparta-sacked/).
`;

const BabylonPage = ({ content }) => {
  const [isModalOpen, setModalClosed] = useState(false);

  return (
    <BaseLayout>
      <SiteMetadata title="Joystream: The video platform DAO" description="Explore the Babylon Testnet" />

      <Hero
        image={babylonImage}
        title="Babylon Network"
        indent
        chip={<Chip onClick={() => setModalClosed(true)}>What is this?</Chip>}
        animationStartValue={0}
      >
        <p className="BabylonPage__hero-paragraph">
          The Babylon release offers improvements which greatly enhance
          the video publishing and consumption experience.
        </p>
        <HeroCard error content={heroMarkdownContent} />

        <TestnetModal
          title="Tower of Babel"
          image={babylonLogo}
          closeModal={() => setModalClosed(false)}
          isOpen={isModalOpen}
        >
          <p>
            The Tower of Babel story is an origin myth meant to explain why the world's
            peoples speak different languages.
            <br />
            <br />
            According to the story, a united human race in the generations following the Great Flood,
            speaking a single language and migrating eastward, comes to the land of Shinar. There they
            agree to build a city and a tower tall enough to reach heaven.
            <br />
            <br />
            God, observing their city
            and tower, confounds their speech so that they can no longer understand each other, and
            scatters them around the world.
          </p>
        </TestnetModal>
      </Hero>

      <LayoutWrapper>
        <TitleWrapper title="Critical Documents">
          <ColumnsLayout>
            <Pane
              image={SpecImg}
              href="https://github.com/Joystream/joystream/issues/1249"
              title="Release Plan"
              target="_blank"
          >
              Read the release plan as it was made during the planning stage, and learn more about how the development
              evolved.
            </Pane>
            <Pane image={BlogImg}
              title="Announcement Blog Post"
              href="https://blog.joystream.org/announcing-babylon/"
              target="_blank"
            >
              Read a brief primer on the Babylon testnet and its objectives.
            </Pane>
          </ColumnsLayout>
        </TitleWrapper>

        <TitleWrapper
          title="Testnet Goals"
          subtitle={
            <>
              The goals listed below are a simplified representation of our main objectives for the Babylon testnet.
            </>
          }
        >
          <GoalList data={goalsData} />
        </TitleWrapper>
      </LayoutWrapper>

      <LayoutWrapper dark>
        <TitleWrapper title="Incentivized Roles for the Babylon Network">
          <ColumnsLayout>
            <RoleList roles={roles.active} content={mapStatusDataToRoles(content)} />
          </ColumnsLayout>
        </TitleWrapper>
      </LayoutWrapper>

      <MapInfo title="Babylon" location="babylon">
        <p>
          <strong>Babylon was the capital city of Babylonia, a kingdom in ancient Mesopotamia, almost 4000 years ago. </strong>
          It was built along the left and right banks of the Euphrates river with steep embankments to contain the river's
          seasonal floods.
          <br />
          <br />
          The city is considered to be of great historical and cultural importance. The Hanging Gardens of Babylon were one of the
          Seven Wonders of the Ancient World and Babylon was also purported to be the site of the Tower of Babel.
          <br />
          <br />
          <Link href="https://blog.joystream.org/announcing-babylon/">
            <PersonIcon /> Read the blog post
          </Link>
        </p>
      </MapInfo>
    </BaseLayout>
  );
};

BabylonPage.propTypes = pagePropTypes;

export { BabylonPage };
export default withApi(BabylonPage, getApiPath('STATUS'));
