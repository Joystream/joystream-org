const parseNumWithCommaAsSeparator = (data = {}, key) => {
  const num = data[key];
  return `${num?.toLocaleString('en-US')} JOY`;
};

const convertJoyValToUsDollarsMils = (data = {}, key) => {
  const val = data[key];
  const price = data?.price;

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
