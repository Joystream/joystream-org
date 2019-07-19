import React from 'react';
import { ReactComponent as ValidatorsImage } from '../../assets/svg/active-validators.svg';
import { ReactComponent as StorageImage } from '../../assets/svg/storage.svg';
import { ReactComponent as MemberImage } from '../../assets/svg/council-member.svg';
import { ReactComponent as payoutImage } from '../../assets/svg/participation-payout.svg';
import { ReactComponent as blockImage } from '../../assets/svg/block-platform-content-files.svg';
import { ReactComponent as bookImage } from '../../assets/svg/platform-content-files.svg';

const roles = {
  active: [
    {
      image: ValidatorsImage,
      title: 'Validator',
      to: '/roles#Validator',
      key: 'validatorsCount',
      hasLabel: false,
      type: 'migration',
    },
    {
      image: MemberImage,
      title: 'Council Member',
      to: '/roles#Council-Member',
      key: 'councilMembersCount',
      hasLabel: false,
      type: 'migration',
    },
    {
      image: StorageImage,
      title: 'Storage Provider',
      to: '/roles#Storage-Provider',
      key: 'storageProviders',
      hasLabel: true,
      type: 'migration',
    },
  ],
};

const analytics = [
  { title: 'Participation Payout', image: payoutImage, value: '$1576' },
  {
    title: 'Active Validators',
    image: ValidatorsImage,
    key: 'validatorsCount',
  },
  { title: 'Platform Content Files', image: bookImage, key: 'mediaFiles' },
  { title: 'Block Height', image: blockImage, key: 'blockHeight' },
];

const goals = [
  {
    title: 'Enable media on the platform',
    text:
      /* eslint-disable */
      'As a "user governed media platform", allowing users to upload and consume and content was a major goal for us.',
    /* eslint-disable */
  },
  {
    title: 'Introduce platform memberships',
    text:
      /* eslint-disable */
      'Although we are building an open blockchain in the sense that users are free to send tokens as they like, the Joystream experience is about having the platform users own, operate and govern the platform. We are agnostic on exactly what parts of the platform will be reserved for members, some actions will require and extra level of screening and accountability.',
    /* eslint-disable */
  },
  {
    title: 'Build and release the storage node',
    text:
      /* eslint-disable */
      'Although a storage node was built and used to host and distribute the platform content, it had some bugs making it unable to sync between clients and required a hardcoded liaison.',
    /* eslint-disable */
    state: 'postponed',
  },
  {
    title: 'Upgrade the runtime through a Council vote',
    /* eslint-disable */
    text: [
      'The intention was for Jsgenesis to create a proposal for a ',
      <a href="https://blog.joystream.org/upgrades/">runtime upgrade</a>,
      ', and have the Council vote on it. If the Council reached quorum, the consensus rules of the system would automatically get upgraded in flight. Unfortunately, the ',
      <a href="https://blog.joystream.org/sparta-sacked/">
        Sparta network crashed
      </a>,
      ' before we reached this stage, and had to start Athens as a new chain with a new genesis block.',
    ],
    /* eslint-disable */
    state: 'postponed',
  },
];

export { roles, analytics, goals };
