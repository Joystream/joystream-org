import React from 'react';
import centered from '@storybook/addon-centered/react';
import { storiesOf } from '@storybook/react';
import ImageSection from './';

import goalImage from '../../assets/svg/goal.svg';

storiesOf('Components|ImageSection', module)
  .addDecorator(centered)
  .add('deafult', () => (
    <ImageSection title="Goal" image={goalImage}>
      We call for an arrangement where media platforms are accountable to the people they impact, which are primarily
      their users, be it as consumers, creatives, third party developer or workers.
      <blockquote>
        It is the absence of such accountability which is the fundamental source of any particular problem at any
        particular time.
      </blockquote>
    </ImageSection>
  ));
