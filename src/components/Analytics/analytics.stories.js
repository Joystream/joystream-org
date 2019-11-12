import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';

import Analytics from './index';
import AnalyticsItem from './AnalyticsItem';
import Button from '../Button';

import mapStatusDataToAnalytics from '../../utils/mapStatusDataToAnalytics';

import { ReactComponent as blockImage } from '../../assets/svg/block-platform-content-files.svg';
import { ReactComponent as payoutImage } from '../../assets/svg/participation-payout.svg';
import { ReactComponent as validatorsImage } from '../../assets/svg/active-validators.svg';
import { ReactComponent as emblemImage } from '../../assets/svg/memberships.svg';

const exampleData = {
  title: 'Block Height',
  image: blockImage,
  value: '1109212',
};

const exampleExternalData = {
  block_height: 1110117,
  council: {
    election_stage: 'Announcing',
    members_count: 12,
  },
  forum: {
    posts: 11,
    threads: 7,
  },
  media: {
    media_files: 9,
  },
  memberships: {
    platform_members: 164,
  },
  roles: {
    storage_providers: 10,
  },
  runtime_version: {
    impl_name: 'joystream-node',
    spec_name: 'joystream-node',
    spec_version: 4,
  },
  system: {
    chain: 'Joystream Testnet v2',
    name: 'joystream-node',
    peerCount: 29,
    version: '1.0.0',
  },
  validators: {
    count: 20,
    total_stake: '45658',
  },
};

const customItems = [
  { title: 'Participation Payout', image: payoutImage, value: '$1576' },
  {
    title: 'Active Validators',
    image: validatorsImage,
    key: 'validatorsCount',
  },
  { title: 'Block Height', image: blockImage, key: 'blockHeight' },
  { title: 'Memberships', image: emblemImage, key: 'membershipsMembers' },
];

storiesOf('Components|Analytics', module)
  .addDecorator(centered)
  .add('analytics item', () => <AnalyticsItem {...exampleData} />, {
    backgrounds: [
      {
        name: 'black',
        value: '#000000',
        default: true,
      },
    ],
  })
  .add('default', () => <Analytics content={mapStatusDataToAnalytics(exampleExternalData)} />)
  .add('custom number of analytics item', () => (
    <Analytics content={mapStatusDataToAnalytics(exampleExternalData)} items={customItems} />
  ))
  .add('with children', () => (
    <Analytics content={mapStatusDataToAnalytics(exampleExternalData)}>
      <Button secondary href="https://blog.joystream.org/athens-incentives/">
        Participate and Earn Monero
      </Button>
    </Analytics>
  ))
  .add('large', () => (
    <Analytics large content={mapStatusDataToAnalytics(exampleExternalData)}>
      <Button secondary href="https://blog.joystream.org/athens-incentives/">
        Participate and Earn Monero
      </Button>
    </Analytics>
  ));
