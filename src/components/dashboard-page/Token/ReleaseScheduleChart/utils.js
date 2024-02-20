import React from 'react';

export const areasLabels = {
  communityFoundingMembers: 'Community Founding Members',
  reserved1: 'Reserved 1',
  reserved2: 'Reserved 2',
  strategicPartners: 'Strategic Partners',
  membershipAirdrop: 'Membership Airdrop',
  investors: 'Investors',
  jsgenesisFoundingMembers: 'Jsgenesis FoundingMembers',
};

export const areasPalette = {
  communityFoundingMembers: '#ACACFA',
  reserved1: '#9B9CF9',
  reserved2: '#9B9CF9',
  strategicPartners: '#6C6CFF',
  membershipAirdrop: '#8D8DF9',
  investors: '#7D7EF8',
  jsgenesisFoundingMembers: '#6C6CFF',
};

export const formatXAxisTick = (num, isLast) => {
  return num % 5 === 0 || isLast ? num : '';
};

export const formatYAxisTick = num => `${num}%`;

export function renderCustomLabel(referenceLineLabelProps) {
  const labelWidth = 43;
  const labelHeight = 20;
  return (
    <g>
      <rect
        x={referenceLineLabelProps.viewBox.x - labelWidth / 2}
        y={referenceLineLabelProps.viewBox.y - labelHeight}
        width={labelWidth}
        height={labelHeight}
        rx={4}
        ry={4}
        fill="#bcd5fa14"
      ></rect>
      <text
        x={referenceLineLabelProps.viewBox.x - labelWidth / 2 + 8}
        y={referenceLineLabelProps.viewBox.y - labelHeight + 14.5}
        className="reference-line-custom-label"
      >
        Now
      </text>
    </g>
  );
}

const releaseSchedule = {
  communityFoundingMembers: {
    0: 1.7,
    1: 2.51,
    2: 3.32,
    3: 4.14,
    4: 4.95,
    5: 5.76,
    6: 6.58,
    7: 7.39,
    8: 8.2,
    9: 9.02,
    10: 9.83,
    11: 10.64,
    12: 11.46,
    13: 12.27,
    14: 13.09,
    15: 13.9,
    16: 14.71,
    17: 15.53,
    18: 16.34,
    19: 17.15,
    20: 17.97,
    21: 18.78,
    22: 19.59,
    23: 20.41,
    24: 21.22,
  },
  reserved1: {
    0: 0,
    1: 0.98,
    2: 1.97,
    3: 2.95,
    4: 3.93,
    5: 4.92,
    6: 5.9,
    7: 6.88,
    8: 7.87,
    9: 8.85,
    10: 9.83,
    11: 10.82,
    12: 11.8,
    13: 11.8,
    14: 11.8,
    15: 11.8,
    16: 11.8,
    17: 11.8,
    18: 11.8,
    19: 11.8,
    20: 11.8,
    21: 11.8,
    22: 11.8,
    23: 11.8,
    24: 11.8,
  },
  reserved2: {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
    10: 0,
    11: 0,
    12: 0,
    13: 0,
    14: 0,
    15: 0,
    16: 0,
    17: 0,
    18: 0,
    19: 0,
    20: 0,
    21: 0,
    22: 0,
    23: 0,
    24: 0,
  },
  strategicPartners: {
    0: 3,
    1: 3,
    2: 3,
    3: 3,
    4: 3,
    5: 3,
    6: 3,
    7: 3,
    8: 3,
    9: 3,
    10: 3,
    11: 3,
    12: 3,
    13: 3,
    14: 3,
    15: 3,
    16: 3,
    17: 3,
    18: 3,
    19: 3,
    20: 3,
    21: 3,
    22: 3,
    23: 3,
    24: 3,
  },
  membershipAirdrop: {
    0: 0.02,
    1: 0.03,
    2: 0.03,
    3: 0.04,
    4: 0.05,
    5: 0.06,
    6: 0.07,
    7: 0.08,
    8: 0.08,
    9: 0.09,
    10: 0.1,
    11: 0.11,
    12: 0.12,
    13: 0.13,
    14: 0.13,
    15: 0.14,
    16: 0.15,
    17: 0.16,
    18: 0.17,
    19: 0.18,
    20: 0.18,
    21: 0.19,
    22: 0.2,
    23: 0.21,
    24: 0.22,
  },
  investors: {
    0: 25.54,
    1: 26.11,
    2: 26.67,
    3: 27.24,
    4: 27.8,
    5: 28.37,
    6: 28.93,
    7: 29.5,
    8: 30.07,
    9: 30.63,
    10: 31.2,
    11: 31.76,
    12: 32.33,
    13: 32.33,
    14: 32.33,
    15: 32.33,
    16: 32.33,
    17: 32.33,
    18: 32.33,
    19: 32.33,
    20: 32.33,
    21: 32.33,
    22: 32.33,
    23: 32.33,
    24: 32.33,
  },
  jsgenesisFoundingMembers: {
    0: 2.51,
    1: 3.72,
    2: 4.92,
    3: 6.13,
    4: 7.33,
    5: 8.54,
    6: 9.74,
    7: 10.95,
    8: 12.15,
    9: 13.36,
    10: 14.56,
    11: 15.77,
    12: 16.97,
    13: 18.18,
    14: 19.38,
    15: 20.59,
    16: 21.79,
    17: 23.0,
    18: 24.2,
    19: 25.41,
    20: 26.61,
    21: 27.82,
    22: 29.02,
    23: 30.23,
    24: 31.44,
  },
};

export const generateChartData = () => {
  const data = [];

  for (let i = 0; i <= 24; i += 1) {
    data.push({
      month: i,
      communityFoundingMembers: releaseSchedule.communityFoundingMembers[i],
      jsgenesisFoundingMembers: releaseSchedule.jsgenesisFoundingMembers[i],
      investors: releaseSchedule.investors[i],
      membershipAirdrop: releaseSchedule.membershipAirdrop[i],
      strategicPartners: releaseSchedule.strategicPartners[i],
      reserved1: releaseSchedule.reserved1[i],
      reserved2: releaseSchedule.reserved2[i],
    });
  }

  return data;
};

export const getMonthsSinceLaunch = () => {
  const launchDate = new Date(2022, 11, 9);
  const currentDate = new Date();

  const diffInYears = currentDate.getFullYear() - launchDate.getFullYear();
  const diffInMonths = currentDate.getMonth() - launchDate.getMonth();
  return diffInYears * 12 + diffInMonths;
};

export const getHighlightedDate = monthIndex => {
  const launchDate = {
    year: 2022,
    month: 11,
    day: 9,
  };

  const monthsSum = launchDate.month + monthIndex;
  const yearsInMonthsSum = monthsSum >= 12 ? Math.floor(monthsSum / 12) : 0;

  const currentMonth = monthsSum - yearsInMonthsSum * 12;

  const date = new Date(launchDate.year + yearsInMonthsSum, currentMonth, launchDate.day);

  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
};
