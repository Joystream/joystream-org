import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from './index';

const DarkWrapper = ({ children }) => (
  <div
    style={ {
      backgroundColor: 'black',
      width: '100vw',
      height: '100px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    } }
  >
    { children }
  </div>
);

storiesOf('Button', module)
  .add('Button', () => (
    <Button onClick={ action('clicked') }>Explore Acropolis</Button>
  ))
  .add('Reversed', () => (
    <Button onClick={ action('clicked') } reversed>
      Ask a question
    </Button>
  ))
  .add('Secondary', () => (
    <Button onClick={ action('clicked') } secondary>
      Earn Monero
    </Button>
  ))
  .add('Secondary reversed', () => (
    <DarkWrapper>
      <Button onClick={ action('clicked') } secondaryReversed>
        Launch UI
      </Button>
    </DarkWrapper>
  ))
  .add('Secondary large', () => (
    <Button onClick={ action('clicked') } secondaryLarge>
      Accept
    </Button>
  ))
  .add('Default', () => (
    <DarkWrapper>
      <Button onClick={ action('clicked') } defaultBtn>
        Join the newsletter
      </Button>
    </DarkWrapper>
  ));
