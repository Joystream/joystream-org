import React from 'react';

import Link from '../../components/Link';
import { ReactComponent as ValidatorsImage } from '../../assets/svg/active-validators.svg';
import { ReactComponent as payoutImage } from '../../assets/svg/participation-payout.svg';
import { ReactComponent as blockImage } from '../../assets/svg/block-platform-content-files.svg';
import { ReactComponent as emblemImage } from '../../assets/svg/memberships.svg';
import { ReactComponent as MemberImage } from '../../assets/svg/council-member.svg';

const roles = {
  active: [
    {
      image: ValidatorsImage,
      title: 'Validator',
      to: '/roles#validator',
      key: 'validatorsCount',
      hasLabel: true,
      type: 'most',
    },
    {
      image: MemberImage,
      title: 'Council Member',
      to: '/roles#council-member',
      key: 'councilMembersCount',
      hasLabel: true,
      type: 'most',
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
  { title: 'Memberships', image: emblemImage, key: 'membershipsMembers' },
  { title: 'Block Height', image: blockImage, key: 'blockHeight' },
];

const goals = [
  {
    title: 'sparta.testnetGoals.goals.blockchain.title',
    text: {
      isModular: true,
      key: 'sparta.testnetGoals.goals.blockchain.text',
      components: [<Link to="/roles#council-member" />],
    },
  },
  {
    title: 'sparta.testnetGoals.goals.bugs.title',
    text: 'sparta.testnetGoals.goals.bugs.text',
    state: 'postponed',
  },
];

export { roles, analytics, goals };
