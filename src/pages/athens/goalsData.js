import React from 'react';

export default [
  {
    title: 'Enable media on the platform',
    text:
      /* eslint-disable */
      'As a "user governed media platform", allowing users to upload and consume and content was a major goal for us.',
    /* eslint-disable */
  },
  {
    title: 'Introduce platform memberships',
    text:
      /* eslint-disable */
      'Although we are building an open blockchain in the sense that users are free to send tokens as they like, the Joystream experience is about having the platform users own, operate and govern the platform. We are agnostic on exactly what parts of the platform will be reserved for members, some actions will require and extra level of screening and accountability.',
    /* eslint-disable */
  },
  {
    title: 'Build and release the storage node',
    text:
      /* eslint-disable */
      'Although a storage node was built and used to host and distribute the platform content, it had some bugs making it unable to sync between clients and required a hardcoded liaison.',
    /* eslint-disable */
    state: 'postponed',
  },
  {
    title: 'Upgrade the runtime through a Council vote',
    /* eslint-disable */
    text: [
      'The intention was for Jsgenesis to create a proposal for a ',
      <a href="https://blog.joystream.org/upgrades/">runtime upgrade</a>,
      ', and have the Council vote on it. If the Council reached quorum, the consensus rules of the system would automatically get upgraded in flight. Unfortunately, the ',
      <a href="https://blog.joystream.org/sparta-sacked/">
        Sparta network crashed
      </a>,
      ' before we reached this stage, and had to start Athens as a new chain with a new genesis block.',
    ],
    /* eslint-disable */
    state: 'postponed',
  },
];
