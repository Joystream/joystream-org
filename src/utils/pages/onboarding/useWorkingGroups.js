import { useState, useEffect } from 'react';
import { ApiPromise, WsProvider } from '@polkadot/api';
import { types } from '@joystream/types';

const JOYSTREAM_WS_PROVIDER = 'wss://rome-rpc-endpoint.joystream.org:9944';

const useWorkingGroups = () => {
  const [Api, setApi] = useState();
  const [apiError, setApiError] = useState(false);
  const [storageWorkers, setStorageWorkers] = useState({ isLoading: true, error: false, workers: [] });
  const [curatorsWorkers, setCuratorWorkers] = useState({ isLoading: true, error: false, workers: [] });
  const [distributionWorkers, setDistributorsWorkers] = useState({ isLoading: true, error: false, workers: [] });
  const [operationsAlphaWorkers, setOperationsAlphaWorkers] = useState({ isLoading: true, error: false, workers: [] });
  const [operationsBetaWorkers, setOperationsBetaWorkers] = useState({ isLoading: true, error: false, workers: [] });
  const [operationsGammaWorkers, setOperationsGammaWorkers] = useState({ isLoading: true, error: false, workers: [] });

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
      const fetchWorkers = async (workingGroup, setMethod) => {
        const nextWorkerID = (await Api.query[workingGroup].nextWorkerId()).toNumber();
        for (let workerId = nextWorkerID - 1; workerId >= 0; workerId--) {
          const workerById = (await Api.query[workingGroup].workerById(workerId)).toJSON();
          if (workerId === 0) {
            setMethod(prev => {
              return {
                ...prev,
                isLoading: false,
              };
            });
          }
          if (workerById.reward_relationship !== null) {
            const memberId = workerById.member_id;
            const membership = (await Api.query.members.membershipById(memberId)).toHuman();
            setMethod(prev => {
              if (prev.workers.filter(w => w.avatar === membership.avatar_uri).length === 0) {
                return {
                  ...prev,
                  workers: [...prev.workers, { workerId, memberId, avatar: membership.avatar_uri }],
                };
              } else {
                return {
                  ...prev,
                };
              }
            });
          }
        }
      };

      const getWorkers = async () => {
        await fetchWorkers('contentWorkingGroup', setCuratorWorkers);
        await fetchWorkers('storageWorkingGroup', setStorageWorkers);
        await fetchWorkers('distributionWorkingGroup', setDistributorsWorkers);
        await fetchWorkers('operationsWorkingGroupAlpha', setOperationsAlphaWorkers);
        await fetchWorkers('operationsWorkingGroupBeta', setOperationsBetaWorkers);
        await fetchWorkers('operationsWorkingGroupGamma', setOperationsGammaWorkers);
      };
      getWorkers();
    }
  }, [Api, apiError]);

  return {
    storageWorkers,
    curatorsWorkers,
    distributionWorkers,
    operationsAlphaWorkers,
    operationsBetaWorkers,
    operationsGammaWorkers,
  };
};

export default useWorkingGroups;
