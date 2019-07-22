import React from 'react';

import { storiesOf } from '@storybook/react';

import Sidebar from './index';
import { roles } from './data';

storiesOf('Section|Sidebar', module)
  .addParameters({ viewport: { defaultViewport: 'iphonex' } })
  .add('default', () => (
    <div style={{ height: '2000px' }}>
      <div style={{ height: '500px', backgroundColor: 'black' }}></div>
      <Sidebar data={roles} />
    </div>
  ));
