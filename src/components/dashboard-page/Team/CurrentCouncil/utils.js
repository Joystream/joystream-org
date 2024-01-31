const msInDay = 1000 * 60 * 60 * 24;

export const getDaysLeftToNextElection = nextElectionDate => {
  return Math.round((new Date(nextElectionDate).getTime() - new Date().getTime()) / msInDay);
};
