import React from 'react';
import { object, bool } from 'prop-types';

import SectionHeader from '../SectionHeader';
import Council from './Council';
import CurrentCouncil from './CurrentCouncil';
import PastCouncil from './PastCouncil';
import WorkingGroups from './WorkingGroups';
import Jsgenesis from './Jsgenesis';
import { CouncilsBlockSkeleton } from './Skeletons';

import { parsePastCouncils, parseWorkingGroups, founders } from './utils';

import './style.scss';

const propTypes = {
  data: object,
  loading: bool,
};

const Team = ({ data, loading }) => {
  const parsedPastCouncils = parsePastCouncils(data?.council?.currentCouncil);

  const parsedWorkingGroups = parseWorkingGroups(data?.workingGroups);

  return (
    <section className="dashboard-team">
      <div className="dashboard-team__container">
        <SectionHeader sectionId="team" sectionHeading="Team" />

        {loading ? (
          <CouncilsBlockSkeleton />
        ) : (
          <>
            <Council data={data?.council} />
            <div className="dashboard-team__councils">
              <CurrentCouncil data={data?.council} />
              {parsedPastCouncils.map((pastCouncil, idx) => {
                return <PastCouncil key={idx} {...pastCouncil} />;
              })}
            </div>
          </>
        )}

        <WorkingGroups groups={parsedWorkingGroups} loading={loading} />
        <Jsgenesis founders={founders} />
      </div>
    </section>
  );
};

Team.propTypes = propTypes;

export default Team;
