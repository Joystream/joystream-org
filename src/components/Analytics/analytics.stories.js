import React from 'react';
import { storiesOf } from '@storybook/react';

import Analytics from './index';
import AnalyticsItem from './AnalyticsItem';
import Button from '../Button';

import { ReactComponent as blockImage } from '../../assets/svg/block-platform-content-files.svg';

import mapStatusDataToAnalytics from '../../utils/mapStatusDataToAnalytics';

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

storiesOf('Analytics', module)
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
  .add('with children', () => (
    <Analytics content={mapStatusDataToAnalytics(exampleExternalData)}>
      <Button secondary href="https://blog.joystream.org/athens-incentives/">
        Participate and Earn Monero
      </Button>
    </Analytics>
  ));
