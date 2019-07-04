import mapStatusDataToAnalytics from './index';

const input = {
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

describe('mapStatusDataToAnalytics function', () => {
  it('retuns correct structure of data', () => {
    const expectedOutput = {
      validatorsCount: 20,
      blockHeight: 1110117,
      councilStage: 'Announcing',
      membershipsMembers: 164,
      forumPosts: 11,
      mediaFiles: 9,
      rolesProviders: 10,
    };

    expect(mapStatusDataToAnalytics(input)).toEqual(expectedOutput);
  });

  it('retuns undefined values for missing keys', () => {
    const modifiedInput = {
      block_height: 1110117,
    };

    const expectedOutput = {
      validatorsCount: undefined,
      blockHeight: 1110117,
      councilStage: undefined,
      membershipsMembers: undefined,
      forumPosts: undefined,
      mediaFiles: undefined,
      rolesProviders: undefined,
    };

    expect(mapStatusDataToAnalytics(modifiedInput)).toEqual(expectedOutput);
  });
});
