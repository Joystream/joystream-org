import getValue from 'get-value';

const keys = {
  validatorsCount: 'validators.count',
  blockHeight: 'block_height',
  councilStage: 'council.election_stage',
  membershipsMembers: 'memberships.platform_members',
  forumPosts: 'forum.posts',
  mediaFiles: 'media.media_files',
  rolesProviders: 'roles.storage_providers',
};

const mapStatusDataToAnalytics = data => {
  return Object.keys(keys).reduce((prev, curr) => {
    prev[curr] = getValue(data, keys[curr]);
    return prev;
  }, {});
};

export default mapStatusDataToAnalytics;
