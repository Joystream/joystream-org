import { useState, useEffect } from 'react';
import { ApiPromise, WsProvider } from '@polkadot/api';
import { types } from '@joystream/types';
import moment from 'moment';

const JOYSTREAM_WS_PROVIDER = 'wss://rome-rpc-endpoint.joystream.org:9944';

const usePioneerData = () => {
  const [Api, setApi] = useState();
  const [apiError, setApiError] = useState(false);
  const [posts, setPosts] = useState({ isLoading: true, error: false, count: 0 });
  const [proposals, setProposals] = useState({ isLoading: true, error: false, count: 0 });
  const [curatorsCount, setCuratorsCount] = useState({ isLoading: true, error: false, count: 0 });
  const [storageCount, setStorageCount] = useState({ isLoading: true, error: false, count: 0 });
  const [distributorsCount, setDistributorsCount] = useState({ isLoading: true, error: false, count: 0 });
  const [operationsAlphaCount, setOperationsAlphaCount] = useState({ isLoading: true, error: false, count: 0 });
  const [operationsBetaCount, setOperationsBetaCount] = useState({ isLoading: true, error: false, count: 0 });
  const [operationsGammaCount, setOperationsGammaCount] = useState({ isLoading: true, error: false, count: 0 });
  const [curatorsOpenings, setCuratorsOpenings] = useState({ isLoading: true, error: false, count: 0 });
  const [storageOpenings, setStorageOpenings] = useState({ isLoading: true, error: false, count: 0 });
  const [distributorsOpenings, setDistributorsOpenings] = useState({ isLoading: true, error: false, count: 0 });
  const [operationsAlphaOpenings, setOperationsAlphaOpenings] = useState({ isLoading: true, error: false, count: 0 });
  const [operationsBetaOpenings, setOperationsBetaOpenings] = useState({ isLoading: true, error: false, count: 0 });
  const [operationsGammaOpenings, setOperationsGammaOpenings] = useState({ isLoading: true, error: false, count: 0 });

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
      const fetchOpenings = async (workingGroup, setMethod) => {
        const nextOpeningID = (await Api.query[workingGroup].nextOpeningId()).toNumber();
        for (let nextId = nextOpeningID - 1; nextId >= 0; nextId--) {
          const openingById = (await Api.query[workingGroup].openingById(nextId)).toJSON();
          if (nextId === 0) {
            setMethod(prev => {
              return {
                ...prev,
                isLoading: false,
              };
            });
          }
          if (openingById.hiring_opening_id > 0) {
            const hiringOpening = (await Api.query.hiring.openingById(openingById.hiring_opening_id)).toHuman();
            if (hiringOpening.stage.Active && hiringOpening.stage.Active.stage.AcceptingApplications) {
              setMethod(prev => {
                return {
                  ...prev,
                  count: (prev.count += 1),
                };
              });
            }
          }
        }
      };

      const getCounts = async () => {
        const numberOfPosts = (await Api.query.forum.nextPostId()).toNumber();
        const posts = (
          await Api.query.forum.postById.multi([...Array(numberOfPosts - 1).keys()].map(num => (num += 1)))
        ).map(({ created_at }) => ({ createdAt: new Date(created_at.time.toNumber()) }));

        setPosts({
          isLoading: false,
          error: false,
          count: posts.length,
        });

        const numberOfProposals = (await Api.query.proposalsEngine.proposalCount()).toNumber();
        setProposals({
          isLoading: false,
          error: false,
          count: numberOfProposals,
        });

        const numberOfStorage = (await Api.query.storageWorkingGroup.activeWorkerCount()).toNumber();
        setStorageCount({
          isLoading: false,
          error: false,
          count: numberOfStorage,
        });

        const numberOfCurators = (await Api.query.contentWorkingGroup.activeWorkerCount()).toNumber();
        setCuratorsCount({
          isLoading: false,
          error: false,
          count: numberOfCurators,
        });

        const numberOfDistributors = (await Api.query.distributionWorkingGroup.activeWorkerCount()).toNumber();
        setDistributorsCount({
          isLoading: false,
          error: false,
          count: numberOfDistributors,
        });

        const numberOfAlpa = (await Api.query.operationsWorkingGroupAlpha.activeWorkerCount()).toNumber();
        setOperationsAlphaCount({
          isLoading: false,
          error: false,
          count: numberOfAlpa,
        });

        const numberOfBeta = (await Api.query.operationsWorkingGroupBeta.activeWorkerCount()).toNumber();
        setOperationsBetaCount({
          isLoading: false,
          error: false,
          count: numberOfBeta,
        });

        const numberOfGamma = (await Api.query.operationsWorkingGroupGamma.activeWorkerCount()).toNumber();
        setOperationsGammaCount({
          isLoading: false,
          error: false,
          count: numberOfGamma,
        });

        await fetchOpenings('contentWorkingGroup', setCuratorsOpenings);
        await fetchOpenings('storageWorkingGroup', setStorageOpenings);
        await fetchOpenings('distributionWorkingGroup', setDistributorsOpenings);
        await fetchOpenings('operationsWorkingGroupAlpha', setOperationsAlphaOpenings);
        await fetchOpenings('operationsWorkingGroupBeta', setOperationsBetaOpenings);
        await fetchOpenings('operationsWorkingGroupGamma', setOperationsGammaOpenings);
      };
      getCounts();
    }
  }, [Api, apiError]);

  return {
    proposals,
    posts,
    storageCount,
    distributorsCount,
    curatorsCount,
    operationsAlphaCount,
    operationsBetaCount,
    operationsGammaCount,
    curatorsOpenings,
    storageOpenings,
    distributorsOpenings,
    operationsAlphaOpenings,
    operationsBetaOpenings,
    operationsGammaOpenings,
  };
};

export default usePioneerData;
