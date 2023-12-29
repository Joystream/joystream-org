import React, { useState, useRef } from 'react';
import {
  ResponsiveContainer,
  ComposedChart,
  XAxis,
  Text,
  YAxis,
  CartesianGrid,
  Area,
  Bar,
  ReferenceLine,
  Tooltip,
} from 'recharts';

import {
  generateChartMockData,
  formatXAxisTick,
  renderCustomDot,
  formatDateToShowInTooltip,
  renderCustomActiveDot,
} from './utils';

import './style.scss';

const DashboardTokenPriceChart = () => {
  const [data] = useState(() => generateChartMockData());
  const maxBarSize = 20;

  const cartesianGridRef = useRef(null);
  const chartWidth = cartesianGridRef.current?.props.offset.width || 0;

  return (
    <ResponsiveContainer width="100%" minHeight={265}>
      <ComposedChart data={data}>
        <CartesianGrid ref={cartesianGridRef} vertical={false} stroke="#bbd9f621" />

        <defs>
          <linearGradient
            id="colorPrice"
            x1="387.5"
            y1="0.0507812"
            x2="387.5"
            y2="254.051"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6C6CFF" />
            <stop offset="1" stopColor="#6C6CFF" stopOpacity="0" />
          </linearGradient>
          <line x1="0" y1="-20" x2="100" y2="-20" stroke="#ccc" strokeWidth="1" />
          <line x1="0" y1="-40" x2="100" y2="-40" stroke="#ccc" strokeWidth="1" />
        </defs>

        {/* 
          interval set to 0 to show all ticks
          formatYAxisTick can accept locale as a second arg
        */}
        <XAxis
          dataKey="date"
          axisLine={false}
          tickLine={false}
          interval={0}
          tick={tickProps => {
            const formattedTick = formatXAxisTick(tickProps.payload.value);
            return (
              <Text {...tickProps} className="custom-axis-tick">
                {formattedTick}
              </Text>
            );
          }}
        />
        <YAxis
          padding={{ bottom: maxBarSize }}
          stroke="#bbd9f621"
          strokeDasharray="4 0.5 4 16"
          yAxisId="priceAxis"
          dataKey="price"
          orientation="right"
          tickLine={false}
          interval={0}
          tickCount={12}
          tick={tickProps => {
            return (
              <Text {...tickProps} className="custom-axis-tick">
                {tickProps.payload.value}
              </Text>
            );
          }}
        />
        <Tooltip
          cursor={<CustomCursor />}
          content={tooltipContentProps => <CustomTooltip {...tooltipContentProps} />}
        />
        <Area
          yAxisId="priceAxis"
          dataKey="price"
          fillOpacity={1}
          fill="url(#colorPrice)"
          stroke="#6c6cff"
          strokeWidth={3}
          dot={areaChartProps => {
            return renderCustomDot(areaChartProps, data.length);
          }}
          activeDot={areaChartActiveDotProps => {
            return renderCustomActiveDot(areaChartActiveDotProps, chartWidth);
          }}
          isAnimationActive={false}
        />
        <YAxis
          yAxisId="volumeAxis"
          dataKey="volume"
          orientation="right"
          style={{ opacity: 0 }}
          interval={0}
          domain={[0, 'dataMax + 600']}
        />
        <Bar yAxisId="volumeAxis" dataKey="volume" fill="#B5C1C9" maxBarSize={maxBarSize} />

        <ReferenceLine yAxisId="priceAxis" y={0} stroke="#959494" strokeDasharray="2 16" />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

function CustomTooltip(tooltipContentProps) {
  const { active, payload } = tooltipContentProps;

  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <div className="custom-tooltip__header">
          <p className="custom-tooltip__accent-text">{formatDateToShowInTooltip(payload[0].payload.date)}</p>
          <p className="custom-tooltip__accent-text">00:00:00 AM</p>
        </div>
        <ul className="custom-tooltip__payload-list">
          <li className="custom-tooltip__payload-list-item">
            <p className="custom-tooltip__text">Price:</p>
            <p className="custom-tooltip__accent-text">&#36;{Number(payload[0].payload.price).toFixed(5)}</p>
          </li>
          <li className="custom-tooltip__payload-list-item">
            <p className="custom-tooltip__text">Vol 24h:</p>
            <p className="custom-tooltip__accent-text">&#36;{`${Number(payload[0].payload.volume).toFixed(2)}M`}</p>
          </li>
        </ul>
      </div>
    );
  }

  return null;
}

function CustomCursor(tooltipCursorProps) {
  const [points1] = tooltipCursorProps.points;

  return (
    <g>
      <line
        x1={points1.x}
        x2={points1.x}
        y1={0}
        y2={tooltipCursorProps.height}
        stroke="#B5C1C9"
        strokeWidth="1"
        strokeDasharray="2 2"
        style={{ zIndex: -1 }}
      />
      <rect
        x={points1.x - 90}
        y={tooltipCursorProps.height + 8}
        width="180"
        height="32"
        fill="#272D33"
        rx={8}
        ry={8}
      ></rect>
      <text
        x={points1.x - 90 + 8}
        y={tooltipCursorProps.height + 16 + 4 + 8}
        fill="#F4F6F8"
        textAnchor="center"
        className="custom-cursor-text"
      >
        {formatDateToShowInTooltip(tooltipCursorProps.payload[0].payload.date)}
      </text>
      <text
        x={points1.x + 90 - 82}
        y={tooltipCursorProps.height + 16 + 4 + 8}
        fill="#F4F6F8"
        textAnchor="left"
        className="custom-cursor-text"
      >
        00:00:00 AM
      </text>
    </g>
  );
}

export default DashboardTokenPriceChart;
