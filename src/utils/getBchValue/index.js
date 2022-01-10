import axios from 'axios';

// TODO:
// 1. Add other exchanges in case this one is down.

const COIN_GECKO_BCH_API_URL = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin-cash&vs_currencies=usd"; 

const getBchValue = async () => {
  let bchValue;

  try {
    const response = await axios.get(COIN_GECKO_BCH_API_URL);
    bchValue = response.data["bitcoin-cash"].usd;
  } catch (error) {
    console.log(error);
    return null;
  }

  return bchValue;
};

export default getBchValue;