import React from 'react';

import { storiesOf } from '@storybook/react';

import ModalContent from './index';
import AcropolisImg from '../../assets/svg/acropolis.svg';

storiesOf('ModalContent', module).add('Deafult', () => (
  <ModalContent image={AcropolisImg}>Explore Acropolis</ModalContent>
));
