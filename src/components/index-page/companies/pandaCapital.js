import React from 'react';

import ActiveImage from '../../../assets/images/investor-logos/Panda/Color.png';
import InactiveImage from '../../../assets/images/investor-logos/Panda/Mono.png';

const Active = (props) => (
  <img alt="" {...props} src={ActiveImage} />
);

const Inactive = (props) => (
  <img alt="" {...props} src={InactiveImage} />
);

const PandaCapital = ({ className }) => {
  return (
    <div>
      <Active className={`${className} ${className}--active`} />
      <Inactive className={`${className} ${className}--inactive`} />
    </div>
  );
};

export default PandaCapital;
