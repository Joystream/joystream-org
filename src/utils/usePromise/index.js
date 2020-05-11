import { useState, useEffect, useCallback } from 'react';

export function usePromise(promise) {
  const [state, setState] = useState({ value: null, error: null, isPending: true });

  let isSubscribed = true;
  const execute = useCallback(() => {
    return promise()
      .then(value => (isSubscribed ? setState({ value, error: null, isPending: false }) : null))
      .catch(error => (isSubscribed ? setState({ value: null, error: error, isPending: false }) : null));
  }, [isSubscribed, promise]);

  useEffect(() => {
    execute();
    return () => {
      isSubscribed = false;
    };
  }, []);

  const { value, error, isPending } = state;
  return [value, error, isPending, execute];
}
