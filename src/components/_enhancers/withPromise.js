import React from 'react';
import { usePromise } from '../../utils/usePromise';

export default function WithPromise(WrappedChildren, promise) {
  const [value, error, loading] = usePromise(promise);
  if (!error && loading) {
    return <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading...</div>;
  } else if (error) {
    console.error({ message: error.message, stack: error.stack });
  }

  return (
    <div>
      <WrappedChildren data={value} />
    </div>
  );
}
