import React, { useState } from 'react';

import ActiveImage from '../../../assets/images/investor-logos/OKEx/Color.png';
import InactiveImage from '../../../assets/images/investor-logos/OKEx/Mono.png';

const Active = (props) => (
  <img alt="" {...props} src={ActiveImage} />
);

const Inactive = (props) => (
  <img alt="" {...props} src={InactiveImage} />
);
const OKX = ({ className, isMobile }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div onMouseEnter={() => setIsActive(true)} onMouseLeave={() => setIsActive(false)}>
      {(isActive && !isMobile) ? <Active className={className}/> : <Inactive className={className} />}
    </div>
  );
};

export default OKX;
