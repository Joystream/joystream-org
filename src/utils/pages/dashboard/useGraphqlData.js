import { useState, useEffect } from 'react';

import formatDate from '../../formatDate';

const QUERY_URL = 'https://query.joystream.org/graphql';
const ATLAS_DATA_QUERY = `
{
    channels(limit: 999999) {
        id,
        createdAt
    },
    videos(limit: 999999) {
        id,
        createdAt
    },
    memberships(limit: 999999) { 
      id,
      createdAt
    },
    forumThreads(limit: 999999) { 
      id,
      createdAt
    },
    forumPosts(limit: 999999) { 
      id,
      createdAt
    }
}
`;

const parseGraphqlData = (data, numberOfDataPoints) => {
  let tempData = [];

  const firstDay = data[0].createdAt;
  const now = new Date();
  const timeDifference = now.getTime() - firstDay.getTime();

  tempData.push({ name: formatDate(firstDay), value: 0 });

  for (let i = 1; i <= numberOfDataPoints - 2; i++) {
    // time from first day + the fraction of the whole time based on number of data points
    const relativeTimeSinceBeginning = firstDay.getTime() + Math.floor((timeDifference / numberOfDataPoints) * i);

    // number of videos from first day up until the previously calculated fraction
    const relativeNumberOfVideos = data.reduce(
      (prev, curr) => (curr.createdAt.getTime() < relativeTimeSinceBeginning ? prev + 1 : prev),
      0
    );

    tempData.push({ name: formatDate(relativeTimeSinceBeginning), value: relativeNumberOfVideos });
  }

  tempData.push({ name: formatDate(now), value: data.length });

  return tempData;
};

const useGraphqlData = numberOfDataPoints => {
  const [videos, setVideos] = useState({ isLoading: true, error: false, data: [] });
  const [channels, setChannels] = useState({ isLoading: true, error: false, data: [] });
  const [users, setUsers] = useState({ isLoading: true, error: false, data: [] });
  const [posts, setPosts] = useState({ isLoading: true, error: false, data: [] });
  const [threads, setThreads] = useState({ isLoading: true, error: false, data: [] });

  useEffect(() => {
    const getAtlasData = async () => {
      try {
        const res = await fetch(QUERY_URL, {
          method: 'POST',
          headers: { 'Content-type': 'application/json' },
          body: JSON.stringify({ query: ATLAS_DATA_QUERY }),
        });

        if (res.ok) {
          const { data } = await res.json();

          setChannels({
            isLoading: false,
            error: false,
            data: parseGraphqlData(
              data.channels.map(({ id, createdAt }) => ({ id, createdAt: new Date(createdAt) })),
              numberOfDataPoints
            ),
          });

          setVideos({
            isLoading: false,
            error: false,
            data: parseGraphqlData(
              data.videos.map(({ id, createdAt }) => ({ id, createdAt: new Date(createdAt) })),
              numberOfDataPoints
            ),
          });

          setUsers({
            isLoading: false,
            error: false,
            data: parseGraphqlData(
              data.memberships.map(({ id, createdAt }) => ({ id, createdAt: new Date(createdAt) })),
              numberOfDataPoints
            ),
          });

          setPosts({
            isLoading: false,
            error: false,
            data: parseGraphqlData(
              data.forumPosts.map(({ id, createdAt }) => ({ id, createdAt: new Date(createdAt) })),
              numberOfDataPoints
            ),
          });

          setThreads({
            isLoading: false,
            error: false,
            data: parseGraphqlData(
              data.forumThreads.map(({ id, createdAt }) => ({ id, createdAt: new Date(createdAt) })),
              numberOfDataPoints
            ),
          });


        }
      } catch (e) {
        console.log(e);
      }
    };
    getAtlasData();
  }, []);

  return { videos, channels, users, posts, threads };
};

export default useGraphqlData;
