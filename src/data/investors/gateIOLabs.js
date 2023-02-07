import React from 'react';

import ActiveImage from '../../assets/images/investor-logos/Gateio/Color.webp';
import InactiveImage from '../../assets/images/investor-logos/Gateio/Mono.webp';

const Active = (props) => (
  <img alt="" {...props} src={ActiveImage} />
);

const Inactive = (props) => (
  <img alt="" {...props} src={InactiveImage} />
);

const GateIOLabs = ({ className }) => {
  return (
    <div>
      <Active className={`${className} ${className}--active`} />
      <Inactive className={`${className} ${className}--inactive`} />
    </div>
  );
};

export default GateIOLabs;
