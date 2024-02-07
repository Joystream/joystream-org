import React from 'react';

import fallbackPrices from './prices.json';
import fallbackVolume from './volume.json';

export const generateCoinMarketCapStats = (prices = fallbackPrices, volume = fallbackVolume) => {
  const data = [];

  // num of price points is equal to num of volume points (equal timeframes)
  for (let i = 0; i < prices.length; i += 1) {
    data.push({
      date: new Date(prices[i][0]),
      price: prices[i][1],
      volume: volume[i][1],
      scaledVolume: volume[i][1] / 20,
    });
  }

  return data;
};

export const generateChartMockData = () => {
  const mockData = [];
  // Dates generated from 1 Jul to 11 Oct
  for (let i = 0; i < 103; i += 1) {
    mockData.push({
      // 100 subsequent days after 1 Jul
      date: new Date(new Date(2023, 6, 1).getTime() + i * 24 * 60 * 60 * 1000),
      // vals from 0 to 1
      price: Math.random(),
      // min volume $5M and max volume is $50M
      volume: Math.random() * (50 - 5) + 5,
    });
  }
  return mockData;
};

export const formatXAxisTick = (datestr, locale = 'en-US') => {
  const date = new Date(datestr);
  const day = date.getDate();

  if (day === 1) {
    return date.toLocaleString(locale, { month: 'short' });
  }

  if (day === 11 || day === 21) {
    return day.toString();
  }

  return '';
};

export const renderCustomDot = (areaChartDotProps, dataLength) => {
  if (areaChartDotProps.key !== `dot-${dataLength - 1}`) {
    return null;
  }

  return (
    <svg
      key={areaChartDotProps.key}
      xmlns="http://www.w3.org/2000/svg"
      width="70"
      height="36"
      viewBox="0 0 70 36"
      fill="none"
      x={areaChartDotProps.cx - 10}
      y={areaChartDotProps.cy - 12}
    >
      <path d="M6 0A6 6 0 1 1 0 6 6 6 0 0 1 6 0Z" fill="#6C6CFF" transform="translate(4, 6)" />
      <g>
        <rect x="16" y="0" width="58" height="24" fill="#4038FF"></rect>
        <text x="44" y="16" textAnchor="middle" className="custom-dot-text">
          {Number(areaChartDotProps.value[1]).toFixed(3)}
        </text>
      </g>
    </svg>
  );
};

export const formatDateToShowInTooltip = (datestr, locale = 'en-US') => {
  const date = new Date(datestr);
  const day = date.toLocaleString(locale, { day: '2-digit' });
  const month = date.toLocaleString(locale, { month: 'short' });
  const year = date.toLocaleString(locale, { year: 'numeric' });

  return `${day} ${month} ${year}`;
};

export const formatTimeToShowInTooltip = (datestr, locale = 'en-US') => {
  return datestr.toLocaleTimeString(locale);
};

export const renderCustomActiveDot = (areaChartActiveDotProps, chartWidth) => {
  return (
    <g>
      <line
        x1={0}
        x2={chartWidth}
        y1={areaChartActiveDotProps.cy}
        y2={areaChartActiveDotProps.cy}
        stroke="#B5C1C9"
        strokeWidth="1"
        strokeDasharray="2 2"
        style={{ zIndex: -1 }}
      />

      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        x={areaChartActiveDotProps.cx - 6}
        y={areaChartActiveDotProps.cy - 6}
      >
        <circle cx="6" cy="6" r="5.5" fill="#7174FF" stroke="white" />
      </svg>
      <rect x={chartWidth + 6} y={areaChartActiveDotProps.cy - 12} width="58" height="24" fill="#272D33"></rect>
      <text
        x={chartWidth + 6 + 12}
        y={areaChartActiveDotProps.cy + 4}
        fill="#FFFFFF"
        textAnchor="center"
        className="custom-cursor-text"
      >
        {Number(areaChartActiveDotProps.payload.price).toFixed(3)}
      </text>
    </g>
  );
};

export const parsePriceWeeklyChange = price => {
  const roundedPiceWeeklyChange = Math.round(price);
  const roundedPiceWeeklyChangeWithSign =
    roundedPiceWeeklyChange > 0 ? `+${roundedPiceWeeklyChange}%` : `${roundedPiceWeeklyChange}%`;

  return `${roundedPiceWeeklyChangeWithSign} Last week`;
};
