import React from 'react';
import { storiesOf } from '@storybook/react';

import ColumnsLayout from './index';

const randomBgColor = () =>
  `hsl(
    ${360 * Math.random()},
    ${25 + 70 * Math.random()}%,
    ${85 + 10 * Math.random()}%
  )`;

const childStyle = () => ({
  minWidth: '100px',
  height: '100px',
  backgroundColor: randomBgColor(),
  border: 'solid 1px #333',
});

const childrenCount = new Array(10).fill(0);
const children = childrenCount.map(() => <div style={{ ...childStyle() }} />);

storiesOf('Layout|ColumnsLayout', module)
  .add('2 columns', () => (
    <ColumnsLayout columnsCount={2}>
      {children.map(child => child)}
    </ColumnsLayout>
  ))
  .add('3 columns', () => (
    <ColumnsLayout columnsCount={3}>
      {children.map(child => child)}
    </ColumnsLayout>
  ))
  .add('4 columns', () => (
    <ColumnsLayout columnsCount={4}>
      {children.map(child => child)}
    </ColumnsLayout>
  ));
