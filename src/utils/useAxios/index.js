import axios from 'axios';
import usePromise from '../usePromise';

const defaultUrl = process.env.STATUS_SERVER_ENDPOINT || 'http://localhost:8081';

export default function useAxios(url = defaultUrl) {
  const [response, loading, error] = usePromise(() => axios.get(url));

  if (loading && !error) {
    return [null, loading, null];
  } else if (error) {
    return [null, false, error];
  }

  const { data } = response;
  return [data, false, null];
}
