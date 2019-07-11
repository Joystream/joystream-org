import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';

import GoalItem from './';

storiesOf('GoalItem', module)
  .addDecorator(centered)
  .add('state: achieved (default)', () => (
    <GoalItem title="Rebuild and release the storage node">
      Where the old storage node had some bugs making it unable to sync between clients and required a hardcoded
      liaison, the new storage node is working as intended with no hierarchy or privileges.
    </GoalItem>
  ))
  .add('state: in progress', () => (
    <GoalItem state="inprogress" title="Ensure high uptime of storage providers">
      Both content creators and consumers user experience depends on various metrics, but perhaps the most important is
      that the storage node they connect to responds to their request. Whether or not this goal is achieved depends on
      both the reliability of the software, a good reporting system and corrective actions from multiple parties.
    </GoalItem>
  ))
  .add('state: postponed', () => (
    <GoalItem state="postponed" title='Build the storage node with "tranches"'>
      Although the content directory is currently small, at some point it's not feasible to expect all storage providers
      to have full replication of all the content. Tranches would allow storage providers to select a subset of the
      content directory, suitable to their capabilities.
    </GoalItem>
  ));
