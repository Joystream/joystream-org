import React, { useState } from 'react';
import { pagePropTypes } from '../../propTypes';

import getApiPath from '../../utils/getApiPath';
import mapStatusDataToAnalytics from '../../utils/mapStatusDataToAnalytics';
import mapStatusDataToRoles from '../../utils/mapStatusDataToRoles';

import withApi from '../../components/_enhancers/withApi';

import BaseLayout from '../../components/_layouts/Base';
import HeroCard from '../../components/HeroCard';
import Analytics from '../../components/Analytics';
import TitleWrapper from '../../components/TitleWrapper';
import RoleList from '../../components/RoleList';
import ColumnsLayout from '../../components/ColumnsLayout';
import LayoutWrapper from '../../components/LayoutWrapper';
import Hero from '../../components/Hero';
import TestnetModal from '../../components/TestnetModal';
import Chip from '../../components/Chip';
import Pane from '../../components/Pane';
import GoalItem from '../../components/GoalItem';
import Link from '../../components/Link';
import MapInfo from '../../components/MapInfo';

import { ReactComponent as AcropolisImage } from '../../assets/svg/acropolis.svg';
import { ReactComponent as SpecImg } from '../../assets/svg/specifications.svg';
import { ReactComponent as ReleaseImg } from '../../assets/svg/release-doc.svg';
import { ReactComponent as PersonIcon } from '../../assets/svg/person.svg';
import AcropolisImg from '../../assets/svg/acropolis.svg';

import { roles } from '../../data/pages';

import './style.scss';

import goalsData from './goalsData';

const AcropolisPage = ({ content }) => {
  const [isModalOpen, setModalClosed] = useState(false);

  return (
    <BaseLayout>
      <Hero
        image={AcropolisImage}
        title="Acropolis Network"
        indent
        chip={<Chip onClick={() => setModalClosed(true)}>What is this?</Chip>}
      >
        <p className="AcropolisPage__hero-paragraph">
          Explore available roles and pick the one that suits you the most.
          Influence platforms development earning Monero in the process.
        </p>
        <HeroCard date="2019/06/27 17:50" />

        <TestnetModal
          title="The Acropolis of Athens"
          image={AcropolisImg}
          closeModal={() => setModalClosed(false)}
          isOpen={isModalOpen}
        >
          <p>
            <strong>Known for its great architecture, Acropolis'</strong>{' '}
            perhaps most famous building is the Parthenon. It was built to
            celebrate their victory over Persian invaders, and is today seen as
            a symbol for democracy and western civilization.
          </p>
        </TestnetModal>
      </Hero>

      <LayoutWrapper>
        <TitleWrapper title="Network Statistics">
          <Analytics content={mapStatusDataToAnalytics(content)} />
        </TitleWrapper>

        <TitleWrapper title="Critical Documents">
          <ColumnsLayout>
            <Pane
              image={SpecImg}
              href="https://github.com/Joystream/joystream/tree/master/testnets/acropolis/specification"
              title="Full Specifications"
              target="_blank"
            >
              Read the specs of the newly implemented features of Acropolis.
            </Pane>
            <Pane
              image={ReleaseImg}
              href="https://github.com/Joystream/joystream/tree/master/testnets/acropolis"
              title="Release Plan"
              target="_blank"
            >
              Read the release plan as it was made during the planning stage,
              and learn more about how the development evolved.
            </Pane>
          </ColumnsLayout>
        </TitleWrapper>

        <TitleWrapper
          title="Testnet Goals"
          subtitle={
            <>
              The goals below is a simplified representation of the Key Results
              listed in our Release{' '}
              <Link href="https://github.com/Joystream/joystream/tree/master/testnets/acropolis#release-okrs">
                OKR
              </Link>
            </>
          }
        >
          {goalsData.map(({ title, text, state }) => (
            <GoalItem state={state} title={title} key={title}>
              {text}
            </GoalItem>
          ))}
        </TitleWrapper>
      </LayoutWrapper>

      <LayoutWrapper dark>
        <TitleWrapper title="Roles available on the current testnet">
          <ColumnsLayout>
            <RoleList
              roles={roles.active}
              content={mapStatusDataToRoles(content)}
            />
          </ColumnsLayout>
        </TitleWrapper>
      </LayoutWrapper>

      <MapInfo title="Acropolis of Athens" location="acropolis">
        <p>
          <strong>
            The Acropolis is a citadel on a hill in the heart of Athens.
          </strong>{' '}
          It was also at the heart of Ancient Greece, a powerful civilization
          and empire. Acropolis is famous for its ancient buildings,
          architecture, historical significance and is one of the main tourist
          attractions of Athens. It is on UNESCOs list "World Heritage Sites".
          <br />
          <br />
          We chose the name as we had to scale back our ambitions for the next
          testnet after some issues with the release of Athens. Thus, Acropolis
          can be considered a sub-release, despite including some new features
          not intended for Athens.
          <br />
          <br />
          <Link to="/athens">
            <PersonIcon /> Explore previous testnet
          </Link>
        </p>
      </MapInfo>
    </BaseLayout>
  );
};

AcropolisPage.propTypes = pagePropTypes;

export { AcropolisPage };
export default withApi(AcropolisPage, getApiPath('STATUS'));
