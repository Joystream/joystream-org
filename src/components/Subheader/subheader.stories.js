import React from 'react';
import { storiesOf } from '@storybook/react';

import { ReactComponent as TickImage } from '../../assets/svg/tick.svg';

import Subheader from './';

storiesOf('Components|Subheader', module).add('default', () => (
  <Subheader
    title="Active roles on the current testnet"
    content="learn more, join a role and subscribe for more"
    icon={TickImage}
  />
));
