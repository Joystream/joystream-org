import axios from 'axios';
import usePromise from '../usePromise';

const defaultUrl = process.env.GATSBY_API_URL || 'https://status.joystream.app/status';

export default function useAxios(url = defaultUrl) {
  const [response, loading, error] = usePromise(() => axios.get(url));

  if (loading && !error) {
    return [null, loading, null];
  } else if (error) {
    console.log(error);
    return [null, false, error];
  }

  const { data } = response;
  return [data, false, null];
}
