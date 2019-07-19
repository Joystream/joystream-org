import React from 'react';
import centered from '@storybook/addon-centered/react';

import { storiesOf } from '@storybook/react';

import Counter from './';

const today = new Date();
const unfinishedDate = new Date();
unfinishedDate.setHours(today.getHours() + 2);

storiesOf('Components|Counter', module)
  .addDecorator(centered)
  .add('finished', () => <Counter date="2019/06/25 16:26" />)
  .add('unfinished', () => <Counter date={unfinishedDate} />)
  .add('light', () => <Counter light date={unfinishedDate} />, {
    backgrounds: [
      {
        name: 'blue',
        value: '#001aff',
        default: true,
      },
    ],
  })
  .add('large', () => <Counter large date={unfinishedDate} />)
  .add('with custom title', () => <Counter date={unfinishedDate} title="Custom title" />);
