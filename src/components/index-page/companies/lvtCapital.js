import React from 'react';

import ActiveImage from '../../../assets/images/investor-logos/LVT/Color.png';
import InactiveImage from '../../../assets/images/investor-logos/LVT/Mono.png';

const Active = (props) => (
  <img alt="" {...props} src={ActiveImage} />
);

const Inactive = (props) => (
  <img alt="" {...props} src={InactiveImage} />
);

const LVTCapital = ({ className }) => {
  return (
    <div>
      <Active className={`${className} ${className}--active`} />
      <Inactive className={`${className} ${className}--inactive`} />
    </div>
  );
};

export default LVTCapital;
