import React from 'react';

import ActiveImage from '../../../assets/images/investor-logos/Hypersphere/Color.png';
import InactiveImage from '../../../assets/images/investor-logos/Hypersphere/Mono.png';

const Active = (props) => (
  <img alt="" {...props} src={ActiveImage} />
);

const Inactive = (props) => (
  <img alt="" {...props} src={InactiveImage} />
);

const Hypersphere = ({ className }) => {
  return (
    <div>
      <Active className={`${className} ${className}--active`} />
      <Inactive className={`${className} ${className}--inactive`} />
    </div>
  );
};

export default Hypersphere;
