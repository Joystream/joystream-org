import { useState, useEffect } from 'react';

const QUERY_URL = 'https://query.joystream.org/graphql';
const QUERY = `
{
  channels(limit: 999999) {
    id
  },
  videos(limit: 999999) {
      id
  },
  forumPosts(limit: 999999) {
    id
  },
  proposals(limit: 999999) {
    id
  },
  workingGroupOpenings(limit: 999999, where: { status_json: { isTypeOf_eq: "OpeningStatusOpen" } }) {
    id,
    status {
      __typename
    }
  },
  workers (limit: 999999) {
    id
  }
}
`;

const useQueryNodeData = () => {
  const [queryData, setQueryData] = useState({
    data: {
      channels: 0,
      videos: 0,
      forumPosts: 0,
      proposals: 0,
      jobOpenings: 0,
      currentWorkers: 0
    },
    isLoading: true,
    error: false
  });

  useEffect(() => {
    const getQueryNodeData = async () => {
      try {
        const res = await fetch(QUERY_URL, {
          method: 'POST',
          headers: { 'Content-type': 'application/json' },
          body: JSON.stringify({ query: QUERY }),
        });

        if (res.ok) {
          const { data } = await res.json();
          
          setQueryData({
            data: {
              channels: data.channels.length,
              videos: data.videos.length,
              formPosts: data.forumPosts.length,
              proposals: data.proposals.length,
              jobOpenings: data.workingGroupOpenings.length,
              currentWorkers: data.workers.length
            },
            isLoading: false,
            error: false
          });
        }
      } catch (e) {
        console.log(e);
      }
    };
    getQueryNodeData();
  }, []);

  return queryData;
};

export default useQueryNodeData;
