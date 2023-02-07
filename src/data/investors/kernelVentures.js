import React from 'react';

import ActiveImage from '../../assets/images/investor-logos/Kernel/Color.webp';
import InactiveImage from '../../assets/images/investor-logos/Kernel/Mono.webp';

const Active = (props) => (
  <img alt="" {...props} src={ActiveImage} />
);

const Inactive = (props) => (
  <img alt="" {...props} src={InactiveImage} />
);

const KernelVentures = ({ className }) => {
  return (
    <div>
      <Active className={`${className} ${className}--active`} />
      <Inactive className={`${className} ${className}--inactive`} />
    </div>
  );
};

export default KernelVentures;
