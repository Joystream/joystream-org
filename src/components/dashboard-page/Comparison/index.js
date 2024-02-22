import React from 'react';
import { object, bool } from 'prop-types';

import SectionHeader from '../SectionHeader';
import Positioning from './Positioning';
import { PositioningSkeleton } from './Skeletons';

import './style.scss';

const propTypes = {
  data: object,
  loading: bool,
};

const Comparison = ({ data, loading }) => {
  return (
    <section className="dashboard-comparison">
      <div className="dashboard-comparison__container">
        <SectionHeader sectionId="comparison" sectionHeading="Comparison" />

        {loading ? <PositioningSkeleton /> : <Positioning dynamicData={data} />}
      </div>
    </section>
  );
};

Comparison.propTypes = propTypes;

export default Comparison;
