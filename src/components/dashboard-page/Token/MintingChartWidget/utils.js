export const parseInflationPercentage = val => {
  return `${Math.round(val)}%`;
};

const round2Dec = num => Number(num?.toFixed(2));

export const generateChartData = (data = {}) => {
  return [
    {
      pie: 'creatorPayouts',
      value: round2Dec(data.creatorPayoutsMintingPercentage),
      label: 'Creator payouts',
      fill: '#6C6CFF',
    },
    {
      pie: 'validatorRewards',
      value: round2Dec(data.validatorMintingPercentage),
      label: 'Validator rewards',
      fill: '#7D7EF8',
    },
    {
      pie: 'workersRewards',
      value: round2Dec(data.workerMintingPercentage),
      label: 'Workers rewards',
      fill: '#9B9CF9',
    },
    {
      pie: 'spendingProposals',
      value: round2Dec(data.spendingProposalsMintingPercentage),
      label: 'Spending proposals',
      fill: '#ACACFA',
    },
  ];
};
