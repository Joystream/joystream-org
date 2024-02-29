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
