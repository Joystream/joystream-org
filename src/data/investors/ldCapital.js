import React from 'react';

import ActiveImage from '../../assets/images/investor-logos/LDCapital/Color.webp';
import InactiveImage from '../../assets/images/investor-logos/LDCapital/Mono.webp';

const Active = (props) => (
  <img alt="" {...props} src={ActiveImage} />
);

const Inactive = (props) => (
  <img alt="" {...props} src={InactiveImage} />
);


const LDCapital = ({ className }) => {
  return (
    <div>
      <Active className={`${className} ${className}--active`} />
      <Inactive className={`${className} ${className}--inactive`} />
    </div>
  );
};

export default LDCapital;
