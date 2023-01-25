import React from 'react';

import ActiveImage from '../../../assets/images/investor-logos/ZB/Color.png';
import InactiveImage from '../../../assets/images/investor-logos/ZB/Mono.png';

const Active = (props) => (
  <img alt="" {...props} src={ActiveImage} />
);

const Inactive = (props) => (
  <img alt="" {...props} src={InactiveImage} />
);

const ZBCapital = ({ className }) => {
  return (
    <div>
      <Active className={`${className} ${className}--active`} />
      <Inactive className={`${className} ${className}--inactive`} />
    </div>
  );
};

export default ZBCapital;
