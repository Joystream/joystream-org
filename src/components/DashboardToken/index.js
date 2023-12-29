import React from 'react';

import DashboardSectionHeader from '../DashboardSectionHeader';
import DashboardTokenPriceChart from '../DashboardTokenPriceChart';

import './style.scss';

const DashboardToken = () => {
  return (
    <section className="dashboard-token">
      <div className="dashboard-token__container">
        <DashboardSectionHeader sectionId="token" sectionHeading="Token" />
        <div style={{ marginTop: '16px', padding: '32px', backgroundColor: '#BCD5FA14', borderRadius: '8px' }}>
          <DashboardTokenPriceChart />
        </div>
      </div>
    </section>
  );
};

export default DashboardToken;
