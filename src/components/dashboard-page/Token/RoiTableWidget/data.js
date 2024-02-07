export const columns = [
  {
    header: 'Time',
    accessorKey: 'time',
  },
  {
    header: 'Return',
    accessorKey: 'return',
  },
];

export const data = [
  { time: '1 hour', return: '+4.19%' },
  { time: '24 hours', return: '+12.8%' },
  { time: '3 days', return: '+14.0%' },
  { time: '1 week', return: '+15.5%' },
  { time: '1 month', return: '+19.0%' },
  { time: '1 year', return: '+22.2%' },
  { time: '3 years', return: '+25.2%' },
  { time: '10 years', return: '+50.5%' },
];

export const parseData = (data = {}) => {
  const result = [];
  const keys = Object.keys(data);
  for (const key of keys) {
    const numericPart = key.match(/\d/g)?.join('');
    result.push({
      time: key.replace(numericPart, `${numericPart} `),
      return: `${data[key] > 0 ? '+' : ''}${data[key]?.toFixed(2)}%`,
    });
  }

  return result;
};
