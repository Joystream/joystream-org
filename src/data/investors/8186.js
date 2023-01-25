import React from 'react';

import ActiveImage from '../../assets/images/investor-logos/816/Color.png';
import InactiveImage from '../../assets/images/investor-logos/816/Mono.png';

const Active = (props) => (
  <img alt="" {...props} src={ActiveImage} />
);

const Inactive = (props) => (
  <img alt="" {...props} src={InactiveImage} />
);

const Capital8186 = ({ className }) => {
  return (
    <div>
      <Active className={`${className} ${className}--active`} />
      <Inactive className={`${className} ${className}--inactive`} />
    </div>
  );
};

export default Capital8186;
