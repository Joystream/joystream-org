export const parseGithubStats = (data = {}) => [
  {
    metrics: 'Stars',
    value: data.numberOfStars,
    termDefinitionKey: 'stars',
  },
  {
    metrics: 'Commits',
    value: `${Math.round(data.numberOfCommits / 1000)}K`,
    termDefinitionKey: 'commits',
  },
  {
    metrics: 'Commits this week',
    value: data.totalNumberOfCommitsThisWeek,
    termDefinitionKey: 'commitsThisWeek',
  },
  {
    metrics: 'Open PRs',
    value: data.numberOfOpenPRs,
    termDefinitionKey: 'openPrs',
  },
  {
    metrics: 'Open issues',
    value: data.numberOfOpenIssues,
    termDefinitionKey: 'openIssues',
  },
  {
    metrics: 'Repositories',
    value: data.numberOfRepositories,
    termDefinitionKey: 'repositories',
  },
];

export const parseFollowersCount = (data = {}) => data.numberOfFollowers || '';

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
    const days = Object.keys(commitsForMonth);

    for (const day of days) {
      const commitsForDay = commitsForMonth[day];
      data.push({
        date: new Date(2023, Number(month) - 1, Number(day)),
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
