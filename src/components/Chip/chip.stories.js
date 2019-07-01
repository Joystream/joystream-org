import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Chip from './index';
import { ReactComponent as Info } from '../../assets/svg/info.svg';

storiesOf('Chip', module).add('default', () => (
  <Chip clickHandler={action('clicked')} label="What is this?" icon={Info} />
));
