import React from 'react';
import centered from '@storybook/addon-centered/react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Chip from './index';
import { ReactComponent as CalendarIcon } from '../../assets/svg/calendar.svg';

storiesOf('Chip', module)
  .addDecorator(centered)
  .addParameters({
    backgrounds: [{ name: 'black', value: '#000', default: true }],
  })
  .add('default', () => <Chip onClick={action('clicked')}>What is this?</Chip>)
  .add('only icon', () => <Chip onClick={action('clicked')} />)
  .add('custom icon', () => (
    <Chip onClick={action('clicked')} icon={CalendarIcon}>
      What is this?
    </Chip>
  ));
