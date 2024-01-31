import React from 'react';

import DashboardSectionHeader from '../../DashboardSectionHeader';
import Council from './Council';
import CurrentCouncil from './CurrentCouncil';
import PastCouncil from './PastCouncil';
import WorkingGroups from './WorkingGroups';
import Jsgenesis from './Jsgenesis';

import { pastCouncils, workingGroups, founders } from './utils';

import './style.scss';

const Team = () => {
  return (
    <section className="dashboard-team">
      <div className="dashboard-team__container">
        <DashboardSectionHeader sectionId="team" sectionHeading="Team" />
        <Council />
        <div className="dashboard-team__councils">
          <CurrentCouncil />
          {pastCouncils.map((pastCouncil, idx) => {
            return <PastCouncil key={idx} {...pastCouncil} />;
          })}
        </div>
        <WorkingGroups groups={workingGroups} />
        <Jsgenesis founders={founders} />
      </div>
    </section>
  );
};

export default Team;
