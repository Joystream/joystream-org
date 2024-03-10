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
    header: 'Livepeer',
    accessorKey: 'lpt',
  },
  {
    header: 'Cyberconnect',
    accessorKey: 'cyber',
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
    lpt: getFDV(dynamicData?.token?.fdvs?.lpt),
    cyber: getFDV(dynamicData?.token?.fdvs?.cyber),
    deso: getFDV(dynamicData?.token?.fdvs?.deso),
    theta: getFDV(dynamicData?.token?.fdvs?.theta),
  },
  {
    indicator: 'Open social graph',
    joystream: true,
    lpt: false,
    cyber: true,
    deso: true,
    theta: false,
  },
  {
    indicator: 'Video NFTs',
    joystream: true,
    lpt: false,
    cyber: false,
    deso: true,
    theta: false,
  },
  {
    indicator: 'Creator tokens',
    joystream: true,
    lpt: false,
    cyber: false,
    deso: true,
    theta: false,
  },
  {
    indicator: 'Storage & Delivery',
    joystream: true,
    lpt: true,
    cyber: true,
    deso: false,
    theta: true,
  },
  {
    indicator: 'Dao',
    joystream: true,
    lpt: false,
    cyber: true,
    deso: false,
    theta: false,
  },
];
