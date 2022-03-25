import getValue from 'get-value';

const keys = {
  validatorsCount: 'validators.count',
  councilMembersCount: 'council.members_count',
  storageProviders: 'roles.storage_providers',
  contentCuratorsCount: 'media.activeCurators',
  contentCreatorsCount: 'media.channels',
};

const mapStatusDataToRoles = data => {
  return Object.keys(keys).reduce((prev, curr) => {
    prev[curr] = getValue(data, keys[curr]);
    return prev;
  }, {});
};

export default mapStatusDataToRoles;
