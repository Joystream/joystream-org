import { useState, useEffect } from 'react';
import { ApiPromise, WsProvider } from '@polkadot/api';
import { types } from '@joystream/types';

const JOYSTREAM_WS_PROVIDER = 'wss://rome-rpc-endpoint.joystream.org:9944';

const useValidatorsData = () => {
  const [Api, setApi] = useState();
  const [apiError, setApiError] = useState(false);
  const [maxValidatorsSize, setMaxValidatorsSize] = useState({ isLoading: true, error: false, count: 0 });
  const [validatorsSize, setValidatorsSize] = useState({ isLoading: true, error: false, count: 0 });

  // setup api
  useEffect(() => {
    const setUpApi = async () => {
      try {
        const provider = new WsProvider(JOYSTREAM_WS_PROVIDER);
        const api = await ApiPromise.create({ provider, types });
        await api.isReady;
        setApi(api);
      } catch (e) {
        setApiError(true);
        console.log(e);
      }
    };
    setUpApi();
  }, []);

  // fetch data
  useEffect(() => {
    if (Api && !apiError) {
      const getCounts = async () => {
        const maxValidators = (await Api.query.staking.validatorCount()).toNumber();
        setMaxValidatorsSize({
          isLoading: false,
          error: false,
          count: maxValidators,
        });

        const activeValidators = (await Api.query.session.validators()).toJSON();
        setValidatorsSize({
          isLoading: false,
          error: false,
          count: activeValidators.length,
        });
      };
      getCounts();
    }
  }, [Api, apiError]);

  return {
    maxValidatorsSize,
    validatorsSize,
  };
};

export default useValidatorsData;
