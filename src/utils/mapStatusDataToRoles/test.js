import mapStatusDataToRoles from './index';

const input = {
  finalizedBlockHeight: 1110117,
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

describe('mapStatusDataToRoles function', () => {
  it('retuns correct structure of data', () => {
    const expectedOutput = {
      validatorsCount: 20,
      councilMembersCount: 12,
      storageProviders: 10,
    };

    expect(mapStatusDataToRoles(input)).toEqual(expectedOutput);
  });

  it('retuns undefined values for missing keys', () => {
    const modifiedInput = {
      roles: {
        storage_providers: 10,
      },
      validators: {
        count: 20,
        total_stake: '45658',
      },
    };

    const expectedOutput = {
      validatorsCount: 20,
      councilMembersCount: undefined,
      storageProviders: 10,
    };

    expect(mapStatusDataToRoles(modifiedInput)).toEqual(expectedOutput);
  });
});
