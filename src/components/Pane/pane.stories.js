import React from 'react';

import { storiesOf } from '@storybook/react';

import Pane from './index';
import { ReactComponent as SpecImg } from '../../assets/svg/specifications.svg';

storiesOf('Components|Pane', module)
  .add('active', () => (
    <Pane title="Full Specifications" image={SpecImg} href="#">
      Read the specs of the newly implemented features of Acropolis.
    </Pane>
  ))
  .add('disabled', () => (
    <Pane disabled title="Full Specifications" image={SpecImg}>
      Read the specs of the newly implemented features of Acropolis.
    </Pane>
  ));
