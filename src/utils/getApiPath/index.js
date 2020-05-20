const apiPaths = {
  STATUS: () => 'status',
  '/': () => '',
};

export default function getApiPath(apiPathName, ...rest) {
  return apiPaths[apiPathName](rest);
}
