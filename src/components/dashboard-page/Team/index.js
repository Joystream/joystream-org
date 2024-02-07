import React from 'react';
import { object } from 'prop-types';

import SectionHeader from '../SectionHeader';
import Council from './Council';
import CurrentCouncil from './CurrentCouncil';
import PastCouncil from './PastCouncil';
import WorkingGroups from './WorkingGroups';
import Jsgenesis from './Jsgenesis';

import { parsePastCouncils, parseWorkingGroups, founders } from './utils';

import './style.scss';

const propTypes = {
  data: object,
};

const Team = ({ data }) => {
  const parsedPastCouncils = parsePastCouncils(data?.council?.currentCouncil);

  const parsedWorkingGroups = parseWorkingGroups(data?.workingGroups);

  return (
    <section className="dashboard-team">
      <div className="dashboard-team__container">
        <SectionHeader sectionId="team" sectionHeading="Team" />
        <Council data={data?.council} />
        <div className="dashboard-team__councils">
          <CurrentCouncil data={data?.council} />
          {parsedPastCouncils.map((pastCouncil, idx) => {
            return <PastCouncil key={idx} {...pastCouncil} />;
          })}
        </div>
        <WorkingGroups groups={parsedWorkingGroups} />
        <Jsgenesis founders={founders} />
      </div>
    </section>
  );
};

Team.propTypes = propTypes;

export default Team;
