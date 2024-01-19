import getRandomInt from '../../../utils/getRandomInt';

export const githubStats = [
  {
    metrics: 'Stars',
    value: '325',
  },
  {
    metrics: 'Commits',
    value: '10K',
  },
  {
    metrics: 'Commits this week',
    value: '250',
  },
  {
    metrics: 'Open PRs',
    value: '325',
  },
  {
    metrics: 'Open issues',
    value: '255',
  },
  {
    metrics: 'Repositories',
    value: '12',
  },
];

export const generateChartMockData = () => {
  const mockData = [];
  // Dates generated from 1 Oct to 5 Nov
  for (let i = 0; i < 37; i += 1) {
    mockData.push({
      // 35 subsequent days after 1 Oct
      date: new Date(new Date(2023, 9, 1).getTime() + i * 24 * 60 * 60 * 1000),
      // vals from 0 to 10
      contributions: getRandomInt(0, 10),
    });
  }
  return mockData;
};
