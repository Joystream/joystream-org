import React from 'react';

import { storiesOf } from '@storybook/react';

import HeroCard from './';

const today = new Date();
const unfinishedDate = new Date();
unfinishedDate.setMinutes(today.getMinutes() + 5);

storiesOf('HeroCard', module).add('In progress', () => <HeroCard />);
