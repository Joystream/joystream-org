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

const getFDV = (val, fallbackVal = 0) => Number((val / 1000000).toFixed(1)) || fallbackVal;

export const getData = (dynamicData = {}) => [
  {
    indicator: 'FDV',
    joystream: getFDV(dynamicData?.token?.fullyDilutedValue),
    lbry: getFDV(dynamicData?.token?.fdvs?.lbc),
    rumble: getFDV(dynamicData?.token?.fdvs?.rum),
    deso: getFDV(dynamicData?.token?.fdvs?.deso),
    theta: getFDV(dynamicData?.token?.fdvs?.theta),
  },
  {
    indicator: 'Open social graph',
    joystream: true,
    lbry: true,
    rumble: false,
    deso: true,
    theta: false,
  },
  {
    indicator: 'Video NFTs',
    joystream: true,
    lbry: false,
    rumble: false,
    deso: true,
    theta: false,
  },
  {
    indicator: 'Creator tokens',
    joystream: true,
    lbry: false,
    rumble: false,
    deso: true,
    theta: false,
  },
  {
    indicator: 'Storage & Delivery',
    joystream: true,
    lbry: true,
    rumble: true,
    deso: false,
    theta: true,
  },
  {
    indicator: 'Dao',
    joystream: true,
    lbry: false,
    rumble: false,
    deso: false,
    theta: false,
  },
];
