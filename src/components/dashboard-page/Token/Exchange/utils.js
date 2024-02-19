import mexcLogo from '../../../../assets/images/dashboard/mexc-logo.png';
import bitgetLogo from '../../../../assets/images/dashboard/bitget-logo.png';
import gateIoLogo from '../../../../assets/images/dashboard/gatel-o-logo.png';
import bitmartLogo from '../../../../assets/images/dashboard/bitmart-logo.png';
import biconomyLogo from '../../../../assets/images/dashboard/biconomy-logo.png';
import xtLogo from '../../../../assets/images/dashboard/xt-logo.png';

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

const exchangeOptionsLogos = {
  bitget: bitgetLogo,
  gate: gateIoLogo,
  bitmart: bitmartLogo,
  mxc: mexcLogo,
  biconomy: biconomyLogo,
  xt: xtLogo,
};

const exchangeOptionsLabels = {
  bitget: 'Bitget',
  gate: 'GateIO',
  bitmart: 'BitMart',
  mxc: 'MEXC',
  xt: 'XT',
  biconomy: 'Biconomy',
};

export const parseExchangeOptions = (data = {}) => {
  const exchangeOptions = [];

  const keys = Object.keys(data);
  for (const key of keys) {
    exchangeOptions.push({
      logo: exchangeOptionsLogos[key],
      name: exchangeOptionsLabels[key],
      volume: data[key].volume,
      depthUp2: Math.round(data[key].plus2PercentDepth),
      depthDown2: Math.round(data[key].minus2PercentDepth),
    });
  }

  return exchangeOptions;
};
