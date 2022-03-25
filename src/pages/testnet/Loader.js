import React from 'react';
import Loader from 'react-loader-spinner';

export default function() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Loader
        type="Rings"
        color="#fff"
        height={100}
        width={100}
        timeout={25000} //25 secs before disabled, note this should never happen as req should take 1/2 secs max
      />
    </div>
  );
}
