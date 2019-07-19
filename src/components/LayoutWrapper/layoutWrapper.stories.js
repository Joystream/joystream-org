import React from 'react';
import { storiesOf } from '@storybook/react';

import LayoutWrapper from './index';

storiesOf('Layout|LayoutWrapper', module)
  .add('default', () => (
    <LayoutWrapper>
      <div>content</div>
    </LayoutWrapper>
  ))
  .add('dark', () => (
    <LayoutWrapper dark>
      <div>content</div>
    </LayoutWrapper>
  ));
