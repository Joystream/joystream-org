import React, { useState } from 'react';
import { string, shape, number } from 'prop-types';

import getApiPath from '../../utils/getApiPath';
import mapStatusDataToAnalytics from '../../utils/mapStatusDataToAnalytics';

import withApi from '../../components/_enhancers/withApi';

import BaseLayout from '../../components/_layouts/Base';
import HeroCard from '../../components/HeroCard';
import Analytics from '../../components/Analytics';
import TitleWrapper from '../../components/TitleWrapper';
import RoleCard from '../../components/RoleCard';
import ColumnsLayout from '../../components/ColumnsLayout';
import LayoutWrapper from '../../components/LayoutWrapper';
import Hero from '../../components/Hero';
import TestnetModal from '../../components/TestnetModal';
import Chip from '../../components/Chip';
import Pane from '../../components/Pane';
import GoalItem from '../../components/GoalItem';
import Link from '../../components/Link';

import { ReactComponent as AcropolisImage } from '../../assets/svg/acropolis.svg';
import { ReactComponent as Info } from '../../assets/svg/info.svg';
import { ReactComponent as SpecImg } from '../../assets/svg/specifications.svg';
import { ReactComponent as ReleaseImg } from '../../assets/svg/release-doc.svg';
import AcropolisImg from '../../assets/svg/acropolis.svg';

import { roles } from '../../data/pages';

import './style.scss';
import MapInfo from '../../components/MapInfo';
import { ReactComponent as PersonIcon } from '../../assets/svg/person.svg';

const propTypes = {
  content: shape({
    block_height: number,
    council: shape({
      election_stage: string,
      members_count: number,
    }),
    forum: shape({
      posts: number,
      threads: number,
    }),
    media: shape({
      media_files: number,
    }),
    memberships: shape({
      platform_members: number,
    }),
    roles: shape({
      storage_providers: number,
    }),
    runtime_version: shape({
      impl_name: string,
      spec_name: string,
      spec_version: number,
    }),
    system: shape({
      chain: string,
      name: string,
      peerCount: number,
      version: string,
    }),
    validators: shape({
      count: number,
      total_stake: string,
    }),
  }).isRequired,
};

const AcropolisPage = ({ content }) => {
  const [isModalOpen, setModalClosed] = useState(false);

  return (
    <BaseLayout>
      <Hero
        image={AcropolisImage}
        title="Acropolis Network"
        indent
        chip={
          <Chip onClick={() => setModalClosed(true)} icon={Info}>
            What is this?
          </Chip>
        }
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
      </LayoutWrapper>

      <LayoutWrapper>
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
      </LayoutWrapper>

      <LayoutWrapper>
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
          <GoalItem title="Build and release an on-chain forum">
            The final platform will have built in multiple ways of facilitating
            easy and secure public, and private, communication and information
            sharing among members. The forum is the first step allowing the
            platform members to communicate, share ideas and discuss.
          </GoalItem>

          <GoalItem title="Rebuild and release the storage node">
            Where the old storage node had some bugs making it unable to sync
            between clients and required a hardcoded liaison, the new storage
            node is working as intended with no hierarchy or privileges.
          </GoalItem>

          <GoalItem
            state="inprogress"
            title="Ensure high uptime of storage providers"
          >
            Both content creators and consumers user experience depends on
            various metrics, but perhaps the most important is that the storage
            node they connect to responds to their request. Whether or not this
            goal is achieved depends on both the reliability of the software, a
            good reporting system and corrective actions from multiple parties.
          </GoalItem>

          <GoalItem
            state="postponed"
            title='Build the storage node with "tranches"'
          >
            Although the content directory is currently small, at some point
            it's not feasible to expect all storage providers to have full
            replication of all the content. Tranches would allow storage
            providers to select a subset of the content directory, suitable to
            their capabilities.
          </GoalItem>
        </TitleWrapper>
      </LayoutWrapper>

      <LayoutWrapper dark>
        <TitleWrapper title="Roles available on the current testnet">
          <ColumnsLayout>
            {roles.active.map(role => (
              <RoleCard {...role} key={role.title} />
            ))}
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

AcropolisPage.propTypes = propTypes;

export { AcropolisPage };
export default withApi(AcropolisPage, getApiPath('STATUS'));
