import { withFallbackNumVal } from '../../../utils/withFallbackVal';

export const parseGithubStats = (data = {}) => [
  {
    metrics: 'Stars',
    value: withFallbackNumVal(data.numberOfStars),
    termDefinitionKey: 'stars',
  },
  {
    metrics: 'Commits',
    value: `${Math.round(withFallbackNumVal(data.numberOfCommits) / 1000)}K`,
    termDefinitionKey: 'commits',
  },
  {
    metrics: 'Commits this week',
    value: withFallbackNumVal(data.totalNumberOfCommitsThisWeek),
    termDefinitionKey: 'commitsThisWeek',
  },
  {
    metrics: 'Open PRs',
    value: withFallbackNumVal(data.numberOfOpenPRs),
    termDefinitionKey: 'openPrs',
  },
  {
    metrics: 'Open issues',
    value: withFallbackNumVal(data.numberOfOpenIssues),
    termDefinitionKey: 'openIssues',
  },
  {
    metrics: 'Repositories',
    value: withFallbackNumVal(data.numberOfRepositories),
    termDefinitionKey: 'repositories',
  },
];

export const parseFollowersCount = (data = {}) => data.numberOfFollowers || 0;

export const desiredContributionsMonthsOrder = {
  '12': 0,
  '01': 1,
  '02': 2,
  '03': 3,
  '04': 4,
  '05': 5,
  '06': 6,
  '07': 7,
  '08': 8,
  '09': 9,
  '10': 10,
  '11': 11,
};

export const parseContributions = (commits = {}) => {
  const data = [];
  const months = Object.keys(commits).sort(
    (a, b) => desiredContributionsMonthsOrder[a] - desiredContributionsMonthsOrder[b]
  );

  for (const month of months) {
    const commitsForMonth = commits[month];
    const days = Object.keys(commitsForMonth).sort((a, b) => a - b);

    for (const day of days) {
      const commitsForDay = commitsForMonth[day];
      data.push({
        date: new Date(month === '12' ? 2023 : 2024, Number(month) - 1, Number(day)),
        contributions: commitsForDay,
      });
    }
  }

  return data;
};

export const parseContributors = (contributors = []) =>
  contributors.map(c => ({
    avatar: c.avatar,
    name: c.name || c.id,
    username: !!c.name ? c.id : null,
  }));
