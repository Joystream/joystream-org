import { useState, useEffect } from 'react';
import { ApiPromise, WsProvider } from '@polkadot/api';
import { types } from '@joystream/types';

import formatDate from '../../formatDate';

const JOYSTREAM_WS_PROVIDER = 'wss://rome-rpc-endpoint.joystream.org:9944';
const ORIGIN_POINT = 0;

const parsePioneerData = (data, numberOfDataPoints) => {
  let { dataBeforeGenesis, dataAfterGenesis } = data.reduce(
    (prev, curr) => {
      if (curr?.createdAt?.getTime() === ORIGIN_POINT) {
        prev.dataBeforeGenesis = prev.dataBeforeGenesis.concat(curr);
      } else {
        prev.dataAfterGenesis = prev.dataAfterGenesis.concat(curr);
      }

      return prev;
    },
    {
      dataBeforeGenesis: [],
      dataAfterGenesis: [],
    }
  );

  let tempData = [];

  const firstDay = dataAfterGenesis[0]?.createdAt;
  const now = new Date();
  const timeDifference = now?.getTime() - firstDay?.getTime();
  const numberOfInitialUsers = dataBeforeGenesis.length;

  tempData.push({ name: formatDate(firstDay), value: numberOfInitialUsers });

  for (let i = 1; i <= numberOfDataPoints - 2; i++) {
    // time from first day + the fraction of the whole time based on number of data points
    const relativeTimeSinceBeginning = firstDay?.getTime() + Math.floor((timeDifference / numberOfDataPoints) * i);

    // number of videos from first day up until the previously calculated fraction
    const relativeNumberOfUsers = dataAfterGenesis.reduce(
      (prev, curr) => (curr?.createdAt?.getTime() < relativeTimeSinceBeginning ? prev + 1 : prev),
      0
    );

    tempData.push({
      name: formatDate(relativeTimeSinceBeginning),
      value: relativeNumberOfUsers + numberOfInitialUsers,
    });
  }

  tempData.push({ name: formatDate(now), value: data.length });

  return tempData;
};

const usePioneerData = numberOfUserDataPoints => {
  const [Api, setApi] = useState();
  const [apiError, setApiError] = useState(false);
  const [users, setUsers] = useState({ isLoading: true, error: false, data: [] });
  const [posts, setPosts] = useState({ isLoading: true, error: false, data: [] });
  const [threads, setThreads] = useState({ isLoading: true, error: false, data: [] });

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
      const getMembers = async () => {
        // user data
        const numberOfMembers = (await Api.query.members.nextMemberId()).toNumber();

        const members = (
          await Api.query.members.membershipById.multi([...Array(numberOfMembers).keys()])
        ).map(({ registered_at_time }) => ({ createdAt: new Date(registered_at_time.toNumber()) }));

        setUsers({
          isLoading: false,
          error: false,
          data: parsePioneerData(members, numberOfUserDataPoints),
        });

        // posts and threads data
        const numberOfPosts = (await Api.query.forum.nextPostId()).toNumber();

        const posts = (
          await Api.query.forum.postById.multi([...Array(numberOfPosts - 1).keys()].map(num => (num += 1)))
        ).map(({ created_at }) => ({ createdAt: new Date(created_at.time.toNumber()) }));

        setPosts({
          isLoading: false,
          error: false,
          data: parsePioneerData(posts, numberOfUserDataPoints),
        });

        const numberOfThreads = (await Api.query.forum.nextThreadId()).toNumber();

        const threads = (
          await Api.query.forum.threadById.multi([...Array(numberOfThreads - 1).keys()].map(num => (num += 1)))
        ).map(({ created_at }) => ({ createdAt: new Date(created_at.time.toNumber()) }));

        setThreads({
          isLoading: false,
          error: false,
          data: parsePioneerData(threads, numberOfUserDataPoints),
        });
      };
      getMembers();
    }
  }, [Api, apiError, numberOfUserDataPoints]);

  return { users, posts, threads };
};

export default usePioneerData;
