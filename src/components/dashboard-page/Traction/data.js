export const chartMockData = [
  {
    month: 'Jan',
    0: 100,
    1: 250,
    2: 500,
    3: 300,
  },
  {
    month: 'Feb',
    0: 800,
    1: 400,
    2: 600,
    3: 300,
  },
  {
    month: 'Mar',
    0: 750,
    1: 320,
    2: 550,
    3: 800,
  },
  {
    month: 'Apr',
    0: 700,
    1: 300,
    2: 980,
    3: 1000,
  },
  {
    month: 'May',
    0: 720,
    1: 450,
    2: 600,
    3: 320,
  },
  {
    month: 'Jun',
    0: 600,
    1: 800,
    2: 980,
    3: 550,
  },
];

export const withFallbackValues = chartData => (!!chartData.length ? chartData : chartMockData);

const numAddSeparators = num => num?.toLocaleString('fr-FR');
export const roundWeeklyRate = num => Math.round(num);
const roundWeeklyRateWithSign = num => `${num > 0 ? '+' : ''}${Math.round(num)}% Last week`;

export const parseStats = (data = {}) => [
  {
    indicator: 'Average block time',
    value: `${data.averageBlockTime} sec`,
    termDefinitionKey: 'averageBlockTime',
  },
  {
    indicator: 'Transactions',
    value: numAddSeparators(data.totalNumberOfTransactions),
    growthRate: roundWeeklyRateWithSign(data.totalNumberOfTransactionsWeeklyChange),
    termDefinitionKey: 'transactions',
  },
  {
    indicator: 'Holders',
    value: numAddSeparators(data.totalNumberOfAccountHolders),
    growthRate: roundWeeklyRateWithSign(data.totalNumberOfAccountHoldersWeeklyChange),
    termDefinitionKey: 'holders',
  },
  {
    indicator: 'Daily active accounts',
    value: numAddSeparators(data.numberOfDailyActiveAccounts),
    growthRate: roundWeeklyRateWithSign(data.numberOfDailyActiveAccountsWeeklyChange),
    termDefinitionKey: 'dailyActiveAccounts',
  },
];

export const parseNumToThsdWith1Dec = num => {
  const quotient = num / 1000;
  if (quotient < 1000) {
    return `${quotient.toFixed(1)}K`;
  }

  return `${(quotient / 1000).toFixed(1)}M`;
};

export const parseChartData = (data = [], tokenPriceInUsd = 1) => {
  const monthSpan = 4;
  const result = [];

  for (let i = 0; i < data?.length; i += monthSpan) {
    const monthData = data.slice(i, i + 4);

    const parsedMonthData = {
      month: new Date(data[i].from).toLocaleDateString('en-US', { month: 'short' }),
    };

    for (let j = 0; j < monthData.length; j += 1) {
      const amount = monthData[j].amount;
      parsedMonthData[j] = !!amount ? amount * tokenPriceInUsd : monthData[j].numberOfItems;
    }

    result.push(parsedMonthData);
  }
  return result;
};
