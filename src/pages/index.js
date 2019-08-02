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
import { ReactComponent as PlatformImage } from '../assets/svg/platform.svg';
import { ReactComponent as TickImage } from '../assets/svg/tick.svg';

import { roles } from '../data/pages';

import './style.scss';

const IndexPage = ({ content }) => (
  <BaseLayout>
    <SiteMetadata
      title="Joystream: A user governed video platform"
      description="Earn monero to participate on our testnets!"
    />

    <Hero
      image={PlatformImage}
      title="A user governed video platform"
      animationStartValue={0}
    >
      <p className="IndexPage__hero-paragraph">
        Earn Monero by participating in the current Athens testnet
      </p>
      <div className="IndexPage__hero-group">
        <Button
          secondary
          className="IndexPage__hero-button"
          href="https://blog.joystream.org/acropolis-incentives/"
        >
          Earn Monero
        </Button>
        <Button
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
        title="Acropolis Tesnet"
        image={AcropolisImage}
        children={
          <>
            Acropolis is our fourth testnet, with much improved{' '}
            <Link href="https://www.joystream.org/roles#Storage-Provider">
              storage provider
            </Link>
            software and an on-chain forum.
          </>
        }
        button={{
          label: 'Explore acropolis',
          to: '/acropolis',
        }}
      />

      <Analytics content={mapStatusDataToAnalytics(content)}>
        <Button secondary href="https://blog.joystream.org/athens-incentives/">
          Participate and Earn Monero
        </Button>
      </Analytics>
    </LayoutWrapper>

    <LayoutWrapper dark>
      <TitleWrapper title="Become a user, run the platform">
        <Subheader
          title="Active roles on the current testnet"
          content="learn more, join a role and subscribe for more"
          icon={TickImage}
        />
        <ColumnsLayout>
          <RoleList
            roles={roles.active}
            content={mapStatusDataToRoles(content)}
          />
        </ColumnsLayout>
        <Subheader
          title="Roles coming in future testnets"
          content="choose a role, learn more and subscribe to get updated"
          icon={TickImage}
        />
        <ColumnsLayout columnsCount={3}>
          <RoleList
            roles={roles.future}
            content={mapStatusDataToRoles(content)}
          />
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
export default withApi(IndexPage, getApiPath('STATUS'));
