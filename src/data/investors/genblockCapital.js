import React from 'react';

import ActiveImage from '../../assets/images/investor-logos/Genblock/Color.webp';
import InactiveImage from '../../assets/images/investor-logos/Genblock/Mono.webp';

const Active = (props) => (
  <img alt="" {...props} src={ActiveImage} />
);

const Inactive = (props) => (
  <img alt="" {...props} src={InactiveImage} />
);

const GenBlockCapital = ({ className }) => {
  return (
    <div>
      <Active className={`${className} ${className}--active`} />
      <Inactive className={`${className} ${className}--inactive`} />
    </div>
  );
};

export default GenBlockCapital;
