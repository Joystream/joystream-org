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

export const generateChartMockData = () => {
  const mockData = [];

  for (let i = 0; i < 30; i += 1) {
    // increasing percentage for each area
    mockData.push({
      month: i,
      communityFoundingMembers: i,
      reserved1: i + 1,
      reserved2: i + 1.75,
      strategicPartners: i + 3.5,
      membershipAirdrop: i + 5,
      investors: i + 5.75,
      jsgenesisFoundingMembers: i + 15,
    });
  }

  return mockData;
};

export const formatXAxisTick = (num, isLast) => {
  return num % 5 === 0 || isLast ? num : '';
};

export const formatYAxisTick = num => {
  switch (num) {
    case 60:
      return 25 + '%';
    case 120:
      return 50 + '%';
    case 180:
      return 75 + '%';
    case 240:
      return 100 + '%';
    default:
      return 0 + '%';
  }
};

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
