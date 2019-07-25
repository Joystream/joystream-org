import React from 'react';
import cn from 'classnames';
import { node, string } from 'prop-types';

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
  children: node.isRequired,
  className: string,
};

const defaultProps = {
  columnsCount: 2,
  className: '',
};

const ColumnsLayout = ({ columnsCount, children, className, ...props }) => {
  return (
    <div
      className={cn('ColumnsLayout', className)}
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
