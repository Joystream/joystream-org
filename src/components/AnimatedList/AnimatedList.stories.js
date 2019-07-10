import React from 'react';
import centered from '@storybook/addon-centered/react';

import { storiesOf } from '@storybook/react';

import AnimatedList from './index';

storiesOf('AnimatedList', module)
  .addDecorator(centered)
  .add('Deafult', () => (
    <AnimatedList>
      <div>test</div>
      <div>las</div>
    </AnimatedList>
  ));
