export const formatNumber = n =>
  n
    .toLocaleString('en-US')
    .split(',')
    .join(' ');
