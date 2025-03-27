import mexcLogo from '../../../../assets/images/dashboard/mexc-logo.png';
import gateIoLogo from '../../../../assets/images/dashboard/gatel-o-logo.png';
import bitmartLogo from '../../../../assets/images/dashboard/bitmart-logo.png';
import biconomyLogo from '../../../../assets/images/dashboard/biconomy-logo.png';
import xtLogo from '../../../../assets/images/dashboard/xt-logo.png';
import coinexLogo from '../../../../assets/images/dashboard/coinex.png';
import uniswapLogo from '../../../../assets/images/dashboard/uniswap-uni-logo.png';
import changenowLogo from '../../../../assets/images/dashboard/changenow.png';

export const formatNumberWithCommas = num => num.toLocaleString('en-US');

const exchangeOptionsLogos = {
  gate: gateIoLogo,
  bitmart: bitmartLogo,
  mxc: mexcLogo,
  biconomy: biconomyLogo,
  xt: xtLogo,
  coinex: coinexLogo,
  'uniswap-v3-base': uniswapLogo,
  changenow: changenowLogo,
};

const exchangeOptionsLabels = {
  gate: 'GateIO',
  bitmart: 'BitMart',
  mxc: 'MEXC',
  xt: 'XT',
  biconomy: 'Biconomy',
  coinex: 'CoinEx',
  'uniswap-v3-base': 'Uniswap',
  changenow: 'ChangeNow',
};

const exchangeOptionsTradingURLs = {
  gate: 'https://www.gate.io/trade/JOYSTREAM_USDT',
  bitmart: 'https://www.bitmart.com/trade/en-US?symbol=JOY_USDT&layout=pro',
  mxc: 'https://www.mexc.com/exchange/JOYSTREAM_USDT?_from=market',
  xt: 'https://www.xt.com/en/trade/joy_usdt',
  biconomy: 'https://www.biconomy.com/exchange/JOY_USDT',
  coinex: 'https://www.coinex.com/en/exchange/joy-usdt',
  'uniswap-v3-base':
    'https://app.uniswap.org/swap?chain=base&inputCurrency=0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913&outputCurrency=0x8761155c814c807cD3CcD15B256D69D3C10f198C',
  changenow: '/token#instantSwap',
};

export const parseExchangeOptions = (data = {}) => {
  const exchangeOptions = [];

  const keys = Object.keys(data);
  for (const key of keys) {
    if (key in exchangeOptionsLabels) {
      exchangeOptions.push({
        logo: exchangeOptionsLogos[key],
        name: exchangeOptionsLabels[key],
        tradingURL: exchangeOptionsTradingURLs[key],
        volume: data[key].volume,
        depthUp2: Math.round(data[key].plus2PercentDepth),
        depthDown2: Math.round(data[key].minus2PercentDepth),
      });
    }
  }

  return exchangeOptions;
};
