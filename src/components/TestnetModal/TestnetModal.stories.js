import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import TestnetModal from './index';
import AcropolisImg from '../../assets/svg/acropolis.svg';

storiesOf('TestnetModal', module)
  .addParameters({
    backgrounds: [{ name: 'black', value: '#000', default: true }],
  })
  .add('Acropolis', () => (
    <div>
      <TestnetModal
        title="The Acropolis of Athens"
        image={AcropolisImg}
        closeModal={action('close modal')}
        isOpen={true}
      >
        <p>
          <strong>Known for its great architecture, Acropolis'</strong> perhaps
          most famous building is the Parthenon. It was built to celebrate their
          victory over Persian invaders, and is today seen as a symbol for
          democracy and western civilization.
        </p>
      </TestnetModal>
    </div>
  ));
