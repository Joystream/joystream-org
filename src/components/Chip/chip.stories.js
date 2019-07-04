import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Chip from './index';
import { ReactComponent as Info } from '../../assets/svg/info.svg';

storiesOf('Chip', module)
  .addParameters({
    backgrounds: [{ name: 'black', value: '#000', default: true }],
  })
  .add('default', () => (
    <Chip clickHandler={action('clicked')} icon={Info}>
      What is this?
    </Chip>
  ))
  .add('only icon', () => (
    <Chip clickHandler={action('clicked')} icon={Info} />
  ));
