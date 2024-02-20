export const columns = [
  {
    header: 'Type',
    accessorKey: 'type',
  },
  {
    header: 'Supply',
    accessorKey: 'supply',
  },
  {
    header: '% of circulating supply',
    accessorKey: 'rateOfCirculatingSupply',
  },
];

const formatSupply = num => Math.round(num)?.toLocaleString('fr-FR');
const formatSupplyRate = num => `${Math.round(num)}%`;

export const supplyDistributionTypeLabels = {
  top100Addresses: 'Supply In Top 100 Addresses',
  top1PercentAddresses: 'Supply In Top 1% Addresses',
  addressesOver10MUSD: 'Supply In Addresses > $10M',
  addressesOver100KUSD: 'Supply In Addresses > $100K',
  addressesOver10KUSD: 'Supply In Addresses > $10K',
  addressesOver1KUSD: 'Supply In Addresses > $1K',
  addressesOver100USD: 'Supply In Addresses > $100',
  addressesOver1MJOY: 'Supply In Addresses > 1M $JOY',
};

export const parseData = (data = {}) => {
  const result = [];
  const keys = Object.keys(data);
  for (const key of keys) {
    result.push({
      type: supplyDistributionTypeLabels[key],
      supply: formatSupply(data[key]?.supply),
      rateOfCirculatingSupply: formatSupplyRate(data[key]?.percentOfCirculatingSupply),
    });
  }

  return result;
};
