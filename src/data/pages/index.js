import { ReactComponent as ValidatorsImage } from '../../assets/svg/active-validators.svg';
import { ReactComponent as StorageImage } from '../../assets/svg/storage.svg';
import { ReactComponent as MemberImage } from '../../assets/svg/council-member.svg';
import { ReactComponent as ScreenerImage } from '../../assets/svg/screener.svg';
import { ReactComponent as MembershipCuratorImage } from '../../assets/svg/membership-curator.svg';
import { ReactComponent as ContentCuratorImage } from '../../assets/svg/content-curator.svg';
import { ReactComponent as ContentCreatorImage } from '../../assets/svg/content-creator.svg';
import { ReactComponent as BandwidthProviderImage } from '../../assets/svg/bandwidth-provider.svg';
import { ReactComponent as DiscoveryProviderImage } from '../../assets/svg/discovery-provider.svg';
import { ReactComponent as LiveStreamingProviderImage } from '../../assets/svg/live-streaming-provider.svg';
import { ReactComponent as BuilderImage } from '../../assets/svg/builder.svg';
import { ReactComponent as CommunicationModeratorImage } from '../../assets/svg/communication-moderator.svg';

const roles = {
  active: [
    {
      image: ValidatorsImage,
      title: 'Validator',
      to: '/roles#Validator',
      key: 'validatorsCount',
      hasLabel: false,
    },
    {
      image: MemberImage,
      title: 'Council Member',
      to: '/roles#Council-Member',
      key: 'councilMembersCount',
      hasLabel: false,
    },
    {
      image: StorageImage,
      title: 'Storage Provider',
      to: '/roles#Storage-Provider',
      key: 'storageProviders',
      hasLabel: true,
    },
  ],
  future: [
    { image: ScreenerImage, title: 'Membership Screener', to: '/roles' },
    {
      image: MembershipCuratorImage,
      title: 'Membership Curator',
      to: '/roles',
    },
    { image: ContentCuratorImage, title: 'Content Curator', to: '/roles' },
    { image: ContentCreatorImage, title: 'Content Creator', to: '/roles' },
    {
      image: BandwidthProviderImage,
      title: 'Bandwidth Provider',
      to: '/roles',
    },
    {
      image: DiscoveryProviderImage,
      title: 'Discovery Provider',
      to: '/roles',
    },
    {
      image: LiveStreamingProviderImage,
      title: 'Live Streaming Provider',
      to: '/roles',
    },
    { image: BuilderImage, title: 'Builder', to: '/roles' },
    {
      image: CommunicationModeratorImage,
      title: 'Communication Moderator',
      to: '/roles',
    },
  ],
};

export { roles };
