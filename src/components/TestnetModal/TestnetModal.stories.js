import React from 'react';

import { storiesOf } from '@storybook/react';

import ModalWrapper from '../ModalWrapper/';
import TestnetModal from './index';
import AcropolisImg from '../../assets/svg/acropolis.svg';
import HelmetImg from '../../assets/svg/helmet.svg';

storiesOf('TestnetModal', module)
  .add('Acropolis', () => (
    <ModalWrapper isOpen={true}>
      <TestnetModal title="The Acropolis of Athens" image={AcropolisImg}>
        <p className="TestnetModal__paragraph">
          <strong>Known for its great architecture, Acropolis'</strong> perhaps
          most famous building is the Parthenon. It was built to celebrate their
          victory over Persian invaders, and is today seen as a symbol for
          democracy and western civilization.
        </p>
      </TestnetModal>
    </ModalWrapper>
  ))
  .add('Sparta', () => (
    <ModalWrapper isOpen={true}>
      <TestnetModal title="Helmet of Sparta" image={HelmetImg}>
        <p className="TestnetModal__paragraph">
          <strong>The Spartan army helmet</strong> represents what Sparta is
          most known for today, their military might. For it's time, it was also
          known for its advanced governance system. The helmet is usually
          depicted with the distinctive horsehair crest, although it was
          possibly only officers that were given them.
        </p>
      </TestnetModal>
    </ModalWrapper>
  ));
