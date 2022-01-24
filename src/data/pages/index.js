import React from 'react';

// role images
import { ReactComponent as StorageProviderImage } from '../../assets/svg/active-storage-providers.svg';
import { ReactComponent as ValidatorImage } from '../../assets/svg/active-validators.svg';
import { ReactComponent as CouncilMemberImage } from '../../assets/svg/council-member.svg';
import { ReactComponent as StorageLeadImage } from '../../assets/svg/platform-content-files.svg';
import { ReactComponent as ContentCuratorImage } from '../../assets/svg/content-curator.svg';
import { ReactComponent as ContentCreatorImage } from '../../assets/svg/content-creator.svg';
import { ReactComponent as ContentLeadImage } from '../../assets/svg/content-curator.svg';
import { ReactComponent as screenerImage } from '../../assets/svg/membership-screener.svg';
import { ReactComponent as membershipCuratorImage } from '../../assets/svg/membership-curator.svg';
import { ReactComponent as bandwidthProviderImage } from '../../assets/svg/bandwidth-provider.svg';
import { ReactComponent as discoveryProviderImage } from '../../assets/svg/discovery-provider.svg';
import { ReactComponent as liveStreamingProviderImage } from '../../assets/svg/live-streaming-provider.svg';
import { ReactComponent as builderImage } from '../../assets/svg/builder.svg';
import { ReactComponent as communicationModeratorImage } from '../../assets/svg/communication-moderator.svg';

// testnet images

import Babylon from '../../assets/svg/babylon-logo.svg';
import Alexandria from '../../assets/svg/alexandria-logo.svg';
import Constantinople from '../../assets/svg/constantinople-building.svg';
import Rome from '../../assets/svg/rome-building.svg';
import Sparta from '../../assets/svg/sparta-helmet.svg';
import Athens from '../../assets/svg/athens-owl.svg';
import Acropolis from '../../assets/svg/acropolis-building.svg';
import Antioch from '../../assets/svg/antioch-logo.svg';
import Sumer from '../../assets/svg/sumer-logo.svg';
import Giza from '../../assets/svg/giza-logo.svg';

export const sharedData = {
  defaultEmail: 'hello@jsgenesis.com',
  social: {
    telegramLink: 'https://t.me/joinchat/CNyeUxHD9H56m3e_44hXIA',
    redditLink: 'https://www.reddit.com/r/JoyStream/',
    twitterLink: 'https://twitter.com/JoystreamDAO',
    discordLink: 'https://discord.gg/DE9UN3YpRP',
  },
  links: {
    blog: 'https://blog.joystream.org/',
    whitepaper: 'https://github.com/Joystream/whitepaper/blob/master/paper.pdf',
    repository: 'https://github.com/Joystream/joystream',
    github: 'https://github.com/Joystream',
    openings: 'https://www.jsgenesis.com/#openings',
  },
  rolesDescription: (
    <>
      Explore available roles and pick the one that suits you best. Influence the platform's development and earn real
      money in the process.
    </>
  ),
};

export const roles = {
  active: [
    {
      image: ContentCreatorImage,
      title: 'Content Creator',
      key: 'contentCreatorsCount',
      to: '/roles#content-creator',
      hasLabel: false,
    },
    {
      image: ContentCuratorImage,
      title: 'Content Curator',
      key: 'contentCuratorsCount',
      to: '/roles#content-curator',
      hasLabel: false,
    },
    {
      image: ValidatorImage,
      title: 'Validator',
      to: '/roles#validator',
      key: 'validatorsCount',
      hasLabel: false,
    },
    {
      image: CouncilMemberImage,
      title: 'Council Member',
      to: '/roles#council-member',
      key: 'councilMembersCount',
      hasLabel: false,
    },
    {
      image: StorageProviderImage,
      title: 'Storage Provider',
      to: '/roles#storage-provider',
      key: 'storageProviders',
      hasLabel: false,
    },
    { image: builderImage, title: 'Builder', to: '/roles#builder', key: 'builders', hasLabel: false },
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
    {
      image: communicationModeratorImage,
      title: 'Communication Moderator',
      to: '/roles#communication-moderator',
    },
  ],
};

export const roleCardData = {
  validator: {
    image: ValidatorImage,
    title: 'Validator',
  },
  council: {
    image: CouncilMemberImage,
    title: 'Council',
  },
  storageProvider: {
    image: StorageProviderImage,
    title: 'Storage Provider',
  },
  storageLead: {
    image: StorageLeadImage,
    title: 'Storage Lead',
  },
  contentCurator: {
    image: ContentCuratorImage,
    title: 'Content Curator',
  },
  contentCreator: {
    image: ContentCreatorImage,
    title: 'Content Creator',
  },
  contentLead: {
    image: ContentLeadImage,
    title: 'Content Lead',
  },
};

export const bountiesLink =
  'https://raw.githubusercontent.com/Joystream/community-repo/master/bounties/overview/bounties-status.json';

export const testnetData = [
  {
    Image: Olympia,
    number: 11,
    name: 'Olympia',
    date: '18.02.2022',
    state: 'Future',
    link: '/olympia',
  },
  {
    Image: Giza,
    number: 10,
    name: 'Giza',
    date: '26.01.2022',
    state: 'Current',
    link: '/giza',
  },
  {
    Image: Sumer,
    number: 9,
    name: 'Sumer',
    date: '27.05.2021',
    state: 'Past',
    link: '/sumer',
  },
  {
    Image: Antioch,
    number: 8,
    name: 'Antioch',
    date: '07.04.2021',
    state: 'Past',
    link: '/antioch',
  },
  {
    Image: Babylon,
    number: 7,
    name: 'Babylon',
    date: '21.12.2020',
    state: 'Past',
    link: '/babylon',
  },
  {
    Image: Alexandria,
    number: 6,
    name: 'Alexandria',
    date: '03.09.2020',
    state: 'Past',
    link: '/alexandria',
  },
  {
    Image: Constantinople,
    number: 5,
    name: 'Constantinople',
    date: '20.05.2020',
    state: 'Past',
    link: '/constantinople',
  },
  {
    Image: Rome,
    number: 4,
    name: 'Rome',
    date: '17.03.2020',
    state: 'Past',
    link: '/rome',
  },
  {
    Image: Acropolis,
    number: 3,
    name: 'Acropolis',
    date: '24.06.2019',
    state: 'Past',
    link: '/acropolis',
  },
  {
    Image: Athens,
    number: 2,
    name: 'Athens',
    date: '17.04.2019',
    state: 'Past',
    link: '/athens',
  },
  {
    Image: Sparta,
    number: 1,
    name: 'Sparta',
    date: '28.02.2019',
    state: 'Past',
    link: '/sparta',
  },
];
