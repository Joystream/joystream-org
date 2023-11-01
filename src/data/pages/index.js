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

// Available activities icons
import { ReactComponent as ReferIcon } from '../../assets/svg/available-activities-icons/refer.svg';
import { ReactComponent as BountiesIcon } from '../../assets/svg/available-activities-icons/bounties.svg';
import { ReactComponent as CouncilMemberIcon } from '../../assets/svg/available-activities-icons/council-member.svg';
import { ReactComponent as ContentCuratorIcon } from '../../assets/svg/available-activities-icons/content-curator.svg';
import { ReactComponent as ContentCuratorLeadIcon } from '../../assets/svg/available-activities-icons/content-curator-lead.svg';
import { ReactComponent as BuilderIcon } from '../../assets/svg/available-activities-icons/builder.svg';
import { ReactComponent as BuilderLeadIcon } from '../../assets/svg/available-activities-icons/builder-lead.svg';
import { ReactComponent as HRIcon } from '../../assets/svg/available-activities-icons/hr.svg';
import { ReactComponent as HRLeadIcon } from '../../assets/svg/available-activities-icons/hr-lead.svg';
import { ReactComponent as MarketerIcon } from '../../assets/svg/available-activities-icons/marketer.svg';
import { ReactComponent as MarketerLeadIcon } from '../../assets/svg/available-activities-icons/marketer-lead.svg';
import { ReactComponent as StorageProviderIcon } from '../../assets/svg/available-activities-icons/storage-provider.svg';
import { ReactComponent as StorageProviderLeadIcon } from '../../assets/svg/available-activities-icons/storage-provider-lead.svg';
import { ReactComponent as DistributorIcon } from '../../assets/svg/available-activities-icons/distributor.svg';
import { ReactComponent as DistributorLeadIcon } from '../../assets/svg/available-activities-icons/distributor-lead.svg';
import { ReactComponent as ValidatorIcon } from '../../assets/svg/available-activities-icons/validator.svg';


export const sharedData = {
  defaultEmail: 'hello@jsgenesis.com',
  social: {
    telegramLink: 'https://t.me/joinchat/CNyeUxHD9H56m3e_44hXIA',
    redditLink: 'https://www.reddit.com/r/JoyStream/',
    twitterLink: 'https://twitter.com/JoystreamDAO',
    discordLink: 'https://discord.gg/NaNzysB5YZ',
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

export const WORKER_ACTIVITIES = {
  // "Bounty": {
  //   title: "landing.availableActivities.activityTitles.bounties",
  //   icon: BountiesIcon
  // },
  council: {
    title: 'landing.availableActivities.activityTitles.councilMember',
    icon: CouncilMemberIcon,
  },
  contentWorkingGroup: {
    title: 'landing.availableActivities.activityTitles.contentCurator',
    icon: ContentCuratorIcon,
  },
  // "ContentDirectoryLead": {
  //   title: "landing.availableActivities.activityTitles.contentCuratorLead",
  //   icon: ContentCuratorLeadIcon
  // },
  buildersWorkingGroup: {
    title: 'landing.availableActivities.activityTitles.builder',
    icon: BuilderIcon,
  },
  // "BuildersLead": {
  //   title: "landing.availableActivities.activityTitles.builderLead",
  //   icon: BuilderLeadIcon
  // },
  hrWorkingGroup: {
    title: 'landing.availableActivities.activityTitles.hr',
    icon: HRIcon,
  },
  // "HRLead": {
  //   title: "landing.availableActivities.activityTitles.hrLead",
  //   icon: HRLeadIcon
  // },
  marketingWorkingGroup: {
    title: 'landing.availableActivities.activityTitles.marketer',
    icon: MarketerIcon,
  },
  // "MarketingLead": {
  //   title: "landing.availableActivities.activityTitles.marketerLead",
  //   icon: MarketerLeadIcon
  // },
  storageWorkingGroup: {
    title: 'landing.availableActivities.activityTitles.storageProvider',
    icon: StorageProviderIcon,
  },
  // "StorageLead": {
  //   title: "landing.availableActivities.activityTitles.storageProviderLead",
  //   icon: StorageProviderLeadIcon
  // },
  distributionWorkingGroup: {
    title: 'landing.availableActivities.activityTitles.distributor',
    icon: DistributorIcon,
  },
  // "ContentDeliveryLead": {
  //   title: "landing.availableActivities.activityTitles.distributorLead",
  //   icon: DistributorLeadIcon
  // },
  validators: {
    title: 'landing.availableActivities.activityTitles.validator',
    icon: ValidatorIcon,
  },
};