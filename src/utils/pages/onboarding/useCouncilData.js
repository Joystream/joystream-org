import { useState, useEffect } from 'react';
import { ApiPromise, WsProvider } from '@polkadot/api';
import { types } from '@joystream/types';
import moment from 'moment';

const JOYSTREAM_WS_PROVIDER = 'wss://rome-rpc-endpoint.joystream.org:9944';

const useCouncilData = () => {
  const [Api, setApi] = useState();
  const [apiError, setApiError] = useState(false);
  const [councilSize, setCouncilSize] = useState({ isLoading: true, error: false, count: 0 });
  const [councilEndDays, setCouncilEndDays] = useState({ isLoading: true, error: false, count: 0 });
  const [councilPeriodDays, setCouncilPeriodDays] = useState({ isLoading: true, error: false, count: 0 });

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
        const numberOfCouncils = (await Api.query.councilElection.councilSize()).toNumber();
        setCouncilSize({
          isLoading: false,
          error: false,
          count: numberOfCouncils,
        });

        const councilTermEndBlock = (await Api.query.council.termEndsAt()).toJSON();
        const termDuration = (await Api.query.councilElection.newTermDuration()).toJSON();
        const announcingPeriod = (await Api.query.councilElection.announcingPeriod()).toJSON();
        const votingPeriod = (await Api.query.councilElection.votingPeriod()).toJSON();
        const revealingPeriod = (await Api.query.councilElection.revealingPeriod()).toJSON();
        const currentBlockHash = (await Api.rpc.chain.getFinalizedHead()).toString();
        const currentBlockJson = (await Api.rpc.chain.getBlock(currentBlockHash)).toJSON();
        let currentBlock = 0;
        if (
          currentBlockJson &&
          currentBlockJson.block &&
          currentBlockJson.block.header &&
          currentBlockJson.block.header.number
        ) {
          currentBlock = currentBlockJson.block.header.number;
        }
        const revealingEndsAt = councilTermEndBlock + announcingPeriod + votingPeriod + revealingPeriod;
        const termBlocksRemaining = revealingEndsAt - currentBlock;
        const councilEndDate = moment().add(termBlocksRemaining * 6, 'seconds');
        const councilDaysLeft = councilEndDate.diff(moment(), 'd');
        const councilTermDays = ((termDuration + announcingPeriod + votingPeriod + revealingPeriod) * 6) / 86400;

        setCouncilEndDays({
          isLoading: false,
          error: false,
          count: councilDaysLeft,
        });

        setCouncilPeriodDays({
          isLoading: false,
          error: false,
          count: councilTermDays,
        });
      };
      getCounts();
    }
  }, [Api, apiError]);

  return {
    councilSize,
    councilEndDays,
    councilPeriodDays,
  };
};

export default useCouncilData;
