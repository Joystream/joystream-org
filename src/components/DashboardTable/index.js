import React from 'react';
import cn from 'classnames';
import { arrayOf, shape, string, object } from 'prop-types';

import { shouldEndAlign } from './data';

import './style.scss';

const defaultColumns = [
  {
    header: 'purpose',
    accessorKey: 'purpose',
  },
  {
    header: '% of total supply',
    accessorKey: 'rateOfTotalSupply',
  },
  {
    header: 'token amount',
    accessorKey: 'tokenAmount',
  },
  {
    header: 'tge unlock %',
    accessorKey: 'rateOfTgeUnlock',
  },
];

const defaultData = [
  {
    purpose: 'Community FM',
    rateOfTotalSupply: 212189609,
    tokenAmount: 21218960900,
    rateOfTgeUnlock: 8,
  },
  {
    purpose: 'JSGenesis FM',
    rateOfTotalSupply: 31435,
    tokenAmount: 3143500000,
    rateOfTgeUnlock: 8,
  },
  {
    purpose: 'Investors',
    rateOfTotalSupply: 323285352,
    tokenAmount: 32328535200,
    rateOfTgeUnlock: 79,
  },
  {
    purpose: 'Member airdrop',
    rateOfTotalSupply: 21735,
    tokenAmount: 2173500000,
    rateOfTgeUnlock: 8,
  },
  {
    purpose: 'Strategic partners',
    rateOfTotalSupply: 30013001,
    tokenAmount: 3001300100,
    rateOfTgeUnlock: 100,
  },
  {
    purpose: 'Reserved 1',
    rateOfTotalSupply: 117988418,
    tokenAmount: 11798841800,
    rateOfTgeUnlock: 0,
  },
  {
    purpose: 'Reserved 2',
    rateOfTotalSupply: 12,
    tokenAmount: 12000,
    rateOfTgeUnlock: 8,
  },
];

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

const defaultProps = {
  columns: defaultColumns,
  data: defaultData,
};

const DashboardTable = ({ columns, data, tableCn }) => {
  return (
    <table style={{ marginTop: '24px' }} className={cn('dashboard-table', { [tableCn]: tableCn })}>
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
        {data.map(rowData => (
          <tr className="dashboard-table__row">
            {columns.map((column, index) => (
              <td
                style={{ color: '#fff' }}
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
DashboardTable.defaultProps = defaultProps;

export default DashboardTable;
