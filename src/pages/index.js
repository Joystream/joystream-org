import React from 'react';
import { pagePropTypes } from '../propTypes';

import getApiPath from '../utils/getApiPath';
import mapStatusDataToAnalytics from '../utils/mapStatusDataToAnalytics';
import mapStatusDataToRoles from '../utils/mapStatusDataToRoles';

import withApi from '../components/_enhancers/withApi';

import BaseLayout from '../components/_layouts/Base';
import Link from '../components/Link';
import Subheader from '../components/Subheader';
import TestnetItem from '../components/TestnetItem';
import Analytics from '../components/Analytics';
import Button from '../components/Button';
import TitleWrapper from '../components/TitleWrapper';
import RoleList from '../components/RoleList';
import ColumnsLayout from '../components/ColumnsLayout';
import LayoutWrapper from '../components/LayoutWrapper';
import Hero from '../components/Hero';
import SiteMetadata from '../components/SiteMetadata';

import AcropolisImage from '../assets/svg/acropolis-main.svg';
import heroImage from '../assets/svg/hero-builder.svg';
import RomeImage from '../assets/svg/rome-main.svg';
import constantinopleImage from '../assets/svg/constantinople-main.svg';
import alexandriaImage from '../assets/svg/alexandria-main.svg';
import { ReactComponent as TickImage } from '../assets/svg/tick.svg';
import { ReactComponent as ClockImage } from '../assets/svg/clock.svg';

import { roles } from '../data/pages';
import { launchDate as alexandriaNetworkLaunchDate } from '../data/pages/alexandria';

import './style.scss';

const activeTestnet = {
  name: 'Alexandria',
  incentivesLink: 'https://www.joystream.org/testnet',
};

const IndexPage = ({ content }) => (
  <BaseLayout>
    <SiteMetadata
      title="Joystream: The video platform DAO"
      description="Joystream is a video platform controlled, owned, and operated by its users."
    />
    <Hero
      image={heroImage}
      title={
        <>
          The video <br /> platform DAO
        </>
      }
      animationStartValue={0}
    >
      <p className="IndexPage__hero-paragraph">
        Joystream is a video platform controlled, owned, and operated by its users.
      </p>
      <div className="IndexPage__hero-group">
        <Button noWrap large secondary className="IndexPage__hero-button" href="/testnet/">
          Earn Tokens
        </Button>
        <Button
          noWrap
          large
          secondary
          reversed
          className="IndexPage__hero-button"
          href="https://testnet.joystream.org/"
        >
          Launch UI
        </Button>
      </div>
    </Hero>

    <LayoutWrapper>
      <TestnetItem
        title="Alexandria Testnet"
        image={alexandriaImage}
        children={
          <>Alexandria is our seventh testnet, introducing a variety of important technical improvements.</>
        }
        button={{
          label: 'Explore Alexandria',
          to: '/alexandria',
        }}
      />
    </LayoutWrapper>

    <Analytics title="Testnet Metrics" large content={mapStatusDataToAnalytics(content)}>
      <Button secondary href={activeTestnet.incentivesLink}>
        Participate and Earn Monero
      </Button>
    </Analytics>

    {/*

    <LayoutWrapper>
      <TestnetItem
        title="Alexandria Testnet"
        image={alexandriaImage}
        children="Alexandria is our seventh testnet, focused on a variety of important technical improvements."
        date={alexandriaNetworkLaunchDate}
        button={{
          label: 'Explore Alexandria',
          to: '/alexandria',
        }}
      />
    </LayoutWrapper>

    */}

    <LayoutWrapper dark>
      <TitleWrapper title="Become a user, run the platform">
        <Subheader
          title="Active roles on the current testnet"
          content="learn more, join a role and subscribe for more"
          icon={TickImage}
        />
        <ColumnsLayout>
          <RoleList roles={roles.active} content={mapStatusDataToRoles(content)} />
        </ColumnsLayout>
        <Subheader
          title="Roles coming in future testnets"
          content="choose a role, learn more and subscribe to get updated"
          icon={ClockImage}
        />
        <ColumnsLayout columnsCount={3}>
          <RoleList roles={roles.future} content={mapStatusDataToRoles(content)} />
        </ColumnsLayout>

        <Button secondary to="/roles" className="IndexPage__roles-button">
          Learn more about the roles
        </Button>
      </TitleWrapper>
    </LayoutWrapper>
  </BaseLayout>
);

IndexPage.propTypes = pagePropTypes;

export { IndexPage };
export default withApi(IndexPage, getApiPath('/'));
