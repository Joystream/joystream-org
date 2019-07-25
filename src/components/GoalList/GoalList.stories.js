import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';

import GoalList from './';

const goalsData = [
  {
    title: 'Rebuild and release the storage node',
    text: 'Example text',
  },
  {
    title: 'Ensure high uptime of storage providers',
    text: 'Example text',
    state: 'inprogress',
  },
  {
    title: 'Build the storage node with "tranches"',
    text: 'Example text',
    state: 'postponed',
  },
];

storiesOf('GoalList', module)
  .addDecorator(centered)
  .add('default', () => <GoalList data={goalsData} />);
