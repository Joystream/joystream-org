import axios from 'axios';

const EXCHANGE_APIS = [
  {
    url: 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin-cash&vs_currencies=usd',
    getValue: response => response.data['bitcoin-cash'].usd,
  },
  {
    url: 'https://api.coinbase.com/v2/exchange-rates?currency=BCH',
    getValue: response => Number(response.data.data.rates['USD']),
  },
  {
    url: 'https://api.kraken.com/0/public/Ticker?pair=BCHUSD',
    getValue: response => Number(response.data.result['BCHUSD'].c[0]),
  },
];

const getBchValue = async () => {
  let bchValue = null;

  for (const api of EXCHANGE_APIS) {
    try {
      const response = await axios.get(api.url);

      if (response.status === 200 && api.getValue(response)) {
        return api.getValue(response);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return bchValue;
};

export default getBchValue;
