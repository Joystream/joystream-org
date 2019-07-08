import React from 'react';
import { string, shape, number } from 'prop-types';

import getApiPath from '../utils/getApiPath';
import mapStatusDataToAnalytics from '../utils/mapStatusDataToAnalytics';

import withApi from '../components/_enhancers/withApi';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from '../components/Link';
import Subheader from '../components/Subheader';
import TestnetItem from '../components/TestnetItem';
import Analytics from '../components/Analytics';
import Button from '../components/Button';
import TitleWrapper from '../components/TitleWrapper';
import RoleCard from '../components/RoleCard';
import ColumnsLayout from '../components/ColumnsLayout';
import LayoutWrapper from '../components/LayoutWrapper';

import AcropolisImage from '../assets/svg/acropolis-main.svg';
import { ReactComponent as TickImage } from '../assets/svg/tick.svg';
import { ReactComponent as ValidatorsImage } from '../assets/svg/active-validators.svg';
import { ReactComponent as StorageImage } from '../assets/svg/storage.svg';
import { ReactComponent as MemberImage } from '../assets/svg/council-member.svg';

import { ReactComponent as ScreenerImage } from '../assets/svg/screener.svg';
import { ReactComponent as MembershipCuratorImage } from '../assets/svg/membership-curator.svg';
import { ReactComponent as ContentCuratorImage } from '../assets/svg/content-curator.svg';
import { ReactComponent as ContentCreatorImage } from '../assets/svg/content-creator.svg';
import { ReactComponent as BandwidthProviderImage } from '../assets/svg/bandwidth-provider.svg';
import { ReactComponent as DiscoveryProviderImage } from '../assets/svg/discovery-provider.svg';
import { ReactComponent as LiveStreamingProviderImage } from '../assets/svg/live-streaming-provider.svg';
import { ReactComponent as BuilderImage } from '../assets/svg/builder.svg';
import { ReactComponent as CommunicationModeratorImage } from '../assets/svg/communication-moderator.svg';

import './style.scss';

const propTypes = {
  content: shape({
    block_height: number,
    council: shape({
      election_stage: string,
      members_count: number,
    }),
    forum: shape({
      posts: number,
      threads: number,
    }),
    media: shape({
      media_files: number,
    }),
    memberships: shape({
      platform_members: number,
    }),
    roles: shape({
      storage_providers: number,
    }),
    runtime_version: shape({
      impl_name: string,
      spec_name: string,
      spec_version: number,
    }),
    system: shape({
      chain: string,
      name: string,
      peerCount: number,
      version: string,
    }),
    validators: shape({
      count: number,
      total_stake: string,
    }),
  }).isRequired,
};

const roles = {
  active: [
    { image: ValidatorsImage, title: 'Validator', count: 15, to: '/roles#Validator' },
    { image: MemberImage, title: 'Council Member', count: 12, to: '/roles#Council-Member' },
    { image: StorageImage, title: 'Storage Provider', count: 10, to: '/roles#Storage-Provider' },
  ],
  future: [
    { image: ScreenerImage, title: 'Membership Screener', to: '/roles' },
    { image: MembershipCuratorImage, title: 'Membership Curator', to: '/roles' },
    { image: ContentCuratorImage, title: 'Content Curator', to: '/roles' },
    { image: ContentCreatorImage, title: 'Content Creator', to: '/roles' },
    { image: BandwidthProviderImage, title: 'Bandwidth Provider', to: '/roles' },
    { image: DiscoveryProviderImage, title: 'Discovery Provider', to: '/roles' },
    { image: LiveStreamingProviderImage, title: 'Live Streaming Provider', to: '/roles' },
    { image: BuilderImage, title: 'Builder', to: '/roles' },
    { image: CommunicationModeratorImage, title: 'Communication Moderator', to: '/roles' },
  ],
};

const IndexPage = ({ content }) => (
  <div>
    <Navbar />

    <LayoutWrapper>
      <TestnetItem
        title="Acropolis Tesnet"
        image={AcropolisImage}
        children={
          <>
            Acropolis is our fourth testnet, with much improved
            <Link href="https://www.joystream.org/roles#Storage-Provider"> storage provider </Link>
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
          {roles.active.map(role => (
            <RoleCard {...role} key={role.title} />
          ))}
        </ColumnsLayout>
        <Subheader
          title="Roles coming in future testnets"
          content="choose a role, learn more and subscribe to get updated"
          icon={TickImage}
        />
        <ColumnsLayout columnsCount={3}>
          {roles.future.map(role => (
            <RoleCard {...role} key={role.title} />
          ))}
        </ColumnsLayout>

        <Button secondary to="/roles" className="IndexPage__roles-button">
          Learn more about the roles
        </Button>
      </TitleWrapper>
    </LayoutWrapper>

    <Footer />
  </div>
);

IndexPage.propTypes = propTypes;

export { IndexPage };
export default withApi(IndexPage, getApiPath('STATUS'));
