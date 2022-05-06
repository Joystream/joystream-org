import React, { useState } from 'react';

import ActiveImage from '../../../assets/images/investor-logos/LDCapital/Color.png';
import InactiveImage from '../../../assets/images/investor-logos/LDCapital/Mono.png';

const Active = (props) => (
  <img alt="" {...props} src={ActiveImage} />
);

const Inactive = (props) => (
  <img alt="" {...props} src={InactiveImage} />
);


const LDCapital = ({ className, isMobile }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div onMouseEnter={() => setIsActive(true)} onMouseLeave={() => setIsActive(false)}>
      {(isActive && !isMobile) ? <Active className={className}/> : <Inactive className={className} />}
    </div>
  );
};

export default LDCapital;
