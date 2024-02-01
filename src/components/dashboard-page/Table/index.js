import React from 'react';
import cn from 'classnames';
import { arrayOf, shape, string, object } from 'prop-types';

import { shouldEndAlign } from './data';

import './style.scss';

const propTypes = {
  columns: arrayOf(
    shape({
      header: string.isRequired,
      accessorKey: string.isRequired,
    })
  ),
  data: arrayOf(object),
  tableCn: string,
};

const DashboardTable = ({ columns, data, tableCn }) => {
  return (
    <table className={cn('dashboard-table', { [tableCn]: tableCn })}>
      <thead className="dashboard-table__head">
        <tr className="dashboard-table__row">
          {columns.map((column, index) => (
            <th
              key={index}
              className={cn('dashboard-table__cell dashboard-table__head-cell', {
                'end-align': shouldEndAlign(column.accessorKey),
              })}
            >
              {column.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="dashboard-table__body">
        {data.map((rowData, index) => (
          <tr key={index} className="dashboard-table__row">
            {columns.map((column, index) => (
              <td
                key={index}
                className={cn('dashboard-table__cell dashboard-table__body-cell', {
                  'end-align': shouldEndAlign(column.accessorKey),
                })}
              >
                {rowData[column.accessorKey]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

DashboardTable.propTypes = propTypes;

export default DashboardTable;
