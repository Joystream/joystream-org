import React from 'react';
import centered from '@storybook/addon-centered/react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Chip from './index';
import { ReactComponent as Info } from '../../assets/svg/info.svg';

storiesOf('Chip', module)
  .addDecorator(centered)
  .addParameters({
    backgrounds: [{ name: 'black', value: '#000', default: true }],
  })
  .add('default', () => (
    <Chip onClick={action('clicked')} icon={Info}>
      What is this?
    </Chip>
  ))
  .add('only icon', () => <Chip onClick={action('clicked')} icon={Info} />);
