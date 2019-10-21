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
    title: 'Build and release a blockchain with a working Council',
    text: (
      <>
        As a "user governed media platform", allowing users to elect{' '}
        <Link to="/roles#council-member">Council Members</Link> to represent their interest in day-to-day operations was
        a major goal for us.
      </>
    ),
  },
  {
    title: 'Keep the quantity of more or less critical bugs at an acceptable level',
    text: 'As demonstrated by the fact that the network crashed, we did not reach our goals in this case.',
    state: 'postponed',
  },
];

export { roles, analytics, goals };
