import mexcLogo from '../../../../assets/images/dashboard/mexc-logo.png';
import bitgetLogo from '../../../../assets/images/dashboard/bitget-logo.png';
import gateIoLogo from '../../../../assets/images/dashboard/gatel-o-logo.png';
import bitmartLogo from '../../../../assets/images/dashboard/bitmart-logo.png';
import biconomyLogo from '../../../../assets/images/dashboard/biconomy-logo.png';
import xtLogo from '../../../../assets/images/dashboard/xt-logo.png';

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

const exchangeOptionsTradingURLs = {
  bitget: 'https://www.bitget.com/spot/JOYUSDT',
  gate: 'https://www.gate.io/trade/JOYSTREAM_USDT',
  bitmart: 'https://www.bitmart.com/trade/en-US?symbol=JOY_USDT&layout=pro',
  mxc: 'https://www.mexc.com/exchange/JOYSTREAM_USDT?_from=market',
  xt: 'https://www.xt.com/en/trade/joy_usdt',
  biconomy: 'https://www.biconomy.com/exchange/JOY_USDT',
};

export const parseExchangeOptions = (data = {}) => {
  const exchangeOptions = [];

  const keys = Object.keys(data);
  for (const key of keys) {
    exchangeOptions.push({
      logo: exchangeOptionsLogos[key],
      name: exchangeOptionsLabels[key],
      tradingURL: exchangeOptionsTradingURLs[key],
      volume: data[key].volume,
      depthUp2: Math.round(data[key].plus2PercentDepth),
      depthDown2: Math.round(data[key].minus2PercentDepth),
    });
  }

  return exchangeOptions;
};
