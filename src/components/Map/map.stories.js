import React from 'react';
import { storiesOf } from '@storybook/react';

import Map from './index';

const styles = {
  width: '100vw',
  height: '100vh',
};
const WrapperDecorator = storyFn => <div style={styles}>{storyFn()}</div>;

storiesOf('Components|Map', module)
  .addDecorator(WrapperDecorator)
  .add('athens', () => <Map location="athens" />)
  .add('acropolis', () => <Map location="acropolis" />)
  .add('sparta', () => <Map location="sparta" />);
