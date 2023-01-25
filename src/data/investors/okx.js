import React from 'react';

import ActiveImage from '../../assets/images/investor-logos/OKEx/Color.png';
import InactiveImage from '../../assets/images/investor-logos/OKEx/Mono.png';

const Active = (props) => (
  <img alt="" {...props} src={ActiveImage} />
);

const Inactive = (props) => (
  <img alt="" {...props} src={InactiveImage} />
);
const OKX = ({ className }) => {
  return (
    <div>
      <Active className={`${className} ${className}--active`} />
      <Inactive className={`${className} ${className}--inactive`} />
    </div>
  );
};

export default OKX;
