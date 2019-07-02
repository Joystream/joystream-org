import React from 'react';
import { string, shape, number } from 'prop-types';

import getApiPath from '../utils/getApiPath';
import mapStatusDataToAnalytics from '../utils/mapStatusDataToAnalytics';

import withApi from '../components/_enhancers/withApi';

import Navbar from '../components/Navbar';
import HeroCard from '../components/HeroCard';
import DateCounter from '../components/DateCounter';
import Analytics from '../components/Analytics';
import Button from '../components/Button';

const propTypes = {
  content: shape({
    block_height: number,
    council: {
      election_stage: string,
      members_count: number,
    },
    forum: {
      posts: number,
      threads: number,
    },
    media: {
      media_files: number,
    },
    memberships: {
      platform_members: number,
    },
    roles: {
      storage_providers: number,
    },
    runtime_version: {
      impl_name: string,
      spec_name: string,
      spec_version: number,
    },
    system: {
      chain: string,
      name: string,
      peerCount: number,
      version: string,
    },
    validators: {
      count: number,
      total_stake: string,
    },
  }).isRequired,
};

const Indexpage = ({ content }) => (
  <div>
    <Navbar />
    <HeroCard date="2019/06/27 17:50" />
    <DateCounter />
    <Analytics content={mapStatusDataToAnalytics(content)}>
      <Button secondary href="https://blog.joystream.org/athens-incentives/">
        Participate and Earn Monero
      </Button>
    </Analytics>
  </div>
);

Indexpage.propTypes = propTypes;

export { Indexpage };
export default withApi(Indexpage, getApiPath('STATUS'));
