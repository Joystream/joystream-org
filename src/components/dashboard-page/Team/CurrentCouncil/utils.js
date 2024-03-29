import { isNaN } from '../../../../utils/withFallbackVal';

const msInDay = 1000 * 60 * 60 * 24;

export const getDaysLeftToNextElection = nextElectionDate => {
  return Math.round((new Date(nextElectionDate).getTime() - new Date().getTime()) / msInDay);
};

export const parseWeeklySalaryInJOY = weeklySalaryInJOY => {
  if (isNaN(weeklySalaryInJOY)) {
    return '0 JOY';
  }

  const roundedWeeklySalaryInJoy = Math.round(weeklySalaryInJOY);
  // French locale uses space as a separator
  const weeklySalaryInJoyWithSeparators = roundedWeeklySalaryInJoy.toLocaleString('fr-FR');
  return `${weeklySalaryInJoyWithSeparators} JOY`;
};
