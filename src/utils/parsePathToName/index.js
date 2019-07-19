const parsePathToName = path => {
  const fileName = path.replace(/^.*[\\/]/, '');
  const fileNameTrimmedExt = fileName
    .split('.')
    .slice(0, -1)
    .join('.');
  const removedDashes = fileNameTrimmedExt.replace(/-/g, ' ');
  return removedDashes
    .split(' ')
    .map(s => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ');
};

export default parsePathToName;
