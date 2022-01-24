import { ReactComponent as ContentCuratorImage } from '../../assets/svg/content-curator.svg';
import { ReactComponent as ContentCreatorImage } from '../../assets/svg/content-creator.svg';
import { ReactComponent as StorageProviderImage } from '../../assets/svg/active-storage-providers.svg';
import { ReactComponent as ValidatorImage } from '../../assets/svg/active-validators.svg';
import { ReactComponent as CouncilMemberImage } from '../../assets/svg/council-member.svg';
import { ReactComponent as BuilderImage } from '../../assets/svg/builder.svg';
import { ReactComponent as BandwidthProviderImage } from '../../assets/svg/bandwidth-provider.svg';

const roles = {
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
    { image: BuilderImage, title: 'Builder', to: '/roles#builder', key: 'builders', hasLabel: false },
    { image: BandwidthProviderImage, title: 'Bandwidth Provider', to: '/roles#bandwidth-provider', key: 'bandwidthProviders', hasLabel: false },
  ]
};

const goalsData = [
  {
    title: 'giza.testnetGoals.goals.launchStorageAndDistribution.title',
    text: 'giza.testnetGoals.goals.launchStorageAndDistribution.text',
    state: 'achieved',
  },
  {
    title: 'giza.testnetGoals.goals.contentDirectoryEnhancements.title',
    text: 'giza.testnetGoals.goals.contentDirectoryEnhancements.text',
    state: 'achieved',
  },
  {
    title: 'giza.testnetGoals.goals.newOperationsWorkingGroups.title',
    text: 'giza.testnetGoals.goals.newOperationsWorkingGroups.text',
    state: 'achieved',
  },
];

const launchDate = '2022/01/26 12:40';

export { goalsData, launchDate, roles };
