import React from 'react';

import ActiveImage from '../../../assets/images/investor-logos/MXC/Color.png';
import InactiveImage from '../../../assets/images/investor-logos/MXC/Mono.png';

const Active = (props) => (
  <img alt="" {...props} src={ActiveImage} />
);

const Inactive = (props) => (
  <img alt="" {...props} src={InactiveImage} />
);

const MEXCPioneer = ({ className }) => {
  return (
    <div>
      <Active className={`${className} ${className}--active`} />
      <Inactive className={`${className} ${className}--inactive`} />
    </div>
  );
};

export default MEXCPioneer;
