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
import TitleWrapper from '../components/TitleWrapper';

const propTypes = {
  content: shape({
    block_height: number,
    council: shape({
      election_stage: string,
      members_count: number,
    }),
    forum: shape({
      posts: number,
      threads: number,
    }),
    media: shape({
      media_files: number,
    }),
    memberships: shape({
      platform_members: number,
    }),
    roles: shape({
      storage_providers: number,
    }),
    runtime_version: shape({
      impl_name: string,
      spec_name: string,
      spec_version: number,
    }),
    system: shape({
      chain: string,
      name: string,
      peerCount: number,
      version: string,
    }),
    validators: shape({
      count: number,
      total_stake: string,
    }),
  }).isRequired,
};

const IndexPage = ({ content }) => (
  <div>
    <Navbar />
    <HeroCard date="2019/06/27 17:50" />
    <DateCounter date="2019/06/27 17:50" />
    <Analytics content={mapStatusDataToAnalytics(content)}>
      <Button secondary href="https://blog.joystream.org/athens-incentives/">
        Participate and Earn Monero
      </Button>
    </Analytics>
    <TitleWrapper title="Test">content</TitleWrapper>
  </div>
);

IndexPage.propTypes = propTypes;

export { IndexPage };
export default withApi(IndexPage, getApiPath('STATUS'));
