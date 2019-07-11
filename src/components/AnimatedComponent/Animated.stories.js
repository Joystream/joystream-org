import React from 'react';
import centered from '@storybook/addon-centered/react';

import { storiesOf } from '@storybook/react';

import Animated from './index';

const randomBgColor = () =>
  `hsl(
    ${360 * Math.random()},
    ${25 + 70 * Math.random()}%,
    ${85 + 10 * Math.random()}%
  )`;

const childStyle = () => ({
  width: '400px',
  height: '200px',
  marginBottom: '20px',
  backgroundColor: randomBgColor(),
  border: 'solid 1px #333',
});

const wrapperStyle = {
  height: '2000px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
};

storiesOf('Animated', module)
  .addDecorator(centered)
  .add('Fade In', () => (
    <div>
      <p style={{ marginTop: 20 }}>Scroll down to see animation</p>

      <div style={wrapperStyle}>
        <Animated fadeIn>
          <div style={{ ...childStyle() }} />
        </Animated>

        <Animated fadeIn>
          <div style={{ ...childStyle() }} />
        </Animated>

        <Animated fadeIn>
          <div style={{ ...childStyle() }} />
        </Animated>

        <Animated fadeIn>
          <div style={{ ...childStyle() }} />
        </Animated>
      </div>
    </div>
  ))
  .add('Bounce', () => (
    <div>
      <p style={{ marginTop: 20 }}>Scroll down to see animation</p>

      <div style={wrapperStyle}>
        <Animated bounce>
          <div style={{ ...childStyle() }} />
        </Animated>
      </div>
    </div>
  ));
