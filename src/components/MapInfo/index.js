import React from 'react';
import { string, node } from 'prop-types';
import cn from 'classnames';

import Map from '../Map';
import Animated from '../AnimatedComponent';

import { mapPropTypes } from '../../propTypes';

import './style.scss';

const propTypes = {
  ...mapPropTypes,
  title: string.isRequired,
  children: node,
  className: string,
};

const defaultProps = {
  children: null,
  className: '',
};

const MapInfo = ({ title, children, className, location }) => {
  return (
    <section className={cn('MapInfo', className)}>
      <Map location={location} className="MapInfo__map" />
      <div className="MapInfo__content">
        <Animated animation="fadeIn" threshold={0}>
          <h1 className="MapInfo__title">{title}</h1>
          {children}
        </Animated>
      </div>
    </section>
  );
};

MapInfo.propTypes = propTypes;
MapInfo.defaultProps = defaultProps;

export default MapInfo;
