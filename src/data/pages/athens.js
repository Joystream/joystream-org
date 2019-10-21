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
    title: 'Enable media on the platform',
    text:
      'As a "user governed media platform", allowing users to upload and consume and content was a major goal for us.',
  },
  {
    title: 'Introduce platform memberships',
    text:
      /* eslint-disable-next-line */
      'Although we are building an open blockchain in the sense that users are free to send tokens as they like, the Joystream experience is about having the platform users own, operate and govern the platform. We are agnostic on exactly what parts of the platform will be reserved for members, some actions will require and extra level of screening and accountability.',
  },
  {
    title: 'Build and release the storage node',
    text:
      /* eslint-disable-next-line */
      'Although a storage node was built and used to host and distribute the platform content, it had some bugs making it unable to sync between clients and required a hardcoded liaison.',
    state: 'postponed',
  },
  {
    title: 'Upgrade the runtime through a Council vote',
    text: (
      <>
        The intention was for Jsgenesis to create a proposal for a{' '}
        <Link href="https://blog.joystream.org/upgrades/">runtime upgrade</Link> and have the Council vote on it. If the
        Council reached quorum, the consensus rules of the system would automatically get upgraded in flight.
        Unfortunately, the <Link href="https://blog.joystream.org/sparta-sacked/">Sparta network crashed</Link> before
        we reached this stage, and had to start Athens as a new chain with a new genesis block.
      </>
    ),
    state: 'postponed',
  },
];

export { roles, analytics, goals };
