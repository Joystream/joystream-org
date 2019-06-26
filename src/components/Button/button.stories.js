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
    {children}
  </div>
);

storiesOf('Button', module)
  .add('Deafult', () => (
    <Button onClick={action('clicked')}>Explore Acropolis</Button>
  ))
  .add('Link', () => (
    <Button href="#">Explore Acropolis</Button>
  ))
  .add('Reversed', () => (
    <Button onClick={action('clicked')} reversed>
      Ask a question
    </Button>
  ))
  .add('Secondary', () => (
    <Button onClick={action('clicked')} secondary>
      Earn Monero
    </Button>
  ))
  .add('Secondary reversed', () => (
    <DarkWrapper>
      <Button onClick={action('clicked')} secondary reversed>
        Launch UI
      </Button>
    </DarkWrapper>
  ))
  .add('Large', () => (
    <Button onClick={action('clicked')} large>
      Accept
    </Button>
  ))
  .add('Light', () => (
    <DarkWrapper>
      <Button onClick={action('clicked')} light>
        Join the newsletter
      </Button>
    </DarkWrapper>
  ))
  .add('Light small', () => (
    <DarkWrapper>
      <Button onClick={action('clicked')} light small>
        Join the newsletter
      </Button>
    </DarkWrapper>
  ));
