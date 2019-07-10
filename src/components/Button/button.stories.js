import React from 'react';
import centered from '@storybook/addon-centered/react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from './index';

storiesOf('Button', module)
  .addDecorator(centered)
  .add('Deafult', () => <Button onClick={action('clicked')}>Explore Acropolis</Button>)
  .add('Link', () => <Button href="#">Explore Acropolis</Button>)
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
  .add(
    'Secondary reversed',
    () => (
      <Button onClick={action('clicked')} secondary reversed>
        Launch UI
      </Button>
    ),
    {
      backgrounds: [
        {
          name: 'blue',
          value: '#000000',
          default: true,
        },
      ],
    }
  )
  .add('Large', () => (
    <Button onClick={action('clicked')} large>
      Accept
    </Button>
  ))
  .add(
    'Light',
    () => (
      <Button onClick={action('clicked')} light>
        Join the newsletter
      </Button>
    ),
    {
      backgrounds: [
        {
          name: 'blue',
          value: '#000000',
          default: true,
        },
      ],
    }
  )
  .add(
    'Light small',
    () => (
      <Button onClick={action('clicked')} light small>
        Join the newsletter
      </Button>
    ),
    {
      backgrounds: [
        {
          name: 'blue',
          value: '#000000',
          default: true,
        },
      ],
    }
  );
