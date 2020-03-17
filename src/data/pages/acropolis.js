import { ReactComponent as contentCreatorImage } from '../../assets/svg/content-creator.svg';
import { ReactComponent as contentCuratorImage } from '../../assets/svg/content-curator.svg';
import { ReactComponent as validatorsImage } from '../../assets/svg/active-validators.svg';
import { ReactComponent as memberImage } from '../../assets/svg/council-member.svg';
import { ReactComponent as storageImage } from '../../assets/svg/platform-content-files.svg';


const roles = {
  active: [
    {
      image: contentCreatorImage,
      title: 'Content Creator',
      key: 'contentCreatorsCount',
      to: '/roles#content-creator',
      hasLabel: true,
    },
    {
      image: contentCuratorImage,
      title: 'Content Curator',
      key: 'contentCuratorsCount',
      to: '/roles#content-curator',
      hasLabel: true,
    },
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
      hasLabel: false,
    },
  ]
};

const goals = [
  {
    title: 'Build and release an on-chain forum',
    text: `The final platform will have built in multiple ways of facilitating
            easy and secure public, and private, communication and information
            sharing among members. The forum is the first step allowing the
            platform members to communicate, share ideas and discuss.`,
  },
  {
    title: 'Rebuild and release the storage node',
    text: `Where the old storage node had some bugs making it unable to sync
            between clients and required a hardcoded liaison, the new storage
            node is working as intended with no hierarchy or privileges.`,
  },
  {
    title: 'Ensure high uptime of storage providers',
    text: `Both content creators and consumers user experience depends on
            various metrics, but perhaps the most important is that the storage
            node they connect to responds to their request. Whether or not this
            goal is achieved depends on both the reliability of the software, a
            good reporting system and corrective actions from multiple parties.`,
  },
  {
    title: 'Build the storage node with "tranches"',
    text: `Although the content directory is currently small, at some point
            it's not feasible to expect all storage providers to have full
            replication of all the content. Tranches would allow storage
            providers to select a subset of the content directory, suitable to
            their capabilities.`,
    state: 'postponed',
  },
];

export { roles, goals };
