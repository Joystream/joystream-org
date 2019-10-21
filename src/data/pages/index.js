import React from 'react';
import { ReactComponent as validatorsImage } from '../../assets/svg/active-validators.svg';
import { ReactComponent as storageImage } from '../../assets/svg/platform-content-files.svg';
import { ReactComponent as memberImage } from '../../assets/svg/council-member.svg';
import { ReactComponent as screenerImage } from '../../assets/svg/membership-screener.svg';
import { ReactComponent as membershipCuratorImage } from '../../assets/svg/membership-curator.svg';
import { ReactComponent as contentCuratorImage } from '../../assets/svg/content-curator.svg';
import { ReactComponent as contentCreatorImage } from '../../assets/svg/content-creator.svg';
import { ReactComponent as bandwidthProviderImage } from '../../assets/svg/bandwidth-provider.svg';
import { ReactComponent as discoveryProviderImage } from '../../assets/svg/discovery-provider.svg';
import { ReactComponent as liveStreamingProviderImage } from '../../assets/svg/live-streaming-provider.svg';
import { ReactComponent as builderImage } from '../../assets/svg/builder.svg';
import { ReactComponent as communicationModeratorImage } from '../../assets/svg/communication-moderator.svg';

export const sharedData = {
  defaultEmail: 'hello@jsgenesis.com',
  rolesDescription: (
    <>
      Explore available roles and pick the one that suits you the best. Influence the platform's development earning
      Monero in the process.
    </>
  ),
};

export const roles = {
  active: [
    {
      image: validatorsImage,
      title: 'Validator',
      to: '/roles#validator',
      key: 'validatorsCount',
      hasLabel: false,
    },
    {
      image: memberImage,
      title: 'Council Member',
      to: '/roles#council-member',
      key: 'councilMembersCount',
      hasLabel: false,
    },
    {
      image: storageImage,
      title: 'Storage Provider',
      to: '/roles#storage-provider',
      key: 'storageProviders',
      hasLabel: true,
    },
  ],
  future: [
    {
      image: screenerImage,
      title: 'Membership Screener',
      to: '/roles#membership-screener',
    },
    {
      image: membershipCuratorImage,
      title: 'Membership Curator',
      to: '/roles',
    },
    {
      image: contentCuratorImage,
      title: 'Content Curator',
      to: '/roles#content-curator',
    },
    {
      image: contentCreatorImage,
      title: 'Content Creator',
      to: '/roles#content-creator',
    },
    {
      image: bandwidthProviderImage,
      title: 'Bandwidth Provider',
      to: '/roles#bandwidth-provider',
    },
    {
      image: discoveryProviderImage,
      title: 'Discovery Provider',
      to: '/roles#discovery-provider',
    },
    {
      image: liveStreamingProviderImage,
      title: 'Live Streaming Provider',
      to: '/roles#live-streaming-provider',
    },
    { image: builderImage, title: 'Builder', to: '/roles#builder' },
    {
      image: communicationModeratorImage,
      title: 'Communication Moderator',
      to: '/roles#communication-moderator',
    },
  ],
};
