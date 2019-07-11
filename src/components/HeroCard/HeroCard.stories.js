import React from 'react';
import centered from '@storybook/addon-centered/react';

import { storiesOf } from '@storybook/react';

import HeroCard from './';

const today = new Date();
const unfinishedDate = new Date();
unfinishedDate.setHours(today.getHours() + 2);

storiesOf('HeroCard', module)
  .addDecorator(centered)
  .add('active', () => <HeroCard date={unfinishedDate} />)
  .add('error', () => (
    <HeroCard
      error
      /* eslint-disable */
      content={`
  ### FAILURE IDENTIFIED
  On Friday the 29th of March, the Sparta network went down due to a [known bug in substrate](https://github.com/paritytech/substrate/pull/2130) that we had not pulled down before release.

  More details can be found in this [blog post](https://blog.joystream.org/sparta-sacked/).
  `}
      /* eslint-enable */
    />
  ))
  .add('finished', () => <HeroCard date="2019/06/27 17:50" />);
