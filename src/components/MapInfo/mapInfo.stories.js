import React from 'react';
import { storiesOf } from '@storybook/react';

import Link from '../Link';

import { ReactComponent as PersonIcon } from '../../assets/svg/person.svg';

import MapInfo from './index';

storiesOf('Section|Map Info', module).add('Deafult', () => (
  <MapInfo location="athens" title="The city of Athens">
    <p>
      <strong>Athens is the capital of Greece.</strong> It was also at the heart of Ancient Greece, a powerful
      civilisation and empire. The city is still dominated by 5th-century BC landmarks, including the Acropolis, a
      hilltop citadel topped with ancient buildings like the colonnaded Parthenon temple.
      <br />
      <br />
      We chose the name Athens as, like our previous testnets, Mesopotamia and Sparta, the ancient Athens&#39;
      historical significance in the development towards modern democracy and the rule of law.
      <br />
      <br />
      <Link to="/athens">
        <PersonIcon /> Explore previous testnet
      </Link>
    </p>
  </MapInfo>
));
