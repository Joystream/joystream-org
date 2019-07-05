import React from 'react';
import { storiesOf } from '@storybook/react';

import ModalWrapper from './';

storiesOf('ModalWrapper ', module).add('default', () => (
  <ModalWrapper isOpen>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, culpa
    dolore magnam placeat quae quas quisquam ullam. Ad aut cumque ea
    exercitationem magnam modi nam quam repellendus rerum unde. Saepe! Lorem
    ipsum dolor sit amet, consectetur adipisicing elit. Architecto, culpa dolore
    magnam placeat quae quas quisquam ullam. Ad aut cumque ea exercitationem
    magnam modi nam quam repellendus rerum unde. Saepe!
  </ModalWrapper>
));
