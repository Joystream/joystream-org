import React from 'react';
import { storiesOf } from '@storybook/react';
import ImageSection from './';

import data from '../../data/pages/manifesto';

storiesOf('Components|ImageSection', module)
  .add('deafult', () => (
    <ImageSection title={data.sections.problem.title} image={data.sections.problem.image}>
      {data.sections.problem.text}
    </ImageSection>
  ))
  .add('grouped', () => (
    <div>
      <ImageSection title={data.groupSections.wedge.title} image={data.groupSections.wedge.image} grouped>
        {data.groupSections.wedge.text}
      </ImageSection>
      <ImageSection title={data.groupSections.voice.title} image={data.groupSections.voice.image} grouped>
        {data.groupSections.voice.text}
      </ImageSection>
    </div>
  ));
