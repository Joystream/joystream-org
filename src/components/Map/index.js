import React from 'react';
import cn from 'classnames';
import { string } from 'prop-types';

import Animated from '../AnimatedComponent';
import athensImage from '../../assets/images/athens.png';
import spartaImage from '../../assets/images/sparta.png';
import romeImage from '../../assets/images/rome.png';
import { ReactComponent as PointerImage } from '../../assets/svg/pointer.svg';

import { mapPropTypes } from '../../propTypes';

import './style.scss';

const propTypes = {
  ...mapPropTypes,
  className: string,
};
const defaultProps = {
  className: '',
};

const maps = {
  athens: athensImage,
  acropolis: athensImage,
  sparta: spartaImage,
  rome: romeImage,
};

const Map = ({ location, className, ...props }) => {
  return (
    <div
      className={cn('Map', className)}
      style={{ backgroundImage: `url(${maps[location]})` }}
      {...props}
    >
      <Animated animation="bounce">
        <PointerImage />
      </Animated>
      <p className="Map__info">Map data ©{new Date().getFullYear()} Google</p>
    </div>
  );
};

Map.propTypes = propTypes;
Map.defaultProps = defaultProps;

export default Map;
