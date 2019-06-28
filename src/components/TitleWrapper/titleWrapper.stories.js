import React from 'react';

import { storiesOf } from '@storybook/react';

import TitleWrapper from './index';

storiesOf('TitleWrapper', module)
  .add('default', () => (
    <TitleWrapper title="Testnet Goals">
      <p>Content</p>
    </TitleWrapper>
  ));
