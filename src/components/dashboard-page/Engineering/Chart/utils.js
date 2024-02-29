import React from 'react';

export const formatXAxisTick = (datestr, locale = 'en-US') => {
  const date = new Date(datestr);
  const day = date.getDate().toString();
  const daysToShow = ['3', '5', '8', '12', '15', '19', '22', '25', '27', '30'];

  if (day === '1') {
    return date.toLocaleString(locale, { month: 'short' });
  }

  if (daysToShow.includes(day)) {
    return day;
  }

  return '';
};

export const renderCustomActiveDot = (areaChartActiveDotProps, chartWidth, chartOffsetLeft) => {
  const contributions = areaChartActiveDotProps.payload.contributions;

  return (
    <g>
      <line
        x1={0}
        x2={chartWidth + chartOffsetLeft}
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
        <circle cx="6" cy="6" r="5.5" fill="#B4BBFF" stroke="white" />
      </svg>
      <rect x={0} y={areaChartActiveDotProps.cy - 12} width="32" height="24" fill="#272D33"></rect>
      <text
        x={contributions < 10 ? 12 : 10}
        y={areaChartActiveDotProps.cy + 4}
        fill="#FFFFFF"
        textAnchor="center"
        className="custom-cursor-text"
      >
        {contributions}
      </text>
    </g>
  );
};
