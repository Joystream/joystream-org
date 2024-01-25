import mexcLogo from '../../../../assets/images/dashboard/mexc-logo.png';
import bitgetLogo from '../../../../assets/images/dashboard/bitget-logo.png';
import gateIoLogo from '../../../../assets/images/dashboard/gatel-o-logo.png';

export const exchangeOptions = [
  {
    logo: mexcLogo,
    name: 'MEXC',
    volume: 235269,
    depthUp2: 1207,
    depthDown2: 9036,
  },
  {
    logo: bitgetLogo,
    name: 'Bidget',
    volume: 93534,
    depthUp2: 1556,
    depthDown2: 1574,
  },
  {
    logo: gateIoLogo,
    name: 'GatelO',
    volume: 76432,
    depthUp2: 777,
    depthDown2: 1047,
  },
  {
    logo: mexcLogo,
    name: 'MEXC',
    volume: 235269,
    depthUp2: 1207,
    depthDown2: 9036,
  },
  {
    logo: mexcLogo,
    name: 'MEXC',
    volume: 235269,
    depthUp2: 1207,
    depthDown2: 9036,
  },
];

export const formatNumberWithCommas = num => num.toLocaleString('en-US');
