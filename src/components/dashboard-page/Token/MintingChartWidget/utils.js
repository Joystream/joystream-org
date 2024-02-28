import { isNaN } from '../../../../utils/withFallbackVal';

export const parseInflationPercentage = val => {
  if (isNaN(val)) {
    return '0%';
  }

  return `${Math.round(val)}%`;
};

const round2Dec = num => Number(num?.toFixed(2));

export const generateChartData = (data = {}) => {
  return [
    {
      pie: 'creatorPayouts',
      value: round2Dec(data.creatorPayoutsMintingPercentage || 35),
      label: 'Creator payouts',
      fill: '#6C6CFF',
    },
    {
      pie: 'validatorRewards',
      value: round2Dec(data.validatorMintingPercentage || 25),
      label: 'Validator rewards',
      fill: '#7D7EF8',
    },
    {
      pie: 'workersRewards',
      value: round2Dec(data.workerMintingPercentage || 21),
      label: 'Workers rewards',
      fill: '#9B9CF9',
    },
    {
      pie: 'spendingProposals',
      value: round2Dec(data.spendingProposalsMintingPercentage || 19),
      label: 'Spending proposals',
      fill: '#ACACFA',
    },
  ];
};
