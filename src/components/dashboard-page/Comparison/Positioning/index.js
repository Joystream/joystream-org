/* eslint-disable max-len */

import React from 'react';

import WidgetHeading from '../../WidgetHeading';

import { ReactComponent as SuccessIcon } from '../../../../assets/svg/dashboard/success.svg';
import { ReactComponent as ErrorIcon } from '../../../../assets/svg/dashboard/error.svg';

import { columns, data } from './data';

import './style.scss';

const Positioning = () => {
  const fdvsRowData = data.find(val => val.indicator === 'FDV');
  const fdvs = Object.values(fdvsRowData || {}).filter(val => typeof val === 'number');
  const maxFdv = Math.max(...fdvs);

  const getFdvBarHeight = fdv => Math.round((fdv / maxFdv) * 100);

  const renderCell = cellData => {
    switch (typeof cellData) {
      case 'string':
        return cellData;
      case 'number':
        const height = `${getFdvBarHeight(cellData)}%`;
        return (
          <div
            className="dashboard-comparison-positioning__bar"
            style={{
              height,
              ...(cellData < 100
                ? {
                    paddingBlock: 0,
                  }
                : {}),
            }}
          >{`$${cellData}M`}</div>
        );
      case 'boolean':
        return cellData ? <SuccessIcon /> : <ErrorIcon />;
      default:
        return null;
    }
  };

  return (
    <div className="dashboard-comparison-positioning">
      <WidgetHeading heading="Positioning" />
      <div className="dashboard-comparison-positioning__table-wrapper">
        <table className="dashboard-comparison-positioning__table">
          <thead className="__head">
            <tr className="dashboard-comparison-positioning__table-row">
              {columns.map((column, index) => (
                <th
                  key={index}
                  className="dashboard-comparison-positioning__table-cell dashboard-comparison-positioning__table-head-cell"
                >
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="dashboard-comparison-positioning__table-body">
            {data.map((rowData, index) => (
              <tr key={index} className="dashboard-comparison-positioning__table-row">
                {columns.map((column, index) => {
                  return (
                    <td
                      key={index}
                      className="dashboard-comparison-positioning__table-cell dashboard-comparison-positioning__table-body-cell"
                    >
                      {renderCell(rowData[column.accessorKey])}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Positioning;
