import getValue from 'get-value';

const keys = {
  validatorsCount: 'validators.count',
  blockHeight: 'finalizedBlockHeight',
  councilStage: 'council.election_stage',
  membershipsMembers: 'memberships.platform_members',
  forumPosts: 'forum.posts',
  mediaFiles: 'media.media_files',
  rolesProviders: 'roles.storage_providers',
};

const mapStatusDataToAnalytics = data => {
  const mappedData = Object.keys(keys).reduce((prev, curr) => {
    prev[curr] = getValue(data, keys[curr]);
    return prev;
  }, {});

  if (mappedData.blockHeight) {
    mappedData.blockHeight = Math.floor(mappedData.blockHeight / 1000) + 'k';
  }

  return mappedData;
};

export default mapStatusDataToAnalytics;
