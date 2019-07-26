import React from 'react';
import cn from 'classnames';
import { node, string, bool } from 'prop-types';

import './style.scss';

const propTypes = {
  columnsCount: (props, propName, componentName) => {
    if (props[propName] < 1 || props[propName] > 4) {
      return new Error(
        `Prop '${propName}' specified in '${componentName}' should be a number between 1 and 4.`
      );
    }
    if (typeof props[propName] !== 'number') {
      return new Error(
        `Prop '${propName}' specified in '${componentName}' should be a number.`
      );
    }
  },
  largeSpacing: bool,
  children: node.isRequired,
  className: string,
};

const defaultProps = {
  largeSpacing: false,
  columnsCount: 2,
  className: '',
};

const ColumnsLayout = ({ columnsCount, largeSpacing, className, children, ...props }) => {
  return (
    <div
      className={cn('ColumnsLayout', className, { 'ColumnsLayout--large': largeSpacing })}
      data-columns={columnsCount}
      {...props}
    >
      {children}
    </div>
  );
};

ColumnsLayout.propTypes = propTypes;
ColumnsLayout.defaultProps = defaultProps;

export default ColumnsLayout;
