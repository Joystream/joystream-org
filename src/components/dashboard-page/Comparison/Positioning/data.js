export const columns = [
  {
    header: '',
    accessorKey: 'indicator',
  },
  {
    header: 'Joystream',
    accessorKey: 'joystream',
  },
  {
    header: 'YouTube',
    accessorKey: 'youTube',
  },
  {
    header: 'Lbry',
    accessorKey: 'lbry',
  },
  {
    header: 'Rumble',
    accessorKey: 'rumble',
  },
  {
    header: 'Deso',
    accessorKey: 'deso',
  },
  {
    header: 'Theta',
    accessorKey: 'theta',
  },
];

export const getData = (dynamicData = {}) => [
  {
    indicator: 'FDV',
    joystream: Number((dynamicData?.token?.fullyDilutedValue / 1000000).toFixed(1)) || 400.4,
    youTube: 200,
    lbry: 150,
    rumble: 334,
    deso: 102,
    theta: 54,
  },
  {
    indicator: 'Open social graph',
    joystream: true,
    youTube: false,
    lbry: true,
    rumble: false,
    deso: true,
    theta: false,
  },
  {
    indicator: 'Video NFTs',
    joystream: true,
    youTube: false,
    lbry: false,
    rumble: false,
    deso: true,
    theta: false,
  },
  {
    indicator: 'Creator tokens',
    joystream: true,
    youTube: false,
    lbry: false,
    rumble: false,
    deso: true,
    theta: false,
  },
  {
    indicator: 'Storage & Delivery',
    joystream: true,
    youTube: true,
    lbry: true,
    rumble: true,
    deso: false,
    theta: true,
  },
  {
    indicator: 'Dao',
    joystream: true,
    youTube: false,
    lbry: false,
    rumble: false,
    deso: false,
    theta: false,
  },
];
