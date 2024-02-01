import { ReactComponent as contentCreatorImage } from '../../assets/svg/content-creator.svg';
import { ReactComponent as contentCuratorImage } from '../../assets/svg/content-curator.svg';
import { ReactComponent as validatorsImage } from '../../assets/svg/active-validators.svg';
import { ReactComponent as memberImage } from '../../assets/svg/council-member.svg';
import { ReactComponent as storageImage } from '../../assets/svg/platform-content-files.svg';


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
};

const goals = [
  {
    title: 'acropolis.testnetGoals.goals.forum.title',
    text: 'acropolis.testnetGoals.goals.forum.text',
  },
  {
    title: 'acropolis.testnetGoals.goals.storageNode.title',
    text: 'acropolis.testnetGoals.goals.storageNode.text',
  },
  {
    title: 'acropolis.testnetGoals.goals.storageProviders.title',
    text: 'acropolis.testnetGoals.goals.storageProviders.text',
  },
  {
    title: 'acropolis.testnetGoals.goals.tranches.title',
    text: 'acropolis.testnetGoals.goals.tranches.text',
    state: 'postponed',
  },
];

export { roles, goals };
