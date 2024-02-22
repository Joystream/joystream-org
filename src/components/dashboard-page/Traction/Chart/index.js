import React, { useState, useEffect } from 'react';
import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Text, Bar } from 'recharts';
import { bool, arrayOf, shape, string, number } from 'prop-types';

import ChartWrapper from '../../ChartWrapper';
import useDashboardMedia from '../../../../utils/useDashboardMedia';

const propTypes = {
  withBarGapExtended: bool,
  data: arrayOf(
    shape({
      month: string.isRequired,
      0: number.isRequired,
      1: number.isRequired,
      2: number.isRequired,
      3: number.isRequired,
    })
  ),
  chartHeight: number,
  withYAxisMarginReduced: bool,
};

const Chart = ({ withBarGapExtended, data, chartHeight, withYAxisMarginReduced }) => {
  const { currentBreakpoints } = useDashboardMedia();
  const [barGap, setBarGap] = useState(1);

  useEffect(() => {
    switch (currentBreakpoints) {
      case 'xs':
        return setBarGap(1.6);
      case 'sm':
        return setBarGap(3);
      case 'md':
        return setBarGap(1.8);
      case 'lg':
      case 'xl':
        return setBarGap(withBarGapExtended ? 2.8 : 1.6);
      default:
        return setBarGap(1);
    }
  }, [currentBreakpoints, withBarGapExtended]);

  const isYAxisMarginReduced =
    withYAxisMarginReduced &&
    (currentBreakpoints === 'xxs' || currentBreakpoints === 'xs' || currentBreakpoints === 'sm');

  return (
    <ChartWrapper chartHeight={chartHeight}>
      <ResponsiveContainer width="99%" height={chartHeight}>
        <BarChart className="dashboard-traction-chart" data={data} barGap={barGap} barCategoryGap={1}>
          <CartesianGrid vertical={false} stroke="#BBD9F621" />
          <XAxis
            dataKey="month"
            axisLine={{ stroke: '#BBD9F621' }}
            tick={tickProps => (
              <Text {...tickProps} className="custom-axis-tick">
                {tickProps.payload.value}
              </Text>
            )}
            tickLine={false}
            tickMargin={24}
            interval={0}
          />
          <YAxis
            axisLine={{ stroke: '#BBD9F621' }}
            tick={tickProps => (
              <Text {...tickProps} className="custom-axis-tick">
                {tickProps.payload.value}
              </Text>
            )}
            tickLine={false}
            tickMargin={isYAxisMarginReduced ? 10 : 28}
          />
          {Array.from({ length: 4 }, (_, i) => {
            return (
              <Bar key={i} dataKey={i} fill="#B4BBFF" radius={2} isAnimationActive={false} animationDuration={0} />
            );
          })}
        </BarChart>
      </ResponsiveContainer>
    </ChartWrapper>
  );
};

Chart.propTypes = propTypes;
Chart.defaultProps = {
  chartHeight: 250,
};

export default Chart;
