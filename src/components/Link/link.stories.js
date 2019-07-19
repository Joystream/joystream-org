import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';

import { ReactComponent as PersonIcon } from '../../assets/svg/person.svg';

import Link from './index';

storiesOf('Components|Link', module)
  .addDecorator(centered)
  .add('default', () => <Link to="/athens">Go to Athens</Link>)
  .add('highlighted', () => (
    <Link to="/athens" highlighted>
      Go to Athens
    </Link>
  ))
  .add('custom content', () => (
    <Link to="/athens">
      <PersonIcon /> Go to Athens
    </Link>
  ));
