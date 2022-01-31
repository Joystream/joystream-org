import { useState, useEffect } from 'react';

const QUERY_URL = 'https://hydra.joystream.org/graphql';
const ATLAS_DATA_QUERY = `
{
    channels(limit: 999999) {
        id,
        createdAt
    },
    videos(limit: 999999) {
        id,
        createdAt
    }
}
`;

const useAtlasData = () => {
  const [videos, setVideos] = useState({ isLoading: true, error: false, data: 0 });
  const [channels, setChannels] = useState({ isLoading: true, error: false, data: 0 });

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
            data: data.channels,
          });
          setVideos({
            isLoading: false,
            error: false,
            data: data.videos,
          });
        }
      } catch (e) {
        console.log(e);
      }
    };
    getAtlasData();
  }, []);

  return { videos, channels };
};

export default useAtlasData;
