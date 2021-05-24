import { ReactComponent as ContentCuratorImage } from '../../assets/svg/content-curator.svg';
import { ReactComponent as ContentCreatorImage } from '../../assets/svg/content-creator.svg';
import { ReactComponent as StorageProviderImage } from '../../assets/svg/active-storage-providers.svg';
import { ReactComponent as ValidatorImage } from '../../assets/svg/active-validators.svg';
import { ReactComponent as CouncilMemberImage } from '../../assets/svg/council-member.svg';
import { ReactComponent as builderImage } from '../../assets/svg/builder.svg';

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
    { image: builderImage, title: 'Builder', to: '/roles#builder', key: 'builders', hasLabel: false },
  ]
};

const goalsData = [
  {
    title: 'sumer.testnetGoals.goals.contentPublishing.title',
    text: 'sumer.testnetGoals.goals.contentPublishing.text',
    state: 'achieved',
  },
  {
    title: 'sumer.testnetGoals.goals.deployingNewContentDirectory.title',
    text: 'sumer.testnetGoals.goals.deployingNewContentDirectory.text',
    state: 'achieved',
  },
  {
    title: 'sumer.testnetGoals.goals.enableBuilderRole.title',
    text: 'sumer.testnetGoals.goals.enableBuilderRole.text',
    state: 'achieved',
  },
];

const launchDate = '2021/05/26 07:00';

export { goalsData, launchDate, roles };
