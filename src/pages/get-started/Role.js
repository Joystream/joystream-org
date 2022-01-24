import React from 'react';

const Role = props => {
  return (
    <div>
      <Head {...props} />
      <Earn />
      <Bounties />
      <Groups />
      <Reward />
      <Chat />
    </div>
  );
};

export default Role;
