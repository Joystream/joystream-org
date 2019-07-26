import React from 'react';

import { storiesOf } from '@storybook/react';

import PolicyWrapper from './index';

storiesOf('Layout|PolicyWrapper', module)
  .add('default', () => (
    <PolicyWrapper title="Privacy Policy">
      <p>Content</p>
    </PolicyWrapper>
  ))
  .add('aligned to left', () => (
    <PolicyWrapper title="Privacy Policy" left>
      <p>Content</p>
    </PolicyWrapper>
  ))
  .add('with subtitle', () => (
    <PolicyWrapper title="Privacy Policy" subtitle="Last updated on the 17th of April 2019">
      <p>Content</p>
    </PolicyWrapper>
  ));
