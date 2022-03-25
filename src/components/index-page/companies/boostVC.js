import React, { useState } from 'react';

import ActiveImage from '../../../assets/images/investor-logos/BoostVC/Color.png';
import InactiveImage from '../../../assets/images/investor-logos/BoostVC/Mono.png';

const Active = (props) => (
  <img alt="" {...props} src={ActiveImage} />
);

const Inactive = (props) => (
  <img alt="" {...props} src={InactiveImage} />
);

const SkyVisionCapital = ({ className }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div onMouseEnter={() => setIsActive(true)} onMouseLeave={() => setIsActive(false)}>
      {isActive ? <Active className={className}/> : <Inactive className={className} />}
    </div>
  );
};

export default SkyVisionCapital;
