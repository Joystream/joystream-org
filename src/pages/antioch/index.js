import React from 'react';
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
import Pane from '../../components/Pane';
import GoalList from '../../components/GoalList';
import Link from '../../components/Link';
import MapInfo from '../../components/MapInfo';
import SiteMetadata from '../../components/SiteMetadata';

import antiochImage from '../../assets/svg/antioch.svg';
import { ReactComponent as SpecImg } from '../../assets/svg/specifications.svg';
import { ReactComponent as BlogImg } from '../../assets/svg/release-doc.svg';
import { ReactComponent as PersonIcon } from '../../assets/svg/person.svg';

import { roles } from '../../data/pages';
import { goalsData, launchDate } from '../../data/pages/antioch';

import './style.scss';

const AntiochPage = ({ content }) => (
  <BaseLayout>
    <SiteMetadata title="Joystream: The video platform DAO" description="Explore the Antioch Testnet" />

    <Hero image={antiochImage} title="Antioch Network" indent animationStartValue={0}>
      <p className="AntiochPage__hero-paragraph">
        The Antioch release seeks to patch a chain split bug which unfortunately sabotaged the previous testnet.
      </p>
      <HeroCard date={launchDate} />
    </Hero>

    <LayoutWrapper>
      <TitleWrapper title="Critical Documents">
        <ColumnsLayout>
          <Pane
            image={SpecImg}
            href="https://github.com/Joystream/joystream/issues/2285"
            title="Release Plan"
            target="_blank"
          >
            Read the release plan as it was made during the planning stage, and learn more about how the development
            evolved.
          </Pane>
          <Pane
            image={BlogImg}
            title="Announcement Blog Post"
            href="https://blog.joystream.org/announcing-antioch/"
            target="_blank"
          >
            Read a brief primer on the Antioch testnet and its objectives.
          </Pane>
        </ColumnsLayout>
      </TitleWrapper>

      <TitleWrapper
        title="Testnet Goals"
        subtitle={
          <>The goals listed below are a simplified representation of our main objectives for the Antioch testnet.</>
        }
      >
        <GoalList data={goalsData} />
      </TitleWrapper>
    </LayoutWrapper>

    <LayoutWrapper dark>
      <TitleWrapper title="Incentivized Roles for the Antioch Network">
        <ColumnsLayout>
          <RoleList roles={roles.active} content={mapStatusDataToRoles(content)} />
        </ColumnsLayout>
      </TitleWrapper>
    </LayoutWrapper>

    <MapInfo title="Antioch" location="antioch">
      <p>
        <strong>Antioch was an ancient Greek city on the eastern side of the Orontes River. </strong>
        The city's position benefited its occupants greatly, particularly on account of such features as the spice
        trade, the Silk Road, and the Royal Road.
        <br />
        <br />
        At its height it rivaled Alexandria as the chief city of the Near East. Many also consider the city to be "the
        cradle of Christianity".
        <br />
        <br />
        <Link href="https://blog.joystream.org/announcing-antioch/">
          <PersonIcon /> Read the blog post
        </Link>
      </p>
    </MapInfo>
  </BaseLayout>
);

AntiochPage.propTypes = pagePropTypes;

export { AntiochPage };
export default withApi(AntiochPage, getApiPath('STATUS'));
