import { ReactComponent as ContentCuratorImage } from '../../assets/svg/content-curator.svg';
import { ReactComponent as ContentCreatorImage } from '../../assets/svg/content-creator.svg';
import { ReactComponent as StorageProviderImage } from '../../assets/svg/active-storage-providers.svg';
import { ReactComponent as ValidatorImage } from '../../assets/svg/active-validators.svg';
import { ReactComponent as CouncilMemberImage } from '../../assets/svg/council-member.svg';
import { ReactComponent as BuilderImage } from '../../assets/svg/builder.svg';
import { ReactComponent as BandwidthProviderImage } from '../../assets/svg/bandwidth-provider.svg';
import { ReactComponent as MembershipCuratorImage } from '../../assets/svg/membership-curator.svg';
import { ReactComponent as CommunicationModeratorImage } from '../../assets/svg/communication-moderator.svg';

const roles = {
  active: [
    {
      image: ContentCreatorImage,
      title: 'Content Creator',
      key: 'contentCreatorsCount',
      to: "#",
      hasLabel: false
    },
    {
      image: ContentCuratorImage,
      title: 'Content Curator',
      key: 'contentCuratorsCount',
      to: "#",
      hasLabel: false
    },
    {
      image: ValidatorImage,
      title: 'Validator',
      key: 'validatorsCount',
      to: "#",
      hasLabel: false
    },
    {
      image: CouncilMemberImage,
      title: 'Council Member',
      key: 'councilMembersCount',
      to: "#",
      hasLabel: false
    },
    {
      image: StorageProviderImage,
      title: 'Storage Provider',
      key: 'storageProviders',
      to: "#",
      hasLabel: false
    },
    { 
      image: BuilderImage, 
      title: 'Builder',
      key: 'builders',
      to: "#",
      hasLabel: false
    },
    { 
      image: BandwidthProviderImage, 
      title: 'Bandwidth Provider',
      key: 'bandwidthProviders',
      to: "#",
      hasLabel: false,
    },
    {
      image: MembershipCuratorImage,
      title: 'Membership Curator',
      key: 'membershipCurators',
      to: "#",
      hasLabel: false,
    },
    {
      image: CommunicationModeratorImage,
      title: 'Communication Moderator',
      key: 'communicationModerators',
      to: "#",
      hasLabel: false,
    },
  ],
};

const goalsData = [
  {
    title: 'carthage.testnetGoals.goals.launchingReadyRuntimeFeatureScope.title',
    text: 'carthage.testnetGoals.goals.launchingReadyRuntimeFeatureScope.text',
    state: 'inprogress',
  },
  {
    title: 'carthage.testnetGoals.goals.realFeesAndParameterValues.title',
    text: 'carthage.testnetGoals.goals.realFeesAndParameterValues.text',
    state: 'inprogress',
  },
  {
    title: 'carthage.testnetGoals.goals.realMainnetGenesisBootstrapping.title',
    text: 'carthage.testnetGoals.goals.realMainnetGenesisBootstrapping.text',
    state: 'inprogress',
  },
];

// CARTHAGE TODO: Update this date here!
const launchDate = '2022/07/22 11:00';

export { goalsData, launchDate, roles };
