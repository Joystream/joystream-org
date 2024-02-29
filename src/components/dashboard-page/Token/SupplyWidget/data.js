import { isNaN } from '../../../../utils/withFallbackVal';

const parseNumWithCommaAsSeparator = (data = {}, key) => {
  const num = data[key];

  if (isNaN(num)) {
    return '0 JOY';
  }

  return `${num?.toLocaleString('en-US')} JOY`;
};

const convertJoyValToUsDollarsMils = (data = {}, key) => {
  const val = data[key];
  const price = data?.price;

  if (isNaN(val) || isNaN(price)) {
    return '$0M';
  }

  return `$${((val * price) / 1000000).toFixed(1)}M`;
};

export const getTokenSupplyMetrics = (data = {}) => [
  {
    figure: 'Circulating supply',
    tokenRate: parseNumWithCommaAsSeparator(data, 'circulatingSupply'),
    rate: convertJoyValToUsDollarsMils(data, 'circulatingSupply'),
  },
  {
    figure: 'Total supply',
    tokenRate: parseNumWithCommaAsSeparator(data, 'totalSupply'),
    rate: convertJoyValToUsDollarsMils(data, 'totalSupply'),
  },
];

export const learWhyVideo = {
  source: 'https://gleev.xyz/video/329910',
  duration: '9:12min',
};
