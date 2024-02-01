import React from 'react';

import SectionHeader from '../SectionHeader';
import Positioning from './Positioning';

import './style.scss';

const Comparison = () => {
  return (
    <section className="dashboard-comparison">
      <div className="dashboard-comparison__container">
        <SectionHeader sectionId="comparison" sectionHeading="Comparison" />
        <Positioning />
      </div>
    </section>
  );
};

export default Comparison;
