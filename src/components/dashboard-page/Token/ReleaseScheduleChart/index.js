import React, { useEffect, useState } from 'react';
import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Text,
  Area,
  CartesianGrid,
  ReferenceLine,
  Tooltip,
} from 'recharts';
import cn from 'classnames';
import { useMediaQuery } from 'react-responsive';
import { arrayOf, objectOf, string } from 'prop-types';

import {
  // _generateChartData,
  generateChartData,
  formatXAxisTick,
  formatYAxisTick,
  renderCustomLabel,
  areasLabels,
  areasPalette,
  getMonthsSinceLaunch,
  getHighlightedDate,
} from './utils';

import './style.scss';

const ReleaseScheduleChart = () => {
  // const [chartData] = useState(() => _generateChartData());
  const [chartData] = useState(() => generateChartData());
  const areas = Object.keys(chartData[0]).filter(key => key !== 'month');

  const [activeAreaName, setActiveAreaName] = useState('');

  const [isXxsScreen, setIsXxsScreen] = useState(false);
  const isXxs = useMediaQuery({ maxWidth: 424 });
  useEffect(() => {
    setIsXxsScreen(isXxs);
  }, [isXxs]);

  const xAxisDataKey = 'month';
  const xAxisValues = chartData.map(val => val.month);

  const monthsSinceLaunch = getMonthsSinceLaunch();
  const maxXAxisVal = 24;

  return (
    <div style={{ marginTop: '24px' }}>
      <ResponsiveContainer minHeight={180}>
        <AreaChart data={chartData} onMouseLeave={() => setActiveAreaName('')}>
          <CartesianGrid vertical={false} stroke="#BBD9F621" />
          <XAxis
            dataKey={xAxisDataKey}
            tick={tickProps => {
              const isLast = xAxisValues.indexOf(tickProps.payload.value) === xAxisValues.length - 1;
              const formattedTick = formatXAxisTick(tickProps.payload.value, isLast);
              return (
                <Text {...tickProps} className="custom-axis-tick">
                  {formattedTick}
                </Text>
              );
            }}
            interval={0}
            tickLine={false}
            tickMargin={16}
          />
          <YAxis
            tick={tickProps => {
              const formattedTick = formatYAxisTick(tickProps.payload.value);
              return (
                <Text {...tickProps} className="custom-axis-tick">
                  {formattedTick}
                </Text>
              );
            }}
            ticks={[0, 25, 50, 75, 100]}
            domain={[0, 100]}
            tickLine={false}
            tickMargin={28}
            axisLine={{ stroke: '#BBD9F621' }}
          />
          {areas.map(area => {
            return (
              <Area
                key={area}
                name={area}
                className={cn({ dim: !!activeAreaName && area !== activeAreaName })}
                stackId="tokenReleaseScheduleStack"
                dataKey={area}
                fill={areasPalette[area]}
                stroke={areasPalette[area]}
                strokeOpacity={!!activeAreaName && area !== activeAreaName ? 0.4 : 1}
                fillOpacity={1}
                activeDot={null}
                onMouseEnter={area => {
                  setActiveAreaName(area.name);
                }}
                isAnimationActive={false}
                animationDuration={0}
              />
            );
          })}
          {monthsSinceLaunch <= maxXAxisVal && (
            <ReferenceLine x={monthsSinceLaunch} stroke="#f4f6f8" strokeDasharray="4px 4px" label={renderCustomLabel} />
          )}
          <Tooltip
            offset={20}
            content={tooltipContentProps => <CustomTooltip {...tooltipContentProps} activeAreaName={activeAreaName} />}
            cursor={<CustomCursor />}
            wrapperStyle={{ top: '-75px' }}
            position={isXxsScreen ? { x: 0 } : undefined}
          />
        </AreaChart>
      </ResponsiveContainer>
      <CustomLegend
        areas={areas}
        areasLabels={areasLabels}
        areasPalette={areasPalette}
        activeAreaName={activeAreaName}
        setActiveAreaName={setActiveAreaName}
      />
    </div>
  );
};

function CustomTooltip(tooltipContentProps) {
  const { active, payload } = tooltipContentProps;

  if (active && payload && payload.length) {
    const innerPayload = payload[0].payload;
    const innerPayloadAreasKeys = Object.keys(innerPayload).filter(key => key !== 'month');

    const activeAreaName = tooltipContentProps.activeAreaName;

    return (
      <div className="token-release-schedule-chart-tooltip">
        <div className="token-release-schedule-chart-tooltip__header">
          <p className="token-release-schedule-chart-tooltip__text accent">{getHighlightedDate(innerPayload.month)}</p>
          <p className="token-release-schedule-chart-tooltip__text accent">{`${innerPayload.month}th month`}</p>
        </div>
        <ul className="token-release-schedule-chart__areas-list">
          {innerPayloadAreasKeys.map(areaKey => {
            return (
              <li
                key={areaKey}
                // eslint-disable-next-line max-len
                className="token-release-schedule-chart-tooltip__areas-list-item token-release-schedule-chart__areas-list-item"
              >
                <div
                  className={cn('token-release-schedule-chart-tooltip__area area', {
                    dim: !!activeAreaName && areaKey !== activeAreaName,
                  })}
                >
                  <div
                    style={{ backgroundColor: areasPalette[areaKey] }}
                    className="token-release-schedule-chart-legend__area-bg"
                  ></div>
                  <p className="token-release-schedule-chart-tooltip__text">
                    {`${areasLabels[areaKey]}: `}
                    {/* eslint-disable-next-line max-len */}
                    <span className="token-release-schedule-chart-tooltip__text accent">{`${innerPayload[areaKey]}%`}</span>
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  return null;
}

function CustomCursor(tooltipCursorProps) {
  const [points1] = tooltipCursorProps.points;

  const innerPayload = tooltipCursorProps.payload[0].payload;

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
        x={points1.x - 75}
        y={tooltipCursorProps.height + 8}
        width="150"
        height="32"
        fill="#272D33"
        rx={8}
        ry={8}
      ></rect>
      <text
        x={points1.x - 75 + 8}
        y={tooltipCursorProps.height + 16 + 4 + 8}
        fill="#F4F6F8"
        textAnchor="center"
        className="custom-cursor-text"
      >
        {getHighlightedDate(innerPayload.month)}
      </text>
      <text
        x={points1.x + 75 - 75}
        y={tooltipCursorProps.height + 16 + 4 + 8}
        fill="#F4F6F8"
        textAnchor="left"
        className="custom-cursor-text"
      >
        {`${innerPayload.month}th month`}
      </text>
    </g>
  );
}

const customLegendPropTypes = {
  areas: arrayOf(string).isRequired,
  areasLabels: objectOf(string).isRequired,
  areasPalette: objectOf(string).isRequired,
};

function CustomLegend({ areas, areasLabels, areasPalette, activeAreaName, setActiveAreaName }) {
  return (
    <div className="token-release-schedule-chart-legend">
      <div className="token-release-schedule-chart-legend__notice">
        <p className="token-release-schedule-chart-legend__notice-text">Months after launch date: 09 Dec 2022</p>
      </div>
      <ul className="token-release-schedule-chart-legend__areas-list token-release-schedule-chart__areas-list">
        {areas.map(area => {
          // areaKey should be unique
          return (
            <li
              key={area}
              // eslint-disable-next-line max-len
              className="token-release-schedule-chart-legend__areas-list-item token-release-schedule-chart__areas-list-item"
            >
              <div
                className={cn('token-release-schedule-chart-legend__area area', {
                  dim: !!activeAreaName && area !== activeAreaName,
                })}
                onMouseEnter={() => setActiveAreaName(area)}
                onMouseLeave={() => setActiveAreaName('')}
              >
                <div
                  style={{ backgroundColor: areasPalette[area] }}
                  className="token-release-schedule-chart-legend__area-bg"
                ></div>
                <p className="token-release-schedule-chart-legend__area-label">{areasLabels[area]}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

CustomLegend.propTypes = customLegendPropTypes;

export default ReleaseScheduleChart;
