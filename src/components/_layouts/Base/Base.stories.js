import React from 'react';
import { storiesOf } from '@storybook/react';

import BaseLayout from './';

storiesOf('Layout|BaseLayout', module).add('default', () => (
  <BaseLayout>
    <div style={{ padding: '20px' }}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium
      aliquam at blanditiis, dicta dolorem doloremque enim facere iste nobis
      possimus rem repudiandae saepe similique voluptatum. Accusantium aliquid
      asperiores perferendis. Lorem ipsum dolor sit amet, consectetur
      adipisicing elit. Aliquid amet autem beatae deserunt ea esse expedita id
      minus modi porro quae quam, quos recusandae sapiente suscipit vero
      voluptates voluptatibus! Ad! Lorem ipsum dolor sit amet, consectetur
      adipisicing elit. Aperiam, autem consectetur cupiditate dolorum et facere
      in ipsam neque odio praesentium quo sit tenetur voluptate. A explicabo
      magni reiciendis rem tempora!
    </div>
  </BaseLayout>
));
