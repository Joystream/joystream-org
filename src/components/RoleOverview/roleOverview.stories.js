import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';

import RoleOverview from './';
import { sharedData } from '../../data/pages';

import { ReactComponent as ValidatorImage } from '../../assets/svg/active-validators.svg';

const props = {
  image: ValidatorImage,
  title: 'Validator',
  overview: `The Joystream platform state lives on a blockchain consensus system.
    This consensus system is a variant of classical BFT consensus combined
    with Proof-of-Stake to determine voting power. A validator is an actor
    which checks the validity of newly constructed blocks, proposes new blocks
    and participates in the consensus process for committing new block to the chain.
    This role has a purpose very similar to the miners in the Bitcoin blockchain.
    Importantly, anyone can fully check the validity of the blockchain,
    not just validators, and this is called validation.`,
  responsibilites: [
    'Run and maintain screening nodes that are always available and performant',
    'Help enforce the consensus rules of the network',
  ],
  requirements: [
    'Experienced with how to setup and maintain high performance IT infrastructure',
    `Access to highly performant and reliable IT infrastructure, with high storage,
    (up & down) bandwidth and processing capacity`,
    'Able to securely store keys hot keys',
    'Hold sufficient amount of the native platform token to put at stake',
  ],
  tutorialLink: 'https://github.com/Joystream/helpdesk/tree/master/roles/validators',
  questionLink: `mailto:${sharedData.defaultEmail}`,
  formAction: '',
};

storiesOf('Components|RoleOverview', module)
  .addDecorator(centered)
  .add('default (type: upcoming)', () => <RoleOverview {...props} />)
  .add('type: active', () => <RoleOverview {...props} type="active" />);
