import React from 'react';
import Link from '../../components/Link';
import { ReactComponent as ValidatorsImage } from '../../assets/svg/active-validators.svg';
import { ReactComponent as payoutImage } from '../../assets/svg/participation-payout.svg';
import { ReactComponent as blockImage } from '../../assets/svg/block-platform-content-files.svg';
import { ReactComponent as bookImage } from '../../assets/svg/platform-content-files.svg';

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
      type: 'migration',
    },
    {
      image: memberImage,
      title: 'Council Member',
      to: '/roles#council-member',
      key: 'councilMembersCount',
      hasLabel: false,
      type: 'migration',
    },
    {
      image: storageImage,
      title: 'Storage Provider',
      to: '/roles#storage-provider',
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
    title: 'athens.testnetGoals.goals.media.title',
    text: 'athens.testnetGoals.goals.media.text',
  },
  {
    title: 'athens.testnetGoals.goals.memberships.title',
    text: 'athens.testnetGoals.goals.memberships.text',
  },
  {
    title: 'athens.testnetGoals.goals.storageNode.title',
    text: 'athens.testnetGoals.goals.storageNode.text',
    state: 'postponed',
  },
  {
    title: 'athens.testnetGoals.goals.runtimeUpgrade.title',
    text: {
      isModular: true,
      key: 'athens.testnetGoals.goals.runtimeUpgrade.text',
      components: [
        <Link href="https://blog.joystream.org/upgrades/" />,
        <Link href="https://blog.joystream.org/sparta-sacked/" />,
      ],
    },
    state: 'postponed',
  },
];

export { roles, analytics, goals };
