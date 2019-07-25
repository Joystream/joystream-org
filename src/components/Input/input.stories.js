import React from 'react';
import centered from '@storybook/addon-centered/react';
import { storiesOf } from '@storybook/react';

import Input from './index';

storiesOf('Components|Input', module)
  .addDecorator(centered)
  .add('deafult', () => <Input />)
  .add('with placeholder', () => <Input placeholder="Input email" />);
