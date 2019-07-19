const goalsData = [
  {
    title: 'Build and release an on-chain forum',
    text: `The final platform will have built in multiple ways of facilitating
            easy and secure public, and private, communication and information
            sharing among members. The forum is the first step allowing the
            platform members to communicate, share ideas and discuss.`,
  },
  {
    title: 'Rebuild and release the storage node',
    text: `Where the old storage node had some bugs making it unable to sync
            between clients and required a hardcoded liaison, the new storage
            node is working as intended with no hierarchy or privileges.`,
  },
  {
    title: 'Ensure high uptime of storage providers',
    text: `Both content creators and consumers user experience depends on
            various metrics, but perhaps the most important is that the storage
            node they connect to responds to their request. Whether or not this
            goal is achieved depends on both the reliability of the software, a
            good reporting system and corrective actions from multiple parties.`,
    state: 'inprogress',
  },
  {
    title: 'Build the storage node with "tranches"',
    text: `Although the content directory is currently small, at some point
            it's not feasible to expect all storage providers to have full
            replication of all the content. Tranches would allow storage
            providers to select a subset of the content directory, suitable to
            their capabilities.`,
    state: 'postponed',
  },
];

export { goalsData };
