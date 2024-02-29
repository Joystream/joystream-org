import React from 'react';
import cn from 'classnames';
import { string } from 'prop-types';

import './style.scss';

const propTypes = {
  skeletonCn: string,
};

const Skeleton = ({ skeletonCn }) => {
    return (
      <div className={cn('dashboard-skeleton', { [skeletonCn]: !!skeletonCn })}>
        <div className="dashboard-skeleton__overlay"></div>
      </div>
    );
};

Skeleton.propTypes = propTypes;

export default Skeleton;
