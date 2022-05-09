import React from 'react';

import ActiveImage from '../../../assets/images/investor-logos/Polkadotters/Color.png';
import InactiveImage from '../../../assets/images/investor-logos/Polkadotters/Mono.png';

const Active = (props) => (
  <img alt="" {...props} src={ActiveImage} />
);

const Inactive = (props) => (
  <img alt="" {...props} src={InactiveImage} />
);

const Polkadotters = ({ className }) => {
  return (
    <div>
      <Active className={`${className} ${className}--active`} />
      <Inactive className={`${className} ${className}--inactive`} />
    </div>
  );
};

export default Polkadotters;
