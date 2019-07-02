import React from 'react';
import { storiesOf } from '@storybook/react';

import TestnetItem from './index';
import AcropolisImage from '../../assets/svg/acropolis-main.svg';
import AthensImage from '../../assets/svg/athens-main.svg';

storiesOf('TestnetItem', module)
  .add('with counter and button', () => (
    <TestnetItem
      title="Acropolis Testnet"
      image={AcropolisImage}
      date={new Date()}
      button={{
        label: 'Explore Acropolis',
        to: '/acropolis',
      }}
    >
      Acropolis is our fourth testnet, and we are introducing new roles for you to try out.
    </TestnetItem>
  ))
  .add('with button', () => (
    <TestnetItem
      title="Acropolis Testnet"
      image={AcropolisImage}
      button={{
        label: 'Explore Acropolis',
        to: '/acropolis',
      }}
    >
      Acropolis is our fourth testnet, and we are introducing new roles for you to try out.
    </TestnetItem>
  ))
  .add('with counter', () => (
    <TestnetItem title="Acropolis Testnet" image={AcropolisImage} date={new Date()}>
      Acropolis is our fourth testnet, and we are introducing new roles for you to try out.
    </TestnetItem>
  ))
  .add('with plain content', () => (
    <TestnetItem title="Acropolis Testnet" image={AthensImage}>
      Acropolis is our fourth testnet, and we are introducing new roles for you to try out.
    </TestnetItem>
  ));
