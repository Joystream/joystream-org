import React from 'react';

import { storiesOf } from '@storybook/react';

import HeroCard from './';

const today = new Date();
const unfinishedDate = new Date();
unfinishedDate.setMinutes(today.getMinutes() + 1);

storiesOf('HeroCard', module)
  .add('HeroCard in progress', () => <HeroCard date={unfinishedDate} />)
  .add('HeroCard error', () => <HeroCard date={null} />)
  .add('HeroCard done', () => <HeroCard date="2019/06/27 17:50" />);
