import React, { useState } from 'react';
import cn from 'classnames';
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { arrayOf, shape, string, number, func } from 'prop-types';

import ChartWrapper from '../../ChartWrapper';

import './style.scss';

const dashboardTokenMintingChartPropTypes = {
  data: arrayOf(
    shape({
      pie: string,
      value: number,
      label: string,
      fill: string,
    })
  ),
};

const DashboardTokenMintingChart = ({ data }) => {
  const [activeCellName, setActiveCellName] = useState('');

  const onCellMouseEnter = event => {
    const cellName = event.currentTarget.getAttribute('name');
    setActiveCellName(cellName);
  };

  const onCellMouseLeave = () => {
    setActiveCellName('');
  };

  const shouldBeDim = entry => !!activeCellName && entry.pie !== activeCellName;

  return (
    <>
      <ChartWrapper chartHeight={280}>
        <ResponsiveContainer width="99%" height={280}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={80}
              dataKey="value"
              label={pieLabelProps => renderCustomLabel(pieLabelProps, setActiveCellName, shouldBeDim)}
              labelLine={false}
              isAnimationActive={false}
              animationDuration={0}
            >
              {data.map((entry, index) => {
                return (
                  <Cell
                    key={index}
                    className={cn({ dim: shouldBeDim(entry) })}
                    name={entry.pie}
                    fill={entry.fill}
                    stroke={entry.fill}
                    strokeOpacity={shouldBeDim(entry) ? 0.4 : 1}
                    onMouseEnter={onCellMouseEnter}
                    onMouseLeave={onCellMouseLeave}
                  />
                );
              })}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </ChartWrapper>
      <CustomLegend data={data} setActiveCellName={setActiveCellName} shouldBeDim={shouldBeDim} />
    </>
  );
};

DashboardTokenMintingChart.propTypes = dashboardTokenMintingChartPropTypes;

function renderCustomLabel(pieLabelProps, setActiveCellName, shouldBeDim) {
  const getX = pieLabelProps => {
    switch (pieLabelProps.name) {
      case 'workersRewards':
        return pieLabelProps.x - 40;
      default:
        return pieLabelProps.x;
    }
  };

  const getY = pieLabelProps => {
    switch (pieLabelProps.name) {
      case 'validatorRewards':
        return pieLabelProps.y - 10;
      case 'spendingProposals':
        return pieLabelProps.y + 12;
      default:
        return pieLabelProps.y;
    }
  };

  return (
    <g onMouseOver={() => setActiveCellName(pieLabelProps.name)} onMouseLeave={() => setActiveCellName('')}>
      <text
        x={getX(pieLabelProps)}
        y={getY(pieLabelProps)}
        className={cn('dashboard-token-mintning-chart-custom-label', {
          dim: shouldBeDim(pieLabelProps),
        })}
      >
        {`${(pieLabelProps.percent * 100)?.toFixed(2)}%`}
      </text>
    </g>
  );
}

const customLegendPropTypes = {
  data: arrayOf(
    shape({
      pie: string,
      value: number,
      label: string,
      fill: string,
    })
  ),
  shouldBeDim: func.isRequired,
  setActiveCellName: func.isRequired,
};

function CustomLegend({ data, setActiveCellName, shouldBeDim }) {
  const onCellBoxMouseEnter = cellName => {
    setActiveCellName(cellName);
  };

  const onCellBoxMouseLeave = () => {
    setActiveCellName('');
  };

  return (
    <div className="dashboard-token-mintning-chart-legend">
      <ul className="dashboard-token-mintning-chart-legend__cells-list">
        {data.map(cell => {
          return (
            <li key={cell.pie} className="dashboard-token-mintning-chart-legend__cells-list-item">
              <div
                className={cn('dashboard-token-mintning-chart-legend__cell', { dim: shouldBeDim(cell) })}
                onMouseEnter={() => onCellBoxMouseEnter(cell.pie)}
                onMouseLeave={onCellBoxMouseLeave}
              >
                <div
                  style={{ backgroundColor: cell.fill }}
                  className="dashboard-token-mintning-chart-legend__cell-bg"
                ></div>
                <p className="dashboard-token-mintning-chart-legend__cell-label">{cell.label}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

CustomLegend.propTypes = customLegendPropTypes;

export default DashboardTokenMintingChart;
