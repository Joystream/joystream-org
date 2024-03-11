/* eslint-disable max-len */

import React from 'react';
import { object } from 'prop-types';
import cn from 'classnames';

import WidgetHeading from '../../WidgetHeading';
import Feature from '../../../Feature';

import { ReactComponent as SuccessIcon } from '../../../../assets/svg/dashboard/success.svg';
import { ReactComponent as ErrorIcon } from '../../../../assets/svg/dashboard/error.svg';

import useScroll from '../../../../utils/useScroll';

import { columns, getData } from './data';

import './style.scss';

const propTypes = {
  dynamicData: object,
};

const Positioning = ({ dynamicData }) => {
  const tableRef = React.useRef(null);
  const [showScrollFade, setShowScrollFade] = React.useState(true);
  const scrollData = useScroll();
  const data = getData(dynamicData);

  const fdvsRowData = data.find(val => val.indicator === 'FDV');
  const fdvs = Object.values(fdvsRowData || {}).filter(val => typeof val === 'number');

  React.useEffect(() => {
    if (tableRef?.current) {
      setShowScrollFade(tableRef.current.scrollWidth !== tableRef.current.clientWidth);
    }
  }, [scrollData]);

  const getFdvBarHeight = fdv => {
    return fdv >= 2000 ? 100 : fdv >= 1000 ? 75 : fdv >= 400 ? 50 : 31;
  };

  const renderCell = cellData => {
    switch (typeof cellData) {
      case 'string':
        return cellData;
      case 'number':
        const height = `${getFdvBarHeight(cellData)}%`;
        return (
          <div className="dashboard-comparison-positioning__bar" style={{ height }}>
            {cellData > 1000 ? `$${Math.round(cellData / 1000)}B` : `$${cellData}M`}
          </div>
        );
      case 'boolean':
        return cellData ? <SuccessIcon /> : <ErrorIcon />;
      default:
        return null;
    }
  };

  return (
    <div className="dashboard-comparison-positioning">
      <Feature disabled>
        <WidgetHeading heading="Positioning" termDefinitionKey="positioning" />
      </Feature>
      <div
        className={cn('dashboard-comparison-positioning__scroll-fade', {
          'dashboard-comparison-positioning__scroll-fade--show': showScrollFade,
        })}
      ></div>
      <div
        className="dashboard-comparison-positioning__section-wrapper"
        onScroll={e => {
          const scrollableAreaWidth = e.target.scrollWidth - e.target.clientWidth;

          setShowScrollFade(e.target.scrollLeft !== scrollableAreaWidth);
        }}
        ref={tableRef}
      >
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
    </div>
  );
};

Positioning.propTypes = propTypes;

export default Positioning;
