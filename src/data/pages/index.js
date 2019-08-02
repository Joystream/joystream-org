import validatorsImage from '../../assets/svg/active-validators.svg';
import storageImage from '../../assets/svg/storage.svg';
import memberImage from '../../assets/svg/council-member.svg';
import screenerImage from '../../assets/svg/screener.svg';
import membershipCuratorImage from '../../assets/svg/membership-curator.svg';
import contentCuratorImage from '../../assets/svg/content-curator.svg';
import contentCreatorImage from '../../assets/svg/content-creator.svg';
import bandwidthProviderImage from '../../assets/svg/bandwidth-provider.svg';
import discoveryProviderImage from '../../assets/svg/discovery-provider.svg';
import liveStreamingProviderImage from '../../assets/svg/live-streaming-provider.svg';
import builderImage from '../../assets/svg/builder.svg';
import communicationModeratorImage from '../../assets/svg/communication-moderator.svg';

const roles = {
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

export { roles };
