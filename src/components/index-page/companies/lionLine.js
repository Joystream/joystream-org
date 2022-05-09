import React from 'react';

import ActiveImage from '../../../assets/images/investor-logos/LionLine/Color.png';
import InactiveImage from '../../../assets/images/investor-logos/LionLine/Mono.png';

const Active = (props) => (
  <img alt="" {...props} src={ActiveImage} />
);

const Inactive = (props) => (
  <img alt="" {...props} src={InactiveImage} />
);

const LionLine = ({ className }) => {
  return (
    <div>
      <Active className={`${className} ${className}--active`} />
      <Inactive className={`${className} ${className}--inactive`} />
    </div>
  );
};

export default LionLine;
