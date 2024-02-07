import React, { useRef } from 'react';
import { ResponsiveContainer, AreaChart, CartesianGrid, XAxis, Text, YAxis, Area, Tooltip } from 'recharts';
import { arrayOf, shape, instanceOf, number } from 'prop-types';

import { formatDateToShowInTooltip } from '../../Token/PriceChart/utils';
import { formatXAxisTick, renderCustomActiveDot } from './utils';

const propTypes = {
  chartData: arrayOf(
    shape({
      date: instanceOf(Date).isRequired,
      contributions: number.isRequired,
    })
  ).isRequired,
};

const Chart = ({ chartData }) => {
  const cartesianGridRef = useRef(null);
  const chartWidth = cartesianGridRef.current?.props.offset.width || 0;
  const chartOffsetLeft = cartesianGridRef.current?.props.offset.left || 0;

  const maxCommitsCount = Math.max(...chartData.map(val => val.contributions));

  return (
    <ResponsiveContainer width="99%" height={208}>
      <AreaChart data={chartData}>
        <CartesianGrid ref={cartesianGridRef} vertical={false} stroke="#BBD9F621" />
        <XAxis
          dataKey="date"
          interval={0}
          tick={tickProps => {
            return (
              <Text {...tickProps} className="custom-axis-tick">
                {formatXAxisTick(tickProps.payload.value)}
              </Text>
            );
          }}
          tickLine={false}
          tickMargin={16}
          axisLine={false}
        />
        <YAxis
          dataKey="contributions"
          domain={[0, maxCommitsCount]}
          // Given that maxCommitsCount >= 20
          ticks={[0, 6, 12, 18, maxCommitsCount]}
          tick={tickProps => (
            <Text {...tickProps} className="custom-axis-tick">
              {tickProps.payload.value}
            </Text>
          )}
          tickLine={false}
          tickMargin={40}
          axisLine={{ stroke: '#BBD9F621' }}
        />
        <Area
          dataKey="contributions"
          fill="none"
          strokeWidth={3}
          stroke="#B4BBFF"
          activeDot={areaChartActiveDotProps => {
            return renderCustomActiveDot(areaChartActiveDotProps, chartWidth, chartOffsetLeft);
          }}
          isAnimationActive={false}
          animationDuration={0}
        />
        <Tooltip
          cursor={<CustomCursor />}
          content={tooltipContentProps => <CustomTooltip {...tooltipContentProps} />}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

function CustomCursor(tooltipCursorProps) {
  const [points1] = tooltipCursorProps.points;
  const axisIndent = 8;
  const lineHeight = tooltipCursorProps.height + tooltipCursorProps.top + axisIndent;

  return (
    <g>
      <line
        x1={points1.x}
        x2={points1.x}
        y1={0}
        y2={lineHeight}
        stroke="#B5C1C9"
        strokeWidth="1"
        strokeDasharray="2 2"
        style={{ zIndex: -1 }}
      />
      <rect x={points1.x - 45} y={lineHeight} width="90" height="32" fill="#272D33" rx={8} ry={8}></rect>
      <text
        x={points1.x - 45 + 8}
        y={tooltipCursorProps.height + 32}
        fill="#F4F6F8"
        textAnchor="center"
        className="custom-cursor-text"
      >
        {formatDateToShowInTooltip(tooltipCursorProps.payload[0].payload.date)}
      </text>
    </g>
  );
}

function CustomTooltip(tooltipContentProps) {
  const { active, payload } = tooltipContentProps;

  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip width-reduced">
        <div className="custom-tooltip__header">
          <p className="custom-tooltip__accent-text">{formatDateToShowInTooltip(payload[0].payload.date)}</p>
        </div>
        <div className="custom-tooltip__text-wrapper">
          <p className="custom-tooltip__text">Contributions:</p>
          <p className="custom-tooltip__accent-text">{payload[0].payload.contributions}</p>
        </div>
      </div>
    );
  }
  return null;
}

Chart.propTypes = propTypes;

export default Chart;
