import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { State, Store } from '@sambego/storybook-state';

import TestnetModal from './index';
import Button from '../Button';
import AcropolisImg from '../../assets/svg/acropolis.svg';
import HelmetImg from '../../assets/svg/helmet.svg';
import OwlImg from '../../assets/svg/athens-owl.svg';

const acropolisStore = new Store({
  isOpen: false,
});
const athensStore = new Store({
  isOpen: false,
});
const spartaStore = new Store({
  isOpen: false,
});

storiesOf('TestnetModal', module)
  .add('Acropolis', () => (
    <div>
      <State store={acropolisStore}>
        <TestnetModal
          title="The Acropolis of Athens"
          image={AcropolisImg}
          closeModal={() => acropolisStore.set({ isOpen: false })}
          isOpen
        >
          <p>
            <strong>Known for its great architecture, Acropolis'</strong>{' '}
            perhaps most famous building is the Parthenon. It was built to
            celebrate their victory over Persian invaders, and is today seen as
            a symbol for democracy and western civilization.
          </p>
        </TestnetModal>
      </State>
      <Button onClick={() => acropolisStore.set({ isOpen: true })}>
        Show modal
      </Button>
    </div>
  ))
  .add('Sparta', () => (
    <div>
      <State store={athensStore}>
        <TestnetModal
          title="Helmet of Sparta"
          image={HelmetImg}
          closeModal={() => athensStore.set({ isOpen: false })}
          isOpen
        >
          <p>
            <strong>The Spartan army helmet</strong> represents what Sparta is
            most known for today, their military might. For it's time, it was
            also known for its advanced governance system. The helmet is usually
            depicted with the distinctive horsehair crest, although it was
            possibly only officers that were given them.
          </p>
        </TestnetModal>
      </State>
      <Button onClick={() => athensStore.set({ isOpen: true })}>
        Show modal
      </Button>
    </div>
  ))
  .add('Athens', () => (
    <div>
      <State store={spartaStore}>
        <TestnetModal
          title="Owl of Athena"
          image={OwlImg}
          closeModal={() => spartaStore.set({ isOpen: false })}
          isOpen
        >
          <p>
            <strong>In Greek mythology, a little owl (Athene noctua)</strong>{' '}
            traditionally represents or accompanies Athena, the virgin goddess
            of wisdom. Because of such association, the bird — often referred to
            as the "owl of Athena" — has been used as a symbol of knowledge,
            wisdom, perspicacity and erudition throughout the Western world.
          </p>
        </TestnetModal>
      </State>
      <Button onClick={() => spartaStore.set({ isOpen: true })}>
        Show modal
      </Button>
    </div>
  ));
