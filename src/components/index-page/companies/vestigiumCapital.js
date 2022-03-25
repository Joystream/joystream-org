import React, { useState } from 'react';

import ActiveImage from '../../../assets/images/investor-logos/VTG/Color.png';
import InactiveImage from '../../../assets/images/investor-logos/VTG/Mono.png';

const Active = (props) => (
  <img alt="" {...props} src={ActiveImage} />
);

const Inactive = (props) => (
  <img alt="" {...props} src={InactiveImage} />
);

const VestigiumCapital = ({ className }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div onMouseEnter={() => setIsActive(true)} onMouseLeave={() => setIsActive(false)}>
      {isActive ? <Active className={className}/> : <Inactive className={className} />}
    </div>
  );
};

export default VestigiumCapital;
