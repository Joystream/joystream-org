import { useState, useEffect } from 'react';
import { ApiPromise, WsProvider } from '@polkadot/api';
import { types } from '@joystream/types';
import moment from 'moment';

const JOYSTREAM_WS_PROVIDER = 'wss://rpc.joystream.org:9944';
const QUERY_URL = 'https://query.joystream.org/graphql';

const PREVIOUS_COUNCIL_ENDED_AT_QUERY = `
{
  electionRounds (limit: 1, where: { isFinished_eq: true }, orderBy: endedAtTime_DESC) {
    endedAtTime
  }
}
`;

const getCouncilPeriodLength = (api) => {
  const idlePeriodLength = api.consts.council.idlePeriodDuration.toNumber();
  const announcingStagePeriodLength = api.consts.council.announcingPeriodDuration.toNumber();
  const votingStagePeriodLength = api.consts.referendum.voteStageDuration.toNumber();
  const revealingStagePeriodLength = api.consts.referendum.revealStageDuration.toNumber();

  return idlePeriodLength + announcingStagePeriodLength + votingStagePeriodLength + revealingStagePeriodLength;
};

const parseBlockLengthInDays = (blockLength) => {
  const AVERAGE_BLOCK_DURATION_IN_SECONDS = 6;
  const ONE_SECOND_IN_DAYS = 1 / (60 * 60 * 24);

  return (AVERAGE_BLOCK_DURATION_IN_SECONDS * blockLength) * ONE_SECOND_IN_DAYS;
};

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
        const numberOfCouncils = (await Api.query.council.councilMembers()).length;
        const councilPeriodLengthInBlocks = getCouncilPeriodLength(Api);
        const councilPeriodInDays = parseBlockLengthInDays(councilPeriodLengthInBlocks);

        setCouncilSize({
          isLoading: false,
          error: false,
          count: numberOfCouncils,
        });

        setCouncilPeriodDays({
          isLoading: false,
          error: false,
          count: councilPeriodInDays,
        });

        try {
          const res = await fetch(QUERY_URL, {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ query: PREVIOUS_COUNCIL_ENDED_AT_QUERY }),
          });

          if (res.ok) {
            const { data: { electionRounds } } = await res.json();
            const nextCouncilEndsAt = new Date(electionRounds[0].endedAtTime);
            nextCouncilEndsAt.setDate(nextCouncilEndsAt.getDate() + councilPeriodInDays);
            const timeDifferenceInDays = moment(nextCouncilEndsAt).diff(moment(), 'days');

            setCouncilEndDays({
              isLoading: false,
              error: false,
              count: timeDifferenceInDays,
            });
          }
        } catch (e) {
          console.log(e);
        }
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
